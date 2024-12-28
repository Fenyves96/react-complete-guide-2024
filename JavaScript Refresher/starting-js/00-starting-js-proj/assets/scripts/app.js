import { apiKey as content } from "./util.js";
//import defaultValue from "./util.js";
import * as util from "./util.js";


console.log(util.apiKey);
console.log(util.apiKey2);
console.log(util.default);

console.log(content);

export default (username) => {
    console.log(username);
}

// export default function (username) {
//     console.log(username);
// }