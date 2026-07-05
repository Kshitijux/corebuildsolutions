import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./about.css";
import { motion } from "framer-motion";

export default function About() {
  const nav = useNavigate();

  const words = "Let’s Build Something Great".split(" ");

  const variants = {
    hidden: (i) => {
      const dirs = [
        { x: 0, y: -50 },
        { x: -50, y: 0 },
        { x: 0, y: 50 },
        { x: 50, y: 0 }
      ];
      const d = dirs[i % dirs.length];

      return {
        opacity: 0,
        x: d.x,
        y: d.y,
        filter: "blur(6px)"
      };
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="about light">
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          We Build Digital Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We design and develop scalable digital products that combine
          performance, clarity, and long-term reliability.
        </motion.p>
      </section>

      {/* MAIN SECTION */}
      <section className="about-wrap">
        {/* VISION */}
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Our Vision</h3>
          <p>
            We build scalable digital products that combine performance,
            clarity, and long-term reliability. Our focus is on creating
            systems that evolve with your business.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="features-grid">
          {[
            "High Performance Systems",
            "Modern & Clean Interfaces",
            "Secure Architecture",
            "Scalable Backend Design"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="feature-pill"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="dot" />
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.h2
          className="cta-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {words.map((word, i) => (
            <motion.span key={i} custom={i} variants={variants}>
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <button className="cta-btn" onClick={() => nav("/services")}>
          Let’s Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
}