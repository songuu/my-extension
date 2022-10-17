import { DOM_READY, DOM_STAGE } from "./constant";
import { CopyParams } from "./copy";
import websites, { Website, WebsiteConfig } from "./websites";

let siteGetSelectedText: () => CopyParams | null;

const initWebsite = (): WebsiteConfig => {
  let websiteConfig: WebsiteConfig = {
    initCopyEvent: true,
    runAt: DOM_STAGE.END,
    captureInstance: false,
    delay: 0,
  };
  const mather = (regex: RegExp, website: Website) => {
    if (regex.test(window.location.href)) {
      if (website.config) websiteConfig = Object.assign(websiteConfig, website.config);
      if (websiteConfig.runAt === DOM_STAGE.END) {
        document.addEventListener(DOM_READY, () => website.init());
      } else {
        website.init();
      }
      if (website.getSelectedText) siteGetSelectedText = website.getSelectedText;
      return true;
    }
    return false;
  };
  websites.some((website: any) => mather(website.regexp, website));
  return websiteConfig;
};

const myDoc = document as any;
const myWind = window as any;

const getSelectedText = (): CopyParams => {
  if (siteGetSelectedText) return siteGetSelectedText();
  if (myWind.getSelection) return myWind.getSelection().toString();
  if (myDoc.getSelection) return myDoc.getSelection().toString();
  if (myDoc.selection) return myDoc.selection.createRange().text;
  return "";
};

export { initWebsite, getSelectedText };
