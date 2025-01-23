
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
    // console.log(val.langfile)
    // console.log(val.langname)
}  ) 


const myNums=[1,2,3,4,5,6,7,8,9,10]

const finalnum=myNums.filter((num) => num>9 )
// console.log(finalnum)


const userbook=book.filter( (bk)=> bk.genre==="history" )

console.log(userbook)

const publishbook=book.filter( (bkp) => bkp.publish >2000 && bkp.genre==="history" )

console.log(publishbook)









