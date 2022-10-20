import addSentence from "./copy_board";
import { handleContextMenus, getPageUrl } from "./copy_baiduwenku";

// src/pages/background/index.ts
(async () => {
  await getPageUrl();
})();

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "0",
    type: "normal",
    title: "复制",
    contexts: ["selection", "page"],
  });
  // 右键菜单管理
  chrome.contextMenus.create({
    id: "1",
    type: "normal",
    title: "添加到备忘录",
    contexts: ["selection"],
    parentId: "0",
  });

  chrome.contextMenus.create({
    id: "2",
    type: "normal",
    title: "复制文本",
    contexts: ["selection", "page"],
    parentId: "0",
  });
});

chrome.contextMenus.onClicked.addListener((e: any) => {
  switch (e.menuItemId) {
    case "1":
      addSentence();
      break;
    case "2":
      handleContextMenus(e);
      break;
    default:
      break;
  }
});
