let pagesRequest: any = [];

const removeRequest = async () => {
  pagesRequest = [];
};

async function getPageUrl() {
  chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      if (details.url.indexOf("0.json") !== -1) {
        // if (!pagesRequest.includes(details.url)) {
        pagesRequest.push(details.url);
        // }
      }
    },
    { urls: ["https://*.bdimg.com/*"] }
  );
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
  console.log("当前text:", text);
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
  console.log("当前urls1:", urls);

  let article = "";

  let i = 0;

  for (let url of urls) {
    console.log("当前url:", url);

    i++;

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
      article += para.c;
      if (para.ps != null)
        for (let i = 0; i < para.ps["_enter"]; i++) {
          article += "\n";
        }
    }

    console.log("当前article:", article);

    // 需要限制最大的请求次数 防止爆栈
    if (i === 10) {
      break;
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
    return s1 - s2;
  });

  return urls;
};

async function handleContextMenus(info: any) {
  console.log("info:", info);
  console.log("当前pagesRequest:", pagesRequest);
  const urls = handleSort(pagesRequest);

  let article = "";

  if (info.selectionText !== undefined) {
    await copyText(info.selectionText);
  } else if (info.pageUrl.indexOf("https://wenku.baidu.com") !== -1) {
    article += await collectParagraph(urls);
    await copyText(article);
  }

  await chrome.notifications.create({
    type: "basic",
    iconUrl: "http://qiniu.songuu.top/16.png",
    title: "来了来了",
    message: "复制成功",
  });

  await removeRequest();
}

export { handleContextMenus, getPageUrl };
