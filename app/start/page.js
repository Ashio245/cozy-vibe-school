import Link from "next/link";
import Image from "next/image";

export default function StartFromZero() {
  return (
    <div className="container fade-in" style={{ padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span className="hero-tag" style={{ backgroundColor: "var(--color-amber-light)", color: "var(--color-amber)", borderColor: "rgba(217, 119, 6, 0.15)" }}>
          Lesson 0.0 - Orientation
        </span>
        <h1 style={{ fontSize: "3rem", marginBottom: "16px" }}>Start from Zero</h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
          If you have never installed developer tools, written code, or even know what a 'compiler' is — you are in the right place.
        </p>
      </div>

      <div className="start-container">
        {/* Section 1 */}
        <div className="onboarding-section">
          <div className="section-number">1</div>
          <div className="onboarding-box">
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>What is Vibe Coding?</h2>
            <p>
              Vibe coding is a brand new way to create software. Instead of writing code manually line-by-line, you simply type what you want the computer to build in everyday language.
            </p>
            <p>
              Imagine describing your dream kitchen to an architect. You don't have to lay the bricks or install the plumbing yourself — you just check the drawings and say: "Can we paint this cabinet soft green instead?" The architect makes the change. That is vibe coding. You are the architect, and the AI agent is the builder.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="onboarding-section">
          <div className="section-number">2</div>
          <div className="onboarding-box">
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>What is Antigravity?</h2>
            <p>
              Antigravity is the friendly AI-powered IDE (Integrated Development Environment) created by Google. It provides a chat interface where you type what you want, a code editor in the center, and a live browser preview on the right.
            </p>
            <p>
              You type in descriptions, and Antigravity edits files on your computer and updates the live preview for you automatically. You never need to deal with files, templates, or coding commands.
            </p>

            <div className="reanchor-box" style={{ marginTop: "24px", border: "1px solid rgba(217, 119, 6, 0.2)", backgroundColor: "#fffefb" }}>
              <div className="reanchor-icon" style={{ fontSize: "1.2rem" }}>⚠️</div>
              <div>
                <h4 style={{ margin: "0 0 4px 0", color: "var(--color-amber)", fontSize: "0.95rem" }}>A Quick Disclaimer on Antigravity</h4>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
                  We use Antigravity as our primary tool for this school because it is free, easy to use, and gets you coding immediately without any complex installation. However, because it is free, it tends to rate limit quickly during heavy prompting sessions. You are welcome to use other AI coding tools if you already know them, but for this course we use Antigravity as the default.
                </p>
              </div>
            </div>

            {/* Real screenshot of Antigravity 2.0 */}
            <div style={{ marginTop: "20px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(78, 110, 88, 0.12)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <Image
                src="/screenshots/antigravity-hero.png"
                alt="Google Antigravity 2.0 product page — your dedicated platform to work with agents, with a Download button"
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center", marginTop: "10px", fontStyle: "italic" }}>
              📸 Google Antigravity 2.0 — download it from <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)", fontWeight: 600 }}>antigravity.google</a>
            </p>

            {/* Antigravity chat interface */}
            <div style={{ marginTop: "20px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(78, 110, 88, 0.12)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <Image
                src="/screenshots/antigravity-ide-workspace.png"
                alt="Antigravity IDE workspace showing the project files explorer, the open code editor, the terminal running the dev server, and the Agent panel for chatting with the AI builder"
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center", marginTop: "10px", fontStyle: "italic" }}>
              📸 The Antigravity IDE workspace — your file explorer, code editor, terminal, and Agent chat panel are all in one place.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="onboarding-section">
          <div className="section-number">3</div>
          <div className="onboarding-box">
            <h2 style={{ marginTop: 0, marginBottom: "16px" }}>Do I need any coding experience?</h2>
            <p>
              The short answer is: <strong>No.</strong> You do not need to know any programming.
            </p>
            
            <ul className="reassurance-list">
              <li><span>No developer frameworks or complex setup tools.</span></li>
              <li><span>No terminal commands or coding experience of any kind required.</span></li>
              <li><span>You only need a Google account and a web browser to start.</span></li>
              <li><span><strong>For hands-on lessons (Lesson 2 onwards):</strong> You will need to download and install the <strong>Antigravity IDE</strong> application on your computer to open folders and edit files.</span></li>
              <li><span><strong>To publish your app live at the end:</strong> You will eventually create a free <strong>GitHub</strong> account and a free <strong>Vercel</strong> account. We will guide you through this step-by-step when the time comes!</span></li>
            </ul>

            <p style={{ margin: "16px 0 0 0", fontStyle: "italic", fontSize: "0.95rem" }}>
              "If you can write an email describing what you want for dinner, you can vibe code an app."
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>Ready to write your very first description? Let's practice.</p>
        <Link href="/lessons/lesson-0-your-first-vibe" className="btn btn-primary" style={{ padding: "14px 36px" }}>
          Write Your First Vibe →
        </Link>
      </div>
    </div>
  );
}
