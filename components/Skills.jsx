"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },

  // new icons
  { name: "Tailwind CSS", src: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Canva", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg" },

  // others
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 container mx-auto px-6">
      <div className="text-center my-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
          Skills & Tools
        </h2>
        <p className="mt-4 text-lg" style={{ color: "var(--muted)" }}>
          Here are the technologies and tools I work with:
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10"
      >
        {skills.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center gap-3 p-4 bg-[var(--card)] rounded-xl shadow hover:shadow-lg duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              {/* local img tag ensures SVG loads without next/image CORS issues */}
              <img src={s.src} alt={s.name} className="max-w-full max-h-full object-contain" />
            </div>

            <p className="font-medium" style={{ color: "var(--text)" }}>
              {s.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
