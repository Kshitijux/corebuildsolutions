import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./home.css";
import Footer from "../components/Footer";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="home">
      <Navbar />

      {/* 🔥 DARK OVERLAY FOR DEPTH */}
      <div className="hero-overlay"></div>

      <div className="hero">
        <h1 className="hero-title">
          Building Digital <span>Solutions</span> That Scale
        </h1>

        <p className="hero-sub">
          We craft high-performance web applications and scalable systems
          designed for speed, reliability, and long-term growth.
        </p>

        <div className="hero-actions hero-cta">
          <button className="primary" onClick={() => nav("/services")}>
            Get Started
          </button>

          <button className="outline" onClick={() => nav("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}