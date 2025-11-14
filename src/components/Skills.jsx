import React from "react";
import FlowingMenu from "./FlowingMenu";

const skillItems = [
  {
    text: "Frontend Development",
    description: [
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5/000000" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css/000000" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/000000" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/000000" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/000000" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/000000" },
    ]
  },

  {
    text: "Backend Development",
    description: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/000000" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/Express/000000" },
    ],
  },

  {
    text: "Database Management",
    description: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/000000" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/000000" },
    ],
  },

  {
    text: "Developer Tools",
    description: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/000000" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/000000" },
      { name: "Chrome DevTools", icon: "https://cdn.simpleicons.org/googlechrome/000000" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/Figma/000000" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/Vercel/000000" },

    ],
  },
];


export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-28 px-6 bg-[#FFFFFF] text-white"
    >
      <h2 className="text-4xl text-black md:text-5xl font-extrabold mb-10 text-center tracking-tight">
        My <span className="text-black">Skills</span>
      </h2>

      <div className="w-full bg-black max-w-4xl h-[500px]">
        <FlowingMenu items={skillItems} />
      </div>
    </section>
  );
};
