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
    title: "Contextual Clarity",
    desc: "We prioritize the social map over the policy map.",
    color: "var(--brand)",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    ),
  },
  {
    title: "Ubuntu",
    desc: "We believe in regional integration and cross-cultural admiration",
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
    title: "Last-Mile Integrity",
    desc: "We ensure resources reach their destination with 100% transparency.",
    color: "#2563eb",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Transparent Agency",
    desc: "We move from the politics of speech to the logistics of action.",
    color: "#7c3aed",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  {
    title: "Unyielding Innovation",
    desc: "We use Artivism and Sport (S4D) to solve systemic gaps.",
    color: "#d4eb04",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Respect for Heritage",
    desc: "We treat indigenous knowledge as invisible infrastructure.",
    color: "#ca3869",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
</svg>

    ),
  },
  {
    title: "Empathetic Collaboration",
    desc: "We practice strategic mutualism for a win-win Africa.",
    color: "#d114b2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

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
              Mission
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#374151", lineHeight: 1.8 }}>
             To optimize the impact of global and local partnerships by operationalizing African youth through accountable, community-based humanitarian action
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── VISION ── */}
      <div style={sectionWrap}>
        <Reveal>
          <div className="card" style={{ width: "100%", maxWidth: "100%", padding: "clamp(1.75rem, 4vw, 3rem)" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#111827", marginBottom: "2rem", textAlign: "center" }}>
              Vision
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
                  To recalibrate Africa’s development through collaborative, youth-led cultural intelligence and high-integrity stewardship.
                </p>
                <p style={{ color: "#374151", lineHeight: 1.75 }}>
                 Our strength lies in our proven track record of human capital development. To date, we have engaged and provided leadership training for over 3,000 youth across the country. Our curriculum focuses on:
                </p>
                 <ul style={{ paddingLeft: "1.25rem", color: "#374151", lineHeight: 2, fontSize: "1.05rem" }}>
                  <li></li>
                  <li>Cultural Intelligence (CQ): Navigating the social ecology of our communities.</li>
                  <li>Civic Responsibility: Moving from "Passive Beneficiaries" to active owners of the nation's future.</li>
                </ul>
                <ul style={{ paddingLeft: "1.25rem", color: "#374151", lineHeight: 2, fontSize: "1.05rem" }}>
                  <li>Leadership Logistics: Turning vision into "Boots on the Ground" results.By professionalizing youth agency, we ensure that the "Demographic Dividend" is not just a statistic, but a trained force of High-Integrity Operationalizers.</li>
                </ul>
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
              CORE VALUES (C.U.L.T.U.R.E)
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
            OUR CONVICTIONS
          </h2>
          <p style={{ fontSize: "", color: "rgba(255,255,255,0.85)", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Culture is Infrastructure: We believe that Identity and Heritage are not symbolic luxuries; they are the foundation of trust and security. Without building on this indigenous ground, no project can take root.
          </p>
          <p style={{ fontSize: "", color: "rgba(255,255,255,0.85)", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            The Wise Use of Collaboration: We believe in the power of global partnership, but we recognize that aid is only effective when it is Locally Interpreted. We move toward strategic mutualism.
          </p>
          <p style={{ fontSize: "", color: "rgba(255,255,255,0.85)", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Contractual Leadership: We believe the crisis of leadership is a crisis of accountability. We transition youth from being "Passive Beneficiaries" to "Active Operationalizers" through community-audited performance contracts.
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