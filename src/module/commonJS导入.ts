// import {name, sum} from "./myModule"

// console.log(name);
// console.log(sum(3, 5))


/**导出文件位
 * 这样导入的话没有类型检查
 */

// module.exports = {
//     name: "kevin",
//     sun: (a: number,b: number): number => {
//         return a + b;
//     }
// }

// const myModule = require("./myModule");


/**导出文件为
 * 有类型检查
 */
// export = {
//     name: "kevin",
//     sun: (a: number,b: number): number => {
//         return a + b;
//     }
// }
// import myModule = require("./myModule");

// myModule.name
