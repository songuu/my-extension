import type { PluginOption } from "vite";

import * as fs from "fs";
import * as path from "path";

import manifest from "../../src/manifest";

const { resolve } = path;

const outDir = resolve(__dirname, "..", "..", "public");

interface Plugins {
  outDir: string;
}

const makeManifest = (): PluginOption => {
  return {
    name: "make-manifest",
    // 通用钩子
    buildEnd() {
      console.log("buildEnd");
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      const manifestPath = resolve(outDir, "manifest.json");

      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    },
  };
};

export default makeManifest;
