enum Gender2{
    Male = "男",
    female = "女"
}
let gender: Gender;

gender = Gender2.Male;
gender = Gender2.female;

console.log(gender);


function printGenders(){
    const genderArr = Object.values(Gender2);
    genderArr.forEach((el, i) => {
        console.log(el)
    })
}

printGenders();



enum Level{
    level1 = 1,
    level2 = 2,
    level3 = 3
}
let L: Level = Level.level3;
console.log(L);


function getUser(lev: Level){

}
getUser(Level.level3)

