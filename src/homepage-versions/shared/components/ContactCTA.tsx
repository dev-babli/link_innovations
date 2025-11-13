"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactCTAProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function ContactCTA({ className = "", variant = "light" }: ContactCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-24 overflow-hidden ${isDark ? "bg-[#141414]" : "bg-[#fdfffd]"} ${className}`}
    >
      {/* Curved Top Edge */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100C0 100 360 0 720 0C1080 0 1440 100 1440 100V0H0V100Z"
            fill={isDark ? "#141414" : "#fdfffd"}
          />
        </svg>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C0 0 360 100 720 100C1080 100 1440 0 1440 0V100H0V0Z"
            fill={isDark ? "#141414" : "#fdfffd"}
          />
        </svg>
      </div>

      {/* Illuminated Background */}
      <div className="absolute inset-0 illuminated-gradient opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-[#141414]"
            }`}
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Start your journey
          </h2>
          <p
            className={`text-lg md:text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Let's start building something great together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c4b8] focus:border-transparent transition-all bg-white text-gray-900"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c4b8] focus:border-transparent transition-all bg-white text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c4b8] focus:border-transparent transition-all bg-white text-gray-900 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-[#00c4b8] to-[#016cf7] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Thank you! Your submission has been received. We will respond in 1-2 business days.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Oops! Something went wrong while submitting the form. Please try again.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

