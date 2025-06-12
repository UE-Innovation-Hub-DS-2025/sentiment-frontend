"use client";

const styles = `
  @keyframes highlight {
    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
  }

  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  .highlight-section {
    animation: highlight 0.5s ease-out;
  }

  .animate-progress {
    animation: progress 2s ease-in-out infinite;
  }
`;

export default function GlobalStyles() {
  return (
    <style jsx global>
      {styles}
    </style>
  );
}
