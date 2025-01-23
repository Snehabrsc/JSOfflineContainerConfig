let myArray=[1,2,3]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element)
    
}


for (let index = 1; index <= 10; index++) {
    if(index==5) {
        console.log(`detected ${index}`)
        continue
    }
    console.log(`value : ${index}`);
    
    
}


