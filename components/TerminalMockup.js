"use client";

import { useState } from "react";

const steps = [
  {
    label: "Install OpenCode",
    command: "curl -fsSL https://opencode.ai/install | bash",
    output: "✓ OpenCode installed successfully!",
  },
  {
    label: "Go to your project folder",
    command: "cd my-cool-app",
    output: "📂 Now inside: ~/my-cool-app",
  },
  {
    label: "Launch OpenCode",
    command: "opencode",
    output: "🚀 OpenCode TUI is now running...\n   Type your vibe prompt and press Enter!",
  },
];

export default function TerminalMockup() {
  const [currentStep, setCurrentStep] = useState(0);
  const [revealed, setRevealed] = useState([false, false, false]);

  const revealStep = (idx) => {
    if (revealed[idx]) return;
    const next = [...revealed];
    next[idx] = true;
    setRevealed(next);
    if (idx < steps.length - 1) {
      setCurrentStep(idx + 1);
    }
  };

  const resetAll = () => {
    setCurrentStep(0);
    setRevealed([false, false, false]);
  };

  return (
    <div style={{ marginTop: "32px", marginBottom: "32px" }}>
      {/* Terminal Window */}
      <div style={{
        background: "#1a1b26",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        {/* Title bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.06)"
        }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
          <span style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "monospace"
          }}>
            Terminal — zsh
          </span>
        </div>

        {/* Terminal Body */}
        <div style={{ padding: "20px", fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace", fontSize: "0.9rem", minHeight: "200px" }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ marginBottom: idx < steps.length - 1 ? "20px" : "0" }}>
              {revealed[idx] ? (
                <div className="fade-in">
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#7aa2f7", fontWeight: "bold" }}>❯</span>
                    <span style={{ color: "#c0caf5" }}>{step.command}</span>
                  </div>
                  <div style={{
                    color: "#9ece6a",
                    marginTop: "6px",
                    paddingLeft: "20px",
                    whiteSpace: "pre-line",
                    fontSize: "0.85rem"
                  }}>
                    {step.output}
                  </div>
                </div>
              ) : idx === currentStep ? (
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "#7aa2f7", fontWeight: "bold" }}>❯</span>
                  <span style={{
                    color: "rgba(255,255,255,0.25)",
                    fontStyle: "italic",
                    animation: "pulse 2s ease-in-out infinite"
                  }}>
                    Click the button below to run step {idx + 1}...
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Step Buttons */}
      <div style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "16px",
        alignItems: "center"
      }}>
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => revealStep(idx)}
            disabled={revealed[idx] || idx !== currentStep}
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: revealed[idx]
                ? "1px solid rgba(78, 110, 88, 0.2)"
                : idx === currentStep
                ? "1px solid var(--color-sage)"
                : "1px solid rgba(0,0,0,0.08)",
              background: revealed[idx]
                ? "rgba(78, 110, 88, 0.06)"
                : idx === currentStep
                ? "var(--color-sage)"
                : "#f5f5f5",
              color: revealed[idx]
                ? "var(--color-sage)"
                : idx === currentStep
                ? "white"
                : "var(--text-muted)",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: idx === currentStep && !revealed[idx] ? "pointer" : "default",
              opacity: idx > currentStep && !revealed[idx] ? 0.5 : 1,
              transition: "var(--transition-cozy)"
            }}
          >
            {revealed[idx] ? `✓ ${step.label}` : step.label}
          </button>
        ))}

        {revealed.every(Boolean) && (
          <button
            onClick={resetAll}
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "1px solid rgba(0,0,0,0.08)",
              background: "white",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              cursor: "pointer",
              fontWeight: 500
            }}
          >
            ↺ Replay
          </button>
        )}
      </div>

      {revealed.every(Boolean) && (
        <div className="fade-in" style={{
          marginTop: "20px",
          padding: "16px 20px",
          borderRadius: "12px",
          background: "rgba(78, 110, 88, 0.04)",
          border: "1px solid rgba(78, 110, 88, 0.1)",
          fontSize: "0.95rem",
          color: "var(--text-primary)"
        }}>
          🎉 <strong>That&apos;s all three steps!</strong> Once OpenCode&apos;s TUI opens, you just type what you want to build — exactly like you would in the Antigravity chat panel. The difference is it runs in your terminal instead of a visual IDE.
        </div>
      )}
    </div>
  );
}
