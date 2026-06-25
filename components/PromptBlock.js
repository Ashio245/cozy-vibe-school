"use client";

import { useState } from "react";

export default function PromptBlock({ promptText, label = "Try this prompt in Antigravity" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="prompt-card">
      <div className="prompt-card-header">
        <span className="prompt-card-label">{label}</span>
        <button className="prompt-copy-btn" onClick={handleCopy}>
          {copied ? "Copied ✓" : "Copy Prompt"}
        </button>
      </div>
      <div className="prompt-content">{promptText}</div>
    </div>
  );
}
