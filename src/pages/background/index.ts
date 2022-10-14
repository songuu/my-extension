// src/pages/background/index.ts
let selectedSentence = "";

chrome.runtime.onInstalled.addListener(() => {
  // 右键菜单管理
  chrome.contextMenus.create({
    id: "0",
    type: "normal",
    title: "添加到备忘录",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(() => {
  addSentence();
});

function addSentence() {
  chrome.storage.sync.get("sentences", ({ sentences = [] }) => {
    chrome.storage.sync.set({ sentences: [selectedSentence, ...sentences] }, () => {
      console.log("添加成功");
    });
    showNotification();
  });
}

chrome.runtime.onMessage.addListener((request) => {
  const { data, action } = request;
  if (action === "add") {
    selectedSentence = data;
  }
});

const showNotification = async () => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: 'http://qiniu.songuu.top/16.png',
    title: "来了来了",
    message: "操作成功",
    priority: 0,
  });
}
