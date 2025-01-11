import { BarChart3, Edit3, QrCode, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const features = [
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Easy Menu Management",
      description: "Add, edit, and organize your menu items effortlessly.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Instant QR Code Generation",
      description: "Download and print personalized QR codes for your tables.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Menus look great on any device.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Track how often your menu is viewed.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-8 right-1/4 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
            Everything you need
          </span>
          <h2 className="mt-2 text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            Powerful Features for Your Restaurant
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your dining experience with our comprehensive suite of
            digital menu tools. Designed to make management simple and customer
            experience seamless.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${feature.gradient}" />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Features;
