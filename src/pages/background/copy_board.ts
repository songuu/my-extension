let selectedSentence = "";

const showNotification = async () => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "http://qiniu.songuu.top/16.png",
    title: "来了来了",
    message: "操作成功",
    priority: 0,
  });
};

function addSentence() {
  chrome.storage.sync.get("sentences", ({ sentences = [] }) => {
    chrome.storage.sync.set(
      { sentences: [selectedSentence, ...sentences] },
      () => {
        console.log("添加成功");
      }
    );
    showNotification();
  });
}

chrome.runtime.onMessage.addListener((request) => {
  const { data, action } = request;
  if (action === "add") {
    selectedSentence = data;
  }
});

export default addSentence;
