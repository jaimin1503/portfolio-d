import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Award, Camera, Heart } from "lucide-react";
import kathak1 from "../public/images/kathak1.png";
import garba from "../public/images/garba.jpeg";
import yellowKathak from "../public/images/yellowKathak.png";
import sm1 from "../public/images/sm1.jpeg";
import sm2 from "../public/images/sm2.jpeg";
import sm3 from "../public/images/sm3.jpeg";
import sm4 from "../public/images/sm4.png";
import m1 from "../public/images/m1.jpeg";
import m2 from "../public/images/m2.jpeg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("dance");
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset and animate items when section becomes visible
          setVisibleItems([]);
          const currentPortfolio = getCurrentPortfolio();
          for (let i = 0; i < currentPortfolio.length; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 150);
          }
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
  }, [activeTab]);

  // Reset visible items when tab changes
  useEffect(() => {
    setVisibleItems([]);
    const currentPortfolio = getCurrentPortfolio();
    for (let i = 0; i < currentPortfolio.length; i++) {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 150);
    }
  }, [activeTab]);

  const portfolioTabs = [
    { id: "dance", label: "Kathak Performances", icon: <Award size={20} /> },
    { id: "social", label: "Social Media", icon: <Camera size={20} /> },
    {
      id: "healthcare",
      label: "Healthcare Projects",
      icon: <Heart size={20} />,
    },
  ];

  const dancePortfolio = [
    {
      title: "Classical Kathak Recital",
      description: "Traditional piece performed at Annual Cultural Festival",
      image: kathak1,
      type: "photo",
      link: "https://youtu.be/s0NqLh06g1o?si=s9BqAg9GUlpzINO0", // Add your link here
    },
    {
      title: "Navratri Garba",
      description: "Garba workshop",
      image: garba,
      type: "photo",
      link: "https://youtube.com/shorts/TCzLlHepiSw?si=e0pFwCTLyHesyQpL", // Add your link here
    },
    {
      title: "Contemporary Fusion",
      description: "Modern interpretation of classical Kathak movements",
      image: yellowKathak,
      type: "photo",
      link: "https://youtube.com/shorts/Go2hGZAVn_Y?si=lDJltTJChfrYUtET", // Add your link here
    },
  ];

  const socialMediaPortfolio = [
    {
      title: "Breast self-examination",
      description: "Informative content about breast self-examination",
      image: sm1,
      engagement: "1.5K views",
      platform: "YouTube",
      link: "https://youtube.com/shorts/2_zZyyfYsrk?si=K6fLBRiITMrovtyy",
    },
    {
      title: "Nagnath Mahadev, Amreli",
      description:
        "Informational video of Nagnath Mahadev collab with #AapnuAmreli, Amreli",
      image: sm3,
      engagement: "90K views",
      platform: "Instagram",
      link: "https://www.instagram.com/dhi.mahi_25/reel/DMov-_0zDZB/",
    },
    {
      title: "Shaky Shaky",
      description: "Solo performance of Shaky Shaky",
      image: sm2,
      engagement: "102K views",
      platform: "Instagram",
      link: "https://www.instagram.com/dhi.mahi_25/reel/DKJRRz9Mv-h/",
    },
    {
      title: "Public Reaction on Janmashtami Celebration",
      description:
        "Public reaction of Amreli people on Janmashtami celebration,collab with #AapnuAmreli, Amreli",
      image: sm4,
      engagement: "118K views",
      platform: "Instagram",
      link: "https://www.instagram.com/dhi.mahi_25/reel/DNSCOj6MqPU/",
    },
  ];

  const healthcarePortfolio = [
    {
      title: "PCOS on the rise",
      description: "Article on increasing PCOS cases in India",
      image: m1,
      impact: "Published in journal Gujarat Nursing Mirror",
      year: "2024",
    },
    {
      title: "Fear of missing out(FOMO)",
      description: "Article on FOMO",
      image: m2,
      impact: "Published in journal Gujarat Nursing Mirror",
      year: "2024",
    },
  ];

  const getCurrentPortfolio = () => {
    switch (activeTab) {
      case "dance":
        return dancePortfolio;
      case "social":
        return socialMediaPortfolio;
      case "healthcare":
        return healthcarePortfolio;
      default:
        return dancePortfolio;
    }
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my work across healthcare, performing arts, and digital
            content creation
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div
          className={`flex flex-wrap justify-center mb-12 gap-4 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {portfolioTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover-lift group ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white animate-glow"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="group-hover:animate-wiggle">{tab.icon}</span>
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "dance"
              ? "grid-cols-1 md:grid-cols-3"
              : activeTab === "social"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : activeTab === "healthcare"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {getCurrentPortfolio().map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group hover-lift ${
                visibleItems.includes(index) ? "animate-scaleIn" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                    activeTab === "dance" ? "w-full h-64" : "w-full h-80"
                  }`}
                />

                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* External link icon for dance videos */}
                {activeTab === "dance" &&
                  "type" in item &&
                  item.type === "photo" &&
                  "link" in item &&
                  item.link && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:bg-opacity-100 transition-all duration-200"
                      >
                        <div className="bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-200">
                          <ExternalLink size={16} className="text-gray-600" />
                        </div>
                      </a>
                    </div>
                  )}

                {/* External link for social media */}
                {activeTab === "social" && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:bg-opacity-100 transition-all duration-200"
                    >
                      <div className="bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-200">
                        <ExternalLink size={16} className="text-gray-600" />
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                {/* Tab-specific metadata */}
                {activeTab === "dance" && (
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-colors duration-300">
                      photo
                    </span>
                  </div>
                )}

                {activeTab === "social" && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {"engagement" in item ? item.engagement : ""}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      {"platform" in item ? item.platform : ""}
                    </span>
                  </div>
                )}

                {activeTab === "healthcare" && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-300">
                      {"impact" in item ? item.impact : ""}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      {"year" in item ? item.year : ""}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-gray-600 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover-lift hover-glow group"
          >
            Let's Connect
            <ExternalLink
              className="ml-2 group-hover:animate-bounce"
              size={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
