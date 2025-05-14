
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Background image switch logic
function setResponsiveBackground() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  const isMobile = window.innerWidth <= 768;
  const backgroundImage = isMobile ? "images/bg-mobile.jpg" : "images/bg-desktop.jpg";

  rootElement.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgroundImage}')`;
  rootElement.style.backgroundSize = "cover";
  rootElement.style.backgroundPosition = "center";
  rootElement.style.backgroundRepeat = "no-repeat";
}

// Apply the background on load and resize
window.addEventListener("load", setResponsiveBackground);
window.addEventListener("resize", setResponsiveBackground);
