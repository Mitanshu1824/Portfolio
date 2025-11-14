import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import image from "../assets/image.png";


export const Hero = () => {

  const scrollToSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white text-black px-6"
    >
      {/* Main content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="text-lg md:text-xl mb-4">Hi, I’m</p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Mitanshu Kakaniya
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-lg md:text-xl max-w-xl mx-auto md:mx-0"
          >
            Web Developer & Designer — crafting clean, fast, and meaningful digital experiences that bring ideas to light.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center md:justify-start items-center gap-6 mt-10"
          >
            <a
              href="#projects"
              className="relative inline-flex justify-center items-center w-32 h-12 overflow-hidden rounded-md border border-black bg-white text-black text-lg font-semibold cursor-pointer group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Explore!
              </span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out delay-100"></span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 ease-out delay-200"></span>
            </a>

            <a
              href="/Kakaniya Mitanshu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex justify-center items-center w-32 h-12 overflow-hidden rounded-md border border-black bg-white text-black text-lg font-semibold cursor-pointer group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Resume
              </span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out"></span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-700 ease-out delay-100"></span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-1000 ease-out delay-200"></span>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="flex justify-center md:justify-end"
        >
          <motion.img
            src={image}
            alt="Desk Setup"
            className="w-[380px] md:w-[480px] lg:w-[520px] object-contain select-none"
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}

          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 cursor-pointer"
        onClick={scrollToSection}
      >
        <motion.div
          animate={{ y: [0, 10, -10, 0], opacity: [1, 0.3, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-black" />
        </motion.div>

        <span className="text-black text-sm font-medium tracking-wide select-none">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
