// src/components/happyClients/HappyClients.jsx
import React from "react";
import Marquee from "react-fast-marquee";

import {
  SiSpringboot,
  SiAngular,
  SiReact,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiCplusplus,
  SiDotnet,     // ✅ C# icon
  SiJenkins,
  SiSonarqube,
  SiFlutter,
} from "react-icons/si";

const icons = [
  { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
  { name: "Angular", icon: <SiAngular color="#DD0031" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "GitHub", icon: <SiGithub color="#181717" /> },
  { name: "Docker", icon: <SiDocker color="#0db7ed" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "C#", icon: <SiDotnet color="#512BD4" /> },   // ✅ FIXED
  { name: "Jenkins", icon: <SiJenkins color="#D24939" /> },
  { name: "SonarQube", icon: <SiSonarqube color="#4E9BCD" /> },
  { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
];

const HappyClients = () => {
  return (
    <div className="w-full py-8 bg-gray-50">
      <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 text-gray-700">
        Outils & Technologies
      </h2>

      <Marquee gradient={false} speed={55} pauseOnHover>
        {icons.map((item, index) => (
          <div
            key={index}
            className="group mx-6 flex flex-col items-center justify-center 
            bg-white rounded-xl shadow-md px-6 py-4 
            hover:scale-110 transition-all duration-300"
            style={{ minWidth: 100 }}
          >
            <div className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HappyClients;