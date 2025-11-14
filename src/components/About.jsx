import { motion } from "framer-motion";
import { Briefcase, Code, Monitor } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#FFFFFF] text-gray-300 overflow-hidden"
    >
      <div className="relative container mx-auto max-w-6xl">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl text-black font-extrabold text-center mb-20 tracking-tight"
        >
          About <span className="text-black">Me</span>
        </motion.h2>

        {/* Image & Text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-56 h-56 md:w-96 md:h-96">
              <img
                src="./src/assets/Mitanshu.jpg"
                alt="Mitanshu"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right: About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Future Full Stack Developer
            </h3>

            <p className="text-black leading-relaxed">
              Hello! I'm a final-year B.Tech Computer Science student with a deep passion
              for web development and problem-solving. I love transforming ideas into 
              elegant, functional applications.
            </p>

            <p className="text-black leading-relaxed">
              Throughout my journey, I’ve built numerous projects — from dynamic front-end 
              interfaces to server-side APIs — always focused on creating seamless user 
              experiences and writing clean, maintainable code.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-4 border-2 border-black text-black px-8 py-3 rounded-md font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white transition duration-500">
                Contact Me
              </span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            </motion.a>
          </motion.div>

        </div>

        {/* Skill Cards - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {/* Card 1 */}
          <div className="group p-6 rounded-xl border border-black transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-[#0B0B0B]/90 to-[#111111]/80">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-black">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-1">Web Development</h4>
                <p className="text-black text-sm leading-relaxed">
                  Building fast, responsive, and user-friendly interfaces using React and Tailwind.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group p-6 rounded-xl border border-black transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-[#0B0B0B]/90 to-[#111111]/80">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-black">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-1">Back-End Technologies</h4>
                <p className="text-black text-sm leading-relaxed">
                  Building server-side logic, APIs, and authentication using Node.js & MongoDB.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group p-6 rounded-xl border border-black transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-[#0B0B0B]/90 to-[#111111]/80">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-black">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-1">Future Goals</h4>
                <p className="text-black text-sm leading-relaxed">
                  Aiming to become a Complete Full Stack Developer building real-world products.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
