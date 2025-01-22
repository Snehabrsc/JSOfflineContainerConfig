function addtwo(num){
   console.log(this)
    return num +2 
}

// console.log(addtwo(2))


const addThree=(num1)=> (num1+3)

// console.log(addThree(2))


//  console.log(this)

const retObj=(strname)=>({Idname :strname})

console.log(retObj("sa"))
