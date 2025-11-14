import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PixelTransition from "./PixelTransition";

const projects = [
  {
    id: 1,
    title: "Shop Website",
    description:
      "Created a product showcase website with store details and integrated a JavaScript-based AI chatbot for instant customer responses.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&q=80&w=1080",
    tags: ["Html", "Css", "Javascript", "AI"],
    category: "Frontend",
    githubUrl: "https://github.com",
    demoUrl: "https://patelvasanbhandar.netlify.app/",
  },
  {
    id: 2,
    title: "Future Decore Industries",
    description:
      "Built a business website for wood panel sheets with Nodemailer-based inquiry alerts and a clean, responsive Tailwind CSS UI.",
    image:
      "https://plus.unsplash.com/premium_photo-1683141126317-43903b572927?auto=format&q=60&w=600",
    tags: ["Html", "Css", "Javascript", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    githubUrl: "https://github.com",
    demoUrl: "https://futuredecoreindustries.vercel.app/",
  },
  {
    id: 3,
    title: "Quizotron",
    description:
      "Developed an interactive quiz app in Java with multiple categories, real-time scoring, and smooth, user-friendly UI.",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&q=60&w=600",
    tags: ["Android Studio", "Java"],
    githubUrl: "https://github.com/Mitanshu1824/Quizotron",
    demoUrl: "https://github.com/Mitanshu1824/Quizotron",
  },
  {
    id: 4,
    title: "StepX",
    description:
      "Designed a high-fidelity sneaker store landing page in Figma with strong visual hierarchy and modern, conversion-focused layout.",
    image:
      "https://images.unsplash.com/photo-1596936248374-dd8478d4e5b2?auto=format&q=60&w=600",
    tags: ["Figma"],
    githubUrl: "https://github.com/Mitanshu1824/StepX-Landing-Page",
    demoUrl: "https://github.com/Mitanshu1824/StepX-Landing-Page",
  },
  {
    id: 5,
    title: "To-Do Application",
    description:
      "Built a full-stack To-Do app with CRUD operations, task filtering, editing, and real-time status updates using the MERN stack.",
    image:
      "https://images.unsplash.com/photo-1712000155290-ee65c0a82eda?auto=format&q=60&w=600",
    tags: ["React", "MongoDB", "Express.js", "Node.js", "TailwindCss"],
    category: "Full Stack",
    githubUrl: "https://github.com/Mitanshu1824/ToDo-List.git",
    demoUrl: "https://github.com/Mitanshu1824/ToDo-List.git",
  },
  {
    id: 6,
    title: "WeBlogs",
    description:
      "Frontend blog-reading website with modern layout & Figma designed UI.",
    image:
      "https://images.unsplash.com/photo-1638342863994-ae4eee256688?auto=format&q=60&w=600",
    tags: ["React", "Vite", "TailwindCss", "Figma"],
    githubUrl: "https://github.com/Mitanshu1824/WeBlogs.git",
    demoUrl: "https://we-blogs.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28 px-6 bg-[#FFFFFF]">
      <div className="relative container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-black font-extrabold text-center mb-16"
        >
          My <span className="text-black">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <PixelTransition
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                aspectRatio="65%"
                className="rounded-2xl shadow-xl border border-gray-200"
                firstContent={
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                }
                secondContent={
                  <div
                    className="w-full h-full bg-[#0A0A0A]/90 p-6 
                flex flex-col justify-center items-center 
               text-white text-center gap-3"
                  >
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm opacity-90 max-w-xs md:max-w-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-[10px] md:text-xs rounded-full bg-white text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-5 mt-2">
                      <a href={project.demoUrl} target="_blank">
                        <ExternalLink size={20} className="md:w-[22px] md:h-[22px]" />
                      </a>
                      <a href={project.githubUrl} target="_blank">
                        <Github size={20} className="md:w-[22px] md:h-[22px]" />
                      </a>
                    </div>
                  </div>
                }

              />
            </motion.div>
          ))}
        </div>


        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-16" > <a href="https://github.com/Mitanshu1824" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <button className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2" >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" >
              </span>
              <div className="flex items-center">
                <span className="ml-1 text-white">Check out my GitHub</span>
              </div>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
