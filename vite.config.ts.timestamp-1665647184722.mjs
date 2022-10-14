// vite.config.ts
import { defineConfig } from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/my-extension/node_modules/vite/dist/node/index.js";
import react from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/my-extension/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path2, { resolve as resolve2 } from "path";

// utils/plugins/make-manifest.ts
import * as fs from "fs";
import * as path from "path";

// package.json
var package_default = {
  name: "my-extention",
  private: true,
  version: "0.0.1",
  description: "\u6458\u5F55",
  type: "module",
  scripts: {
    dev: "nodemon",
    build: "zx ./build.mjs",
    preview: "vite preview",
    build1: "vite build"
  },
  dependencies: {
    "@popperjs/core": "^2.11.6",
    "@types/clipboardy": "^2.0.1",
    antd: "^4.23.5",
    "array-move": "^4.0.0",
    "babel-plugin-import": "^1.13.5",
    clipboardy: "^3.0.0",
    global: "^4.4.0",
    react: "^18.2.0",
    "react-copy-to-clipboard": "^5.1.0",
    "react-dom": "^18.2.0",
    "react-popper": "^2.3.0",
    "react-sortable-hoc": "^2.0.0",
    "vite-plugin-imp": "^2.3.0",
    zx: "^7.1.1"
  },
  devDependencies: {
    "@types/chrome": "^0.0.197",
    "@types/eslint-config-prettier": "^6.11.0",
    "@types/eslint-plugin-prettier": "^3.1.0",
    "@types/less": "^3.0.3",
    "@types/node": "^18.8.5",
    "@types/nodemon": "^1.19.2",
    "@types/react": "^18.0.21",
    "@types/react-copy-to-clipboard": "^5.0.4",
    "@types/react-dom": "^18.0.6",
    "@types/semver": "^7.3.12",
    "@typescript-eslint/eslint-plugin": "5.40.0",
    "@typescript-eslint/parser": "5.40.0",
    "@vitejs/plugin-react": "^2.1.0",
    eslint: "^8.25.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "6.6.1",
    "eslint-plugin-prettier": "4.2.1",
    "eslint-plugin-react": "7.31.10",
    "eslint-plugin-react-hooks": "4.6.0",
    less: "^4.1.3",
    nodemon: "^2.0.20",
    prettier: "^2.7.1",
    semver: "^7.3.8",
    typescript: "^4.8.4",
    vite: "^3.1.7"
  }
};

// src/manifest.ts
var manifest = {
  manifest_version: 3,
  name: package_default.name,
  version: package_default.version,
  description: package_default.description,
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
  icons: {
    "16": "icons/16.png",
    "32": "icons/32.png",
    "48": "icons/48.png",
    "128": "icons/128.png"
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/pages/content/index.js"],
      css: ["assets/css/contentStyle.chunk.css"]
    }
  ],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css"
      ],
      matches: ["*://*/*"]
    }
  ],
  permissions: [
    "storage",
    "activeTab",
    "scripting",
    "contextMenus",
    "notifications"
  ]
};
var manifest_default = manifest;

// utils/plugins/make-manifest.ts
var __vite_injected_original_dirname = "D:\\\u9879\u76EE\u6587\u4EF6\\\u6D4F\u89C8\u5668\u63D2\u4EF6\\my-extension\\utils\\plugins";
var { resolve } = path;
var outDir = resolve(__vite_injected_original_dirname, "..", "..", "public");
var makeManifest = () => {
  return {
    name: "make-manifest",
    buildEnd() {
      console.log("buildEnd");
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(manifest_default, null, 2));
    }
  };
};
var make_manifest_default = makeManifest;

// utils/plugins/custom-dynamic-import.ts
function customDynamicImport() {
  return {
    name: "custom-dynamic-import",
    renderDynamicImport() {
      return {
        left: `
        {
          const dynamicImport = (path) => import(path);
          dynamicImport(
          `,
        right: ")}"
      };
    }
  };
}

// vite.config.ts
import vitePluginImp from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/my-extension/node_modules/vite-plugin-imp/dist/index.mjs";
var __vite_injected_original_dirname2 = "D:\\\u9879\u76EE\u6587\u4EF6\\\u6D4F\u89C8\u5668\u63D2\u4EF6\\my-extension";
var root = resolve2(__vite_injected_original_dirname2, "src");
var pagesDir = resolve2(root, "pages");
var assetsDir = resolve2(root, "assets");
var publicDir = resolve2(__vite_injected_original_dirname2, "public");
var outDir2 = resolve2(__vite_injected_original_dirname2, "dist");
var isDev = process.env.__DEV__ === "true";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir
    }
  },
  plugins: [
    react(),
    make_manifest_default(),
    customDynamicImport(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  publicDir,
  build: {
    outDir: outDir2,
    sourcemap: isDev,
    rollupOptions: {
      input: {
        popup: resolve2(pagesDir, "popup", "index.html"),
        options: resolve2(pagesDir, "options", "index.html"),
        background: resolve2(pagesDir, "background", "index.ts"),
        content: resolve2(pagesDir, "content", "index.ts"),
        contentStyle: resolve2(pagesDir, "content", "style.less")
      },
      output: {
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: isDev ? "assets/js/[name].js" : "assets/js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const { dir, name: _name } = path2.parse(assetInfo.name || "");
          const assetFolder = getLastElement(dir.split("/"));
          const name = assetFolder + firstUpperCase(_name);
          return `assets/[ext]/${name}.chunk.[ext]`;
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#1e80ff"
        }
      }
    }
  }
});
function getLastElement(array) {
  const length = array.length;
  const lastIndex = length - 1;
  return array[lastIndex];
}
function firstUpperCase(str) {
  const firstAlphabet = new RegExp(/( |^)[a-z]/, "g");
  return str.toLowerCase().replace(firstAlphabet, (L) => L.toUpperCase());
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzIiwgInNyYy9tYW5pZmVzdC50cyIsICJ1dGlscy9wbHVnaW5zL2N1c3RvbS1keW5hbWljLWltcG9ydC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTY1ODdcdTRFRjZcXFxcXHU2RDRGXHU4OUM4XHU1NjY4XHU2M0QyXHU0RUY2XFxcXG15LWV4dGVuc2lvblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU2JTk2JTg3JUU0JUJCJUI2LyVFNiVCNSU4RiVFOCVBNyU4OCVFNSU5OSVBOCVFNiU4RiU5MiVFNCVCQiVCNi9teS1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWFrZU1hbmlmZXN0IGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvbWFrZS1tYW5pZmVzdFwiO1xyXG5pbXBvcnQgY3VzdG9tRHluYW1pY0ltcG9ydCBmcm9tICcuL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0JztcclxuaW1wb3J0IHZpdGVQbHVnaW5JbXAgZnJvbSAndml0ZS1wbHVnaW4taW1wJ1xyXG5cclxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuY29uc3QgcGFnZXNEaXIgPSByZXNvbHZlKHJvb3QsIFwicGFnZXNcIik7XHJcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XHJcbmNvbnN0IHB1YmxpY0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcInB1YmxpY1wiKTtcclxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKTtcclxuXHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuX19ERVZfXyA9PT0gXCJ0cnVlXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQHNyY1wiOiByb290LFxyXG4gICAgICBcIkBhc3NldHNcIjogYXNzZXRzRGlyLFxyXG4gICAgICBcIkBwYWdlc1wiOiBwYWdlc0RpcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLCBcclxuICAgIG1ha2VNYW5pZmVzdCgpLCBcclxuICAgIGN1c3RvbUR5bmFtaWNJbXBvcnQoKSxcclxuICAgIC8vIFx1NjMwOVx1OTcwMFx1NTJBMFx1OEY3RFx1OTE0RFx1N0Y2RVxyXG4gICAgdml0ZVBsdWdpbkltcCh7XHJcbiAgICAgIGxpYkxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsaWJOYW1lOiBcImFudGRcIixcclxuICAgICAgICAgIHN0eWxlOiAobmFtZSkgPT4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcHVibGljRGlyLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXIsXHJcbiAgICBzb3VyY2VtYXA6IGlzRGV2LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIHBvcHVwOiByZXNvbHZlKHBhZ2VzRGlyLCBcInBvcHVwXCIsIFwiaW5kZXguaHRtbFwiKSxcclxuICAgICAgICBvcHRpb25zOiByZXNvbHZlKHBhZ2VzRGlyLCBcIm9wdGlvbnNcIiwgXCJpbmRleC5odG1sXCIpLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJlc29sdmUocGFnZXNEaXIsIFwiYmFja2dyb3VuZFwiLCBcImluZGV4LnRzXCIpLFxyXG5cclxuICAgICAgICAvLyBjb250ZW50IFx1OTcwMFx1ODk4MVx1NTcyOCBtYW5pZmVzdCBcdTRFMkRcdTYzMDdcdTVCOUEgY3NzIFx1OEQ0NFx1NkU5MFxyXG4gICAgICAgIGNvbnRlbnQ6IHJlc29sdmUocGFnZXNEaXIsIFwiY29udGVudFwiLCBcImluZGV4LnRzXCIpLFxyXG4gICAgICAgIGNvbnRlbnRTdHlsZTogcmVzb2x2ZShwYWdlc0RpciwgXCJjb250ZW50XCIsIFwic3R5bGUubGVzc1wiKSxcclxuICAgICAgfSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3JjL3BhZ2VzL1tuYW1lXS9pbmRleC5qc1wiLFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBpc0RldlxyXG4gICAgICAgICAgPyBcImFzc2V0cy9qcy9bbmFtZV0uanNcIlxyXG4gICAgICAgICAgOiBcImFzc2V0cy9qcy9bbmFtZV0uW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm86IHtcclxuICAgICAgICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgICAgICAgIHNvdXJjZTogc3RyaW5nIHwgVWludDhBcnJheTtcclxuICAgICAgICAgIHR5cGU6ICdhc3NldCc7XHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBkaXIsIG5hbWU6IF9uYW1lIH0gPSBwYXRoLnBhcnNlKGFzc2V0SW5mby5uYW1lIHx8ICcnKTtcclxuICAgICAgICAgIGNvbnN0IGFzc2V0Rm9sZGVyID0gZ2V0TGFzdEVsZW1lbnQoZGlyLnNwbGl0KFwiL1wiKSk7XHJcbiAgICAgICAgICBjb25zdCBuYW1lID0gYXNzZXRGb2xkZXIgKyBmaXJzdFVwcGVyQ2FzZShfbmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bZXh0XS8ke25hbWV9LmNodW5rLltleHRdYDtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBsZXNzOiB7XHJcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgbW9kaWZ5VmFyczoge1xyXG4gICAgICAgICAgJ0BwcmltYXJ5LWNvbG9yJzogJyMxZTgwZmYnLC8vXHU4QkJFXHU3RjZFIGFudGQgXHU0RTNCXHU5ODk4XHU4MjcyXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldExhc3RFbGVtZW50PFQ+KGFycmF5OiBBcnJheUxpa2U8VD4pOiBUIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcclxuICByZXR1cm4gYXJyYXlbbGFzdEluZGV4XTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlyc3RVcHBlckNhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICBjb25zdCBmaXJzdEFscGhhYmV0ID0gbmV3IFJlZ0V4cCgvKCB8XilbYS16XS8sIFwiZ1wiKTtcclxuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZShmaXJzdEFscGhhYmV0LCAoTCkgPT4gTC50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHV0aWxzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHV0aWxzXFxcXHBsdWdpbnNcXFxcbWFrZS1tYW5pZmVzdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU2JTk2JTg3JUU0JUJCJUI2LyVFNiVCNSU4RiVFOCVBNyU4OCVFNSU5OSVBOCVFNiU4RiU5MiVFNCVCQiVCNi9teS1leHRlbnNpb24vdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi4vLi4vc3JjL21hbmlmZXN0XCI7XHJcblxyXG5jb25zdCB7IHJlc29sdmUgfSA9IHBhdGg7XHJcblxyXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiLCBcIi4uXCIsIFwicHVibGljXCIpO1xyXG5cclxuaW50ZXJmYWNlIFBsdWdpbnMge1xyXG4gIG91dERpcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBtYWtlTWFuaWZlc3QgPSAoKTogUGx1Z2luT3B0aW9uID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogXCJtYWtlLW1hbmlmZXN0XCIsXHJcbiAgICAvLyBcdTkwMUFcdTc1MjhcdTk0QTlcdTVCNTBcclxuICAgIGJ1aWxkRW5kKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJ1aWxkRW5kXCIpO1xyXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMob3V0RGlyKSkge1xyXG4gICAgICAgIGZzLm1rZGlyU3luYyhvdXREaXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtYW5pZmVzdFBhdGggPSByZXNvbHZlKG91dERpciwgXCJtYW5pZmVzdC5qc29uXCIpO1xyXG5cclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdFBhdGgsIEpTT04uc3RyaW5naWZ5KG1hbmlmZXN0LCBudWxsLCAyKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlTWFuaWZlc3Q7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NjNEMlx1NEVGNlxcXFxteS1leHRlbnNpb25cXFxcc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTY1ODdcdTRFRjZcXFxcXHU2RDRGXHU4OUM4XHU1NjY4XHU2M0QyXHU0RUY2XFxcXG15LWV4dGVuc2lvblxcXFxzcmNcXFxcbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFOSVBMSVCOSVFNyU5QiVBRSVFNiU5NiU4NyVFNCVCQiVCNi8lRTYlQjUlOEYlRTglQTclODglRTUlOTklQTglRTYlOEYlOTIlRTQlQkIlQjYvbXktZXh0ZW5zaW9uL3NyYy9tYW5pZmVzdC50c1wiO2ltcG9ydCBwYWNrYWdlSnNvbiBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XHJcbmltcG9ydCB7IE1hbmlmZXN0VHlwZSB9IGZyb20gXCIuL21hbmlmZXN0LXR5cGVcIjtcclxuXHJcbmNvbnN0IG1hbmlmZXN0OiBNYW5pZmVzdFR5cGUgPSB7XHJcbiAgbWFuaWZlc3RfdmVyc2lvbjogMyxcclxuICBuYW1lOiBwYWNrYWdlSnNvbi5uYW1lLFxyXG4gIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXHJcbiAgZGVzY3JpcHRpb246IHBhY2thZ2VKc29uLmRlc2NyaXB0aW9uLFxyXG4gIG9wdGlvbnNfcGFnZTogXCJzcmMvcGFnZXMvb3B0aW9ucy9pbmRleC5odG1sXCIsXHJcbiAgYmFja2dyb3VuZDogeyBzZXJ2aWNlX3dvcmtlcjogXCJzcmMvcGFnZXMvYmFja2dyb3VuZC9pbmRleC5qc1wiIH0sXHJcbiAgYWN0aW9uOiB7XHJcbiAgICBkZWZhdWx0X3BvcHVwOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCIsXHJcbiAgICBkZWZhdWx0X2ljb246IHtcclxuICAgICAgXCIxNlwiOiBcImljb25zLzE2LnBuZ1wiLFxyXG4gICAgICBcIjMyXCI6IFwiaWNvbnMvMzIucG5nXCIsXHJcbiAgICAgIFwiNDhcIjogXCJpY29ucy80OC5wbmdcIixcclxuICAgICAgXCIxMjhcIjogXCJpY29ucy8xMjgucG5nXCJcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIGNocm9tZV91cmxfb3ZlcnJpZGVzOiB7XHJcbiAgLy8gICBuZXd0YWI6IFwic3JjL3BhZ2VzL25ld3RhYi9pbmRleC5odG1sXCIsXHJcbiAgLy8gfSxcclxuICBpY29uczoge1xyXG4gICAgXCIxNlwiOiBcImljb25zLzE2LnBuZ1wiLFxyXG4gICAgXCIzMlwiOiBcImljb25zLzMyLnBuZ1wiLFxyXG4gICAgXCI0OFwiOiBcImljb25zLzQ4LnBuZ1wiLFxyXG4gICAgXCIxMjhcIjogXCJpY29ucy8xMjgucG5nXCJcclxuICB9LFxyXG4gIGNvbnRlbnRfc2NyaXB0czogW1xyXG4gICAge1xyXG4gICAgICAvLyBtYXRjaGVzOiBbXCJodHRwOi8vKi8qXCIsIFwiaHR0cHM6Ly8qLypcIiwgXCI8YWxsX3VybHM+XCJdLFxyXG4gICAgICBtYXRjaGVzOiBbXCI8YWxsX3VybHM+XCJdLFxyXG4gICAgICBqczogW1wic3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanNcIl0sXHJcbiAgICAgIC8vIGNvbnRlbnQgXHU2ODM3XHU1RjBGXHU5NzAwXHU4OTgxXHU3Mjc5XHU2QjhBXHU2MzA3XHU1QjlBXHVGRjBDXHU4MkU1XHU0RjdGXHU3NTI4IGFudGRcdUZGMENcdTk3MDBcdTg5ODFcdTUzRTZcdTU5MTZcdTZERkJcdTUyQTAgYW50ZCBcdTkwRThcdTUyMDZcdTY4MzdcdTVGMEZcclxuICAgICAgY3NzOiBbXCJhc3NldHMvY3NzL2NvbnRlbnRTdHlsZS5jaHVuay5jc3NcIl0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gZGV2dG9vbHNfcGFnZTogXCJzcmMvcGFnZXMvZGV2dG9vbHMvaW5kZXguaHRtbFwiLFxyXG4gIHdlYl9hY2Nlc3NpYmxlX3Jlc291cmNlczogW1xyXG4gICAge1xyXG4gICAgICByZXNvdXJjZXM6IFtcclxuICAgICAgICBcImFzc2V0cy9qcy8qLmpzXCIsXHJcbiAgICAgICAgXCJhc3NldHMvY3NzLyouY3NzXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1hdGNoZXM6IFtcIio6Ly8qLypcIl0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcGVybWlzc2lvbnM6IFtcclxuICAgIFwic3RvcmFnZVwiLFxyXG4gICAgXCJhY3RpdmVUYWJcIixcclxuICAgIFwic2NyaXB0aW5nXCIsXHJcbiAgICBcImNvbnRleHRNZW51c1wiLFxyXG4gICAgXCJub3RpZmljYXRpb25zXCIsXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmlmZXN0O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHV0aWxzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHV0aWxzXFxcXHBsdWdpbnNcXFxcY3VzdG9tLWR5bmFtaWMtaW1wb3J0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTYlOTYlODclRTQlQkIlQjYvJUU2JUI1JThGJUU4JUE3JTg4JUU1JTk5JUE4JUU2JThGJTkyJUU0JUJCJUI2L215LWV4dGVuc2lvbi91dGlscy9wbHVnaW5zL2N1c3RvbS1keW5hbWljLWltcG9ydC50c1wiO2ltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b21EeW5hbWljSW1wb3J0KCk6IFBsdWdpbk9wdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiY3VzdG9tLWR5bmFtaWMtaW1wb3J0XCIsXHJcbiAgICByZW5kZXJEeW5hbWljSW1wb3J0KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBkeW5hbWljSW1wb3J0ID0gKHBhdGgpID0+IGltcG9ydChwYXRoKTtcclxuICAgICAgICAgIGR5bmFtaWNJbXBvcnQoXHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgIHJpZ2h0OiBcIil9XCIsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVixT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cEIsY0FBYztBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULE9BQU8sQ0FBQyxTQUFTLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBQUM7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE9BQU9GLFNBQVEsVUFBVSxTQUFTLFlBQVk7QUFBQSxRQUM5QyxTQUFTQSxTQUFRLFVBQVUsV0FBVyxZQUFZO0FBQUEsUUFFbEQsWUFBWUEsU0FBUSxVQUFVLGNBQWMsVUFBVTtBQUFBLFFBR3RELFNBQVNBLFNBQVEsVUFBVSxXQUFXLFVBQVU7QUFBQSxRQUNoRCxjQUFjQSxTQUFRLFVBQVUsV0FBVyxZQUFZO0FBQUEsTUFDekQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQixRQUNaLHdCQUNBO0FBQUEsUUFDSixnQkFBZ0IsQ0FBQyxjQUlYO0FBQ0osZ0JBQU0sRUFBRSxLQUFLLE1BQU0sTUFBTSxJQUFJRyxNQUFLLE1BQU0sVUFBVSxRQUFRLEVBQUU7QUFDNUQsZ0JBQU0sY0FBYyxlQUFlLElBQUksTUFBTSxHQUFHLENBQUM7QUFDakQsZ0JBQU0sT0FBTyxjQUFjLGVBQWUsS0FBSztBQUMvQyxpQkFBTyxnQkFBZ0I7QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLFVBQ1Ysa0JBQWtCO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBRUQsU0FBUyxlQUFrQixPQUF3QjtBQUNqRCxRQUFNLFNBQVMsTUFBTTtBQUNyQixRQUFNLFlBQVksU0FBUztBQUMzQixTQUFPLE1BQU07QUFDZjtBQUVBLFNBQVMsZUFBZSxLQUFhO0FBQ25DLFFBQU0sZ0JBQWdCLElBQUksT0FBTyxjQUFjLEdBQUc7QUFDbEQsU0FBTyxJQUFJLFlBQVksRUFBRSxRQUFRLGVBQWUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO0FBQ3hFOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJvdXREaXIiLCAicGF0aCJdCn0K
