import { useEffect, useRef, useState } from "react";
import { Heart, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleSomeoneClick = () => {
    navigate("/redirect");
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          {/* Brand Section */}
          <div className="text-center md:text-left group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              Dhimahi Pathak
            </h3>
            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
              Dedicated healthcare professional and passionate artist, committed
              to making a positive impact through compassionate care and
              cultural preservation.
            </p>
            <div className="flex items-center justify-center md:justify-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <Heart
                className="mr-2 text-red-500 animate-pulse-slow"
                size={16}
              />
              <span className="text-sm">
                Serving with compassion & creativity
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left mx-auto group">
            <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 ${
                    isVisible ? "animate-fadeInLeft" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right group">
            <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div
                className={`flex items-center justify-center md:justify-end text-gray-400 group-hover:text-gray-300 transition-all duration-300 ${
                  isVisible ? "animate-fadeInRight" : "opacity-0"
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <Mail size={16} className="mr-2 group-hover:animate-bounce" />
                <span className="text-sm">dhipathak25@gmail.com</span>
              </div>
              <div
                className={`flex items-center justify-center md:justify-end text-gray-400 group-hover:text-gray-300 transition-all duration-300 ${
                  isVisible ? "animate-fadeInRight" : "opacity-0"
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                <MapPin size={16} className="mr-2 group-hover:animate-bounce" />
                <span className="text-sm">Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-gray-800 mt-8 pt-8 text-center ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
            © {currentYear} Dhimahi Pathak. All rights reserved. Built with
            passion and purpose.
          </p>
          <p className="text-gray-400 pt-2 text-sm group-hover:text-gray-300 transition-colors duration-300">
            Made with ❤️ by{" "}
            <span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSomeoneClick();
                }}
                className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 cursor-pointer hover:animate-pulse-slow"
              >
                Someone
              </a>
            </span>{" "}
            🤫 and Somewhere 🌎
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
