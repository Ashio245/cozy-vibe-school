"use client";

import { useState, useEffect } from "react";

export default function DeployProject() {
  const [gitUrl, setGitUrl] = useState("");
  const [vercelUrl, setVercelUrl] = useState("");
  const [error, setError] = useState("");
  const [graduated, setGraduated] = useState(false);
  const [gradDetails, setGradDetails] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("vibeSchoolGraduation");
    if (data) {
      const parsed = JSON.parse(data);
      setGradDetails(parsed);
      setGitUrl(parsed.gitUrl);
      setVercelUrl(parsed.vercelUrl);
      setGraduated(true);
    }
  }, []);

  const handleValidate = (e) => {
    e.preventDefault();
    setError("");

    const trimmedGit = gitUrl.trim();
    const trimmedVercel = vercelUrl.trim();

    if (!trimmedGit || !trimmedVercel) {
      setError("Please fill in both the GitHub repository link and the Vercel live link.");
      return;
    }

    if (!trimmedGit.toLowerCase().includes("github.com")) {
      setError("Your GitHub link should be a valid repository URL containing 'github.com'.");
      return;
    }

    if (!trimmedVercel.toLowerCase().startsWith("http://") && !trimmedVercel.toLowerCase().startsWith("https://")) {
      setError("Your Vercel link must start with http:// or https://");
      return;
    }

    if (!trimmedVercel.toLowerCase().includes("vercel.app") && !trimmedVercel.toLowerCase().includes("vercel.dev") && !trimmedVercel.toLowerCase().includes("github.io")) {
      setError("Your live project link must be a valid deployment URL (containing vercel.app or similar).");
      return;
    }

    // Success! Save details
    const details = {
      gitUrl: trimmedGit,
      vercelUrl: trimmedVercel,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    };

    localStorage.setItem("vibeSchoolGraduation", JSON.stringify(details));
    setGradDetails(details);
    setGraduated(true);

    // Notify Header or other components to update graduate status
    window.dispatchEvent(new Event("vibeSchoolGraduationChanged"));
  };

  const handleReset = () => {
    localStorage.removeItem("vibeSchoolGraduation");
    setGraduated(false);
    setGradDetails(null);
    setGitUrl("");
    setVercelUrl("");
    window.dispatchEvent(new Event("vibeSchoolGraduationChanged"));
  };

  if (graduated && gradDetails) {
    return (
      <div className="fade-in" style={{ margin: "32px 0" }}>
        {/* Certificate Display */}
        <div style={{
          backgroundColor: "#fffdf9",
          border: "4px double var(--color-sage)",
          borderRadius: "var(--radius-lg)",
          padding: "40px 24px",
          textAlign: "center",
          boxShadow: "var(--shadow-md)",
          position: "relative",
          maxWidth: "600px",
          margin: "0 auto 24px auto"
        }}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "16px" }}>🎓</span>
          <h2 style={{ fontFamily: "var(--font-family-heading)", color: "var(--color-sage-hover)", fontSize: "1.75rem", margin: "0 0 8px 0", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Certificate of Graduation
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 24px 0" }}>
            Cozy Vibe Coding School
          </p>

          <div style={{ margin: "24px 0", borderTop: "1px solid rgba(78, 110, 88, 0.15)", borderBottom: "1px solid rgba(78, 110, 88, 0.15)", padding: "24px 12px" }}>
            <p style={{ fontStyle: "italic", fontSize: "1.1rem", color: "var(--text-primary)", margin: "0 0 12px 0" }}>
              This certifies that a student has successfully graduated as a
            </p>
            <h3 style={{ fontSize: "2rem", color: "var(--color-terracotta)", margin: "0 0 16px 0", fontFamily: "var(--font-family-heading)", fontWeight: 800 }}>
              Certified Vibe Builder
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0, maxWidth: "460px", marginLeft: "auto", marginRight: "auto" }}>
              By understanding AI developer workflows, applying prompt design formulas, practicing safety guardrails, and successfully deploying a live application to GitHub and Vercel.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "16px", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            <div>
              <strong>Graduation Project Links:</strong>
              <div style={{ marginTop: "4px", display: "flex", gap: "12px", justifyContent: "center" }}>
                <a href={gradDetails.gitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-sage)", fontWeight: 600 }}>💻 GitHub Code</a>
                <span>•</span>
                <a href={gradDetails.vercelUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--color-sage)", fontWeight: 600 }}>🚀 Live Site</a>
              </div>
            </div>
            <div>
              <strong>Graduation Date:</strong>
              <div style={{ marginTop: "4px", fontWeight: 600 }}>{gradDetails.date}</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button 
            onClick={handleReset} 
            style={{ 
              background: "none", 
              border: "none", 
              color: "var(--text-muted)", 
              fontSize: "0.85rem", 
              textDecoration: "underline", 
              cursor: "pointer" 
            }}
          >
            Submit a different project URL / reset graduation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: "24px 0", padding: "28px", backgroundColor: "#fffefb", border: "1px solid rgba(78, 110, 88, 0.15)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)" }}>
      <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "1.2rem", color: "var(--color-sage-hover)" }}>
        🚀 Submit Your Graduation Project
      </h3>
      <p style={{ fontSize: "0.95rem", marginBottom: "20px", color: "var(--text-muted)" }}>
        Paste the URLs of your newly built and deployed project. We will check the link format and certify your achievement!
      </p>

      <form onSubmit={handleValidate}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontWeight: 700, fontSize: "0.9rem", marginBottom: "6px" }}>
            1. GitHub Repository URL
          </label>
          <input
            type="text"
            placeholder="e.g. https://github.com/my-username/leafy-log-vibe"
            value={gitUrl}
            onChange={(e) => setGitUrl(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(78, 110, 88, 0.2)",
              fontSize: "0.95rem",
              outline: "none"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontWeight: 700, fontSize: "0.9rem", marginBottom: "6px" }}>
            2. Live Vercel Deployment URL
          </label>
          <input
            type="text"
            placeholder="e.g. https://leafy-log-vibe.vercel.app"
            value={vercelUrl}
            onChange={(e) => setVercelUrl(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(78, 110, 88, 0.2)",
              fontSize: "0.95rem",
              outline: "none"
            }}
          />
        </div>

        {error && (
          <div className="fade-in" style={{ padding: "12px", backgroundColor: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "var(--radius-sm)", color: "var(--color-terracotta)", fontSize: "0.9rem", marginBottom: "16px" }}>
            ⚠️ {error}
          </div>
        )}

        <div style={{ textAlign: "right" }}>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ padding: "12px 28px", fontSize: "0.95rem" }}
          >
            Validate & Graduate! 🎓
          </button>
        </div>
      </form>
    </div>
  );
}
