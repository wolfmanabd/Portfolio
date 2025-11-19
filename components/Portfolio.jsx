"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "My Todo App",
    link: "https://amazing-longma-a1cb96.netlify.app",
    tags: ["Frontend", "UI/UX"],
  },
  {
    name: "LaslesVpn page",
    link: "https://chipper-belekoy-da6cbd.netlify.app",
    tags: ["Landing Page"],
  },
  {
    name: "Age Calculator App",
    link: "https://effortless-babka-677c47.netlify.app",
    tags: ["UI Design", "Responsive"],
  },
  {
    name: "Movie IMDB Rating App",
    link: "https://tranquil-maamoul-9a10e8.netlify.app",
    tags: ["Modern UI"],
  },
  {
    name: "Burger site",
    link: "https://wolfman-burger-site.netlify.app",
    tags: ["Restaurant", "Frontend"],
  },
  {
    name: "Natours landing page",
    link: "https://fancy-treacle-9a8ce2.netlify.app",
    tags: ["Landing Page"],
  },
  {
    name: "stopwatch",
    link: "https://gentle-kitsune-49ebb7.netlify.app",
    tags: ["UI/UX"],
  },
];

function screenshotUrl(site) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(site)}?w=1600`;
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14"
      >
        My Projects
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`
    group relative rounded-2xl overflow-hidden
    p-0.5 transition-all duration-500

    /* Light mode glass look */
    bg-white/10 backdrop-blur-lg
    hover:bg-white/20

    /* Dark mode neon glass */
    dark:bg-white/10 dark:hover:bg-white/20
  `}
            whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }} 
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none 
                  bg-linear-to-r from-transparent via-white/40 to-transparent
                  dark:via-purple-500/40
                  animate-[shine_1.4s_ease-in-out]"
            ></div>

            <div className="relative rounded-2xl overflow-hidden bg-neutral-900/90 dark:bg-neutral-900/60">

              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={screenshotUrl(p.link)}
                  alt={p.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
              </div>

              <div className="p-5 space-y-3">

                <h4
                  className="font-bold text-xl text-black dark:text-white tracking-wide
                     transition duration-300 group-hover:text-primary"
                >
                  {p.name}
                </h4>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  A modern, responsive UI built with polished layout, smooth
                  transitions, and performance-first best practices.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "UI", "Frontend"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium
            bg-neutral-200 text-neutral-800
            dark:bg-neutral-800 dark:text-neutral-200
            group-hover:bg-primary group-hover:text-white
            transition duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
