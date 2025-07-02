
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">SkillShareHub</h1>
      <p className="mt-2 text-gray-600">Share and discover skills with the community</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
