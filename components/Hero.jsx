// components/Hero.jsx
"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero(){
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

      {/* subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 to-black/40"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{x:-30, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.9}}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Hi, I'm <span style={{color:"var(--primary)"}}>Abdullahi Akinyoola</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              <Typewriter
                words={["Frontend Developer", "Graphics Designer", "UI/UX Enthusiast"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </h2>

            <p className="text-gray-300 max-w-lg mb-6">
              I build modern, accessible, and stunning interfaces — bridging
              design and code to produce delightful user experiences.
            </p>

            <div className="flex gap-4">
              <a href="#portfolio" className="px-4 py-2 rounded-md" style={{background:"var(--primary)", color:"#fff"}}>View Portfolio</a>
              <a href="#contact" className="px-4 py-2 rounded-md border border-white/10 text-white/90">Contact</a>
            </div>
          </motion.div>

          {/* <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:1}}>
            <div className="w-full flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 card overflow-hidden shadow-2xl border-4" style={{borderColor:"var(--primary)"}}>
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                  alt="portrait placeholder"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
