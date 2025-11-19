// components/Footer.jsx
export default function Footer(){
  return (
    <footer className="mt-12 py-8 bg-black text-white">
      <div className="container text-center muted">
        © {new Date().getFullYear()} Abdullahi Akinyoola. All rights reserved.
      </div>
    </footer>
  );
}
