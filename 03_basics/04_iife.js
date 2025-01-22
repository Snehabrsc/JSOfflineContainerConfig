

//////       IIFE(Immediatedle Invoked Function Expressions)       /////////////

(function prac(){
    console.log("Db connected")
})();

( (name)=>console.log(`Db Connected!!!  ${name}`))("robert");

( (item)=>{
    console.log(`${item} is just registerd!!!`)
} )("Item1")

