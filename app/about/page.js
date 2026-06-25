import Link from "next/link";
import ReAnchor from "@/components/ReAnchor";

export default function AboutPage() {
  const faqs = [
    {
      q: "Do I need to know any programming to build apps here?",
      a: "Absolutely not. The goal of Cozy Vibe School is to show you that building software is now accessible to everyone. Instead of writing code, you write plain descriptions like: 'Create a list of books with green backgrounds and click checkboxes to cross them off.' The AI handles the rest."
    },
    {
      q: "Do I have to install anything on my computer?",
      a: "No installations are required! Antigravity runs entirely inside your web browser. You don't need to configure compile environments, servers, or install files onto your desktop. You just visit antigravity.google and start building."
    },
    {
      q: "What exactly is Antigravity?",
      a: "Antigravity is a friendly app builder workspace made by Google. In it, you chat with helpful AI agents. You tell the agent what you want, and the agent builds the code, compiles the files, and displays a live preview of the working application right next to the chat window."
    },
    {
      q: "Is vibe coding safe for absolute beginners?",
      a: "Yes! There are no ways to break anything. If the layout looks wrong or an error appears, you don't have to search for hours to fix it. You just type in the chat: 'The layout broke, please fix it' or 'Can we put the text back to normal?' and the agent fixes it instantly."
    },
    {
      q: "Can I build real applications?",
      a: "Yes! You can build websites, timers, trackers, games, RSVP list systems, daily recipe planners, and and much more. Once they are built, you can export them or show them to your friends."
    }
  ];

  return (
    <div className="container fade-in" style={{ padding: "60px 24px", maxWidth: "800px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "12px" }}>About Vibe Coding</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
          We believe everyone should have the superpower of building apps, even if they don't think they're good with computers.
        </p>
      </div>

      {/* Anchor reminder */}
      <ReAnchor 
        title="What is Vibe Coding & Antigravity?"
        message="Vibe coding is the act of building applications by describing them in plain language. Antigravity is a browser-based builder workspace by Google that reads your descriptions and builds the software for you automatically."
      />

      {/* FAQs */}
      <section style={{ margin: "48px 0" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "24px", textAlign: "center" }}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "white", 
              padding: "24px", 
              borderRadius: "var(--radius-md)", 
              border: "1px solid rgba(78, 110, 88, 0.06)",
              boxShadow: "var(--shadow-sm)"
            }}>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "1.15rem", color: "var(--color-sage-hover)" }}>Q: {faq.q}</h3>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jargon Glossary */}
      <section style={{ 
        backgroundColor: "var(--color-sage-light)", 
        padding: "32px", 
        borderRadius: "var(--radius-lg)", 
        border: "1px solid rgba(78, 110, 88, 0.15)",
        marginTop: "48px" 
      }}>
        <h2 style={{ marginTop: 0, marginBottom: "16px", color: "var(--color-sage-hover)" }}>🌱 Translation Guide (No Tech Speak)</h2>
        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "24px" }}>
          If you see these developer terms mentioned elsewhere, here is what they mean in friendly language:
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <strong>IDE / Workspace:</strong> 
            <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "4px" }}>
              A developer term for the screen where files are edited. In Antigravity, it's just the page where you chat and watch your app appear.
            </span>
          </div>
          <div style={{ borderTop: "1px solid rgba(78, 110, 88, 0.1)", paddingTop: "12px" }}>
            <strong>AI Agent:</strong> 
            <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "4px" }}>
              A friendly helper. It is like an AI assistant that knows how to build websites, listen to your chat updates, and write the files for you.
            </span>
          </div>
          <div style={{ borderTop: "1px solid rgba(78, 110, 88, 0.1)", paddingTop: "12px" }}>
            <strong>Prompt / Description:</strong> 
            <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "4px" }}>
              The everyday instructions you write to describe your website. For example: 'A quote book app'.
            </span>
          </div>
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "48px" }}>
        <Link href="/start" className="btn btn-primary" style={{ padding: "12px 32px" }}>
          Start Learning Now
        </Link>
      </div>
    </div>
  );
}
