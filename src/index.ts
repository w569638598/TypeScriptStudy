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