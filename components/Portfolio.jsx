// components/Portfolio.jsx
"use client";
import Image from "next/image";

const PROJECTS = [
  { name: "Longma Project", link: "https://amazing-longma-a1cb96.netlify.app" },
  { name: "Chipper Belekoy", link: "https://chipper-belekoy-da6cbd.netlify.app" },
  { name: "Effortless Babka", link: "https://effortless-babka-677c47.netlify.app" },
  { name: "Tranquil Maamoul", link: "https://tranquil-maamoul-9a10e8.netlify.app" },
  { name: "Wolfman Burger", link: "https://wolfman-burger-site.netlify.app" },
  { name: "Fancy Treacle", link: "https://fancy-treacle-9a8ce2.netlify.app" },
  { name: "Gentle Kitsune", link: "https://gentle-kitsune-49ebb7.netlify.app" },
];

function screenshotUrl(site){
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(site)}?w=1200`;
}
function unsplashFallback(i){
  const topics = ["web%20design","ui%20ux","website","developer"];
  return `https://source.unsplash.com/collection/190727/800x600?${topics[i%topics.length]}`;
}

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-12">
      <h3 className="text-2xl font-bold mb-6">Portfolio</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p,i)=>(
          <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="project-card overflow-hidden card">
            <div style={{height:180, position:"relative"}}>
              <Image
                src={screenshotUrl(p.link)}
                alt={p.name}
                fill
                className="object-cover"
                onError={(e)=>{ e.currentTarget.src = unsplashFallback(i); }}
                />
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="muted text-sm">Project — UI & Frontend</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
