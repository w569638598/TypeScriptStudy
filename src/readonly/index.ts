interface User2 {
    readonly id: string
    name: string
    age: number
    // readonly arr: string[]
    readonly arr: readonly string[]
}


let u5: User2 = {
    id: "23",
    name: "wangli",
    age: 12,
    arr: ["s"]
}

// let arr: readonly number[] = [1,2,2,2,3];
const arr: ReadonlyArray<number> = [4,5,5,5,5,5]