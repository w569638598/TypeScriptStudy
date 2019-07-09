// class User{
//     constructor(name: string, age: number){
//         this.name: name;
//         this.age = age
//     }
// }


//设置默认值第一种
class User{
    name:string
    age: number
    gender: "男" | "女"
    constructor(name: string, age: number, gender: "男" | "女" = "男"){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}

//设置默认值第二种
class User2{
    //readonly id: string      //不能改变
    gender: "男" | "女" = "男"
    pid?: string
    private _publishNumber: number = 3;      //每天一共可以发布多少篇文章
    private _curNumber: number = 0;         //当前可以发布的文章数量

    constructor(public name: string, private _age: number){
        //this.id = "000";
        this.name = name;
        this._age = _age;
        // this.gender = gender
        // this.pid = pid
    }

    publish(title: string){
        if(this._curNumber < this._publishNumber){
            console.log("发布一篇文章：" + title);
            this._curNumber++
        }else{
            console.log("你今日发布的文章数量已达到上限")
        }
    }
    setAge(value: number){
        if(value < 0){
            this._age = 0;
        }else if(value >= 200){
            this._age = 200
        }else{
            this._age = value
        }
    }

    getAge(){
        return Math.floor(this._age)
    }
}





const u7 = new User2("aa", 12);
u7.gender = "男";
u7.pid = "asdf";
u7.setAge(1.5);
console.log("age------------------" + u7.getAge())
console.log(u7.id)
u7.publish("文章1")
u7.publish("文章1")
u7.publish("文章1")
u7.publish("文章1")

//外部无法访问
// u7.curNumber = 333



function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[]{
    if(arr.length != arr2.length){
        throw new Error("数组长度不等")
    }
    let result:(T | K)[] = [];
    for(let i = 0;i < arr1.length;i++){
        result.push(arr1[i])
        result.push(arr2[i])
    }
    return result;
}

mixinArray([1,1,2,2,1,2],["1","2"])