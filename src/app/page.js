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
      {/* <header className="pt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8 relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700"></div>
              <h1 className="text-6xl font-bold leading-tight animate-fade-in">
                Transform Your Menu Into a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  {" "}
                  Digital Experience
                </span>
              </h1>
              <p className="text-xl text-blue-100">
                Create, Manage, and Share Your Menu with QR Codes in Minutes.
              </p>
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2">
                Get Started for Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg backdrop-blur-sm"></div>
              <img
                src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&w=800&q=80"
                alt="QR code being scanned"
                className="rounded-lg shadow-2xl transform hover:scale-102 transition-transform relative z-10"
              />
            </div>
          </div>
        </div>
        <div className="h-24 bg-white transform -skew-y-3 origin-top-right"></div>
      </header> */}

      <header className="pt-20 bg-gradient-to-br from-indigo-300 via-white to-blue-300 text-gray-800 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8 relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-200 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700"></div>
              <h1 className="text-5xl font-bold leading-tight animate-fade-in">
                Streamline Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  {" "}
                  Restaurant Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-700">
                Effortlessly manage menus, reservations, and orders with our
                all-in-one platform.
              </p>
              <button className="group bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                Start Free Trial
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-lg backdrop-blur-sm"></div>
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant management dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-102 transition-transform relative z-10"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
            {[
              { icon: Utensils, text: "Digital Menu Management" },
              { icon: QrCode, text: "QR Code Integration" },
              { icon: Calendar, text: "Reservation System" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/50 dark:bg-gray-100/50 rounded-lg p-4 shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-orange-500" />
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-800">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-24 bg-white dark:bg-white transform -skew-y-3 origin-top-right"></div>
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
