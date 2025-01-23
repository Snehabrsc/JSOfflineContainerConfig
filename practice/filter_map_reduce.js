

let numarr=[1,2,3,4]

let resultnum=numarr.filter((num) => num>=2 )

// console.log(resultnum)

let numobj=[{
    id: 1,
    islogged: true,
    debitaccess: false
},
{
    id: 2,
    islogged: true,
    debitaccess: false
}
]

let changeidval=numobj.filter( (val) => val.id===1 ).map( (val) => val.islogged= false)

console.log(changeidval)



let resultobj=numobj.filter( (val) => val.id ===1)

// console.log(resultobj);


let numtotal=[4,5,2]

let sum=numtotal.reduce((acc,curval) => acc+curval,0)

// console.log(sum)


let add10=numtotal.map( (num) => num+5 )
// console.log(add10)

