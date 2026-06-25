"use client";

import { useState } from "react";
import { lessons } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import ReAnchor from "@/components/ReAnchor";

export default function LessonsIndex() {
  const [filter, setFilter] = useState("all"); // "all", "concept", "tool"

  const filteredLessons = lessons.filter((lesson) => {
    if (filter === "all") return true;
    return lesson.category === filter;
  });

  return (
    <div className="container fade-in" style={{ padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "12px" }}>Vibe Coding Lessons</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 24px auto" }}>
          Explore our gentle step-by-step lessons. Filter them to focus on learning concepts first, or building with tools when you're ready.
        </p>

        {/* ReAnchor Callout */}
        <div style={{ maxWidth: "650px", margin: "0 auto", textAlign: "left" }}>
          <ReAnchor 
            title="A Quick Beginner Guide"
            message="We recommend starting with Lesson 0 and Lesson 1. They are Concept lessons and don't require opening any tools or signing in. Once you are comfortable, proceed to the Tool lessons to build your apps!"
          />
        </div>
      </div>

      {/* Filter Menu */}
      <div className="filter-menu">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Lessons
        </button>
        <button
          className={`filter-btn ${filter === "concept" ? "active" : ""}`}
          onClick={() => setFilter("concept")}
        >
          💡 Concepts Only
        </button>
        <button
          className={`filter-btn ${filter === "tool" ? "active" : ""}`}
          onClick={() => setFilter("tool")}
        >
          🛠️ Tool Building
        </button>
      </div>

      {/* Lessons Grid */}
      <div className="grid-3">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="empty-state">
          <h3>No lessons found</h3>
          <p>Please adjust your filters.</p>
        </div>
      )}
    </div>
  );
}
