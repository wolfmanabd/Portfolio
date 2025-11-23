// components/CTA.jsx
export default function CTA(){
  return (
    <section className="py-10 mt-8">
      <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold">Transform Your Vision Into Reality</h4>
          <p className="muted">Let’s build something outstanding together.</p>
        </div>
        <a href="#contact" className="px-6 py-3 rounded-md btn" style={{background:"var(--primary)", color:"#fff"}}>Start Project</a>
      </div>
    </section>
  );
}
