import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import foundationLogo from "../assets/aerf-logo.png";

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
const values = [
  { title: "Contextual Clarity",       desc: "We prioritize the social map over the policy map.",                 color: "var(--brand)", num: "C" },
  { title: "Ubuntu",                   desc: "We believe in regional integration and cross-cultural admiration.", color: "#16a34a",      num: "U" },
  { title: "Last-Mile Integrity",      desc: "We ensure resources reach their destination with 100% transparency.", color: "#2563eb",    num: "L" },
  { title: "Transparent Agency",       desc: "We move from the politics of speech to the logistics of action.",   color: "#7c3aed",      num: "T" },
  { title: "Unyielding Innovation",    desc: "We use Artivism and Sport (S4D) to solve systemic gaps.",           color: "#ca8a04",      num: "U" },
  { title: "Respect for Heritage",     desc: "We treat indigenous knowledge as invisible infrastructure.",         color: "#ca3869",      num: "R" },
  { title: "Empathetic Collaboration", desc: "We practice strategic mutualism for a win-win Africa.",             color: "#d114b2",      num: "E" },
];

const convictions = [
  {
    number: "01",
    title: "Culture is Infrastructure",
    body: "Identity and Heritage are not symbolic luxuries — they are the foundation of trust and security. Without building on this indigenous ground, no project can take root.",
  },
  {
    number: "02",
    title: "The Wise Use of Collaboration",
    body: "We believe in the power of global partnership, but we recognize that aid is only effective when it is Locally Interpreted. We move toward strategic mutualism.",
  },
  {
    number: "03",
    title: "Contractual Leadership",
    body: "The crisis of leadership is a crisis of accountability. We transition youth from being \"Passive Beneficiaries\" to \"Active Operationalizers\" through community-audited performance contracts.",
  },
];

/* ── Shared styles ── */
const tag = {
  display: "inline-block",
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--brand)",
  marginBottom: "0.85rem",
};

const sectionTitle = {
  fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
  fontWeight: 800,
  lineHeight: 1.1,
  color: "#111827",
  margin: 0,
};

const divider = {
  height: "3px",
  width: "3rem",
  borderRadius: "9999px",
  background: "var(--brand)",
  margin: "1.25rem 0 0",
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function OurWork() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", fontFamily: "inherit" }}>

      {/* ════════════════════════════════
          HERO — simple, clean, on-brand
      ════════════════════════════════ */}
      <div style={{ position: "relative", background: "var(--brand)", overflow: "hidden" }}>

        {/* Subtle background image */}
        <img
          src={foundationLogo}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.1 }}
        />

        {/* Dot pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          style={{
            position: "absolute", top: "1.75rem", left: "2rem",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "9999px",
            cursor: "pointer", color: "white",
            fontSize: "0.85rem", fontWeight: 500,
            padding: "0.45rem 1.1rem",
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            backdropFilter: "blur(6px)",
            transition: "background 0.2s",
            zIndex: 10,
          }}
          onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
        >
          ← Back
        </button>

        {/* Hero text — centered, clean */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1180px", margin: "0 auto", padding: "7rem 2rem 5rem", textAlign: "center" }}>
          <p style={{ ...tag, color: "rgba(255,255,255,0.65)" }}>Who We Are</p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            margin: "0 auto 1.25rem",
            maxWidth: "720px",
            letterSpacing: "-0.01em",
          }}>
            AFRI KAN-EXCEL RENAISSANCE FOUNDATION
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto",
          }}>
            A last-mile operational force recalibrating Africa's development through youth, culture, and high-integrity action.
          </p>
          {/* Bottom white fade into page */}
          <div style={{ marginTop: "4rem", height: "2px", width: "4rem", borderRadius: "9999px", background: "rgba(255,255,255,0.4)", margin: "3rem auto 0" }} />
        </div>
      </div>


      {/* ════════════════════════════════
          MISSION + VISION
      ════════════════════════════════ */}
      <div id="mission" style={{ maxWidth: "1180px", margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>

          <Reveal delay={0}>
            <div style={{
              background: "white", borderRadius: "1rem", padding: "2.5rem",
              boxShadow: "0 4px 24px rgba(17,24,39,0.07)", borderTop: "4px solid var(--brand)", height: "100%",
            }}>
              <p style={tag}>Mission</p>
              <h2 style={{ ...sectionTitle, fontSize: "1.6rem", marginBottom: "1.25rem" }}>What We Do</h2>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.05rem", fontStyle: "italic" }}>
                "To optimize the impact of global and local partnerships by operationalizing African youth through accountable, community-based humanitarian action."
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              background: "#111827", borderRadius: "1rem", padding: "2.5rem",
              boxShadow: "0 4px 24px rgba(17,24,39,0.15)", borderTop: "4px solid var(--brand)", height: "100%",
            }}>
              <p style={{ ...tag, color: "rgba(255,255,255,0.45)" }}>Vision</p>
              <h2 style={{ ...sectionTitle, fontSize: "1.6rem", color: "white", marginBottom: "1.25rem" }}>Where We're Going</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.85, fontSize: "1.05rem", fontStyle: "italic" }}>
                "To recalibrate Africa's development through collaborative, youth-led cultural intelligence and high-integrity stewardship."
              </p>
            </div>
          </Reveal>
        </div>
      </div>


      {/* ════════════════════════════════
          STATS STRIP
      ════════════════════════════════ */}
      

      {/* ════════════════════════════════
          CURRICULUM
      ════════════════════════════════ */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>

          <Reveal delay={0}>
            <div style={{ position: "relative" }}>
              <img
                src={foundationLogo}
                alt="AFRI KAN-EXCEL Foundation"
                style={{ width: "100%", borderRadius: "1rem", objectFit: "cover", maxHeight: "420px", boxShadow: "0 20px 60px rgba(17,24,39,0.15)" }}
              />
              <div style={{
                position: "absolute", bottom: "-1.25rem", right: "-1rem",
                background: "#111827", color: "white",
                borderRadius: "0.75rem", padding: "1rem 1.5rem",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--brand)" }}>3,000+</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem", letterSpacing: "0.06em" }}>YOUTH REACHED</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p style={tag}>Our Curriculum</p>
              <h2 style={{ ...sectionTitle, marginBottom: "1.5rem" }}>Building the<br />Next Generation</h2>
              <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our leadership curriculum turns passive beneficiaries into active operationalizers — ensuring the Demographic Dividend is a trained force of high-integrity leaders.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Cultural Intelligence (CQ)", desc: "Navigating the social ecology of our communities." },
                  { title: "Civic Responsibility", desc: "Moving from passive beneficiaries to active nation builders." },
                  { title: "Leadership Logistics", desc: "Turning vision into boots-on-the-ground results." },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    background: "white", borderRadius: "0.75rem",
                    padding: "1rem 1.25rem",
                    boxShadow: "0 2px 12px rgba(17,24,39,0.06)",
                    borderLeft: "3px solid var(--brand)",
                  }}>
                    <div style={{
                      width: "2rem", height: "2rem", borderRadius: "9999px",
                      background: "var(--brand)", color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 900, fontSize: "0.75rem", flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#111827", fontSize: "0.95rem" }}>{item.title}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.875rem", marginTop: "0.2rem" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>


      {/* ════════════════════════════════
          CORE VALUES
      ════════════════════════════════ */}
      <div style={{ background: "#f3f4f6", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p style={tag}>Our DNA</p>
              <h2 style={sectionTitle}>Core Values</h2>
              <p style={{ color: "#6b7280", marginTop: "1rem", fontSize: "1rem" }}>
                Every letter of <strong style={{ color: "#111827" }}>C.U.L.T.U.R.E</strong> represents a pillar we stand on.
              </p>
              <div style={divider} />
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div
                  style={{
                    background: "white", borderRadius: "1rem", padding: "1.75rem",
                    boxShadow: "0 2px 12px rgba(17,24,39,0.06)",
                    display: "flex", gap: "1.25rem", alignItems: "flex-start",
                    transition: "transform 0.25s, box-shadow 0.25s", cursor: "default",
                  }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(17,24,39,0.12)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(17,24,39,0.06)"; }}
                >
                  <div style={{
                    width: "3rem", height: "3rem", flexShrink: 0,
                    borderRadius: "0.6rem", background: v.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1.2rem", color: "white",
                  }}>
                    {v.num}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#111827", fontSize: "1rem", marginBottom: "0.35rem" }}>{v.title}</h3>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>


      {/* ════════════════════════════════
          CONVICTIONS
      ════════════════════════════════ */}
      <div style={{ background: "#111827", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
              <p style={{ ...tag, color: "rgba(255,255,255,0.4)" }}>What We Stand For</p>
              <h2 style={{ ...sectionTitle, color: "white" }}>Our Convictions</h2>
              <div style={{ ...divider, margin: "1.25rem auto 0" }} />
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {convictions.map((c, i) => (
              <Reveal key={c.number} delay={i * 0.12}>
                <div
                  style={{
                    display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "start",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                    borderLeft: "4px solid var(--brand)", borderRadius: "0.75rem", padding: "2rem 2.5rem",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                  onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                >
                  <div style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--brand)", opacity: 0.3, lineHeight: 1, minWidth: "3.5rem" }}>
                    {c.number}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "white", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: 0 }}>
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>


      {/* ════════════════════════════════
          FINAL CTA
      ════════════════════════════════ */}
      <div style={{ background: "var(--brand)", padding: "7rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <p style={{ ...tag, color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}>Join the Movement</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Ready to Build<br />Africa's Future?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              We're not just bridging gaps — we're building indigenous solutions that will define the next century of excellence.
            </p>
            <Link
              to="/signup"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.75rem", borderRadius: "0.5rem",
                background: "#111827", color: "white",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                boxShadow: "0 6px 28px rgba(0,0,0,0.3)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.background = "#1f2937"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#111827"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get Involved
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