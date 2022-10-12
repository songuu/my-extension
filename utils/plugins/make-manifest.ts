import type { PluginOption } from "vite";

import fs from "fs-extra";

import manifest from "./manifest";

import { resolve } from "path";

interface Plugins {
  outDir: string;
}

const makeManifest = ({ outDir }: Plugins): PluginOption => {
  return {
    name: "make-manifest",
    // Vite 独有钩子
    config(config) {
      // console.log("config");
    },
    // Vite 独有钩子
    configResolved(resolvedCofnig) {
      // console.log("configResolved");
    },
    // 通用钩子
    options(opts) {
      // console.log("options");
      return opts;
    },
    // Vite 独有钩子
    configureServer(server) {
      // console.log("configureServer");
      setTimeout(() => {
        // 手动退出进程
        // process.kill(process.pid, "SIGTERM");
      }, 3000);
    },
    // 通用钩子
    buildStart() {
      // console.log("buildStart");
    },
    // 通用钩子
    buildEnd() {
      console.log("buildEnd");
    },
    // 通用钩子
    closeBundle: async () => {
      // console.log("closeBundle");
      if (manifest) {
        const manifestPath = resolve(
          outDir,
          "src/pages/popup",
          "manifest.json"
        );

        const manifestStr = JSON.stringify(manifest, null, 2);
        /* try {
          await fs.stat(manifestPath);
        } catch (err) {
          await fs.mkdir(manifestPath);
        } */
        await fs.writeFile(manifestPath, manifestStr);

        await fs.copy(
          resolve(__dirname, "icons"),
          resolve(outDir, "src/pages/popup/icons")
        );
      }
    },
  };
};

export default makeManifest;
