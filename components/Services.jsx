// components/Services.jsx
"use client";
import { motion } from "framer-motion";
const SERVICES = [
  {title:"Web Development", desc:"Responsive websites, SPA, SSR with Next.js"},
  {title:"App Development", desc:"Modern web apps with React + state management"},
  {title:"Graphic Design", desc:"Branding, UI assets, marketing materials"},
];

export default function Services(){
  return (
    <section id="services" className="py-12">
      <h3 className="text-2xl font-bold mb-6">Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s,i)=>(
          <motion.div key={i} className="card p-6 project-card">
            <h4 className="font-semibold mb-2" style={{color:"var(--primary)"}}>{s.title}</h4>
            <p className="muted text-sm">{s.desc}</p>
            <div className="mt-4">
              <a className="text-sm" href="#contact">Explore →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
