// import { Shield, Sparkles, Zap } from "lucide-react";
// import React from "react";

// const HowItsWorks = () => {
//   return (
//     <section id="how-it-works" className="py-20 relative overflow-hidden">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//           Three Simple Steps to Get Started
//         </h2>
//         <div className="relative">
//           {/* Connection Line */}
//           <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>

//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: <Sparkles className="w-8 h-8" />,
//                 title: "Create Your Menu",
//                 description:
//                   "Design your digital menu with our intuitive editor. Add items, prices, and descriptions easily.",
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Generate QR Code",
//                 description:
//                   "Get your unique QR code instantly. Customize its design to match your brand.",
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Share & Track",
//                 description:
//                   "Place QR codes on tables and track menu views through our analytics dashboard.",
//               },
//             ].map((step, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
//               >
//                 <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//                   <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
//                     {step.icon}
//                   </div>
//                 </div>
//                 <div className="mt-8 text-center">
//                   <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItsWorks;

import { LogIn, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const steps = [
    {
      icon: <LogIn className="w-8 h-8" />,
      title: "Login & Setup",
      description:
        "Create your account and set up your restaurant profile in minutes.",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Create Your Menu",
      description:
        "Design your digital menu with our intuitive editor. Add items, prices, and descriptions easily.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Generate QR Code",
      description:
        "Get your unique QR code instantly. Customize its design to match your brand.",
      gradient: "from-indigo-600 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Share & Track",
      description:
        "Generate QR codes, place them on tables, and track menu views through analytics.",
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get Started in Three Simple Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your restaurant's dining experience with our digital menu
            system. Follow these steps to modernize your service.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-8 relative"
        >
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-emerald-200 transform -translate-y-1/2 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full transform hover:-translate-y-2 transition-transform duration-300">
                {/* Animated Icon Container */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute bottom-4 right-4 text-4xl font-bold text-gray-100">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
