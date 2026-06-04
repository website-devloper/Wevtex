"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        textAlign: "center",
        padding: "40px 24px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 600 }}>Something went wrong</h1>
      <p style={{ color: "#666", maxWidth: 440 }}>
        Sorry — an unexpected error occurred. You can try again, or reach us on WhatsApp.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={reset}
          style={{ padding: "12px 22px", borderRadius: 999, border: "none", background: "#d94a1a", color: "#fff", cursor: "pointer", fontWeight: 500 }}
        >
          Try again
        </button>
        <a
          href="https://wa.me/212687633774"
          target="_blank"
          rel="noopener"
          style={{ padding: "12px 22px", borderRadius: 999, border: "1px solid #ddd", color: "inherit", textDecoration: "none", fontWeight: 500 }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
