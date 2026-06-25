"use client";

import { useState } from "react";

export default function SafetyChecklist() {
  const items = [
    {
      id: "secrets",
      title: "Keep Secrets Secret",
      desc: "I will never paste API keys, passwords, or personal credentials directly into my vibe prompts."
    },
    {
      id: "responsibility",
      title: "Take Responsibility",
      desc: "I understand that even if AI wrote the code, I am the owner and pilot. I must test it carefully."
    },
    {
      id: "hallucinations",
      title: "Check for Prototype Mockups",
      desc: "I will verify if payment buttons or login forms actually function securely or if they are just prototypes."
    },
    {
      id: "preview-testing",
      title: "Click-Test Every Button",
      desc: "I will manually test every interactive feature in the browser preview before sharing it with others."
    },
    {
      id: "small-steps",
      title: "Build in Tiny Steps",
      desc: "If the AI gets confused or breaks code, I will break my task into smaller steps and ask it to solve one thing at a time."
    }
  ];

  const [checkedState, setCheckedState] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const handleToggle = (id) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedState).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / items.length) * 100);
  const isFinished = checkedCount === items.length;

  return (
    <div style={{ margin: "24px 0", padding: "28px", backgroundColor: "#fffefb", border: "1px solid rgba(194, 65, 12, 0.15)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)" }}>
      <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "1.2rem", color: "var(--color-terracotta)" }}>
        🔒 Vibe Coding Safety Pledge
      </h3>
      <p style={{ fontSize: "0.95rem", marginBottom: "20px", color: "var(--text-muted)" }}>
        Check off these security habits as you pledge to adopt them in your future project building:
      </p>

      {/* Progress bar */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.85rem", fontWeight: 600 }}>
          <span style={{ color: "var(--color-terracotta)" }}>Pledge Completion</span>
          <span>{checkedCount} of {items.length} Checked ({progressPercent}%)</span>
        </div>
        <div style={{ width: "100%", height: "8px", backgroundColor: "#fbf3f0", borderRadius: "99px", overflow: "hidden" }}>
          <div style={{ width: `${progressPercent}%`, height: "100%", backgroundColor: "var(--color-terracotta)", transition: "var(--transition-cozy)" }} />
        </div>
      </div>

      {/* Checklist items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
        {items.map((item) => (
          <label
            key={item.id}
            style={{
              display: "flex",
              gap: "14px",
              cursor: "pointer",
              padding: "12px 16px",
              backgroundColor: checkedState[item.id] ? "rgba(194, 65, 12, 0.02)" : "#faf9f6",
              border: `1px solid ${checkedState[item.id] ? "rgba(194, 65, 12, 0.12)" : "rgba(78, 110, 88, 0.05)"}`,
              borderRadius: "var(--radius-sm)",
              transition: "var(--transition-cozy)"
            }}
          >
            <input
              type="checkbox"
              checked={checkedState[item.id]}
              onChange={() => handleToggle(item.id)}
              style={{
                marginTop: "3px",
                width: "18px",
                height: "18px",
                accentColor: "var(--color-terracotta)",
                flexShrink: 0
              }}
            />
            <div>
              <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--text-primary)" }}>{item.title}</strong>
              <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{item.desc}</span>
            </div>
          </label>
        ))}
      </div>

      {isFinished && (
        <div className="fade-in" style={{ padding: "20px", backgroundColor: "#fff7ed", border: "1px solid #ffedd5", borderRadius: "var(--radius-md)", textAlign: "center" }}>
          <span style={{ fontSize: "2rem", display: "block", marginBottom: "8px" }}>🎓</span>
          <h4 style={{ margin: "0 0 6px 0", color: "var(--color-terracotta)", fontSize: "1.1rem" }}>
            Congratulations, Certified Safe Vibe Builder!
          </h4>
          <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--text-primary)" }}>
            You have committed to proper safety, testing, and API hygiene. You are officially ready to explore advanced projects safely.
          </p>
        </div>
      )}
    </div>
  );
}
