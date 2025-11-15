import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, 
  SiRedux, SiVite, SiMongodb, SiBootstrap, SiFigma, 
  SiCanva, SiCoreldraw 
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB] text-6xl" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-6xl" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-6xl" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-6xl" />, category: "Frontend" },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-6xl" />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-6xl" />, category: "Frontend" },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC] text-6xl" />, category: "Frontend" },
  { name: "Vite", icon: <SiVite className="text-[#646CFF] text-6xl" />, category: "Frontend" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-6xl" />, category: "Backend" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3] text-6xl" />, category: "Frontend" },
  { name: "ShadCN UI", icon: <SiNextdotjs className="text-black dark:text-white text-6xl" />, category: "Frontend" },
  { name: "Mantine", icon: <FaReact className="text-[#339AF0] text-6xl" />, category: "Frontend" },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-6xl" />, category: "Design" },
  { name: "Canva", icon: <SiCanva className="text-[#00C4CC] text-6xl" />, category: "Design" },
  { name: "CorelDRAW", icon: <SiCoreldraw className="text-[#F4A900] text-6xl" />, category: "Design" },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white text-6xl" />, category: "Other" },
];

export default function Skills() {
  return (
    <section className="py-16">
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Tools I Work With
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2 text-center font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
