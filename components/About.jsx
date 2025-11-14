"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format"
              alt="Developer workspace"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
            About Me
          </h2>

          <p className="leading-relaxed text-lg" style={{ color: "var(--muted)" }}>
            I'm <span className="font-semibold" style={{ color: "var(--primary)" }}>Abdullahi Akinyoola</span>, 
            a passionate <strong>Frontend Developer</strong> and <strong>Graphics Designer</strong> who loves 
            creating modern digital experiences with clean UI and strong visual appeal.
          </p>

          <p className="leading-relaxed text-lg" style={{ color: "var(--muted)" }}>
            My work focuses on crafting responsive websites, animations, and user-friendly interfaces. 
            I enjoy turning concepts into real products that look beautiful and perform smoothly.
          </p>

          <a
            href="#portfolio"
            className="inline-block px-6 py-3 rounded-md text-white font-medium"
            style={{ background: "var(--primary)" }}
          >
            View My Work
          </a>
        </motion.div>

      </div>
    </section>
  );
}
