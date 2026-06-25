"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";

export default function JournalPage() {
  const { completedLessons, isLoaded } = useProgress();
  const [entries, setEntries] = useState([]);
  const [isJournalLoaded, setIsJournalLoaded] = useState(false);

  // Form Fields
  const [question, setQuestion] = useState("What did I learn today?");
  const [answer, setAnswer] = useState("");
  const [mood, setMood] = useState("Happy 🌸");

  useEffect(() => {
    const data = localStorage.getItem("cozy-vibe-journal-entries");
    if (data) {
      try {
        setEntries(JSON.parse(data));
      } catch (e) {
        console.error(e);
      }
    }
    setIsJournalLoaded(true);
  }, []);

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!answer.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }),
      question,
      answer,
      mood
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("cozy-vibe-journal-entries", JSON.stringify(updated));
    setAnswer("");
  };

  const handleDeleteEntry = (id) => {
    const updated = entries.filter((entry) => entry.id !== id);
    setEntries(updated);
    localStorage.setItem("cozy-vibe-journal-entries", JSON.stringify(updated));
  };

  const hasStartedLearning = completedLessons.length > 0;

  return (
    <div className="container fade-in" style={{ padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "12px" }}>Reflection Journal</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
          Write down your learning insights, notes, and plan what to build next in your vibe journey.
        </p>
      </div>

      {isLoaded && isJournalLoaded && (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          
          {/* SPECIAL EMPTY STATE IF USER HASN'T COMPLETED ANY LESSONS YET */}
          {!hasStartedLearning ? (
            <div className="empty-state" style={{ padding: "60px 32px" }}>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "16px" }}>🌱</span>
              <h2 style={{ fontSize: "1.5rem", color: "var(--color-sage-hover)", marginTop: 0 }}>
                You don't need Antigravity yet. Let's first learn what it is.
              </h2>
              <p style={{ maxWidth: "500px", margin: "12px auto 24px auto", color: "var(--text-muted)" }}>
                Vibe coding and Antigravity can be intimidating if you've never used them before. We recommend reading our simple intro lessons before writing reflections.
              </p>
              <Link href="/start" className="btn btn-primary">
                Learn What It Is
              </Link>
            </div>
          ) : (
            <>
              {/* Form to add entry */}
              <form onSubmit={handleAddEntry} className="journal-form">
                <h2 style={{ marginTop: 0, marginBottom: "20px", fontSize: "1.4rem" }}>New Journal Entry</h2>
                
                <div style={{ marginBottom: "16px" }}>
                  <label className="journal-label">Select a question to write about:</label>
                  <select 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)}
                    style={{ 
                      width: "100%", 
                      padding: "10px 16px", 
                      borderRadius: "var(--radius-sm)", 
                      border: "1px solid rgba(78, 110, 88, 0.2)",
                      outline: "none",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      color: "var(--text-primary)",
                      backgroundColor: "white"
                    }}
                  >
                    <option>What did I learn today?</option>
                    <option>What app would I like to build next?</option>
                    <option>What was challenging, and how did I solve it?</option>
                    <option>My general notes and thoughts about Antigravity</option>
                  </select>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label className="journal-label">My reflection:</label>
                  <textarea 
                    className="journal-textarea"
                    placeholder="Write your thoughts here..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <label className="journal-label" style={{ display: "inline-block", marginRight: "12px", marginBottom: 0 }}>Mood today:</label>
                    <select 
                      value={mood} 
                      onChange={(e) => setMood(e.target.value)}
                      style={{ 
                        padding: "8px 12px", 
                        borderRadius: "var(--radius-sm)", 
                        border: "1px solid rgba(78, 110, 88, 0.2)",
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    >
                      <option>Happy 🌸</option>
                      <option>Calm 🍵</option>
                      <option>Excited 🚀</option>
                      <option>Tired 💤</option>
                      <option>Thoughtful 🤔</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" style={{ padding: "10px 24px" }}>
                    Save Entry
                  </button>
                </div>
              </form>

              {/* Feed of entries */}
              <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Past Entries ({entries.length})</h2>
              
              {entries.length === 0 ? (
                <div className="empty-state" style={{ padding: "40px" }}>
                  <span style={{ fontSize: "2rem", display: "block" }}>📝</span>
                  <h3>No entries yet</h3>
                  <p>Type your first reflection above to save it in your local dashboard.</p>
                </div>
              ) : (
                <div className="entries-grid">
                  {entries.map((entry) => (
                    <div key={entry.id} className="entry-card">
                      <button 
                        className="entry-delete-btn" 
                        onClick={() => handleDeleteEntry(entry.id)}
                        aria-label="Delete entry"
                      >
                        ✕
                      </button>
                      <div className="entry-date">{entry.date} • {entry.mood}</div>
                      <div className="entry-q">Q: {entry.question}</div>
                      <div className="entry-a">{entry.answer}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      )}
    </div>
  );
}
