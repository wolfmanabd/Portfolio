"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[98vh] flex items-center">
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
          alt="tech background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 to-black/90"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Hi, I`m{" "}
              <span style={{ color: "var(--primary)" }}>
                Abdullahi Akinyoola
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Graphics Designer",
                  "UI/UX Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </h2>

            <p className="text-gray-300 max-w-lg mb-6">
              I build modern, accessible, and stunning interfaces bridging
              design and code to produce delightful user experiences.
            </p>

            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="px-4 py-2 rounded-md"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md border border-white/10 text-white/90"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* RIGHT PROFILE IMAGE — Slide from Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1200&auto=format"
                alt="Developer portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
