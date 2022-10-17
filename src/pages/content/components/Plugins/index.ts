import { initBaseEvent, initBaseStyle } from "./init";

import { initWebsite, getSelectedText } from "./dispose";

(function () {
  const websiteConfig = initWebsite();
  initBaseEvent(websiteConfig);
  initBaseStyle();
})()