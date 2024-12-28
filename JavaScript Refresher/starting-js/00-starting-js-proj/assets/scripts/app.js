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

//deconstruct section BEGIN
const [firstName, lastName] = ["John", "Doe"];

// const firstName = usernameData[0];
// const lastName = usernameData[1];

console.log(firstName)
console.log(lastName)

const { name, age } = {
    name: "John",
    age: 34
}

console.log(name)
console.log(age)

//deconstruct section END
