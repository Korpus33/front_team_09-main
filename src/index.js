import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "modern-normalize";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/sigma-team9-Ahelp/">
      <App />
    </BrowserRouter>
  </StrictMode>
);

// basename = "/sigma-team9-Ahelp/"