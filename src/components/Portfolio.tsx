import React, { useState } from "react";
import { ExternalLink, Award, Camera, Heart } from "lucide-react";
import kathak1 from "../public/images/kathak1.png";
import garba from "../public/images/garba.jpeg";
import yellowKathak from "../public/images/yellowKathak.png";
import sm1 from "../public/images/sm1.jpeg";
import sm2 from "../public/images/sm2.jpeg";
import sm3 from "../public/images/sm3.jpeg";
import sm4 from "../public/images/sm4.png";
import m1 from "../public/images/m1.jpeg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("dance");

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
      year: "2025",
    },
    {
      title: "Patient Care Innovation",
      description: "Developed multilingual patient education materials",
      image:
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=500",
      impact: "Implemented hospital-wide",
      year: "2023",
    },
    {
      title: "Mental Health Awareness",
      description: "Workshop series on healthcare worker wellbeing",
      image:
        "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=500",
      impact: "200+ participants",
      year: "2024",
    },
    {
      title: "Research Contribution",
      description: "Study on traditional healing practices integration",
      image:
        "https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=500",
      impact: "Published in journal",
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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my work across healthcare, performing arts, and digital
            content creation
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {portfolioTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "dance"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {getCurrentPortfolio().map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                {/* Make dance portfolio images clickable */}

                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    activeTab === "dance" ? "w-full h-64" : "w-full h-80"
                  }`}
                />

                {/* External link icon for dance videos */}
                {activeTab === "dance" &&
                  "type" in item &&
                  item.type === "photo" &&
                  "link" in item &&
                  item.link && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:bg-opacity-100 transition-all duration-200"
                      >
                        <div className="bg-white bg-opacity-90 p-2 rounded-lg">
                          <ExternalLink size={16} className="text-gray-600" />
                        </div>
                      </a>
                    </div>
                  )}

                {/* External link for social media */}
                {activeTab === "social" && (
                  <div className="absolute top-4 right-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:bg-opacity-100 transition-all duration-200"
                    >
                      <div className="bg-white bg-opacity-90 p-2 rounded-lg">
                        <ExternalLink size={16} className="text-gray-600" />
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                {/* Tab-specific metadata */}
                {activeTab === "dance" && (
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      photo
                    </span>
                  </div>
                )}

                {activeTab === "social" && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">
                      {"engagement" in item ? item.engagement : ""}
                    </span>
                    <span className="text-xs text-gray-500">
                      {"platform" in item ? item.platform : ""}
                    </span>
                  </div>
                )}

                {activeTab === "healthcare" && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-600">
                      {"impact" in item ? item.impact : ""}
                    </span>
                    <span className="text-xs text-gray-500">
                      {"year" in item ? item.year : ""}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
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
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Let's Connect
            <ExternalLink className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
