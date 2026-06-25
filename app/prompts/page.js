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

  const simplePrompts = filteredPrompts.filter(p => p.difficulty === "Beginner");
  const advancedPrompts = filteredPrompts.filter(p => p.difficulty === "Intermediate" || p.difficulty === "Advanced");

  const renderPromptCard = (p, idx) => (
    <div key={idx} style={{ 
      background: "white", 
      padding: "24px", 
      borderRadius: "var(--radius-lg)", 
      border: "1px solid rgba(78, 110, 88, 0.08)",
      boxShadow: "var(--shadow-sm)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{p.title}</h3>
          <p style={{ margin: "4px 0 0 0", fontSize: "0.92rem", color: "var(--text-muted)" }}>{p.description}</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <span className={`badge ${
            p.difficulty === "Beginner" 
              ? "badge-beginner" 
              : p.difficulty === "Advanced" 
              ? "badge-advanced" 
              : "badge-tool"
          }`} style={{ fontSize: "0.7rem" }}>
            {p.difficulty}
          </span>
          <span className="badge badge-tool" style={{ fontSize: "0.7rem", backgroundColor: "rgba(78, 110, 88, 0.05)", color: "var(--color-sage)" }}>
            {p.category}
          </span>
        </div>
      </div>
      
      <PromptBlock promptText={p.promptText} label="Prompt Description" />
    </div>
  );

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
          message="First open your project folder in the Antigravity IDE. Then copy one of the prompt templates below, paste it into the workspace chat box on the left, and watch the builder create it instantly!"
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

      {/* Prompts list separated by Simple and Advanced */}
      <div style={{ display: "flex", flexDirection: "column", gap: "48px", maxWidth: "750px", margin: "0 auto" }}>
        
        {/* Simple Prompts Section */}
        {simplePrompts.length > 0 && (
          <div>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "10px", 
              marginBottom: "20px", 
              borderBottom: "2px solid var(--color-sage-light)", 
              paddingBottom: "10px" 
            }}>
              <span style={{ fontSize: "1.4rem" }}>🌱</span>
              <h2 style={{ margin: 0, fontSize: "1.35rem", color: "var(--color-sage)" }}>Simple Prompts (Short & Sweet Templates)</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {simplePrompts.map((p, idx) => renderPromptCard(p, idx))}
            </div>
          </div>
        )}

        {/* Advanced Prompts Section */}
        {advancedPrompts.length > 0 && (
          <div>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "10px", 
              marginBottom: "20px", 
              borderBottom: "2px solid #fbf3f0", 
              paddingBottom: "10px" 
            }}>
              <span style={{ fontSize: "1.4rem" }}>🚀</span>
              <h2 style={{ margin: 0, fontSize: "1.35rem", color: "var(--color-terracotta)" }}>Advanced Prompts (Detailed 3-Part Blueprints)</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {advancedPrompts.map((p, idx) => renderPromptCard(p, idx))}
            </div>
          </div>
        )}

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
