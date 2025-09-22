import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";  // <-- ändra till App.css om du inte har index.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
