import { enableOnCopyByCapture, enableUserSelectByCSS, hideButton } from "../utils";

const Zhihu = {
    regexp: /.*zhihu\.com\/.*/,
    init: function () {
        console.log("zhihu")
        hideButton();
        enableUserSelectByCSS();
        enableOnCopyByCapture();
    },


}

export default Zhihu;
