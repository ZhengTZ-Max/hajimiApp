"use client";

export default function MusicPage() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <iframe
        src="/music-legacy.html"
        title="Hajimi Music"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
        allow="autoplay; fullscreen"
      />
    </main>
  );
}
