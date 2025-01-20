

const js_user={
    name : "abc",
    "full name":"abc def",
    age :23,
    location : "pune",
    email :"a@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Friday","Saturday"]
}


// console.log(js_user["email"])
// console.log(js_user["isLoggedIn"])

// js_user.location="maharastra"

// console.log(js_user["location"])

// // Object.freeze(js_user)

// js_user.location="pune"

// console.log(js_user["location"])


js_user.greeting=function(){
    console.log("Hi First...");
}

js_user.greetingvalue=function(){

    console.log(`Hi this is the name greetings ${this.name}`);
}

console.log(js_user.greeting())

console.log(js_user.greetingvalue());
