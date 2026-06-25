import React from "react";

export default function WorkspaceMockup() {
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
      {/* Browser Control Bar */}
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
          📁 /Users/emer/Downloads/sip-and-read
        </div>
      </div>

      {/* Workspace Columns */}
      <div style={{
        display: "flex",
        backgroundColor: "#FDFDFD",
        minHeight: "340px",
        overflowX: "auto"
      }}>
        
        {/* Panel 1: Chat Column (Left) */}
        <div style={{
          flex: "1 1 240px",
          borderRight: "1px solid rgba(78, 110, 88, 0.1)",
          backgroundColor: "#FAF8F5",
          display: "flex",
          flexDirection: "column",
          minWidth: "200px"
        }}>
          {/* Chat header */}
          <div style={{
            padding: "10px 12px",
            borderBottom: "1px solid rgba(78, 110, 88, 0.08)",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--color-sage-hover)",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            💬 Vibe Assistant
          </div>

          {/* Chat history */}
          <div style={{
            flexGrow: 1,
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxHeight: "260px",
            overflowY: "auto"
          }}>
            {/* User message */}
            <div style={{
              alignSelf: "flex-end",
              backgroundColor: "var(--color-sage-light)",
              padding: "8px 12px",
              borderRadius: "12px 12px 0 12px",
              fontSize: "0.75rem",
              maxWidth: "85%",
              color: "var(--color-sage-hover)"
            }}>
              "Change the background of the cafe page to light sage green..."
            </div>

            {/* AI message */}
            <div style={{
              alignSelf: "flex-start",
              backgroundColor: "white",
              padding: "8px 12px",
              borderRadius: "12px 12px 12px 0",
              fontSize: "0.75rem",
              maxWidth: "85%",
              border: "1px solid rgba(78, 110, 88, 0.08)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
            }}>
              ⚙️ "Understood! I am editing index.html and updating background-color in global.css. Refreshing preview..."
            </div>
          </div>

          {/* Chat input box */}
          <div style={{
            padding: "8px 12px",
            borderTop: "1px solid rgba(78, 110, 88, 0.08)",
            display: "flex",
            gap: "8px"
          }}>
            <input 
              disabled
              type="text" 
              placeholder="Ask anything..." 
              style={{
                flexGrow: 1,
                fontSize: "0.7rem",
                padding: "6px 10px",
                border: "1px solid rgba(78, 110, 88, 0.15)",
                borderRadius: "4px",
                backgroundColor: "#fffefb"
              }}
            />
            <button disabled style={{
              fontSize: "0.7rem",
              padding: "4px 8px",
              backgroundColor: "var(--color-sage)",
              color: "white",
              border: "none",
              borderRadius: "4px"
            }}>Send</button>
          </div>
        </div>

        {/* Panel 2: Files Column (Center) */}
        <div style={{
          width: "140px",
          borderRight: "1px solid rgba(78, 110, 88, 0.1)",
          backgroundColor: "#FAF9F6",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          minWidth: "120px"
        }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "4px" }}>
            📁 Files Created
          </div>
          <div style={{ fontSize: "0.75rem", padding: "4px 0", display: "flex", alignItems: "center", gap: "6px", color: "var(--text-primary)" }}>
            📄 index.html
          </div>
          <div style={{ fontSize: "0.75rem", padding: "4px 0", display: "flex", alignItems: "center", gap: "6px", color: "var(--text-primary)" }}>
            📄 styles.css
          </div>
          <div style={{ fontSize: "0.75rem", padding: "4px 0", display: "flex", alignItems: "center", gap: "6px", color: "var(--text-primary)" }}>
            📄 script.js
          </div>
        </div>

        {/* Panel 3: Preview Column (Right) */}
        <div style={{
          flex: "2 2 300px",
          padding: "16px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          minWidth: "220px"
        }}>
          <div style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            paddingBottom: "8px",
            borderBottom: "1px solid rgba(78, 110, 88, 0.08)",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            🌐 Browser Preview
          </div>

          {/* Simple Cafe App Mock rendering inside preview */}
          <div style={{
            flexGrow: 1,
            backgroundColor: "#F0F5F2", // Sage green from prompt modification
            borderRadius: "6px",
            border: "1px solid rgba(78, 110, 88, 0.1)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}>
            <h5 style={{ margin: "0 0 6px 0", fontSize: "0.95rem", color: "var(--text-primary)" }}>🌱 Sip & Read</h5>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              Welcome to our cozy reading spot!
            </p>
            <div style={{
              margin: "12px 0 0 0",
              padding: "8px",
              backgroundColor: "white",
              borderRadius: "4px",
              width: "100%",
              boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
              textAlign: "left"
            }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                <span>🍵 Chamomile Meadow</span>
                <span>$4.50</span>
              </div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Calming chamomile with lavender buds and local honey.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
