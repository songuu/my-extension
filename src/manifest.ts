import packageJson from "../package.json";
import { ManifestType } from "./manifest-type";

const manifest: ManifestType = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  background: { service_worker: "src/pages/background/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: {
      "16": "icons/16.png",
      "32": "icons/32.png",
      "48": "icons/48.png",
      "128": "icons/128.png"
    }
  },
  // chrome_url_overrides: {
  //   newtab: "src/pages/newtab/index.html",
  // },
  icons: {
    "16": "icons/16.png",
    "32": "icons/32.png",
    "48": "icons/48.png",
    "128": "icons/128.png"
  },
  content_scripts: [
    {
      // matches: ["http://*/*", "https://*/*", "<all_urls>"],
      matches: ["<all_urls>"],
      js: ["src/pages/content/index.js"],
      // content 样式需要特殊指定，若使用 antd，需要另外添加 antd 部分样式
      css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  // devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
      ],
      matches: ["*://*/*"],
    },
  ],
  permissions: [
    "storage",
    "activeTab",
    "scripting",
    "contextMenus",
    "notifications",
  ],
};

export default manifest;
