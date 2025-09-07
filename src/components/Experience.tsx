import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animation for timeline items
          for (let i = 0; i < experiences.length; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 300);
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

  const experiences = [
    {
      title: "General Internship - Operations",
      organization: "Shantaba Medical College and General Hospital",
      location: "Gujarat, India",
      period: "June 2025 - Present",
      type: "Current Position",
      description:
        "Completing comprehensive training in hospital operations, patient care protocols, and clinical procedures. Gaining hands-on experience in various departments including ICU, emergency care, and surgical units.",
      highlights: [
        "Assisted in 200+ patient care procedures",
        "Collaborated with multidisciplinary healthcare teams",
        "Maintained 98% accuracy in patient documentation",
        "Participated in emergency response protocols",
      ],
    },
    {
      title: "General Internship - Operations",
      organization: "Sterling Hospital, Ahmedabad",
      location: "Gujarat, India",
      period: "April 2025 - June 2025",
      type: "Internship",
      description:
        "Completing comprehensive training in hospital operations, patient care protocols, and clinical procedures. Gaining hands-on experience in various departments including ICU, emergency care, and surgical units.",
      highlights: [
        "Assisted in 200+ patient care procedures",
        "Collaborated with multidisciplinary healthcare teams",
        "Maintained 98% accuracy in patient documentation",
        "Participated in emergency response protocols",
      ],
    },
    {
      title: "General Nursing and Midwifery (GNM) Diploma",
      organization: "Excel School of Nursing, Bhavnagar",
      location: "Gujarat, India",
      period: "2021 - 2024",
      type: "Educational",
      description:
        "Completed clinical rotations across multiple specialties including medical-surgical, pediatrics, obstetrics, and community health nursing.",
      highlights: [
        "Completed 1000+ clinical hours across specialties",
        "Achieved top 10% academic performance",
        "Led health awareness campaigns in rural communities",
        "Mentored junior nursing students",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in healthcare, from student to practicing professional
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative ${
                visibleItems.includes(index)
                  ? "animate-fadeInLeft"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-blue-200 hidden sm:block animate-pulse-slow"></div>
              )}

              <div className="flex flex-col sm:flex-row gap-8 group">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:animate-pulse-slow transition-all duration-300 group-hover:scale-110">
                    <Building
                      className="text-white group-hover:animate-wiggle"
                      size={20}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover-lift group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-500">
                      <div className="flex items-center mb-1 group-hover:text-gray-700 transition-colors duration-300">
                        <Calendar
                          size={16}
                          className="mr-1 group-hover:animate-bounce"
                        />
                        {exp.period}
                      </div>
                      <div className="flex items-center mb-1 group-hover:text-gray-700 transition-colors duration-300">
                        <MapPin
                          size={16}
                          className="mr-1 group-hover:animate-bounce"
                        />
                        {exp.location}
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                          exp.type === "Current Position"
                            ? "bg-green-100 text-green-800 group-hover:bg-green-200"
                            : exp.type === "Educational"
                            ? "bg-blue-100 text-blue-800 group-hover:bg-blue-200"
                            : "bg-purple-100 text-purple-800 group-hover:bg-purple-200"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      Key Achievements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse-slow"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
