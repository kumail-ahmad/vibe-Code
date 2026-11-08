import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Bridal Lehenga',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2B2928]/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FFF9F7] rounded-3xl p-6 sm:p-10 border border-[#B96C7A]/20 shadow-2xl z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#2B2928]/20 flex items-center justify-center text-[#2B2928] hover:border-[#B96C7A] hover:text-[#B96C7A] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-[#526052] text-[#FFF9F7] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif-editorial text-[#2B2928]">
                  Consultation Requested
                </h3>
                <p className="text-xs font-sans-editorial text-[#2B2928]/70 max-w-xs mx-auto">
                  Thank you, {formData.name || 'Valued Guest'}. Our studio team in Jayanagar will reach out shortly via +91 {formData.phone} to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#526052] uppercase block mb-1">
                    JAYANAGAR ATELIER APPOINTMENT
                  </span>
                  <h3 className="text-3xl font-serif-editorial text-[#2B2928]">
                    Book a Fitting Session
                  </h3>
                  <p className="text-xs font-sans-editorial text-[#2B2928]/70 font-light mt-1">
                    Select your garment requirement and preferred trial date.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-sans-editorial text-[#2B2928]">
                  <div>
                    <label className="block font-mono tracking-widest text-[10px] uppercase text-[#526052] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#B96C7A]/30 bg-[#FFF9F7] focus:outline-none focus:border-[#B96C7A]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono tracking-widest text-[10px] uppercase text-[#526052] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98450 00433"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#B96C7A]/30 bg-[#FFF9F7] focus:outline-none focus:border-[#B96C7A]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono tracking-widest text-[10px] uppercase text-[#526052] mb-1">
                      Craft Requirement
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#B96C7A]/30 bg-[#FFF9F7] focus:outline-none focus:border-[#B96C7A]"
                    >
                      <option value="Bridal Lehenga">Bridal Lehenga</option>
                      <option value="Hand-Embroidered Blouse">Hand-Embroidered Blouse</option>
                      <option value="Silk Saree & Custom Border">Silk Saree & Custom Border</option>
                      <option value="Heavily Embroidered Anarkali">Heavily Embroidered Anarkali</option>
                      <option value="Custom Accessories & Juttis">Custom Accessories & Juttis</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono tracking-widest text-[10px] uppercase text-[#526052] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#B96C7A]/30 bg-[#FFF9F7] focus:outline-none focus:border-[#B96C7A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#2B2928] text-[#FFF9F7] hover:bg-[#B96C7A] transition-colors duration-300 font-mono text-xs tracking-widest uppercase shadow-lg"
                >
                  CONFIRM APPOINTMENT REQUEST →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
