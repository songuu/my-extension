// vite.config.ts
import { defineConfig } from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E6%B5%8B%E8%AF%95%E9%A1%B9%E7%9B%AE/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/my-extension/node_modules/vite/dist/node/index.js";
import react from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E6%B5%8B%E8%AF%95%E9%A1%B9%E7%9B%AE/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/my-extension/node_modules/@vitejs/plugin-react/dist/index.mjs";
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
      css: ["assets/css/contentStyle.chunk.css"],
      run_at: "document_start"
    }
  ],
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css"],
      matches: ["*://*/*"]
    }
  ],
  permissions: [
    "storage",
    "activeTab",
    "scripting",
    "contextMenus",
    "notifications",
    "webRequest",
    "tabs"
  ],
  host_permissions: ["*://*/*"]
};
var manifest_default = manifest;

// utils/plugins/make-manifest.ts
var __vite_injected_original_dirname = "D:\\\u9879\u76EE\u6587\u4EF6\\\u6D4B\u8BD5\u9879\u76EE\\\u6D4F\u89C8\u5668\u63D2\u4EF6\\my-extension\\utils\\plugins";
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
import vitePluginImp from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E6%B5%8B%E8%AF%95%E9%A1%B9%E7%9B%AE/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/my-extension/node_modules/vite-plugin-imp/dist/index.mjs";
var __vite_injected_original_dirname2 = "D:\\\u9879\u76EE\u6587\u4EF6\\\u6D4B\u8BD5\u9879\u76EE\\\u6D4F\u89C8\u5668\u63D2\u4EF6\\my-extension";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzIiwgInNyYy9tYW5pZmVzdC50cyIsICJ1dGlscy9wbHVnaW5zL2N1c3RvbS1keW5hbWljLWltcG9ydC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEJcdThCRDVcdTk4NzlcdTc2RUVcXFxcXHU2RDRGXHU4OUM4XHU1NjY4XHU2M0QyXHU0RUY2XFxcXG15LWV4dGVuc2lvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NkQ0Qlx1OEJENVx1OTg3OVx1NzZFRVxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTYlOTYlODclRTQlQkIlQjYvJUU2JUI1JThCJUU4JUFGJTk1JUU5JUExJUI5JUU3JTlCJUFFLyVFNiVCNSU4RiVFOCVBNyU4OCVFNSU5OSVBOCVFNiU4RiU5MiVFNCVCQiVCNi9teS1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWFrZU1hbmlmZXN0IGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvbWFrZS1tYW5pZmVzdFwiO1xyXG5pbXBvcnQgY3VzdG9tRHluYW1pY0ltcG9ydCBmcm9tICcuL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0JztcclxuaW1wb3J0IHZpdGVQbHVnaW5JbXAgZnJvbSAndml0ZS1wbHVnaW4taW1wJ1xyXG5cclxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuY29uc3QgcGFnZXNEaXIgPSByZXNvbHZlKHJvb3QsIFwicGFnZXNcIik7XHJcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XHJcbmNvbnN0IHB1YmxpY0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcInB1YmxpY1wiKTtcclxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGlzdFwiKTtcclxuXHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuX19ERVZfXyA9PT0gXCJ0cnVlXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQHNyY1wiOiByb290LFxyXG4gICAgICBcIkBhc3NldHNcIjogYXNzZXRzRGlyLFxyXG4gICAgICBcIkBwYWdlc1wiOiBwYWdlc0RpcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbWFrZU1hbmlmZXN0KCksXHJcbiAgICBjdXN0b21EeW5hbWljSW1wb3J0KCksXHJcbiAgICAvLyBcdTYzMDlcdTk3MDBcdTUyQTBcdThGN0RcdTkxNERcdTdGNkVcclxuICAgIHZpdGVQbHVnaW5JbXAoe1xyXG4gICAgICBsaWJMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGliTmFtZTogXCJhbnRkXCIsXHJcbiAgICAgICAgICBzdHlsZTogKG5hbWUpID0+IGBhbnRkL2VzLyR7bmFtZX0vc3R5bGVgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHB1YmxpY0RpcixcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyLFxyXG4gICAgc291cmNlbWFwOiBpc0RldixcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBwb3B1cDogcmVzb2x2ZShwYWdlc0RpciwgXCJwb3B1cFwiLCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgb3B0aW9uczogcmVzb2x2ZShwYWdlc0RpciwgXCJvcHRpb25zXCIsIFwiaW5kZXguaHRtbFwiKSxcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVzb2x2ZShwYWdlc0RpciwgXCJiYWNrZ3JvdW5kXCIsIFwiaW5kZXgudHNcIiksXHJcblxyXG4gICAgICAgIC8vIGNvbnRlbnQgXHU5NzAwXHU4OTgxXHU1NzI4IG1hbmlmZXN0IFx1NEUyRFx1NjMwN1x1NUI5QSBjc3MgXHU4RDQ0XHU2RTkwXHJcbiAgICAgICAgY29udGVudDogcmVzb2x2ZShwYWdlc0RpciwgXCJjb250ZW50XCIsIFwiaW5kZXgudHNcIiksXHJcbiAgICAgICAgY29udGVudFN0eWxlOiByZXNvbHZlKHBhZ2VzRGlyLCBcImNvbnRlbnRcIiwgXCJzdHlsZS5sZXNzXCIpLFxyXG4gICAgICB9LFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJzcmMvcGFnZXMvW25hbWVdL2luZGV4LmpzXCIsXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGlzRGV2XHJcbiAgICAgICAgICA/IFwiYXNzZXRzL2pzL1tuYW1lXS5qc1wiXHJcbiAgICAgICAgICA6IFwiYXNzZXRzL2pzL1tuYW1lXS5baGFzaF0uanNcIixcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbzoge1xyXG4gICAgICAgICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgc291cmNlOiBzdHJpbmcgfCBVaW50OEFycmF5O1xyXG4gICAgICAgICAgdHlwZTogJ2Fzc2V0JztcclxuICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGRpciwgbmFtZTogX25hbWUgfSA9IHBhdGgucGFyc2UoYXNzZXRJbmZvLm5hbWUgfHwgJycpO1xyXG4gICAgICAgICAgY29uc3QgYXNzZXRGb2xkZXIgPSBnZXRMYXN0RWxlbWVudChkaXIuc3BsaXQoXCIvXCIpKTtcclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBhc3NldEZvbGRlciArIGZpcnN0VXBwZXJDYXNlKF9uYW1lKTtcclxuICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tleHRdLyR7bmFtZX0uY2h1bmsuW2V4dF1gO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIGxlc3M6IHtcclxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBtb2RpZnlWYXJzOiB7XHJcbiAgICAgICAgICAnQHByaW1hcnktY29sb3InOiAnIzFlODBmZicsLy9cdThCQkVcdTdGNkUgYW50ZCBcdTRFM0JcdTk4OThcdTgyNzJcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0TGFzdEVsZW1lbnQ8VD4oYXJyYXk6IEFycmF5TGlrZTxUPik6IFQge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gIHJldHVybiBhcnJheVtsYXN0SW5kZXhdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXJzdFVwcGVyQ2FzZShzdHI6IHN0cmluZykge1xyXG4gIGNvbnN0IGZpcnN0QWxwaGFiZXQgPSBuZXcgUmVnRXhwKC8oIHxeKVthLXpdLywgXCJnXCIpO1xyXG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKGZpcnN0QWxwaGFiZXQsIChMKSA9PiBMLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NkQ0Qlx1OEJENVx1OTg3OVx1NzZFRVxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHV0aWxzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEJcdThCRDVcdTk4NzlcdTc2RUVcXFxcXHU2RDRGXHU4OUM4XHU1NjY4XHU2M0QyXHU0RUY2XFxcXG15LWV4dGVuc2lvblxcXFx1dGlsc1xcXFxwbHVnaW5zXFxcXG1ha2UtbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFOSVBMSVCOSVFNyU5QiVBRSVFNiU5NiU4NyVFNCVCQiVCNi8lRTYlQjUlOEIlRTglQUYlOTUlRTklQTElQjklRTclOUIlQUUvJUU2JUI1JThGJUU4JUE3JTg4JUU1JTk5JUE4JUU2JThGJTkyJUU0JUJCJUI2L215LWV4dGVuc2lvbi91dGlscy9wbHVnaW5zL21ha2UtbWFuaWZlc3QudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuLi8uLi9zcmMvbWFuaWZlc3RcIjtcclxuXHJcbmNvbnN0IHsgcmVzb2x2ZSB9ID0gcGF0aDtcclxuXHJcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCJwdWJsaWNcIik7XHJcblxyXG5pbnRlcmZhY2UgUGx1Z2lucyB7XHJcbiAgb3V0RGlyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IG1ha2VNYW5pZmVzdCA9ICgpOiBQbHVnaW5PcHRpb24gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBcIm1ha2UtbWFuaWZlc3RcIixcclxuICAgIC8vIFx1OTAxQVx1NzUyOFx1OTRBOVx1NUI1MFxyXG4gICAgYnVpbGRFbmQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVpbGRFbmRcIik7XHJcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhvdXREaXIpKSB7XHJcbiAgICAgICAgZnMubWtkaXJTeW5jKG91dERpcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHJlc29sdmUob3V0RGlyLCBcIm1hbmlmZXN0Lmpzb25cIik7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkobWFuaWZlc3QsIG51bGwsIDIpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VNYW5pZmVzdDtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTY1ODdcdTRFRjZcXFxcXHU2RDRCXHU4QkQ1XHU5ODc5XHU3NkVFXFxcXFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NjNEMlx1NEVGNlxcXFxteS1leHRlbnNpb25cXFxcc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTY1ODdcdTRFRjZcXFxcXHU2RDRCXHU4QkQ1XHU5ODc5XHU3NkVFXFxcXFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NjNEMlx1NEVGNlxcXFxteS1leHRlbnNpb25cXFxcc3JjXFxcXG1hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTYlOTYlODclRTQlQkIlQjYvJUU2JUI1JThCJUU4JUFGJTk1JUU5JUExJUI5JUU3JTlCJUFFLyVFNiVCNSU4RiVFOCVBNyU4OCVFNSU5OSVBOCVFNiU4RiU5MiVFNCVCQiVCNi9teS1leHRlbnNpb24vc3JjL21hbmlmZXN0LnRzXCI7aW1wb3J0IHBhY2thZ2VKc29uIGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgTWFuaWZlc3RUeXBlIH0gZnJvbSBcIi4vbWFuaWZlc3QtdHlwZVwiO1xyXG5cclxuY29uc3QgbWFuaWZlc3Q6IE1hbmlmZXN0VHlwZSA9IHtcclxuICBtYW5pZmVzdF92ZXJzaW9uOiAzLFxyXG4gIG5hbWU6IHBhY2thZ2VKc29uLm5hbWUsXHJcbiAgdmVyc2lvbjogcGFja2FnZUpzb24udmVyc2lvbixcclxuICBkZXNjcmlwdGlvbjogcGFja2FnZUpzb24uZGVzY3JpcHRpb24sXHJcbiAgb3B0aW9uc19wYWdlOiBcInNyYy9wYWdlcy9vcHRpb25zL2luZGV4Lmh0bWxcIixcclxuICBiYWNrZ3JvdW5kOiB7IHNlcnZpY2Vfd29ya2VyOiBcInNyYy9wYWdlcy9iYWNrZ3JvdW5kL2luZGV4LmpzXCIgfSxcclxuICBhY3Rpb246IHtcclxuICAgIGRlZmF1bHRfcG9wdXA6IFwic3JjL3BhZ2VzL3BvcHVwL2luZGV4Lmh0bWxcIixcclxuICAgIGRlZmF1bHRfaWNvbjoge1xyXG4gICAgICBcIjE2XCI6IFwiaWNvbnMvMTYucG5nXCIsXHJcbiAgICAgIFwiMzJcIjogXCJpY29ucy8zMi5wbmdcIixcclxuICAgICAgXCI0OFwiOiBcImljb25zLzQ4LnBuZ1wiLFxyXG4gICAgICBcIjEyOFwiOiBcImljb25zLzEyOC5wbmdcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBjaHJvbWVfdXJsX292ZXJyaWRlczoge1xyXG4gIC8vICAgbmV3dGFiOiBcInNyYy9wYWdlcy9uZXd0YWIvaW5kZXguaHRtbFwiLFxyXG4gIC8vIH0sXHJcbiAgaWNvbnM6IHtcclxuICAgIFwiMTZcIjogXCJpY29ucy8xNi5wbmdcIixcclxuICAgIFwiMzJcIjogXCJpY29ucy8zMi5wbmdcIixcclxuICAgIFwiNDhcIjogXCJpY29ucy80OC5wbmdcIixcclxuICAgIFwiMTI4XCI6IFwiaWNvbnMvMTI4LnBuZ1wiLFxyXG4gIH0sXHJcbiAgY29udGVudF9zY3JpcHRzOiBbXHJcbiAgICB7XHJcbiAgICAgIC8vIG1hdGNoZXM6IFtcImh0dHA6Ly8qLypcIiwgXCJodHRwczovLyovKlwiLCBcIjxhbGxfdXJscz5cIl0sXHJcbiAgICAgIG1hdGNoZXM6IFtcIjxhbGxfdXJscz5cIl0sXHJcbiAgICAgIGpzOiBbXCJzcmMvcGFnZXMvY29udGVudC9pbmRleC5qc1wiXSxcclxuICAgICAgLy8gY29udGVudCBcdTY4MzdcdTVGMEZcdTk3MDBcdTg5ODFcdTcyNzlcdTZCOEFcdTYzMDdcdTVCOUFcdUZGMENcdTgyRTVcdTRGN0ZcdTc1MjggYW50ZFx1RkYwQ1x1OTcwMFx1ODk4MVx1NTNFNlx1NTkxNlx1NkRGQlx1NTJBMCBhbnRkIFx1OTBFOFx1NTIwNlx1NjgzN1x1NUYwRlxyXG4gICAgICBjc3M6IFtcImFzc2V0cy9jc3MvY29udGVudFN0eWxlLmNodW5rLmNzc1wiXSxcclxuICAgICAgcnVuX2F0OiBcImRvY3VtZW50X3N0YXJ0XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgLy8gZGV2dG9vbHNfcGFnZTogXCJzcmMvcGFnZXMvZGV2dG9vbHMvaW5kZXguaHRtbFwiLFxyXG4gIHdlYl9hY2Nlc3NpYmxlX3Jlc291cmNlczogW1xyXG4gICAge1xyXG4gICAgICByZXNvdXJjZXM6IFtcImFzc2V0cy9qcy8qLmpzXCIsIFwiYXNzZXRzL2Nzcy8qLmNzc1wiXSxcclxuICAgICAgbWF0Y2hlczogW1wiKjovLyovKlwiXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBwZXJtaXNzaW9uczogW1xyXG4gICAgXCJzdG9yYWdlXCIsXHJcbiAgICBcImFjdGl2ZVRhYlwiLFxyXG4gICAgXCJzY3JpcHRpbmdcIixcclxuICAgIFwiY29udGV4dE1lbnVzXCIsXHJcbiAgICBcIm5vdGlmaWNhdGlvbnNcIixcclxuICAgIFwid2ViUmVxdWVzdFwiLFxyXG4gICAgXCJ0YWJzXCIsXHJcbiAgXSxcclxuICBob3N0X3Blcm1pc3Npb25zOiBbXCIqOi8vKi8qXCJdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFuaWZlc3Q7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NkQ0Qlx1OEJENVx1OTg3OVx1NzZFRVxcXFxcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjZcXFxcbXktZXh0ZW5zaW9uXFxcXHV0aWxzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NjU4N1x1NEVGNlxcXFxcdTZENEJcdThCRDVcdTk4NzlcdTc2RUVcXFxcXHU2RDRGXHU4OUM4XHU1NjY4XHU2M0QyXHU0RUY2XFxcXG15LWV4dGVuc2lvblxcXFx1dGlsc1xcXFxwbHVnaW5zXFxcXGN1c3RvbS1keW5hbWljLWltcG9ydC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU2JTk2JTg3JUU0JUJCJUI2LyVFNiVCNSU4QiVFOCVBRiU5NSVFOSVBMSVCOSVFNyU5QiVBRS8lRTYlQjUlOEYlRTglQTclODglRTUlOTklQTglRTYlOEYlOTIlRTQlQkIlQjYvbXktZXh0ZW5zaW9uL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0LnRzXCI7aW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1c3RvbUR5bmFtaWNJbXBvcnQoKTogUGx1Z2luT3B0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogXCJjdXN0b20tZHluYW1pYy1pbXBvcnRcIixcclxuICAgIHJlbmRlckR5bmFtaWNJbXBvcnQoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogYFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnN0IGR5bmFtaWNJbXBvcnQgPSAocGF0aCkgPT4gaW1wb3J0KHBhdGgpO1xyXG4gICAgICAgICAgZHluYW1pY0ltcG9ydChcclxuICAgICAgICAgIGAsXHJcbiAgICAgICAgcmlnaHQ6IFwiKX1cIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlZLFNBQVMsb0JBQW9CO0FBQzlaLE9BQU8sV0FBVztBQUNsQixPQUFPQSxTQUFRLFdBQUFDLGdCQUFlOzs7QUNBOUIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdEIsSUFBTSxXQUF5QjtBQUFBLEVBQzdCLGtCQUFrQjtBQUFBLEVBQ2xCLE1BQU0sZ0JBQVk7QUFBQSxFQUNsQixTQUFTLGdCQUFZO0FBQUEsRUFDckIsYUFBYSxnQkFBWTtBQUFBLEVBQ3pCLGNBQWM7QUFBQSxFQUNkLFlBQVksRUFBRSxnQkFBZ0IsZ0NBQWdDO0FBQUEsRUFDOUQsUUFBUTtBQUFBLElBQ04sZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFJQSxPQUFPO0FBQUEsSUFDTCxN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Q3pEO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0IsUUFDWix3QkFDQTtBQUFBLFFBQ0osZ0JBQWdCLENBQUMsY0FJWDtBQUNKLGdCQUFNLEVBQUUsS0FBSyxNQUFNLE1BQU0sSUFBSUcsTUFBSyxNQUFNLFVBQVUsUUFBUSxFQUFFO0FBQzVELGdCQUFNLGNBQWMsZUFBZSxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQ2pELGdCQUFNLE9BQU8sY0FBYyxlQUFlLEtBQUs7QUFDL0MsaUJBQU8sZ0JBQWdCO0FBQUEsUUFDekI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxVQUNWLGtCQUFrQjtBQUFBLFFBQ3BCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQUVELFNBQVMsZUFBa0IsT0FBd0I7QUFDakQsUUFBTSxTQUFTLE1BQU07QUFDckIsUUFBTSxZQUFZLFNBQVM7QUFDM0IsU0FBTyxNQUFNO0FBQ2Y7QUFFQSxTQUFTLGVBQWUsS0FBYTtBQUNuQyxRQUFNLGdCQUFnQixJQUFJLE9BQU8sY0FBYyxHQUFHO0FBQ2xELFNBQU8sSUFBSSxZQUFZLEVBQUUsUUFBUSxlQUFlLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztBQUN4RTsiLAogICJuYW1lcyI6IFsicGF0aCIsICJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAib3V0RGlyIiwgInBhdGgiXQp9Cg==
