import zhihu from "./packages/zhihu";
import baiduwk from "./packages/baiduwk";
import { CopyParams } from "./copy";

export interface WebsiteConfig {
    initCopyEvent?: boolean;
    runAt?: "document-start" | "document-end";
    captureInstance?: boolean;
    delay?: number;
}
export interface Website {
    config?: WebsiteConfig;
    regexp: RegExp;
    init: () => void;
    getSelectedText?: () => CopyParams;
}

const websites: Website[] = [
    zhihu,
    baiduwk
];

export default websites;
