"use client";

import { useState } from "react";

export default function VibeTextArea() {
  const [text, setText] = useState("");
  
  const suggestions = [
    "A cozy website that displays my daily tea-brewing timer and tips.",
    "A simple quote generator that shows encouraging quotes when clicked.",
    "A digital garden tracker to log when I water each of my houseplants.",
    "A personal list of places I want to travel next, with photos and notes."
  ];

  const getHint = () => {
    if (!text.trim()) {
      return {
        emoji: "✍️",
        msg: "Start describing your app! Try: 'A simple page with a button that...'"
      };
    }
    if (text.trim().length < 15) {
      return {
        emoji: "🌱",
        msg: "Good start! Try adding details. What does the screen show? What happens when a button is clicked?"
      };
    }
    if (!text.includes("color") && !text.includes("style") && !text.includes("look")) {
      return {
        emoji: "🎨",
        msg: "Nice! You could describe the aesthetic next (e.g. 'with a warm peach background' or 'cozy fonts')."
      };
    }
    return {
      emoji: "✨",
      msg: "Perfect! That is a complete vibe prompt. You described the layout and the visual style. You're ready!"
    };
  };

  const hint = getHint();

  return (
    <div className="vibe-input-wrapper">
      <textarea
        className="vibe-textarea"
        placeholder="Type your idea in plain English here... (e.g. A website that lists my favorite tea recipes with buttons to filter them)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="vibe-hint-container">
        <div className="vibe-hint">
          <span>{hint.emoji}</span>
          <span>{hint.msg}</span>
        </div>
      </div>

      <div className="vibe-suggestions">
        <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "8px", color: "var(--text-primary)" }}>
          Or click one of these beginner examples to try:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {suggestions.map((s, idx) => (
            <button
              key={idx}
              className="suggestion-pill"
              onClick={() => setText(s)}
            >
              {s.slice(0, 32)}...
            </button>
          ))}
        </div>
      </div>
      
      {text.trim().length > 15 && (
        <div style={{ marginTop: "32px", textAlign: "center", animation: "fadeIn 0.5s ease" }}>
          <p style={{ fontStyle: "italic", fontSize: "0.95rem" }}>
            "You just wrote a vibe coding prompt! That's all there is to it. The computer will read this exact text and build the website for you."
          </p>
        </div>
      )}
    </div>
  );
}
