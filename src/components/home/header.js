"use client";
import { cn } from "@/lib/utils";
import { Menu, QrCode, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={cn(
          "fixed flex flex-col md:block top-3 inset-x-1 max-w-6xl bg-transparent dark:bg-slate-900 mx-auto z-50 backdrop-blur-2xl "
        )}
      >
        <nav className="z-50 shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link href={"/"} className="flex items-center space-x-2">
                <QrCode className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-800">QRPlate</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className=" transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className=" transition-colors">
                  How It Works
                </a>
                <a href="#pricing" className=" transition-colors">
                  Pricing
                </a>

                <div className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Link href="/auth">Login</Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-64 pb-6" : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className=" transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className=" transition-colors">
                  How It Works
                </a>
                <a href="#pricing" className=" transition-colors">
                  Pricing
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
