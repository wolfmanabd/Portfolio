// components/Skills.jsx
import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML", pct: 95 },
  { name: "CSS", pct: 90 },
  { name: "JavaScript", pct: 86 },
  { name: "React", pct: 90 },
  { name: "Next.js", pct: 88 },
];

export default function Skills(){
  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
      <div className="grid gap-4">
        {SKILLS.map(s => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span className="muted">{s.pct}%</span>
            </div>
            <div className="progress">
              <span style={{width:`${s.pct}%`}}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
