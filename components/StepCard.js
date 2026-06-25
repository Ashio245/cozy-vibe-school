export default function StepCard({ number, title, children }) {
  return (
    <div className="setup-step">
      <div className="setup-step-number">{number}</div>
      <div className="setup-step-content">
        <div className="setup-step-card">
          {title && <h3 style={{ marginTop: 0, marginBottom: "8px" }}>{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
