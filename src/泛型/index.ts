import { Interface } from "readline";
import { ArrayHelper } from "./ArrayHelper";

// function take<T = number>(arr:T[], n:number): T[]{
//     if(n >= arr.length){
//         return arr
//     }
//     const newArr: T[] = [];
//     for(let i = 0;i < n; i++){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// // take<number>([2,2], 2)

// const newArr = take([1,2,5,5,5,2,2,5], 2);
// console.log(newArr)


const helper = new ArrayHelper<number>([33,2,2,5,6,2]);
helper.take(2)


interface callback<T> { (n: T, i: number): boolean;}

function filter<T>(arr: T[], callback: callback<T>): T[]{
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if(callback(n, i)) {
            newArr.push(n);
        }
    })
    return newArr
}
const arr = [3,2,5,,6,5,,8,]

// console.log(filter(arr, n => n % 2 !== 0))

interface hasNamePropetypr {
    name: string
}

function nameToUpperCase<T extends hasNamePropetypr>(obj: T): T{
    obj.name.split(" ").map(s => s[0].toUpperCase + s.substr(1)).join(" ");
    return obj
}

const o = {
    name: "wang li",
    age: 22,
    gender: "男"
}


const newO = nameToUpperCase(o);

console.log(newO.name)