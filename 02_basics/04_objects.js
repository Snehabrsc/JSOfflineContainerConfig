const myObj={}

myObj.name="sam"
myObj.age=26
myObj.isLoggedIn=false

// console.log(myObj);

const userObj={
    email :"p@google.com",
    fullname: {
        firstname :"Hob",
        Lastname :"Mac"

    }
}


// console.log(userObj["email"])
// console.log((userObj.fullname.Lastname));


const obj1={
    "a" :1, "b" :2
}

const obj2={
    "c" :5,
    "d" :2,
    "pattern" : true
}


const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

//console.log({...obj1,...obj2})

const users=[
    {
        id :1,
        email :"u1@google.com"
    },
    {
        id :2,
        email :"u2@google.com"
    }, {
        id :3,
        email :"u3@google.com"
    }
]

console.log(users[2].email)

console.log(myObj)