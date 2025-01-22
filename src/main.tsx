import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppScaler } from "./AppScaler.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppScaler width={375} height={667}>
      <App />
    </AppScaler>
  </StrictMode>
);
