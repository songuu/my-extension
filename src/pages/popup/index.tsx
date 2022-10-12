// src/pages/popup/index.tsx

import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./Popup";
import "./index.less";

function init() {
  const root = document.querySelector("#root");
  if (!root) {
    throw new Error("Can not find root");
  }
  createRoot(root).render(<Popup />);
}

init();
