import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ContextProvider>
  </BrowserRouter>
);
