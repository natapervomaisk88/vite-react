import React from "react";
import ReactDOM from "react-dom/client";
import { App, Test } from "./App.tsx";
import "./index.css";
import Message from "./components/Message.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <Test />
    <Message />
  </>
);
