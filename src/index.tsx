import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "/App";
import reportWebVitals from "/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider } from "/components/ui/color-mode";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const system = createSystem(defaultConfig, {});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
