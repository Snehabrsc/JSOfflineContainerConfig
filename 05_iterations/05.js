
const coding=["js","java","python"]

// coding.forEach(function (val) {
//     console.log(val)
// } )

// coding.forEach( (item)=>{
//     console.log(item)
// })


// function printitems(i){
//     console.log(i)
// }

// coding.forEach(printitems)

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr)
// }  )

const mycoding=[
    {
        langname: "js",
        langfile :".js"
    },
    {
        langname: "c",
        langfile :".c"
    },
    {
        langname: "pthon",
        langfile :".p"
    }
]


mycoding.forEach( (val) => {
    console.log(val.langfile)
    console.log(val.langname)
}  )