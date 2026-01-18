import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./store/CartContext"; // 1. Import it

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      {/* 2. Wrap App here */}
      <App />
    </CartProvider>
  </StrictMode>,
);
