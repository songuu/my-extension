import path from "path";
import { parse as parseImports, ImportSpecifier } from "es-module-lexer";
import { normalizePath, Plugin } from "vite";

interface Options {
  /**
   * @default: window.__dynamicImportHandler__
   */
  // 动态引入的变量
  dynamicImportHandler?: string;
  /**
   * @default: window.__dynamicImportPreload__
   */
  // 动态预加载的变量
  dynamicImportPreload?: string;
  /**
   * @description 该值和打包后的生成文件夹对应，请同步修改
   * @default assets
   */
  assetsBase?: string;
}

export function viteDynamicPublicPathPlugin(options?: Options): Plugin {
  const defaultOptions: Options = {
    dynamicImportHandler: "window.__dynamicImportHandler__",
    dynamicImportPreload: "window.__dynamicImportPreload__",
    assetsBase: "assets",
  };

  // eslint-disable-next-line no-param-reassign
  options = { ...defaultOptions, ...options };

  const { dynamicImportHandler, dynamicImportPreload, assetsBase } = options;

  return {
    name: "vite-dynamic-public-path-plugin",
    enforce: "post",
    apply: "build",
    // 拦截 import
    renderDynamicImport({ format }) {
      // 看 es 就行了
      if (format === "es") {
        // 在 import 时添加动态变量
        return {
          left: `import("__PUBLIC_PATH_MARKER__" + (${dynamicImportHandler} || function(importer) { return importer; })(`,
          right: ') + "__PUBLIC_PATH_MARKER__" )',
        };
      } else if (format === "system") {
        return {
          left: `module.import((${dynamicImportHandler} || function(importer) { return importer; })(`,
          right: "))",
        };
      }
      return null;
    },
    // 生成打包后的代码
    generateBundle({ format }, bundle) {
      if (format !== "es") {
        return;
      }
      // vite 中预加载的标记，这个是 vite 内部的，固定值
      const preloadMarker = "__VITE_PRELOAD__";
      const preloadMarkerRE = new RegExp(`"${preloadMarker}"`, "g");
      // eslint-disable-next-line guard-for-in
      for (const file in bundle) {
        const chunk = bundle[file];
        if (chunk.type === "chunk" && chunk.code.indexOf(preloadMarker) > -1) {
          const code = chunk.code.replace(/"__PUBLIC_PATH_MARKER__"/g, '""');
          let imports: ImportSpecifier[];
          try {
            // 拿到解析所有 imports，过滤拿到所有动态导入的 import
            imports = parseImports(code)[0].filter((i) => i.d > -1);
          } catch (e: any) {
            this.error(e, e.idx);
          }
          if (imports?.length) {
            // 所有动态导入
            for (let index = 0; index < imports.length; index++) {
              const { s: start, e: end } = imports[index];
              // 路径
              const url = code.slice(start, end);
              // 加上资源目录前缀
              const normalizedFile = path.posix.join(
                path.posix.dirname(chunk.fileName),
                url.slice(1, -1)
              );
              const importerResult = url.match(/\(['"](.+)['"]\)/);
              if (Array.isArray(importerResult) && importerResult.length > 1) {
                // 与当前某个 bundle 对应的 assetKey 值，因为我们实际上只是改变了一下映射，资源内容还是一样的
                const assetKey = normalizePath(
                  path.join(`${assetsBase}`, importerResult[1])
                );
                // 多生成一份相对应 bundle，否则生成文件时找不到文件映射关系会少生成文件
                // eslint-disable-next-line no-param-reassign
                bundle[normalizedFile] = bundle[assetKey];
              }
            }
          }

          chunk.code = code
            // 替换 vite 中预加载的静态标记，改为我们的动态函数值
            .replace(
              preloadMarkerRE,
              `(${dynamicImportPreload} || function(importer) { return importer; })((${preloadMarker}))`
            );
        }
      }
    },
  };
}

export default viteDynamicPublicPathPlugin;
