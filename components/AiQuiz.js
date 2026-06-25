"use client";

import { useState } from "react";

export default function AiQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // 'easy', 'tricky', 'impossible'
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      title: "Build a single-page Portfolio Website",
      description: "You ask Antigravity to create a personal website for a photographer. It should have a clean cream design, a header, a grid showing 6 placeholder photo cards, and a working Contact form that prompts 'Message sent' when submitted.",
      correct: "easy",
      explanation: "AI builders are exceptionally good at layouts, standard static components, visual design styling, and simple client-side form submissions."
    },
    {
      title: "A fully functional Banking App with credit card payments",
      description: "You ask Antigravity to build a checkout button that connects to Stripe, saves real customer bank details securely, and performs automated risk analysis.",
      correct: "impossible",
      explanation: "Handling live sensitive banking details, integrating secure servers, and writing compliance code requires a human developer. AI can prototype the visual buttons, but cannot build secure financial systems out of the box."
    },
    {
      title: "Build a Flappy Bird style browser game",
      description: "You ask Antigravity to build a mini-game. A green bird drops down due to gravity, and clicking the spacebar makes it jump up. You dodge red pipes, and if you hit one, a game over modal appears with a restart button.",
      correct: "easy",
      explanation: "Simple canvas or HTML-based browser games are well-understood patterns. The AI builder can write the physics and game-loop logic in Javascript easily."
    },
    {
      title: "Sync files to a real database in real-time",
      description: "You ask Antigravity to build a group chat application where 100 users can type messages and see each other's bubbles appear instantly without reloading.",
      correct: "tricky",
      explanation: "While AI can write the front-end layout and simple mockups, real-time database sync requires setting up servers or third-party database APIs. It is tricky and often gets the AI confused about credentials, keys, and setup steps."
    }
  ];

  const handleSelectOption = (option) => {
    if (answered) return;
    setSelectedOption(option);
    setAnswered(true);
    if (option === questions[currentIdx].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setAnswered(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div style={{ padding: "32px", textAlign: "center", backgroundColor: "var(--color-sage-light)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(78, 110, 88, 0.15)", margin: "24px 0" }}>
        <h3 style={{ marginTop: 0, color: "var(--color-sage-hover)" }}>🏆 Quiz Completed!</h3>
        <p style={{ fontSize: "1.1rem" }}>
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong> correct.
        </p>
        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto 24px auto" }}>
          You now have a solid understanding of when to use vibe coding (for frontends, layouts, tools, games) and when to proceed with caution (databases, banking, large backends).
        </p>
        <button className="btn btn-primary" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div style={{ margin: "24px 0", padding: "28px", backgroundColor: "#fffefb", border: "1px solid rgba(139, 92, 246, 0.15)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-lavender)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          🧩 Scenarios Quiz (Question {currentIdx + 1}/{questions.length})
        </span>
        <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Current Score: {score}/{questions.length}
        </span>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ marginTop: 0, fontSize: "1.25rem", marginBottom: "8px" }}>{q.title}</h3>
        <p style={{ fontSize: "0.98rem", lineHeight: "1.6", color: "var(--text-primary)", backgroundColor: "#f9fafb", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(139, 92, 246, 0.05)", margin: 0 }}>
          {q.description}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => handleSelectOption("easy")}
          className={`btn ${selectedOption === "easy" ? "btn-primary" : "btn-secondary"}`}
          style={{
            justifyContent: "flex-start",
            padding: "12px 20px",
            fontSize: "0.95rem",
            borderColor: selectedOption === "easy" ? "var(--color-sage)" : "rgba(78, 110, 88, 0.2)",
            backgroundColor: selectedOption === "easy" ? "var(--color-sage)" : "white",
            color: selectedOption === "easy" ? "white" : "var(--text-primary)",
            opacity: answered && selectedOption !== "easy" ? 0.6 : 1
          }}
          disabled={answered}
        >
          🌱 Easy for AI (Standard layouts, logic, styling)
        </button>
        
        <button
          onClick={() => handleSelectOption("tricky")}
          className={`btn ${selectedOption === "tricky" ? "btn-primary" : "btn-secondary"}`}
          style={{
            justifyContent: "flex-start",
            padding: "12px 20px",
            fontSize: "0.95rem",
            borderColor: selectedOption === "tricky" ? "var(--color-sage)" : "rgba(78, 110, 88, 0.2)",
            backgroundColor: selectedOption === "tricky" ? "var(--color-sage)" : "white",
            color: selectedOption === "tricky" ? "white" : "var(--text-primary)",
            opacity: answered && selectedOption !== "tricky" ? 0.6 : 1
          }}
          disabled={answered}
        >
          ⚠️ Tricky (Real-time syncing, third party APIs)
        </button>

        <button
          onClick={() => handleSelectOption("impossible")}
          className={`btn ${selectedOption === "impossible" ? "btn-primary" : "btn-secondary"}`}
          style={{
            justifyContent: "flex-start",
            padding: "12px 20px",
            fontSize: "0.95rem",
            borderColor: selectedOption === "impossible" ? "var(--color-sage)" : "rgba(78, 110, 88, 0.2)",
            backgroundColor: selectedOption === "impossible" ? "var(--color-sage)" : "white",
            color: selectedOption === "impossible" ? "white" : "var(--text-primary)",
            opacity: answered && selectedOption !== "impossible" ? 0.6 : 1
          }}
          disabled={answered}
        >
          🛑 Not yet possible (Direct bank integration, huge apps)
        </button>
      </div>

      {answered && (
        <div className="fade-in" style={{ padding: "16px 20px", backgroundColor: selectedOption === q.correct ? "#ecfdf5" : "#fffbeb", border: `1px solid ${selectedOption === q.correct ? "#10b981" : "#f59e0b"}`, borderRadius: "var(--radius-md)", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span style={{ fontSize: "1.2rem" }}>{selectedOption === q.correct ? "✅" : "💡"}</span>
            <strong style={{ color: selectedOption === q.correct ? "#065f46" : "#92400e" }}>
              {selectedOption === q.correct ? "Correct!" : `Not quite! Answer is: ${q.correct === "easy" ? "Easy for AI" : q.correct === "tricky" ? "Tricky" : "Not yet possible"}`}
            </strong>
          </div>
          <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--text-primary)", lineHeight: "1.5" }}>
            {q.explanation}
          </p>
        </div>
      )}

      {answered && (
        <div style={{ textAlign: "right" }}>
          <button className="btn btn-primary" onClick={handleNext} style={{ padding: "8px 24px", fontSize: "0.9rem" }}>
            {currentIdx < questions.length - 1 ? "Next Scenario →" : "See Results 🏆"}
          </button>
        </div>
      )}
    </div>
  );
}
