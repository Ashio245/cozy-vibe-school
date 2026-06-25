export default function ReAnchor({ 
  title = "Vibe Coding Reminder", 
  message = "Vibe coding means building software by describing what you want in plain English. You don't write any code or configure files — Antigravity acts as your builder and does that for you." 
}) {
  return (
    <div className="reanchor-box">
      <div className="reanchor-icon">🌱</div>
      <div>
        <h4 className="reanchor-title">{title}</h4>
        <p className="reanchor-text">{message}</p>
      </div>
    </div>
  );
}
