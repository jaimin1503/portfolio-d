import React from "react";
import { Stethoscope, Music, Camera, Users, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Healthcare & Medical",
      icon: <Stethoscope className="text-blue-600" size={24} />,
      skills: [
        "Patient Care & Assessment",
        "Clinical Documentation",
        "Emergency Response",
        "Medication Administration",
        "Infection Control",
        "Health Education",
      ],
    },
    {
      title: "Performing Arts",
      icon: <Music className="text-purple-600" size={24} />,
      skills: [
        "Kathak Classical Dance",
        "Stage Performance",
        "Choreography",
        "Cultural Presentation",
        "Dance Instruction",
        "Costume & Makeup",
      ],
    },
    {
      title: "Digital & Creative",
      icon: <Camera className="text-green-600" size={24} />,
      skills: [
        "Content Creation",
        "Social Media Strategy",
        "Photography",
        "Video Editing",
        "Brand Development",
        "Community Engagement",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-amber-600" size={24} />,
      skills: [
        "Communication",
        "Empathy & Compassion",
        "Leadership",
        "Problem Solving",
        "Cultural Sensitivity",
        "Adaptability",
      ],
    },
  ];

  const languages = [
    { name: "Hindi", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "Gujarati", level: "Native" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning healthcare, performing arts, and
            digital creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Globe className="text-blue-600 mr-3" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Languages</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {language.name}
                  </h4>
                  <p className="text-sm text-gray-600">{language.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
