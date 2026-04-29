import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, CheckCircle2 } from 'lucide-react';
import type { CursorState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCursorState: (state: CursorState, text?: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, setCursorState }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cut & Styling',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0e0e0e]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl bg-[#141414] border border-[#262626] text-[#eae5dc] p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              onMouseEnter={() => setCursorState('VIEW', 'CLOSE')}
              onMouseLeave={() => setCursorState('DEFAULT')}
              className="absolute top-6 right-6 p-2 text-[#8c8275] hover:text-[#eae5dc] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#a89f91] mx-auto animate-bounce" />
                <h3 className="font-editorial-serif text-3xl text-[#eae5dc]">RESERVATION REQUEST RECEIVED</h3>
                <p className="text-xs font-mono text-[#8c8275] max-w-sm mx-auto">
                  Thank you. Our reception at 50 Tranquil Vale will contact you shortly to confirm your appointment time.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.4em] text-[#a89f91] uppercase block mb-1">
                    AIKO BLACKHEATH / RESERVATIONS
                  </span>
                  <h3 className="font-editorial-serif text-3xl md:text-4xl font-light text-[#eae5dc]">
                    BOOK AN APPOINTMENT
                  </h3>
                </div>

                {/* Direct Action Quick Contact Bar */}
                <div className="grid grid-cols-2 gap-4 border-y border-[#222] py-4">
                  <a
                    href="tel:02083189982"
                    className="p-3 bg-[#0e0e0e] border border-[#222] hover:border-[#a89f91] transition-colors flex flex-col items-center text-center space-y-1"
                  >
                    <Phone className="w-4 h-4 text-[#a89f91]" />
                    <span className="text-[9px] font-mono text-[#8c8275] uppercase">DIRECT PHONE</span>
                    <span className="text-xs font-mono text-[#eae5dc]">020 8318 9982</span>
                  </a>

                  <a
                    href="mailto:info@aikohairsalon.com"
                    className="p-3 bg-[#0e0e0e] border border-[#222] hover:border-[#a89f91] transition-colors flex flex-col items-center text-center space-y-1"
                  >
                    <Mail className="w-4 h-4 text-[#a89f91]" />
                    <span className="text-[9px] font-mono text-[#8c8275] uppercase">DIRECT EMAIL</span>
                    <span className="text-xs font-mono text-[#eae5dc]">info@aikohairsalon.com</span>
                  </a>
                </div>

                {/* Reservation Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-[#a89f91] uppercase mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#262626] text-xs font-sans text-[#eae5dc] focus:outline-none focus:border-[#a89f91]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#a89f91] uppercase mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#262626] text-xs font-sans text-[#eae5dc] focus:outline-none focus:border-[#a89f91]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-[#a89f91] uppercase mb-1">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07123 456789"
                        className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#262626] text-xs font-sans text-[#eae5dc] focus:outline-none focus:border-[#a89f91]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-[#a89f91] uppercase mb-1">
                      PREFERRED SERVICE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#262626] text-xs font-sans text-[#eae5dc] focus:outline-none focus:border-[#a89f91]"
                    >
                      <option value="Cut & Styling">Classic & Precision Cutting</option>
                      <option value="Bespoke Colouring">Bespoke Hair Colouring</option>
                      <option value="Yuko Straightening">Yuko Permanent Hair Straightening</option>
                      <option value="Hair Extensions">Hair Extensions</option>
                      <option value="Session / Hair-Up">Session Styling & Hair-Ups</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-[#a89f91] uppercase mb-1">
                      PREFERRED DAY / NOTES
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify preferred date, time or stylist..."
                      className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#262626] text-xs font-sans text-[#eae5dc] focus:outline-none focus:border-[#a89f91]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#eae5dc] text-[#0e0e0e] font-mono text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#a89f91] transition-colors shadow-lg"
                  >
                    SUBMIT RESERVATION REQUEST
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

