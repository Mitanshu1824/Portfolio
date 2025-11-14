import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#FFFFFF] text-gray-300 overflow-hidden"
    >
      
      <div className="relative container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl  text-black font-extrabold text-center mb-6 tracking-tight"
        >
          Get in <span className="text-black">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-black mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Feel free to reach out — I’m always open to discussing new projects,
          creative ideas, or opportunities to bring your vision to life.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid sm:grid-cols-3 gap-10 justify-center text-center"
        >
          {/* Email */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-full transition-all bg-black">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-white">Email</h4>
            <a
              href="mailto:kakaniyamitanshu88@gmail.com"
              className="text-black transition-colors duration-300"
            >
              kakaniyamitanshu88@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-full bg-black transition-all">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-white">Phone</h4>
            <a
              href="https://wa.me/9725082862"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-300"
            >
              +91 9725082862
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-full bg-black transition-all">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-white">Location</h4>
            <p className="text-black transition-colors duration-300">
              Gujarat,India
            </p>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-800 to-transparent my-16" />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center"
        >
          <h4 className="font-semibold mb-6 text-white text-lg">
            Connect With Me
          </h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/kakaniyamitanshu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://github.com/Mitanshu1824"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-all duration-300 transform hover:scale-110"
            >
              <Github size={26} />
            </a>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center text-black mt-16 text-sm"
        >
          © 2025 Mitanshu Kakaniya.
        </motion.div>
      </div>
    </section>
  );
};
