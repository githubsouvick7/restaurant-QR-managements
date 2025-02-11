import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShineBorder } from "../ui/shine-border";
import { BorderBeam } from "../ui/border-beam";

const Pricing = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "1 QR Code Menu",
        "Basic Menu Management",
        "Mobile-Responsive Design",
        "Basic Analytics",
      ],
      cta: "Start Free",
      highlighted: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: [
        "Unlimited QR Codes",
        "Advanced Menu Management",
        "Custom Branding",
        "Detailed Analytics",
        "Priority Support",
      ],
      cta: "Get Pro",
      highlighted: true,
      gradient: "from-indigo-500 to-purple-500",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Multiple Locations",
        "Custom Integration",
        "Dedicated Support",
      ],
      cta: "Contact Sales",
      highlighted: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-8 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
            Pricing Plans
          </span>
          <h2 className="mt-2 text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your restaurant's digital menu needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${plan.highlighted ? "md:-mt-8" : ""}`}
            >
              <div
                className={`rounded-2xl p-8 h-full transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white shadow-2xl ring-4 ring-indigo-500/30"
                    : "bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl"
                }`}
              >
                {!plan.popular && (
                  <BorderBeam size={250} duration={12} delay={9} />
                )}

                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-36">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent ${plan.gradient}">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <div
                        className={`p-1 rounded-full bg-gradient-to-r ${plan.gradient} mr-3`}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </motion.button>
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

export default Pricing;
