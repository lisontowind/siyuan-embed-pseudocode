import { setAutoCompileMuatationObserver } from "./main";
import { initPseudocode } from "./pseudocode";

console.log("pseudocode daemon start");

initPseudocode();
setAutoCompileMuatationObserver(document.documentElement);