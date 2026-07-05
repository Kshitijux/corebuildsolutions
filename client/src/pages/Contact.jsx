import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState(""); // success / error
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_vse0d92",
      "template_onyaljl",
      e.target,
      "hvLGczCWAOfcin8W8"
    )
    .then(() => {
      setStatus("success");
      setLoading(false);
      e.target.reset();

      // auto hide message
      setTimeout(() => setStatus(""), 4000);
    })
    .catch(() => {
      setStatus("error");
      setLoading(false);
    });
  };

  return (
    <div className="contact">
      <Navbar />

      <section className="contact-container">
        <div className="contact-info">
          <h1>Let’s Build Something Great</h1>
          <p>Send your requirement directly to our email</p>
        </div>

        <div className="contact-box">
          <h2>Start Your Project</h2>

          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" required />

            <input
              name="phone"
              placeholder="Contact Number"
              type="tel"
              required
            />

            <select name="service" required>
              <option value="">Select Service</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>UI/UX Design</option>
              <option>Backend Development</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your requirement..."
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {/* ✅ SUCCESS MESSAGE */}
            {status === "success" && (
              <p className="success-msg">
                ✅ Message sent successfully!
              </p>
            )}

            {/* ❌ ERROR MESSAGE */}
            {status === "error" && (
              <p className="error-msg">
                ❌ Failed to send. Try again.
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}