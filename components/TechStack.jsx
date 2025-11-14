import { SiReact, SiNextdotjs, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

export default function TechStack() {
  const tools = [
    { name: "React", icon: <SiReact color="#61DBFB" size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" size={40} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38bdf8" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={40} /> },
    { name: "JavaScript", icon: <SiJavascript color="#F0DB4F" size={40} /> },
  ];

  return (
    <section id="tools" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Tools & Technologies</h2>

      <div className="flex gap-10 flex-wrap">
        {tools.map((t) => (
          <div key={t.name} className="flex flex-col items-center gap-2">
            {t.icon}
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
