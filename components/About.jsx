"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mt-32 py-28 container mx-auto px-6"
    >
      {/* SECTION HEADER */}
      <div className="text-center my-16">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "var(--text)" }}
        >
          About Me
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Illustration (restored original size) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format"
              alt="Developer illustration"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — About Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p
            className="leading-relaxed text-lg"
            style={{ color: "var(--muted)" }}
          >
            My name is{" "}
            <span style={{ color: "var(--primary)", fontWeight: 600 }}>
              Abdullahi Akinyoola
            </span>
            , a passionate <strong>Frontend Developer</strong> and{" "}
            <strong>Graphics Designer</strong> who builds visually stunning and
            user-friendly digital experiences.
          </p>

          <p
            className="leading-relaxed text-lg"
            style={{ color: "var(--muted)" }}
          >
            I specialize in creating modern, responsive, and interactive
            interfaces using frontend tools. I love transforming ideas into
            real-world, polished solutions.
          </p>

          <p
            className="leading-relaxed text-lg"
            style={{ color: "var(--muted)" }}
          >
            My background in graphics design allows me to blend aesthetics and
            functionality, creating user experiences that are smooth, elegant,
            and meaningful.
          </p>

          <p
            className="leading-relaxed text-lg"
            style={{ color: "var(--muted)" }}
          >
            When I’m not coding, you’ll find me experimenting with UI designs,
            learning new technologies, or improving existing projects. I believe
            in continuous growth and staying ahead in the ever-changing tech
            ecosystem.
          </p>

          <a
            href="#services"
            className="inline-block px-6 py-3 rounded-md text-white font-medium"
            style={{ background: "var(--primary)" }}
          >
            Explore My Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
