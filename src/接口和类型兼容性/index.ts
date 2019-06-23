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