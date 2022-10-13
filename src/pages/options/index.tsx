import React from "react";
import { createRoot } from "react-dom/client";
import Options from "./Options";
import "./index.less";

function init() {
  const root = document.querySelector("#root");
  if (!root) {
    throw new Error("Can not find root");
  }
  createRoot(root).render(<Options />);
}

init();
