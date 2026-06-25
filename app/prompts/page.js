"use client";

import { useState } from "react";
import { prompts } from "@/data/prompts";
import PromptBlock from "@/components/PromptBlock";
import ReAnchor from "@/components/ReAnchor";

export default function PromptsLibrary() {
  const [category, setCategory] = useState("all"); // "all", "websites", "tools", "games"
  const [search, setSearch] = useState("");

  const filteredPrompts = prompts.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container fade-in" style={{ padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "12px" }}>Prompt Library</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
          Ready-to-use recipes for your Antigravity builder. Copy these templates, paste them in, and see what happens!
        </p>
      </div>

      <div style={{ maxWidth: "700px", margin: "0 auto 40px auto" }}>
        <ReAnchor 
          title="How to use these prompts"
          message="First open antigravity.google and enter a project. Then find one of the prompt templates below, click 'Copy Prompt', and paste it in the chat workspace. Watch the AI agent build it instantly!"
        />
      </div>

      {/* Filters & Search Row */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "20px", 
        alignItems: "center", 
        marginBottom: "40px" 
      }}>
        {/* Search */}
        <input 
          type="text" 
          placeholder="🔍 Search prompts... (e.g. cafe, timer, match)" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ 
            width: "100%", 
            maxWidth: "450px", 
            padding: "12px 20px", 
            borderRadius: "var(--radius-full)", 
            border: "1px solid rgba(78, 110, 88, 0.2)", 
            outline: "none",
            fontSize: "1rem",
            boxShadow: "var(--shadow-sm)",
            fontFamily: "inherit"
          }}
        />

        {/* Categories */}
        <div className="filter-menu" style={{ margin: 0 }}>
          <button 
            className={`filter-btn ${category === "all" ? "active" : ""}`}
            onClick={() => setCategory("all")}
          >
            All Recipes
          </button>
          <button 
            className={`filter-btn ${category === "websites" ? "active" : ""}`}
            onClick={() => setCategory("websites")}
          >
            💻 Websites
          </button>
          <button 
            className={`filter-btn ${category === "tools" ? "active" : ""}`}
            onClick={() => setCategory("tools")}
          >
            ⚙️ Utilities / Tools
          </button>
          <button 
            className={`filter-btn ${category === "games" ? "active" : ""}`}
            onClick={() => setCategory("games")}
          >
            🎮 Simple Games
          </button>
        </div>
      </div>

      {/* Prompts list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "750px", margin: "0 auto" }}>
        {filteredPrompts.map((p, idx) => (
          <div key={idx} style={{ 
            background: "white", 
            padding: "24px", 
            borderRadius: "var(--radius-lg)", 
            border: "1px solid rgba(78, 110, 88, 0.08)",
            boxShadow: "var(--shadow-sm)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.3rem" }}>{p.title}</h3>
                <p style={{ margin: "4px 0 0 0", fontSize: "0.95rem", color: "var(--text-muted)" }}>{p.description}</p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span className="badge badge-beginner" style={{ fontSize: "0.7rem" }}>
                  {p.difficulty}
                </span>
                <span className="badge badge-tool" style={{ fontSize: "0.7rem" }}>
                  {p.category}
                </span>
              </div>
            </div>
            
            <PromptBlock promptText={p.promptText} label="Prompt Description" />
          </div>
        ))}

        {filteredPrompts.length === 0 && (
          <div className="empty-state">
            <h3>No prompts found</h3>
            <p>Try searching for something else or changing categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}
