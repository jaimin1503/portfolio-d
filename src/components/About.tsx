import React, { useEffect, useRef, useState } from "react";
import { Heart, Users, Star, Award } from "lucide-react";
import dhimahiNurse from "../public/images/dhimahiNurse.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animation for cards
          for (let i = 0; i < highlights.length; i++) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 200);
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
  }, []);

  const highlights = [
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Compassionate Care",
      description:
        "Dedicated to providing exceptional patient care with empathy and professionalism.",
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Team Collaboration",
      description:
        "Strong believer in interdisciplinary teamwork for optimal patient outcomes.",
    },
    {
      icon: <Star className="text-amber-500" size={24} />,
      title: "Creative Expression",
      description:
        "Classical Kathak dancer bringing artistry and discipline to all aspects of life.",
    },
    {
      icon: <Award className="text-green-500" size={24} />,
      title: "Digital Innovation",
      description:
        "Social media creator sharing healthcare awareness and cultural preservation.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate healthcare professional with a unique blend of medical
            expertise and artistic creativity
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="group">
            <img
              src={dhimahiNurse}
              alt="Dhimahi in medical setting"
              className="rounded-xl shadow-lg w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 hover-lift"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6">
              As a dedicated nursing professional, I am currently completing my
              General Internship in Operations at Shantaba Medical College and
              General Hospital. My journey in healthcare has been driven by a
              deep commitment to patient care and clinical excellence.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond the medical field, I am a passionate Kathak dancer, having
              trained for over a decade in this classical Indian dance form.
              This artistic pursuit has taught me discipline, grace, and the
              importance of cultural preservation.
            </p>
            <p className="text-gray-600">
              As a social media content creator, I bridge the gap between
              healthcare awareness and cultural expression, creating engaging
              content that educates and inspires my audience while showcasing
              the beauty of traditional arts.
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover-lift group ${
                visibleCards.includes(index) ? "animate-scaleIn" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4 group-hover:animate-bounce-slow">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {highlight.title}
              </h4>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
