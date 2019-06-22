let say:string = 'hello';


console.log("na附近的拉开架式的分厘卡fklaj---------------");

 let name:string | number;
 name = 21;

function add(a: number,b: number){
    return a + b
}
let num = add(3, 4);
//智能推导

let age = 12;
let str = "123";
console.log("213213213213213213232132132132132132")


let nums: number[] = [1, 1, 2]

    // nums: Array<number> = [1, 2, 3]

let u: object;
u = {}


function printValues(obj: object){
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v))
}
printValues({
    a: 1,
    n: 2
});


let type: string | undefined = undefined;
if(typeof type === 'string'){

}

function printMenu(): void{
    console.log("1.登陆");
    console.log("2.注册")
}


function throwError(msg: string): never{
    throw new Error(msg);
    console.log(msg)
}

function alwaysDoSomething(): never{
    while(true){

    }
}


let a: "a";
 //a = "b"  //报错
//又例
let user: {
    name: string
    age: number
}

user = {
    name: "sr",
    age: 1
}



let myarr: [string, number]
//myarr长度必须为2，第一项必须为string，第二项为数字
myarr = ["s", 2]

 let data: any
 let nu: number = data;         //any类型可以赋值给任何类型


 type user = {
     name: string
     age: number
     gender: Gender
 }

 type Gender = "男" | "女"

 let us: user

 us = {
     name: "strin",
     age: 20,
     gender: "男"
 }

 function getUsers(g: Gender): user[] {
    return []
 }
/**
 * 得到a和b相乘的结果
 * @param a 
 * @param b 
 */
function combine(a: number, b: number): number;

/**
 * 得到a和b相加的结果
 * @param a 
 * @param b 
 */
function combine(a: string, b: string): string;

 function combine(a: number | String, b: number | String): number | string{
    if(typeof a === "number" && typeof b === "number"){
        return a * b
    }else if(typeof a === "string" && typeof b == "string"){
        return a + b
    }
    throw new Error("a和b必须是相同的类型")
}


const result = combine("b", "a")


function sum(a: number, b: number, c?: number){
    if(c){
        return a + b + c;
    }else{
        return a + b
    }
}

sum(1, 2);
sum(1, 2, 3)



// 位运算
enum Permission{
    Read = 1,
    Write = 2,
    Create = 4,
    Delete = 8
}



//1. 如何组合权限
//使用或运算
let p: Permission = Permission.Read | Permission.Write

function hasPermission(target: Permission, per: Permission){
    return (target & per) === per
}

p = p | Permission.Delete
console.log(hasPermission(p, Permission.Delete));
p = p ^ Permission.Read
console.log(hasPermission(p, Permission.Read));