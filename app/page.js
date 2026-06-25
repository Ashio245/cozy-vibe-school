import Link from "next/link";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Decorative background gradients */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "1400px",
        height: "600px",
        background: "radial-gradient(circle at 70% 20%, rgba(78, 110, 88, 0.05) 0%, transparent 60%), radial-gradient(circle at 20% 60%, rgba(217, 119, 6, 0.03) 0%, transparent 50%)",
        zIndex: -1,
        pointerEvents: "none"
      }} />

      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <span className="hero-tag">🌱 Cozy School for Everyone</span>
          <h1 className="hero-title">Learn vibe coding from zero.</h1>
          <p className="hero-subtext">
            We start with simple explanations. Then, step by step, you'll build apps by describing your ideas — using a friendly builder tool called Antigravity, once you're ready.
          </p>
          <div className="btn-group">
            <Link href="/start" className="btn btn-primary">
              Start from Zero
            </Link>
            <Link href="/path" className="btn btn-secondary">
              See the Learning Path
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values / Cards */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="grid-3" style={{ marginTop: 0 }}>
            <div className="card">
              <span className="card-icon">☕</span>
              <h3>No Technical Jargon</h3>
              <p>We explain building like we are chatting with a friend. No scary words, no codes, no complex developer tools to download first.</p>
            </div>
            
            <div className="card">
              <span className="card-icon">✏️</span>
              <h3>Practice Vibes First</h3>
              <p>Type your ideas right inside this website first to see how it works. No tools or accounts required to learn the core concept.</p>
            </div>

            <div className="card">
              <span className="card-icon">☁️</span>
              <h3>Meet Antigravity</h3>
              <p>When you are ready, we will hold your hand as you open Antigravity — a clean Google AI app creator — and build real apps together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick visual setup overview */}
      <section style={{ padding: "80px 0 40px 0", backgroundColor: "rgba(78, 110, 88, 0.01)", borderTop: "1px solid rgba(78, 110, 88, 0.04)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "16px" }}>How does it work?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "48px" }}>
            The school takes you from absolute beginner to building tools step-by-step.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "20px", background: "white", borderRadius: "12px", border: "1px solid rgba(78, 110, 88, 0.05)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--color-amber-light)", color: "var(--color-amber)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>1</div>
              <div>
                <h4 style={{ margin: 0, color: "var(--text-primary)" }}>Learn the Vibe Concept</h4>
                <p style={{ margin: "4px 0 0 0", fontSize: "0.95rem" }}>Understand how telling a computer what you want is replacing typing code files.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "20px", background: "white", borderRadius: "12px", border: "1px solid rgba(78, 110, 88, 0.05)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--color-sage-light)", color: "var(--color-sage)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>2</div>
              <div>
                <h4 style={{ margin: 0, color: "var(--text-primary)" }}>Get Orientated in Antigravity</h4>
                <p style={{ margin: "4px 0 0 0", fontSize: "0.95rem" }}>Open antigravity.google and learn to find the chat, file, and app preview sections.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "20px", background: "white", borderRadius: "12px", border: "1px solid rgba(78, 110, 88, 0.05)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--color-lavender-light)", color: "var(--color-lavender)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>3</div>
              <div>
                <h4 style={{ margin: 0, color: "var(--text-primary)" }}>Copy-Paste Prompts & Tweak</h4>
                <p style={{ margin: "4px 0 0 0", fontSize: "0.95rem" }}>Use our simple prompt catalog to build websites, notes apps, and games with one click, then edit them by chatting.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "20px", background: "white", borderRadius: "12px", border: "1px solid rgba(78, 110, 88, 0.05)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fbf3f0", color: "var(--color-terracotta)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>4</div>
              <div>
                <h4 style={{ margin: 0, color: "var(--text-primary)" }}>Learn the Guardrails & Risks</h4>
                <p style={{ margin: "4px 0 0 0", fontSize: "0.95rem" }}>Understand what AI can and cannot do, learn prompt formulation tips, and checklist safety hygiene guidelines before you deploy.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link href="/start" className="btn btn-primary" style={{ padding: "14px 36px" }}>
              Let's Start! 🌱
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
