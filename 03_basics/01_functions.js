

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

function loginTime(name,logintime){
    if(!name){
        console.log("please enter a user name")
        return
    }
    return `${name} loggin time at ${logintime}` 
}

console.log(loginTime('',Date("10-4-2025"))) 