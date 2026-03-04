import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock, Info } from "lucide-react";
import { businessInfo } from "../data/business";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Direct Contact Info Sidebar */}
      <m.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 bg-[#17221b] rounded-xl border border-[#2d4f3a]/60 p-8 shadow-xl space-y-8"
      >
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#c87a38] uppercase block mb-2">
            GARBERVILLE STORE
          </span>
          <h3 className="font-serif text-3xl font-bold text-[#f4eee1] mb-3">
            Get in Touch
          </h3>
          <p className="text-sm text-[#c2b9a7] leading-relaxed">
            Have questions about gear availability or visiting our Garberville store? Call or send us a message below.
          </p>
        </div>

        <div className="space-y-6 pt-2 border-t border-[#2d4f3a]/40">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-[#0d1610] text-[#c87a38] shrink-0 border border-[#3f6c50]/40">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a39886] block">
                Direct Phone
              </span>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="text-base text-[#f4eee1] font-bold hover:text-[#c87a38] transition-colors"
              >
                {businessInfo.phone}
              </a>
              <p className="text-xs text-[#a39886] mt-0.5">Recommended for immediate inquiries</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-[#0d1610] text-[#c87a38] shrink-0 border border-[#3f6c50]/40">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a39886] block">
                Email
              </span>
              <a
                href={`mailto:${businessInfo.email}`}
                className="text-sm text-[#f4eee1] font-medium hover:text-[#c87a38] transition-colors break-all"
              >
                {businessInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-[#0d1610] text-[#c87a38] shrink-0 border border-[#3f6c50]/40">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a39886] block">
                Physical Address
              </span>
              <p className="text-sm text-[#f4eee1] font-semibold">
                {businessInfo.address.full}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-2 border-t border-[#2d4f3a]/40">
            <div className="p-3 rounded-md bg-[#0d1610] text-[#c87a38] shrink-0 border border-[#3f6c50]/40">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a39886] block">
                Business Hours
              </span>
              <p className="text-sm text-[#f4eee1] font-semibold">
                MON–FRI: 10:00 AM – 5:00 PM
              </p>
              <p className="text-xs italic text-[#8c9c8e] mt-0.5">
                Call ahead to confirm current hours.
              </p>
            </div>
          </div>
        </div>

        {/* Client side notice */}
        <div className="p-4 rounded-lg bg-[#0d1610] border border-[#2d4f3a]/60 text-xs text-[#a39886] flex items-start space-x-3">
          <Info className="w-4 h-4 text-[#c87a38] shrink-0 mt-0.5" />
          <span>
            For immediate store inquiries or inventory check, please call {businessInfo.phone}.
          </span>
        </div>
      </m.div>

      {/* Form Container */}
      <m.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 bg-[#17221b] rounded-xl border border-[#2d4f3a]/60 p-8 shadow-xl"
      >
        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#1e3526] text-[#c87a38] border border-[#c87a38]/40 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-3xl font-bold text-[#f4eee1]">
              Message Received
            </h4>
            <p className="text-sm text-[#c2b9a7] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#f4eee1]">{formData.name}</strong>. Your message validation is complete. In production, this submits directly to {businessInfo.email}.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                }}
                className="px-6 py-2.5 rounded-md bg-[#0d1610] border border-[#3f6c50] text-xs font-bold uppercase text-[#f4eee1] hover:text-[#c87a38] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#f4eee1] pb-2 border-b border-[#2d4f3a]/40">
              Send a Message
            </h3>

            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#d6c5a8] mb-2">
                Your Name <span className="text-[#c87a38]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className={`w-full px-4 py-3 rounded-md bg-[#0d1610] text-[#f4eee1] placeholder-[#5c685f] border transition-all ${
                  errors.name
                    ? "border-red-500/80 focus:ring-2 focus:ring-red-500"
                    : "border-[#2d4f3a]/70 focus:border-[#c87a38]"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#d6c5a8] mb-2">
                Your Email Address <span className="text-[#c87a38]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 rounded-md bg-[#0d1610] text-[#f4eee1] placeholder-[#5c685f] border transition-all ${
                  errors.email
                    ? "border-red-500/80 focus:ring-2 focus:ring-red-500"
                    : "border-[#2d4f3a]/70 focus:border-[#c87a38]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#d6c5a8] mb-2">
                Subject
              </label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-[#0d1610] text-[#f4eee1] border border-[#2d4f3a]/70 focus:border-[#c87a38] transition-all"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Fishing Category Inquiry">Fishing Category Inquiry</option>
                <option value="Camping Category Inquiry">Camping Category Inquiry</option>
                <option value="Hunting Category Inquiry">Hunting Category Inquiry</option>
                <option value="Outdoor Goods Inquiry">Outdoor Goods Inquiry</option>
                <option value="Work Wear & Clothing Inquiry">Work Wear & Clothing Inquiry</option>
                <option value="Store Hours & Directions">Store Hours & Directions</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#d6c5a8] mb-2">
                Message <span className="text-[#c87a38]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let us know what information or outdoor advice you are looking for..."
                className={`w-full px-4 py-3 rounded-md bg-[#0d1610] text-[#f4eee1] placeholder-[#5c685f] border transition-all ${
                  errors.message
                    ? "border-red-500/80 focus:ring-2 focus:ring-red-500"
                    : "border-[#2d4f3a]/70 focus:border-[#c87a38]"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-md bg-[#c87a38] hover:bg-[#d98a44] text-[#0d1610] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#c87a38]/20 disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
            </button>
          </form>
        )}
      </m.div>

    </div>
  );
}
