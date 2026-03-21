import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Intersection-observer hook ── */
function useInView(threshold = 0.08) {
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
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Data ── */
const departments = [
  {
    number: "01",
    title: "Department of Afrikulture and Artivism",
    role: "Guardian of Contextual Intelligence",
    body: "Before any physical intervention begins, our specialized Artivists engage the community's social ecology to align global goals with local heritage. We ensure that development projects are harmonized with the community's identity, ensuring long-term sustainability and peace.",
    result: "Development projects are harmonized with community identity — ensuring long-term sustainability and peace.",
    color: "var(--brand)",
    accent: "rgba(139,94,60,0.08)",
  },
  {
    number: "02",
    title: "Department of Community Empowerment",
    role: "Center for High-Integrity Execution",
    body: "Once the social ground is prepared, this department activates our trained youth network to manage resources and deliver results with professional transparency. We provide partners with a verified, zero-leakage delivery system at the last mile.",
    result: "Partners receive a verified, zero-leakage delivery system at the last mile.",
    color: "#2563eb",
    accent: "rgba(37,99,235,0.07)",
  },
];

const tag = {
  display: "inline-block",
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--brand)",
  marginBottom: "0.85rem",
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function OperationalStructure() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", fontFamily: "inherit" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", background: "var(--brand)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        <button
          onClick={() => window.history.back()}
          style={{
            position: "absolute", top: "1.75rem", left: "2rem",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "9999px", cursor: "pointer", color: "white",
            fontSize: "0.85rem", fontWeight: 500, padding: "0.45rem 1.1rem",
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            backdropFilter: "blur(6px)", transition: "background 0.2s", zIndex: 10,
          }}
          onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
        >
          ← Back
        </button>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1180px", margin: "0 auto", padding: "7rem 2rem 5rem", textAlign: "center" }}>
          <p style={{ ...tag, color: "rgba(255,255,255,0.65)" }}>Our Departments</p>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", fontWeight: 800, color: "white", lineHeight: 1.1, margin: "0 auto 1.25rem", maxWidth: "720px" }}>
            Operational Structure
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto" }}>
            Two departments working in sequence — preparing the ground, then delivering results.
          </p>
          <div style={{ margin: "3rem auto 0", height: "2px", width: "4rem", borderRadius: "9999px", background: "rgba(255,255,255,0.4)" }} />
        </div>
      </div>


      {/* ── DEPARTMENT CARDS ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {departments.map((dept, i) => (
            <Reveal key={dept.number} delay={i * 0.12}>
              <div style={{
                background: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 20px rgba(17,24,39,0.07)",
                borderTop: `4px solid ${dept.color}`,
                padding: "2.5rem",
              }}>

                {/* Number + role */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{
                    fontSize: "2.5rem", fontWeight: 900,
                    color: dept.color, opacity: 0.25, lineHeight: 1,
                  }}>
                    {dept.number}
                  </span>
                  <span style={{
                    background: dept.accent, color: dept.color,
                    fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "0.3rem 0.85rem", borderRadius: "9999px",
                  }}>
                    {dept.role}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: "1rem" }}>
                  {dept.title}
                </h2>

                {/* Body */}
                <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.5rem" }}>
                  {dept.body}
                </p>

                {/* Result callout — no icon */}
                <div style={{
                  background: dept.accent,
                  borderLeft: `3px solid ${dept.color}`,
                  borderRadius: "0 0.5rem 0.5rem 0",
                  padding: "1rem 1.25rem",
                }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: dept.color, marginBottom: "0.4rem" }}>
                    The Result
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    {dept.result}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>


      {/* ── CTA ── */}
      <div style={{ background: "#111827", padding: "6rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.05,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <p style={{ ...tag, color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>Work With Us</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Partner With a System That Works
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "460px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
              Our two-stage model ensures every resource reaches its destination with full accountability and cultural integrity.
            </p>
            <Link
              to="/signup"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.5rem", borderRadius: "0.5rem",
                background: "var(--brand)", color: "white",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Find Out More
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>

    </div>
  );
}