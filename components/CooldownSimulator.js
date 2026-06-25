"use client";

import { useState, useEffect, useRef } from "react";

export default function CooldownSimulator() {
  const [credits, setCredits] = useState(3); // Start with 3 to make it quick to reach 0
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSteeping, setIsSteeping] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(15); // 15 seconds to keep the simulator engaging but quick
  const timerRef = useRef(null);

  const samplePrompts = [
    "Make the title text brown and cozy.",
    "Add a small chamomile tea icon to the header.",
    "Create a contact button that pops up an alert."
  ];

  const handleSendPrompt = (promptToSend) => {
    if (credits <= 0 || isSending) return;

    setIsSending(true);
    const userMsg = promptToSend || inputText || "Make a quick update";
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInputText("");

    setTimeout(() => {
      setCredits((prev) => {
        const nextVal = prev - 1;
        setMessages((prevMsgs) => [
          ...prevMsgs,
          {
            sender: "ai",
            text: nextVal === 0 
              ? "⚠️ [Rate Limit] Quota exhausted! Please wait a moment before sending more messages." 
              : "✨ Done! Modified style.css and layout.html. Preview updated."
          }
        ]);
        setIsSending(false);
        return nextVal;
      });
    }, 1000);
  };

  const startSteeping = () => {
    setIsSteeping(true);
    setSecondsLeft(15);
  };

  useEffect(() => {
    if (isSteeping && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      clearInterval(timerRef.current);
      setCredits(5);
      setIsSteeping(false);
      setMessages((prev) => [...prev, { sender: "ai", text: "🔋 Credits fully recharged! You can continue building." }]);
    }

    return () => clearInterval(timerRef.current);
  }, [isSteeping, secondsLeft]);

  return (
    <div style={{ margin: "24px 0", padding: "24px", backgroundColor: "#fffefb", border: "1px solid rgba(217, 119, 6, 0.2)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)" }}>
      <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "1.2rem", color: "var(--color-amber)" }}>
        ☕ Interactive Experiment: Cooldown Simulator
      </h3>
      <p style={{ fontSize: "0.95rem", marginBottom: "20px", color: "var(--text-muted)" }}>
        Try sending a few edits to the simulated builder below to watch what happens when you hit the daily rate limit.
      </p>

      {/* Credit display */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", padding: "12px 16px", backgroundColor: "#faf8f5", borderRadius: "var(--radius-sm)", border: "1px solid rgba(217, 119, 6, 0.08)" }}>
        <div>
          <strong style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>Simulated Credits:</strong>
          <span style={{ marginLeft: "8px", fontWeight: 700, color: credits === 0 ? "var(--color-terracotta)" : "var(--color-sage)" }}>
            {credits} / 5 remaining
          </span>
        </div>
        <div style={{ width: "100px", height: "8px", backgroundColor: "#e2e8f0", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ width: `${(credits / 5) * 100}%`, height: "100%", backgroundColor: credits === 0 ? "var(--color-terracotta)" : "var(--color-sage)", transition: "var(--transition-cozy)" }} />
        </div>
      </div>

      {/* Chat logs */}
      <div style={{ minHeight: "150px", maxHeight: "200px", overflowY: "auto", border: "1px solid rgba(78, 110, 88, 0.1)", borderRadius: "var(--radius-sm)", padding: "12px", backgroundColor: "white", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {messages.length === 0 ? (
          <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontStyle: "italic", textAlign: "center", marginTop: "50px" }}>
            No messages sent yet. Use a prompt suggestion below to try.
          </div>
        ) : (
          messages.map((m, idx) => (
            <div key={idx} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", backgroundColor: m.sender === "user" ? "var(--color-sage-light)" : "#faf8f5", color: m.sender === "user" ? "var(--color-sage-hover)" : "var(--text-primary)", padding: "8px 12px", borderRadius: "8px", maxWidth: "85%", fontSize: "0.9rem", lineHeight: "1.4", border: `1px solid ${m.sender === "user" ? "rgba(78, 110, 88, 0.12)" : "rgba(217, 119, 6, 0.05)"}` }}>
              {m.text}
            </div>
          ))
        )}
        {isSending && (
          <div style={{ alignSelf: "flex-start", color: "var(--text-muted)", fontSize: "0.85rem", fontStyle: "italic" }}>
            ⏳ Antigravity is processing files...
          </div>
        )}
      </div>

      {/* Inputs / suggestions */}
      {credits > 0 ? (
        <div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <input
              type="text"
              placeholder="Describe an edit..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isSending}
              style={{ flexGrow: 1, padding: "8px 12px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(78, 110, 88, 0.2)", fontSize: "0.9rem", outline: "none" }}
            />
            <button
              onClick={() => handleSendPrompt()}
              className="btn btn-primary"
              disabled={isSending || !inputText.trim()}
              style={{ padding: "8px 16px", fontSize: "0.88rem" }}
            >
              Send
            </button>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(p)}
                disabled={isSending}
                className="suggestion-pill"
                style={{ fontSize: "0.8rem", margin: 0, padding: "4px 10px" }}
              >
                "{p.slice(0, 24)}..."
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Cooldown Tea Breaker */
        <div className="fade-in" style={{ padding: "20px", backgroundColor: "#fff7ed", border: "1px solid #ffedd5", borderRadius: "var(--radius-md)", textAlign: "center" }}>
          <span style={{ fontSize: "2rem", display: "block", marginBottom: "8px" }}>🍵</span>
          <h4 style={{ margin: "0 0 8px 0", color: "var(--color-terracotta)", fontSize: "1.1rem" }}>
            Time for a Cozy Tea Break!
          </h4>
          <p style={{ margin: "0 0 16px 0", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
            You've run out of credits. In the real Antigravity editor, there is <strong>no payment required</strong> when this happens. The service is free and simply needs to pace itself. All you have to do is <strong>just wait</strong> for your credits to automatically recharge.
          </p>

          {isSteeping ? (
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-terracotta)", marginBottom: "8px" }}>
                Steeping Tea... {secondsLeft}s remaining
              </div>
              <div style={{ width: "100%", height: "6px", backgroundColor: "#ffedd5", borderRadius: "99px", overflow: "hidden", maxWidth: "200px", margin: "0 auto" }}>
                <div style={{ width: `${(15 - secondsLeft) / 15 * 100}%`, height: "100%", backgroundColor: "var(--color-terracotta)", transition: "width 1s linear" }} />
              </div>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={startSteeping} style={{ padding: "10px 24px", backgroundColor: "var(--color-terracotta)", color: "white" }}>
              Steep a Cup of Tea & Wait ☕
            </button>
          )}
        </div>
      )}
    </div>
  );
}
