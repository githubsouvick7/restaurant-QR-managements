"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  Utensils,
  Smartphone,
  Clock,
  Users,
  ChefHat,
} from "lucide-react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const features = [
    {
      icon: QrCode,
      title: "Dynamic QR Codes",
      description: "Instantly update menu items and prices",
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "Perfect viewing on all devices",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Change specials & availability instantly",
    },
  ];

  return (
    <div className="mt-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-10 h-10 text-orange-600" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                MenuMaster
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              Transform Your Restaurant's Dining Experience
            </h2>
            <p className="text-lg text-gray-600 px-4">
              Join thousands of restaurants using MenuMaster to modernize their
              menu management with QR codes. Delight your customers with an
              interactive digital menu experience.
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-1  items-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                    Restaurant Owner Login
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Manage your digital menu in minutes
                  </p>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/80 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-3 border-orange-500 border-t-transparent rounded-full"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-3"
                      >
                        <img
                          src="https://www.google.com/favicon.ico"
                          alt="Google"
                          className="w-6 h-6"
                        />
                        <span className="font-medium text-lg">
                          Continue with Google
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 text-center"
                >
                  <p className="text-gray-600 font-medium">
                    Free 30-day trial • No credit card required
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 p-4"
            >
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-500" />
                <span className="text-gray-700 font-medium">
                  5000+ Restaurants Trust Us
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-6 h-6 text-orange-500" />
                <span className="text-gray-700 font-medium">
                  1M+ Daily Menu Views
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
