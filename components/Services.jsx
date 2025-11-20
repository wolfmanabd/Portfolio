"use client";

import { Code, Brush, Smartphone, Server, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      icon: <Code size={40} />,
      description:
        "I build fast, interactive, and visually appealing user interfaces using React, Next.js, Tailwind CSS, and modern frontend architectures. I ensure clean code, reusable components, and pixel-perfect implementation.",
    },
    {
      title: "UI/UX & Graphic Design",
      icon: <Brush size={40} />,
      description:
        "I design clean, modern, and user-centered interfaces using Figma and Canva. From wireframes to full visual designs, I focus on clarity, accessibility, and smooth user experience across platforms.",
    },
    {
      title: "Responsive & Mobile-Friendly Design",
      icon: <Smartphone size={40} />,
      description:
        "I ensure your website looks amazing on all devices desktops, tablets, and smartphones using responsive layouts, adaptive grids, and mobile-first design strategies.",
    },
    {
      title: "Backend / API Integration",
      icon: <Server size={40} />,
      description:
        "I integrate REST APIs, handle data fetching, authentication, and dynamic content. I ensure smooth communication between the client and server with optimized loading states.",
    },
    {
      title: "WordPress Development",
      icon: <Globe size={40} />,
      description:
        "I build and customize WordPress websites, themes, and pages ensuring fast performance, SEO-friendly structure, and clean modern layouts tailored to your brand.",
    },
  ];

  return (
    <section id="services" className="w-full py-20">
      <h2 className="text-center text-4xl font-bold mb-10">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}

            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px var(--primary)",
              borderColor: "var(--primary)",
            }}

            className="p-6 rounded-4xl  bg-(--background) 
                       hover:border-primary transition-all shadow-lg border border-(--secondary)"
          >
            <div className="mb-4  text-(--text)">{service.icon}</div>

            <h3 className="text-xl font-semibold mb-2 text-(--text)">
              {service.title}
            </h3>

            <p className="text-(--text) leading-relaxed text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
