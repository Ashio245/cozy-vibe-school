"use client";

import { useState, useEffect } from "react";

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("cozy-vibe-completed-lessons");
    if (data) {
      try {
        setCompletedLessons(JSON.parse(data));
      } catch (e) {
        console.error(e);
      }
    }
    setIsLoaded(true);
  }, []);

  const markCompleted = (slug) => {
    setCompletedLessons((prev) => {
      if (prev.includes(slug)) return prev;
      const updated = [...prev, slug];
      localStorage.setItem("cozy-vibe-completed-lessons", JSON.stringify(updated));
      // Dispatch custom event to update other components if they're listening
      window.dispatchEvent(new Event("cozy-vibe-progress-update"));
      return updated;
    });
  };

  const markIncomplete = (slug) => {
    setCompletedLessons((prev) => {
      const updated = prev.filter((s) => s !== slug);
      localStorage.setItem("cozy-vibe-completed-lessons", JSON.stringify(updated));
      window.dispatchEvent(new Event("cozy-vibe-progress-update"));
      return updated;
    });
  };

  const clearProgress = () => {
    localStorage.removeItem("cozy-vibe-completed-lessons");
    setCompletedLessons([]);
    window.dispatchEvent(new Event("cozy-vibe-progress-update"));
  };

  return {
    completedLessons,
    isLoaded,
    markCompleted,
    markIncomplete,
    clearProgress,
  };
}
