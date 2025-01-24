const newnum=[1,2,3]
let intval=0

let totalnum=newnum.reduce( (acc,curval) => {
    console.log(acc,curval)
    return acc+curval
},0)

//console.log(totalnum);

const shpngcart=[{
    itemname :"js",
    price :300
},
{
    itemname :"python",
    price :800 
},
{
    itemname :"datascience",
    price :500
}

]



const finalprice=shpngcart.reduce( (acc,item) => acc+item.price ,0)

console.log(finalprice)