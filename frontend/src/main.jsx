import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
import { GlobalProvider } from "./context/GlobaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
