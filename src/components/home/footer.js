import { Facebook, Instagram, QrCode, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <QrCode className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">QR Menu</span>
            </div>
            <p className="text-gray-400">
              We help restaurants modernize their dining experience with digital
              menu solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Features", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-6 h-6" />, label: "Facebook" },
                { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
                {
                  icon: <Instagram className="w-6 h-6" />,
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="hover:text-white transition-colors hover:scale-110 transform"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} QR Menu Creator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
