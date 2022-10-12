import packageJson from "../../package.json";

const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version, // 当前插件版本
  description: packageJson.description,
  icons: {
    // 不同尺寸使用场景不同,
    "16": "icons/16.png",
    "32": "icons/32.png",
    "48": "icons/48.png",
    "128": "icons/128.png",
  },
  background: { service_worker: "src/pages/background/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: {
      "16": "icons/16.png",
      "32": "icons/32.png",
      "48": "icons/48.png",
      "128": "icons/128.png",
    },
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/pages/content/index.js"],
      // content 样式需要特殊指定，若使用 antd，需要另外添加 antd 部分样式
      // css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  options_page: "src/pages/options/index.html",
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css"],
      matches: ["*://*/*"],
    },
  ],
  permissions: [
    // 操作 chrome 的权限
    "storage",
    "activeTab",
    "scripting",
    "contextMenus",
    "notifications",
  ],
};

export default manifest;
