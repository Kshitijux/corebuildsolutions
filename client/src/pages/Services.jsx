import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./services.css";
import { motion } from "framer-motion";

import { Code2, Smartphone, Palette, Server } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    desc: "High-performance websites engineered for speed, scalability, and conversion.",
    points: ["Responsive Design", "SEO Optimized", "Performance Focused"],
    icon: Code2
  },
  {
    title: "App Development",
    desc: "Scalable applications designed for seamless UX and real-world performance.",
    points: ["Cross-platform", "Real-time Systems", "Scalable Architecture"],
    icon: Smartphone
  },
  {
    title: "UI/UX Design",
    desc: "Minimal, intuitive interfaces crafted for clarity and engagement.",
    points: ["User-Centered", "Wireframing", "Modern UI"],
    icon: Palette
  },
  {
    title: "Backend Development",
    desc: "Secure backend systems with optimized data flow and reliability.",
    points: ["REST APIs", "Database Design", "Security"],
    icon: Server
  }
];

export default function Services() {
  const nav = useNavigate();

  return (
    <div className="services light">
      <Navbar />

      {/* HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          We design and build scalable digital products that combine performance,
          clarity, and long-term reliability.
        </p>
      </section>

      {/* VALUE STRIP */}
      <section className="value-strip">
        {["Fast Delivery", "Scalable Systems", "Clean Code"].map((v, i) => (
          <div key={i} className="value-pill">{v}</div>
        ))}
      </section>

      {/* SERVICES */}
      <main className="services-grid">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.article
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-inner">
                <div className="icon-box">
                  <Icon size={22} />
                </div>

                <h3>{s.title}</h3>
                <p className="desc">{s.desc}</p>

                <ul className="points">
                  {s.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </main>

      {/* CTA */}
      <section className="cta">
        <h2> Build Something Powerful</h2>
        <p>Turn your idea into a scalable, production-ready product.</p>
        <button onClick={() => nav("/contact")}>Get Started</button>
      </section>

      <Footer />
    </div>
  );
}