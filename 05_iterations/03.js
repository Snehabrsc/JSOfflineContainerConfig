//for of



const greet="hello computer"

for (const element of greet) {
    if(element===" "){
        // console.log("char value is space")
        continue;
    }
    // console.log(`char value ${element}`)
}


//Maps

let newmap=new Map()

newmap.set('01','jaipur')
newmap.set('02','pune')
newmap.set('03','kolkata')
newmap.set('04','MP')


//console.log(newmap)

// for (const [key,value] of newmap) {
//     console.log(key,value)
// }

// for (const [key] in newmap) {
//     console.log(key)
// }  Map is non iterable