import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.jsx";
import style from "./Style/index.module.scss";

createRoot(document.getElementById("root")).render(<App />);
