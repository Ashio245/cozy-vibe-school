"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getLessonBySlug } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import ReAnchor from "@/components/ReAnchor";
import PromptBlock from "@/components/PromptBlock";
import VibeTextArea from "@/components/VibeTextArea";
import StepCard from "@/components/StepCard";
import PromptPolish from "@/components/PromptPolish";
import AiQuiz from "@/components/AiQuiz";
import SafetyChecklist from "@/components/SafetyChecklist";
import DeployProject from "@/components/DeployProject";
import CooldownSimulator from "@/components/CooldownSimulator";
import TerminalMockup from "@/components/TerminalMockup";

export default function LessonPage() {
  const params = useParams();
  const slug = params.slug;
  const lesson = getLessonBySlug(slug);

  const { completedLessons, markCompleted, markIncomplete } = useProgress();

  if (!lesson) {
    return (
      <div className="container" style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2>Lesson not found</h2>
        <p>Sorry, the lesson you are looking for doesn't exist.</p>
        <Link href="/lessons" className="btn btn-primary">Go to Lessons</Link>
      </div>
    );
  }

  const isCompleted = completedLessons.includes(lesson.slug);
  const isConcept = lesson.category === "concept";
  const isAdvanced = lesson.category === "advanced";

  const handleToggleComplete = () => {
    if (isCompleted) {
      markIncomplete(lesson.slug);
    } else {
      markCompleted(lesson.slug);
    }
  };

  return (
    <div className="container fade-in" style={{ padding: "60px 24px", maxWidth: "800px" }}>
      {/* Back button & Category */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <Link href="/lessons" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.95rem", fontWeight: 500 }}>
          ← Back to all lessons
        </Link>
        <span className={`badge ${isConcept ? "badge-concept" : isAdvanced ? "badge-advanced" : "badge-tool"}`}>
          {isConcept ? "💡 Concept" : isAdvanced ? "🎯 Pro Skills" : "🛠️ Hands-on"}
        </span>
      </div>

      {/* Lesson Header */}
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{lesson.title}</h1>
        <div style={{ display: "flex", gap: "16px", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
          <span>🕒 Estimated: {lesson.estimatedMinutes} mins</span>
          <span>•</span>
          <span>Level: {lesson.difficulty}</span>
        </div>
        <p style={{ fontSize: "1.1rem", fontStyle: "italic", borderLeft: "3px solid var(--color-sage)", paddingLeft: "16px", color: "var(--text-muted)" }}>
          {lesson.introText}
        </p>
      </div>

      {/* Lesson Sections Content */}
      <div className="lesson-body-content">
        {lesson.sections.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", borderBottom: "1px solid rgba(78, 110, 88, 0.08)", paddingBottom: "8px", marginBottom: "16px" }}>
              {section.title}
            </h2>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "16px" }}>
                {p}
              </p>
            ))}

            {/* Special Interactive component for Lesson 0 */}
            {lesson.slug === "lesson-0-your-first-vibe" && sIdx === 1 && (
              <VibeTextArea />
            )}

            {/* Real Antigravity IDE screenshot for Lesson 1 */}
            {lesson.slug === "lesson-1-meet-antigravity" && sIdx === 1 && (
              <div style={{ marginTop: "24px" }}>
                <div style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(78, 110, 88, 0.12)",
                  boxShadow: "var(--shadow-md)"
                }}>
                  <Image
                    src="/screenshots/antigravity-ide-workspace.png"
                    alt="Antigravity IDE interface showing the project files explorer, the open code editor, the terminal running the dev server, and the Agent chat panel on the right"
                    width={1200}
                    height={700}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "center", marginTop: "12px", fontStyle: "italic" }}>
                  📸 Actual screenshot of the Antigravity IDE workspace window showing the editor and Agent chat panel.
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Dynamic interactive components for Advanced Phase */}
        {lesson.interactiveType === "prompt-polish" && (
          <PromptPolish />
        )}
        {lesson.interactiveType === "ai-quiz" && (
          <AiQuiz />
        )}
        {lesson.interactiveType === "checklist" && (
          <SafetyChecklist />
        )}
        {lesson.interactiveType === "deploy-project" && (
          <DeployProject />
        )}
        {lesson.interactiveType === "cooldown-simulator" && (
          <CooldownSimulator />
        )}
        {lesson.interactiveType === "terminal-mockup" && (
          <TerminalMockup />
        )}
      </div>

      {lesson.category === "tool" && (
        <div style={{ marginTop: "40px", padding: "32px", backgroundColor: "rgba(139, 92, 246, 0.02)", borderRadius: "20px", border: "1px solid rgba(139, 92, 246, 0.08)" }}>
          <h2 style={{ marginTop: 0, marginBottom: "24px", color: "var(--color-lavender)", fontSize: "1.5rem" }}>
            🛠️ Interactive Sandbox Guide
          </h2>

          <StepCard number="1" title="Open Your Workspace Folder">
            <p style={{ margin: 0 }}>
              Open the <span className="url-box">Antigravity IDE</span> application. Since you've used the tool before, select <strong>Open Folder</strong> and choose the folder you created on your computer for this project. The IDE will load the files directly from your system.
            </p>
            <div style={{ marginTop: "16px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(78, 110, 88, 0.12)", boxShadow: "var(--shadow-sm)" }}>
              <Image
                src="/screenshots/antigravity-ide-workspace.png"
                alt="Antigravity IDE workspace showing the project files explorer, the open code editor, the terminal running the dev server, and the Agent panel"
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center", marginTop: "8px", fontStyle: "italic" }}>
              📸 The Antigravity IDE workspace — showing the files explorer, editor, terminal, and Agent chat panel.
            </p>
          </StepCard>

          <StepCard number="2" title="Paste the Prompt in the Chat Box">
            <p style={{ margin: 0 }}>
              Once your project folder is open, find the Agent chat panel on the right. Copy the vibe prompt recipe from the card below, paste it into the chat input, and hit send. Watch the builder modify your files and update your site automatically.
            </p>
          </StepCard>

          <StepCard number="3" title="Test in the Preview Panel">
            <p style={{ margin: 0 }}>
              Once the AI assistant finishes updating, look at the browser preview panel on the right. Verify the design matches your expectations, and click elements to test the live interactive features!
            </p>
          </StepCard>
        </div>
      )}

      {/* Render copyable prompt if applicable */}
      {lesson.prompt && (
        <div style={{ marginTop: "32px" }}>
          <PromptBlock promptText={lesson.prompt} />
        </div>
      )}

      {/* ReAnchor reminder box */}
      <ReAnchor 
        title="Stay Cozy!"
        message={isConcept 
          ? "There is no pressure to download developer programs. We are simply understanding how AI translates human language into structures." 
          : isAdvanced
          ? "Advanced vibe coding is all about planning, asking questions, and checking your results. Keep safe and take it one step at a time."
          : "If the app looks slightly different from what you wanted, don't worry! Chat with the builder like a human. Say 'Make the title bigger' or 'Change background to warm peach'."
        }
      />

      {/* Completion & Next Action */}
      <div style={{ 
        marginTop: "48px", 
        paddingTop: "32px", 
        borderTop: "2px solid rgba(78, 110, 88, 0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
      }}>
        <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontSize: "1.1rem", fontWeight: 600 }}>
          <input 
            type="checkbox" 
            checked={isCompleted} 
            onChange={handleToggleComplete}
            style={{ width: "20px", height: "20px", accentColor: "var(--color-sage)" }}
          />
          I understand and have completed this lesson!
        </label>

        {lesson.nextSlug ? (
          <Link href={`/lessons/${lesson.nextSlug}`} className="btn btn-primary" onClick={() => markCompleted(lesson.slug)}>
            Go to Next Lesson →
          </Link>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: 700, color: "var(--color-sage)" }}>🎉 You've finished all lessons! You are officially a Vibe Builder.</p>
            <Link href="/prompts" className="btn btn-primary">Browse Prompt Library</Link>
          </div>
        )}
      </div>
    </div>
  );
}
