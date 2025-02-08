"use client";

import SpaceFAQ from "@/components/home/faq";
import Features from "@/components/home/features";
import HowItsWorks from "@/components/home/how-its-works";
import Pricing from "@/components/home/pricing";
import Testimonials from "@/components/home/testimonials";
import { Calendar, ChevronRight, QrCode, Utensils } from "lucide-react";
import Image from "next/image";

function App() {
  return (
    <div className="min-h-screen">
      <header className="pt-20 bg-gradient-to-br from-blue-300 via-white to-indigo-200 text-gray-800 overflow-hidden dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center py-10">
            <div className="space-y-8 relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-800 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-800 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700"></div>
              <h1 className="text-5xl font-bold leading-tight animate-fade-in">
                Streamline Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  {" "}
                  Restaurant Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Effortlessly manage menus, reservations, and orders with our
                all-in-one platform.
              </p>
              <button className="group bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                Start Free Trial
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant management dashboard"
                width={500}
                height={350}
                className="rounded-lg shadow-lg transform hover:scale-102 transition-transform relative z-10"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
            {[
              { icon: Utensils, text: "Digital Menu Management" },
              { icon: QrCode, text: "QR Code Integration" },
              { icon: Calendar, text: "Reservation System" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 backdrop-blur-2xl rounded-lg p-4 shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-24 bg-white dark:bg-gray-900 transform -skew-y-3 origin-top-right"></div>
      </header>

      <div className="max-w-7xl mx-auto">
        <HowItsWorks />
        <Features />
        <SpaceFAQ />
        <Testimonials />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
