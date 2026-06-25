import Link from "next/link";

export default function LessonCard({ lesson }) {
  const isConcept = lesson.category === "concept";

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <span className={`badge ${isConcept ? "badge-concept" : "badge-tool"}`}>
          {isConcept ? "💡 Concept Lesson" : "🛠️ Tool Lesson"}
        </span>
        <span className="badge badge-beginner">
          {lesson.difficulty || "Beginner"}
        </span>
      </div>

      <h3 style={{ marginTop: 0, marginBottom: "12px" }}>{lesson.title}</h3>
      <p style={{ flexGrow: 1, fontSize: "0.95rem" }}>{lesson.description}</p>

      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginTop: "16px",
        paddingTop: "16px",
        borderTop: "1px solid rgba(78, 110, 88, 0.08)"
      }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
          🕒 {lesson.estimatedMinutes} mins
        </span>
        <Link href={`/lessons/${lesson.slug}`} className="btn btn-primary" style={{ padding: "6px 16px", fontSize: "0.85rem" }}>
          Start
        </Link>
      </div>
    </div>
  );
}
