import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p style={{ fontWeight: 600, fontFamily: "var(--font-family-heading)", color: "var(--text-primary)" }}>
          🌱 Cozy Vibe Coding School
        </p>
        <p style={{ maxWidth: "500px", fontSize: "0.9rem" }}>
          Learning to build apps doesn't have to be scary. Take a sip of tea, slow down, and describe what you want. We'll handle the rest.
        </p>
        <div className="footer-heart">
          Made with care for curious builders • <Link href="/about">FAQ & Help</Link>
        </div>
      </div>
    </footer>
  );
}
