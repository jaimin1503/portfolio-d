import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      content: "dhipathak25@gmail.com",
      link: "mailto:dhipathak25@gmail.com",
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      content: "Gujarat, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      url: "https://www.instagram.com/dhi.mahi_25/",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube size={24} />,
      name: "YouTube",
      url: "https://www.youtube.com/@dhimahipathak25",
      color: "hover:text-red-600",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhimahi-pathak-194a25230/",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect for collaboration opportunities, healthcare
            consultations, or cultural performances
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start hover-lift transition-all duration-300 ${
                    isVisible ? "animate-fadeInLeft" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mr-4 group-hover:animate-wiggle">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:underline"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div
              className={`${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-all duration-300 hover:scale-110 hover-lift ${social.color}`}
                    aria-label={social.name}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <span className="hover:animate-wiggle">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className={`mt-10 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover-lift transition-all duration-300 ${
                isVisible ? "animate-fadeInLeft" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Professional Availability
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-gray-700 transition-colors duration-300">
                  • Healthcare consulting and collaboration
                </li>
                <li className="hover:text-gray-700 transition-colors duration-300">
                  • Kathak dance performances and workshops
                </li>
                <li className="hover:text-gray-700 transition-colors duration-300">
                  • Social media content creation partnerships
                </li>
                <li className="hover:text-gray-700 transition-colors duration-300">
                  • Cultural event presentations
                </li>
                <li className="hover:text-gray-700 transition-colors duration-300">
                  • Speaking engagements on healthcare topics
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${isVisible ? "animate-fadeInRight" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: "0.5s" }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div
                  className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div
                className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
                style={{ animationDelay: "0.7s" }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                  placeholder="What is this regarding?"
                />
              </div>

              <div
                className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
                style={{ animationDelay: "0.8s" }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-blue-400"
                  placeholder="Tell me more about your inquiry..."
                ></textarea>
              </div>

              <div
                className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
                style={{ animationDelay: "0.9s" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover-lift hover-glow disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        className="mr-2 group-hover:animate-bounce"
                        size={20}
                      />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
