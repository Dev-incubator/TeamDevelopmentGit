import {setYearInfo} from "./neuro-module-1.js";
import {startNeuro} from "./neuro-module.2.js";
import {insertImage} from "./neuro-module-3.js";

setYearInfo();
startNeuro(0, () => {
    insertImage(document.querySelector(".app-footer"));
 });