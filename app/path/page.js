"use client";

import Link from "next/link";
import { lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

export default function LearningPath() {
  const { completedLessons, isLoaded, clearProgress } = useProgress();

  const getStatus = (slug) => {
    if (!isLoaded) return "incomplete";
    return completedLessons.includes(slug) ? "complete" : "incomplete";
  };

  const completedCount = isLoaded ? completedLessons.filter(slug => lessons.some(l => l.slug === slug)).length : 0;
  const progressPercent = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  // Split lessons into Concept Phase, Tool Phase, and Advanced Phase
  const conceptLessons = lessons.filter(l => l.category === "concept");
  const toolLessons = lessons.filter(l => l.category === "tool");
  const advancedLessons = lessons.filter(l => l.category === "advanced");

  return (
    <div className="container fade-in" style={{ padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "12px" }}>Your Vibe Coding Path</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 24px auto" }}>
          A step-by-step roadmap to learn app building. We start with understanding the concepts, then setup the tools together.
        </p>

        {isLoaded && (
          <div style={{ 
            maxWidth: "400px", 
            margin: "0 auto", 
            backgroundColor: "white", 
            padding: "20px", 
            borderRadius: "16px", 
            boxShadow: "var(--shadow-sm)",
            border: "1px solid rgba(78, 110, 88, 0.05)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontWeight: "600", fontSize: "0.95rem" }}>
              <span>School Progress</span>
              <span>{completedCount} of {lessons.length} Completed ({progressPercent}%)</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: "#f0edf5", borderRadius: "99px", overflow: "hidden" }}>
              <div style={{ width: `${progressPercent}%`, height: "100%", backgroundColor: "var(--color-sage)", transition: "var(--transition-cozy)" }} />
            </div>
            
            {completedCount > 0 && (
              <button 
                onClick={clearProgress} 
                style={{ 
                  background: "none", 
                  border: "none", 
                  color: "var(--text-muted)", 
                  fontSize: "0.8rem", 
                  textDecoration: "underline", 
                  marginTop: "12px", 
                  cursor: "pointer" 
                }}
              >
                Reset My Progress
              </button>
            )}
          </div>
        )}
      </div>

      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        
        {/* Phase 1: Concept Lessons */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "12px", 
            paddingBottom: "12px", 
            borderBottom: "2px solid var(--color-amber-light)",
            marginBottom: "24px"
          }}>
            <span style={{ fontSize: "1.5rem" }}>💡</span>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.4rem" }}>Phase 1: Concept Core</h2>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Learn how vibe coding works without opening any tools.</p>
            </div>
          </div>

          <div className="timeline" style={{ marginTop: 0 }}>
            {conceptLessons.map((lesson) => {
              const status = getStatus(lesson.slug);
              return (
                <div key={lesson.slug} className={`timeline-item ${status === "complete" ? "complete" : "active"}`}>
                  <div className="timeline-dot">
                    {status === "complete" ? "✓" : lesson.order}
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <h3 style={{ margin: 0, fontSize: "1.15rem" }}>{lesson.title}</h3>
                      <span className="badge badge-concept" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>Concept</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", marginBottom: "12px" }}>{lesson.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>🕒 {lesson.estimatedMinutes} mins</span>
                      <Link href={`/lessons/${lesson.slug}`} className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
                        {status === "complete" ? "Review" : "Start"}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase 2: Tool Lessons */}
        <div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "12px", 
            paddingBottom: "12px", 
            borderBottom: "2px solid var(--color-lavender-light)",
            marginBottom: "24px"
          }}>
            <span style={{ fontSize: "1.5rem" }}>🛠️</span>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.4rem" }}>Phase 2: Building with Antigravity</h2>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Open the Google AI builder and create real-time apps.</p>
            </div>
          </div>

          <div className="timeline" style={{ marginTop: 0 }}>
            {toolLessons.map((lesson) => {
              const status = getStatus(lesson.slug);
              // Simple check to nudge them to do concept lessons first
              const isLocked = completedCount < conceptLessons.length;
              return (
                <div key={lesson.slug} className={`timeline-item ${status === "complete" ? "complete" : isLocked ? "" : "active"}`}>
                  <div className="timeline-dot" style={{ opacity: isLocked ? 0.6 : 1 }}>
                    {status === "complete" ? "✓" : isLocked ? "🔒" : lesson.order}
                  </div>
                  <div className="timeline-card" style={{ opacity: isLocked ? 0.75 : 1 }}>
                    <div className="timeline-header">
                      <h3 style={{ margin: 0, fontSize: "1.15rem" }}>{lesson.title}</h3>
                      <span className="badge badge-tool" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>Tool</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", marginBottom: "12px" }}>{lesson.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>🕒 {lesson.estimatedMinutes} mins</span>
                      {isLocked ? (
                        <span style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--color-amber)" }}>Complete Phase 1 first</span>
                      ) : (
                        <Link href={`/lessons/${lesson.slug}`} className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
                          {status === "complete" ? "Review" : "Start"}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase 3: Advanced Skills */}
        <div style={{ marginTop: "40px" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "12px", 
            paddingBottom: "12px", 
            borderBottom: "2px solid rgba(194, 65, 12, 0.2)",
            marginBottom: "24px"
          }}>
            <span style={{ fontSize: "1.5rem" }}>🎯</span>
            <div>
              <h2 style={{ margin: 0, fontSize: "1.4rem" }}>Phase 3: Advanced Vibe Coding</h2>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Master prompting formulas, guardrails, and key safety precautions.</p>
            </div>
          </div>

          <div className="timeline" style={{ marginTop: 0 }}>
            {advancedLessons.map((lesson) => {
              const status = getStatus(lesson.slug);
              // Advanced phase is locked until Phase 1 & 2 are complete
              const isLocked = completedCount < (conceptLessons.length + toolLessons.length);
              return (
                <div key={lesson.slug} className={`timeline-item ${status === "complete" ? "complete" : isLocked ? "" : "active"}`}>
                  <div className="timeline-dot" style={{ opacity: isLocked ? 0.6 : 1 }}>
                    {status === "complete" ? "✓" : isLocked ? "🔒" : lesson.order}
                  </div>
                  <div className="timeline-card" style={{ opacity: isLocked ? 0.75 : 1 }}>
                    <div className="timeline-header">
                      <h3 style={{ margin: 0, fontSize: "1.15rem" }}>{lesson.title}</h3>
                      <span className="badge badge-advanced" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>Advanced</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", marginBottom: "12px" }}>{lesson.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>🕒 {lesson.estimatedMinutes} mins</span>
                      {isLocked ? (
                        <span style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--color-terracotta)" }}>Complete Phase 2 first</span>
                      ) : (
                        <Link href={`/lessons/${lesson.slug}`} className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
                          {status === "complete" ? "Review" : "Start"}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
