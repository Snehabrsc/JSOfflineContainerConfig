

function funName(){
    console.log("Hi funtion...")
}

//funName()

// function addNum(num1,num2){
//     // let result=num1+num2;
//     // return result;
//     return num1+num2

// }

// const result=addNum(8,4)

// console.log("result",result)

// function loginMsg(name){
//     return ` ${name} just logged in`
// }

// console.log(loginMsg('sam'))

// function loginTime(name,logintime){
//     if(!name){
//         console.log("please enter a user name")
//         return
//     }
//     return `${name} loggin time at ${logintime}` 
// }

// console.log(loginTime('',Date("10-4-2025"))) 

function calcartprice(...num1){
    
    return num1
}

//console.log(calcartprice(1,2,3))

const userdetails={
    name: "Robert",
    age : 44,
    location :"USA"
}

function useraccess(anyObj){
    return `Name is ${anyObj.name} and Location is ${anyObj.location}`
}

console.log(useraccess(userdetails))

const costitem=[112,230,229]

function getcostitem(getarray){
    return `cost of this item is ${getarray[1]}`
}

console.log(getcostitem(costitem))


