async function getPageUrl() {
  let pagesRequest: any = [];
  chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      // console.log(details.url)
      if (details.url.indexOf("0.json") !== -1) {
        pagesRequest.push(details.url);
      }
    },
    { urls: ["https://*.bdimg.com/*"] }
  );
  return pagesRequest;
}

function getQuery(u: any) {
  const url = decodeURI(u); // 获取url中"?"符后的字串(包括问号)
  let query: any = {};
  if (url.indexOf("?") !== -1) {
    const str = url.substr(1);
    const pairs = str.split("&");
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      query[pair[0]] = pair[1];
    }
  }
  return query; // 返回对象
}

const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  return tab;
};

async function copyText(text: any) {
  let currentTab = await getCurrentTab();

  console.log("currentTab", currentTab);
  /* await chrome.scripting.executeScript({
    target: { tabId: currentTab.id },
    func: (text) => {
      navigator.clipboard.writeText(text).then(
        function () {
          console.log("success");
        },
        function () {
          console.log("failed");
        }
      );
    },
    args: [text],
  }); */
}

async function collectParagraph(urls: any[]) {
  console.log("当前urls:", urls);

  let article = "";

  for (let url of urls) {
    console.log("当前url:", url);
    let response = await fetch(url, {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "cross-site",
      },
      referrer: "https://wenku.baidu.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    });
    let result = await response.text();
    let content = JSON.parse(result.substring(8, result.length - 1));
    for (let para of content.body) {
      console.log("===========>", para.c)
      article += para.c;
      if (para.ps != null)
        for (let i = 0; i < para.ps["_enter"]; i++) {
          article += "\n";
        }
    }
  }
  return article;
}
const handleSort = (urls: any[]) => {
  urls.sort((u1: any, u2: any) => {
    let q1 = getQuery(u1);
    let q2 = getQuery(u2);
    let s1 = q1["x-bce-range"].split("-")[0];
    let s2 = q2["x-bce-range"].split("-")[0];
    return s2 - s1;
  });

  return urls;
}


async function handleContextMenus(info: any, urls: any[]) {
  urls = handleSort(urls);

  let article = "";

  if (info.selectionText !== undefined) {
    await copyText(info.selectionText);
  } else if (
    info.pageUrl.indexOf("https://wenku.baidu.com") !== -1
  ) {
    article += await collectParagraph(urls);
    await copyText(article);
  }
}

export { handleContextMenus, getPageUrl };
