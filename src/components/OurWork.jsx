import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import foundationLogo from "../assets/aerf-logo.png";

/* ── Intersection-observer hook ── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Fade-in wrapper ── */
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Core values data ── */
const values = [
  {
    title: "Authentic Impact",
    desc: "Embracing creative solutions and cutting-edge approaches to address Africa's challenges and opportunities.",
    color: "var(--brand)",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    ),
  },
  {
    title: "Unleash Potentials",
    desc: "Maintaining the highest standards in everything we do, from program delivery to community engagement.",
    color: "#16a34a",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Innovation",
    desc: "Building strong networks and fostering collaboration across the African continent and beyond.",
    color: "#2563eb",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Collaboration",
    desc: "Building strong networks and fostering collaboration across the African continent and beyond.",
    color: "#7c3aed",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  {
    title: "Excellence with Integrity",
    desc: "Upholding transparency and the highest ethical standards in every initiative and partnership we undertake.",
    color: "#4338ca",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

const sectionWrap = {
  maxWidth: "1180px",
  width: "100%",
  margin: "0 auto",
  padding: "2rem",
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function OurWork() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", background: "var(--brand)", minHeight: "24rem", display: "flex", alignItems: "center" }}>
        {/* background image overlay */}
        <img
          src={foundationLogo}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.15,
          }}
        />
        <div style={{ position: "relative", width: "100%", maxWidth: "1180px", margin: "0 auto", padding: "6rem 2rem", textAlign: "center" }}>
          {/* <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            What We Do
          </p> */}
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500, color: "white", lineHeight: 1.08, margin: 0 }}>
          AFRI KAN-EXCEL RENAISSANCE FOUNDATION
          </h1>
          <div style={{ margin: "1.5rem auto 0", height: "3px", width: "4rem", borderRadius: "9999px", background: "rgba(255,255,255,0.5)" }} />
        </div>
      </div>

      {/* ── MISSION — overlaps hero ── */}
      <div style={sectionWrap}>
        <Reveal>
          <div
            className="card"
            style={{
              marginTop: "-5rem",
              padding: "clamp(1.75rem, 4vw, 3rem)",
              // borderTop: "4px solid var(--brand)",
              textAlign: "center",
              width: "100%", 
              maxWidth: "100%"
            }}
          >
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem" }}>
              Our Mission
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#374151", lineHeight: 1.8 }}>
              To catalyze sustainable growth in Africa by enabling communities to self-sustain through innovation and capacity building, amplifying marginalised voices and stories, promoting art and cultural exchange, fostering entrepreneurship, talent retention, and strategic partnerships.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── VISION ── */}
      <div style={sectionWrap}>
        <Reveal>
          <div className="card" style={{ width: "100%", maxWidth: "100%", padding: "clamp(1.75rem, 4vw, 3rem)" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#111827", marginBottom: "2rem", textAlign: "center" }}>
              Our Vision
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", }}>
              {/* image */}
              <div>
                <img
                  src={foundationLogo}
                  alt="AFRI KAN-EXCEL Foundation"
                  style={{ width: "100%", borderRadius: "0.75rem", boxShadow: "0 8px 30px rgba(17,24,39,0.12)", objectFit: "cover", maxHeight: "750px" }}
                />
              </div>

              {/* text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", }}>
                <p style={{ color: "#374151", lineHeight: 1.75 }}>
                  At AFRI KAN-EXCEL RENAISSANCE FOUNDATION, our vision is to transform Africa's development trajectory by:
                </p>
                <ul style={{ paddingLeft: "1.25rem", color: "#374151", lineHeight: 2, fontSize: "1.05rem" }}>
                  <li>Empowering communities to drive change.</li>
                  <li>Amplifying untold stories that shape our identity.</li>
                  <li>Unlocking youth potential to forge a brighter future.</li>
                </ul>
                <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "1.05rem" }}>
                  We pioneer a holistic approach, shifting the focus from:
                </p>
                <ul style={{ paddingLeft: "1.25rem", color: "#374151", lineHeight: 2, fontSize: "1.05rem" }}>
                  <li>Steel and concrete to people and culture.</li>
                  <li>Progress measured by skyscrapers to progress measured by community well-being.</li>
                  <li>Promoting education and capacity building.</li>
                </ul>
                <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "1.05rem" }}>
                  Our foundation believes that true development is rooted in Afrocentric values — one that extends beyond the known benchmarks.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── CORE VALUES HEADER ── */}
      <div style={{ ...sectionWrap, paddingTop: 0 }}>
        <Reveal>
          <div style={{ background: "#111827", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "white", margin: 0 }}>
              Core Values
            </h2>
          </div>
        </Reveal>
      </div>

      {/* ── CORE VALUES GRID ── */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 2rem 5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div
                className="card"
                style={{
                  padding: "1.75rem",
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  cursor: "default",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(17,24,39,0.12)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* icon circle */}
                <div style={{
                  width: "3rem", height: "3rem", borderRadius: "9999px",
                  background: v.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem",
                }}>
                  <svg style={{ width: "1.4rem", height: "1.4rem", color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {v.icon}
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111827", marginBottom: "0.6rem" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── CALL TO ACTION ── */}
      <div style={{ background: "var(--brand)", padding: "5rem 2rem", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Join Our Mission
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Be part of Afri Kan-Excel Renaissance's story. Whether you're a talent, partner, or supporter, there's a place for you in our community.
          </p>
          <Link
            to="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "0.5rem",
              background: "#111827",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = "#1f2937";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "#111827";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Involved
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>
      </div>

    </div>
  );
}