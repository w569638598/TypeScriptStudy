import { SIGWINCH } from "constants";

interface User{
    name: string
    age: number
    sayHello: () => void
    // sayHello: void
}



let u2: User = {
    name: "wagli",
    age: 12,
    sayHello(){
        console.log("say Hello")
    }
}

u2.sayHello()

/**
 * 类型别名的方法
 */
// type Condition = (n: number) => boolean


/**
 * 接口方法
 */
interface Condition {       //此处的大括号为定界符
    (m: number): boolean
}

function sum(numbers: number[], cb: Condition){
    let s = 0;
    numbers.forEach(n => {
        if(cb(n)){
            s += n;
        }
    })
    return s;
}

const result2 = sum([3,2,3,3,2,5,6,5], n => n % 2 !== 0);

console.log(result2)



// 接口的继承
 /**
  * 接口的方式
  */
// interface A {
//     T1: string
// }
// interface B extends A{
//     T2: number
// }

// interface C extends A, B{
//     T3: boolean
// }


/**
 * 类型别名的方式
 */

 type A = {
     T1: string
 }

 type B = {
     T2: number
 }

 type C = {
     T3: boolean
 } & A & B


let u3: C = {
    T1: "s",
    T2: 12,
    T3: true
}




interface Duck{
    sound: "嘎嘎嘎"
    swin(): void
}

let person = {
    name: "伪装成鸭子",
    age: 12,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swin(){
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音")
    }
}

interface ReponseUser {
    loginId: string
    nickName: string
    gender: "男" | "女"
}

interface User2 {
    name?: string
    age: number
}

let duck: Duck = person;