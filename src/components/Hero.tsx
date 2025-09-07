import React from "react";
import { ChevronDown, Download, Mail } from "lucide-react";
import dhimahi from "../public/images/dhimahi.jpeg";
import dhimahiProf from "../public/images/dhimahiProf.jpeg";
import resume from "../public/DHIMAHI ASHISHKUMAR PATHAK 2.pdf";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Dhimahi <span className="text-blue-600">Pathak</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4">
              Dedicated Nurse & Creative Artist
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Currently completing General Internship in Operations at Shantaba
              Medical College and General Hospital, while pursuing my passion
              for Kathak dance and social media content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
              <button
                onClick={() => window.open(resume, "_blank")}
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <img
                  src={dhimahiProf}
                  alt="Dhimahi Pathak"
                  className="w-72 h-72 rounded-full object-cover border-8 border-white shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-400 text-white p-3 rounded-full shadow-lg">
                <div className="text-2xl">💃</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 animate-bounce"
          >
            <span className="mr-2">Learn More</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
