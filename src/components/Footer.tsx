import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dhimahi Pathak
            </h3>
            <p className="text-gray-400 mb-4">
              Dedicated healthcare professional and passionate artist, committed
              to making a positive impact through compassionate care and
              cultural preservation.
            </p>
            <div className="flex items-center justify-center md:justify-start text-gray-400">
              <Heart className="mr-2 text-red-500" size={16} />
              <span className="text-sm">
                Serving with compassion & creativity
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end text-gray-400">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">dhimahi258@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dhimahi Pathak. All rights reserved. Built with
            passion and purpose.
          </p>
          <p className="text-gray-400 pt-2 text-sm">
            Made with ❤️ by Someone 🤫 and Somewhere 🌎
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
