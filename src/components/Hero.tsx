import { useState, useEffect } from "react";
import { ChevronDown, Download, Mail, Sparkles } from "lucide-react";
import dhimahiProf from "../public/images/dhimahiProf.jpeg";
import resume from "../public/DHIMAHI ASHISHKUMAR PATHAK 2.pdf";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount
    setIsLoaded(true);
    setShowParticles(true);
  }, []);

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

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Floating particles background */}
      {showParticles && <div className="particles">{particles}</div>}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`text-center lg:text-left ${
              isLoaded ? "animate-fadeInLeft" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Sparkles
                className="text-yellow-500 mr-2 animate-pulse-slow"
                size={24}
              />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                Welcome
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span
                className={`inline-block ${
                  isLoaded ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                Dhimahi
              </span>{" "}
              <span
                className={`inline-block text-blue-600 ${
                  isLoaded ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                Pathak
              </span>
            </h1>
            <p
              className={`text-xl sm:text-2xl text-gray-600 mb-4 ${
                isLoaded ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              Dedicated Nurse & Creative Artist
            </p>
            <p
              className={`text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 ${
                isLoaded ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              Currently completing General Internship in Operations at Shantaba
              Medical College and General Hospital, while pursuing my passion
              for Kathak dance and social media content creation.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                isLoaded ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover-lift hover-glow group"
              >
                <Mail className="mr-2 group-hover:animate-wiggle" size={20} />
                Get In Touch
              </button>
              <button
                onClick={() => window.open(resume, "_blank")}
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 hover-lift group"
              >
                <Download
                  className="mr-2 group-hover:animate-bounce"
                  size={20}
                />
                Download CV
              </button>
            </div>
          </div>

          <div
            className={`flex justify-center ${
              isLoaded ? "animate-fadeInRight" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center animate-pulse-slow group-hover:animate-glow">
                <img
                  src={dhimahiProf}
                  alt="Dhimahi Pathak"
                  className="w-72 h-72 rounded-full object-cover border-8 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-400 text-white p-3 rounded-full shadow-lg animate-bounce-slow group-hover:animate-wiggle">
                <div className="text-2xl">💃</div>
              </div>
              {/* Floating sparkles around the image */}
              <div className="absolute -top-2 -left-2 text-yellow-400 animate-floatUp">
                ✨
              </div>
              <div
                className="absolute -top-4 right-8 text-pink-400 animate-floatUp"
                style={{ animationDelay: "1s" }}
              >
                ✨
              </div>
              <div
                className="absolute bottom-8 -left-6 text-purple-400 animate-floatUp"
                style={{ animationDelay: "2s" }}
              >
                ✨
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-16 ${
            isLoaded ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-all duration-300 animate-bounce-slow hover:animate-pulse-slow group"
          >
            <span className="mr-2">Learn More</span>
            <ChevronDown size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
