"use client";

import { useState } from "react";

export default function PromptPolish() {
  const [userText, setUserText] = useState("");
  const [revealed, setRevealed] = useState(false);

  const weakPrompt = "I want a shopping list app where I can write items and check them.";
  const polishedPrompt = `Create a single-page web app for a weekly grocery list called "Basket Green". 

Visual Design:
- Use a soft sage green background (#f2f6f3), with a clean white card in the center to hold the list.
- Use Outfit for the title and Inter for list items. Give list items a cozy, subtle gray border.

Interactivity & Logic:
- A text input at the top with a placeholder "Add grocery item..." and a green "Add Item" button.
- When clicked, it appends the item to a list below.
- Each list item should have a "Done" button. Clicking it crosses out the item with a line-through style and changes the text color to muted gray.
- An empty state message saying "Your basket is empty!" if there are no items yet.`;

  return (
    <div className="prompt-polish-container" style={{ margin: "24px 0", padding: "24px", backgroundColor: "#fffefb", border: "1px solid rgba(78, 110, 88, 0.15)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)" }}>
      <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "1.2rem", color: "var(--color-sage-hover)" }}>
        ✍️ Interactive Exercise: Prompt Polish
      </h3>
      <p style={{ fontSize: "0.95rem", marginBottom: "16px", color: "var(--text-muted)" }}>
        Here is a weak, vague prompt. Try rewriting it in the box below to be more specific, following our 3-part formula (Purpose, Design, Interactivity).
      </p>

      {/* Weak Prompt box */}
      <div style={{ padding: "14px 18px", backgroundColor: "#faf8f5", borderLeft: "4px solid #f59e0b", borderRadius: "0 var(--radius-sm) var(--radius-sm) 0", marginBottom: "20px" }}>
        <strong style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", color: "#b45309", marginBottom: "4px" }}>
          Weak Prompt (Vague)
        </strong>
        <p style={{ margin: 0, fontStyle: "italic", fontSize: "1rem", color: "var(--text-primary)" }}>
          "{weakPrompt}"
        </p>
      </div>

      <textarea
        className="vibe-textarea"
        style={{ minHeight: "100px", marginBottom: "16px" }}
        placeholder="Try rewriting it here... Add visual colors, fonts, layout styling, and precise action descriptions!"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          {userText.length > 0 ? `✍️ ${userText.length} characters typed` : "Write something to get started!"}
        </span>
        <button
          className="btn btn-primary"
          style={{ padding: "10px 24px", fontSize: "0.9rem" }}
          onClick={() => setRevealed(true)}
          disabled={!userText.trim()}
        >
          {revealed ? "Polished Version Shown 👇" : "Reveal Polish"}
        </button>
      </div>

      {revealed && (
        <div className="fade-in" style={{ marginTop: "28px", borderTop: "1px solid rgba(78, 110, 88, 0.1)", paddingTop: "24px" }}>
          <h4 style={{ color: "var(--color-sage)", marginBottom: "12px", fontSize: "1.1rem" }}>
            ✨ Our Polished Version:
          </h4>
          <p style={{ fontSize: "0.95rem", marginBottom: "16px" }}>
            Notice how we broke it down to describe the <strong>visual design</strong> (fonts, background color, card layout) and the <strong>exact mechanics</strong> of the list (buttons, crossing items out, empty state):
          </p>

          <div style={{ position: "relative", backgroundColor: "#f9fafb", border: "1px solid rgba(78, 110, 88, 0.12)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgba(78, 110, 88, 0.05)", padding: "10px 18px", borderBottom: "1px solid rgba(78, 110, 88, 0.12)" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-sage)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Formula-based Prompt (Excellent)
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(polishedPrompt)}
                className="prompt-copy-btn"
                style={{ padding: "2px 10px", fontSize: "0.75rem" }}
              >
                Copy Prompt
              </button>
            </div>
            <pre style={{ margin: 0, padding: "18px", fontFamily: "var(--font-family-mono)", fontSize: "0.9rem", whiteSpace: "pre-wrap", color: "var(--text-primary)", lineHeight: "1.5" }}>
              {polishedPrompt}
            </pre>
          </div>

          <div style={{ marginTop: "20px", padding: "16px", backgroundColor: "var(--color-sage-light)", borderRadius: "var(--radius-md)", border: "1px solid rgba(78, 110, 88, 0.08)" }}>
            <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--color-sage-hover)" }}>
              💡 <strong>Takeaway:</strong> If you give the AI builder details about your colors, font names, and behavior, it will build a polished website in one shot instead of leaving design choices to chance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
