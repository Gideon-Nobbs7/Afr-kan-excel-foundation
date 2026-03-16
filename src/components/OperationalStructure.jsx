import React from "react"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const paragraphs = [
  {
    title: "Department of Afrikulture and Artivism",
    id: 1,
    text: "DEPARTMENT OF AFRIKULTURE AND ARTIVISM: This department serves as the guardian of AERF’s Contextual Intelligence. Before any physical intervention begins, our specialized Artivists engage the community’s social ecology to align global goals with local heritage.The Result: We ensure that development projects are are harmonized with the community’s identity, ensuring long-term sustainability and peace."
  },
  {
    title: "DEPARTMENT OF COMMUNITY EMPOWERMENT",
    id: 2,
    text: "DEPARTMENT OF COMMUNITY EMPOWERMENT: This is our center for High-Integrity Execution. Once the social ground is prepared, this department activates our trained youth network to manage resources and deliver results with professional transparency.The Result: We provide partners with a verified, zero-leakage delivery system at the last mile.",
  }
];

function useInView(threshold = 0.05) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function AnimatedParagraph({ text, highlight, index }) {
  const [ref, visible] = useInView(0.05);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${index * 0.1}s, transform 0.65s ease ${index * 0.1}s`,
      }}
    >
      <p
        style={{
          lineHeight: 1.75,
          fontSize: "1.05rem",
          color: highlight ? "var(--brand)" : "#374151",
          fontWeight: highlight ? 600 : 400,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function OurWork() {
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <section
      aria-labelledby="our-work-title"
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top brand accent bar */}
      <div
        aria-hidden="true"
        style={{
          height: "4px",
          width: "100%",
          background: "linear-gradient(90deg, var(--brand) 0%, var(--brand-2) 100%)",
        }}
      />

      {/* Page wrapper */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: "1180px",
          width: "100%",
          margin: "0 auto",
          padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)",
          boxSizing: "border-box",
        }}
      >
        {/* ── Header ── */}
        <div
          ref={headerRef}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              color: "var(--brand-2)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: "0 0 0.75rem",
            }}
          >
            Our departments
          </p>

          <h1
            id="our-work-title"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#111827",
              margin: 0,
            }}
          >
            Operational{" "}
            <span
              style={{ color: "var(--brand)", position: "relative", display: "inline-block" }}
            >
              Structure
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: "-5px",
                  height: "3px",
                  width: "100%",
                  borderRadius: "9999px",
                  background: "linear-gradient(90deg, var(--brand) 0%, var(--brand-2) 100%)",
                  display: "block",
                }}
              />
            </span>
          </h1>

          <div
            aria-hidden="true"
            style={{
              marginTop: "1.5rem",
              height: "3px",
              width: "3.5rem",
              borderRadius: "9999px",
              background: "linear-gradient(90deg, var(--brand) 0%, var(--brand-2) 100%)",
            }}
          />
        </div>

        {/* ── Card — grows to fill page ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "white",
            borderRadius: "0.75rem",
            boxShadow: "0 5px 20px rgba(17,24,39,0.06)",
            borderTop: "4px solid var(--brand)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          {/* Paragraphs spread evenly */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: "1.5rem",
            }}
          >
            {paragraphs.map((p, i) => (
              <AnimatedParagraph
                key={p.id}
                title={p.title}
                text={p.text}
                highlight={p.highlight}
                index={i}
              />
            ))}
          </div>

          {/* CTA anchored to bottom of card */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "2.5rem" }}>
            <Link
              to="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 2.25rem",
                borderRadius: "9999px",
                background: "var(--brand)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                boxShadow: "0 4px 16px rgba(139,94,60,0.28)",
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Find Out More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "1rem", height: "1rem" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}