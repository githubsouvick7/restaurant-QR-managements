"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpaceIcon as Planet, Rocket, Star } from "lucide-react";

const SpaceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is it free to use?",
      answer:
        "Yes! We offer a free basic plan that includes essential features to get you started. Premium features are available in our paid plans.",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
    {
      question: "Can I update my menu later?",
      answer:
        "You can update your menu anytime, and changes are reflected instantly across all your QR codes. No need to regenerate QR codes after updates.",
      icon: <Planet className="w-6 h-6 text-blue-500" />,
    },
    {
      question: "How do I generate the QR code?",
      answer:
        "Simply create your menu, click 'Generate QR Code,' and download. You can print it or share it digitally right away. The process takes less than a minute!",
      icon: <Rocket className="w-6 h-6 text-red-500" />,
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "Not at all! Our platform is designed to be user-friendly. If you can use a smartphone, you can use our system. We also provide 24/7 support if you need help.",
      icon: <Star className="w-6 h-6 text-purple-500" />,
    },
    {
      question: "Can I customize the menu design?",
      answer:
        "Yes! You can customize colors, fonts, and layout to match your brand. Premium plans offer even more customization options.",
      icon: <Planet className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Explore Our Cosmic FAQs
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <SpaceAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpaceAccordion = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div
      className="mb-2 bg-gray-50 rounded-lg overflow-hidden shadow-md"
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgb(238, 242, 255)" : "rgb(249, 250, 251)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full py-6 px-8 text-left flex items-center space-x-4 focus:outline-none"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {faq.icon}
        </motion.div>
        <span className="text-xl font-semibold text-gray-800">
          {faq.question}
        </span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-8 pb-6 text-gray-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpaceFAQ;
