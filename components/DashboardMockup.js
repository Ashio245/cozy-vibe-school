import React from "react";

export default function DashboardMockup() {
  return (
    <div style={{
      width: "100%",
      border: "1px solid rgba(78, 110, 88, 0.15)",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#FAF9F5",
      boxShadow: "var(--shadow-md)",
      fontFamily: "var(--font-family-sans)",
      margin: "20px 0"
    }}>
      {/* Browser Header Control Bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        backgroundColor: "#EAE6DB",
        borderBottom: "1px solid rgba(78, 110, 88, 0.12)",
        gap: "12px"
      }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F56", display: "inline-block" }}></span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E", display: "inline-block" }}></span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27C93F", display: "inline-block" }}></span>
        </div>
        <div style={{
          backgroundColor: "#FAF9F5",
          borderRadius: "6px",
          padding: "4px 16px",
          flexGrow: 1,
          maxWidth: "320px",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid rgba(78, 110, 88, 0.08)"
        }}>
          🔒 antigravity.google
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div style={{ display: "flex", minHeight: "260px" }}>
        
        {/* Mock Sidebar */}
        <div style={{
          width: "180px",
          backgroundColor: "#F0EBE0",
          borderRight: "1px solid rgba(78, 110, 88, 0.1)",
          padding: "20px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          <div style={{ fontWeight: 800, color: "var(--color-sage)", fontSize: "0.95rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
            🌱 Antigravity
          </div>
          
          <div style={{
            fontSize: "0.85rem",
            padding: "8px 10px",
            backgroundColor: "rgba(78, 110, 88, 0.08)",
            borderRadius: "6px",
            color: "var(--color-sage-hover)",
            fontWeight: 600
          }}>
            📁 Local Workspaces
          </div>
          <div style={{ fontSize: "0.85rem", padding: "8px 10px", color: "var(--text-muted)" }}>
            🕒 Recent Folders
          </div>
          <div style={{ fontSize: "0.85rem", padding: "8px 10px", color: "var(--text-muted)" }}>
            ⚙️ Preferences
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ flexGrow: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Open a Workspace</h4>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>Select any local folder on your computer to build inside it.</p>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            
            {/* Open Folder Card */}
            <div style={{
              width: "140px",
              height: "110px",
              border: "2px dashed var(--color-sage)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              backgroundColor: "rgba(78, 110, 88, 0.02)",
              transition: "var(--transition-cozy)"
            }}>
              <span style={{ fontSize: "1.8rem" }}>📁</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-sage)" }}>Open Folder</span>
            </div>

            {/* Mock Folder sip-and-read */}
            <div style={{
              width: "140px",
              height: "110px",
              border: "1px solid rgba(78, 110, 88, 0.1)",
              borderRadius: "8px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "white",
              boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
            }}>
              <span style={{ fontSize: "1.5rem" }}>📂</span>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>sip-and-read</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Last active: 2m ago</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
