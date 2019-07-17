import { TLSSocket } from "tls";

export class Tank {
    x: number = 0
    y: number = 0
    name: string = "坦克"
    sayHello(){
        console.log(`我是一个${this.name}`)
    }
}

export class PlayerTank extends Tank {
    name: string = "玩家坦克"
    test(){
        super.sayHello()
    }
}

export class EnemyTank extends Tank {
    name: string = "敌人坦克"
}

const p = new PlayerTank();

console.log(p.test())