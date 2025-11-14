// components/Contact.jsx
"use client";
import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_ID_HERE"; // replace

export default function Contact(){
  const [status, setStatus] = useState(null);

  async function handleSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }
      });
      if(res.ok){ setStatus("SENT"); e.target.reset(); } else setStatus("ERROR");
    } catch(err){
      setStatus("FALLBACK");
      const name = fd.get("name"); const email = fd.get("email"); const message = fd.get("message");
      window.location.href = `mailto:your.email@example.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\n" + email)}`;
    }
  }

  return (
    <section id="contact" className="py-16">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" required placeholder="Name" className="w-full p-3 rounded bg-[#0d0d0d] border border-white/5"/>
          <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded bg-[#0d0d0d] border border-white/5"/>
          <textarea name="message" rows="6" required placeholder="Message" className="w-full p-3 rounded bg-[#0d0d0d] border border-white/5"></textarea>
          <div className="flex items-center gap-4">
            <button type="submit" className="px-5 py-2 rounded-md" style={{background:"var(--primary)", color:"#fff"}}>Send Message</button>
            {status === "SENT" && <span className="text-green-400">Sent!</span>}
            {status === "ERROR" && <span className="text-red-400">Error sending</span>}
            {status === "FALLBACK" && <span className="text-yellow-400">Opening mail client…</span>}
          </div>
        </form>

        <div className="card p-6">
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p className="muted mb-2">Email: your.email@example.com</p>
          <p className="muted mb-2">Phone: +234 000 000 000</p>
          <p className="muted">Location: Sokoto, Nigeria</p>
        </div>
      </div>
    </section>
  );
}
