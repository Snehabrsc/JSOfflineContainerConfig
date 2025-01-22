const userEmail=[]
 
if(userEmail){
    console.log("got mail");
    
}else{
    console.log("dint get email")
}




if (userEmail.length===0) {
    console.log("array is empty")
    
}


const emptyobj={}



    if (Object.values(emptyobj).length===0) {
        console.log("empty object");
                
    }






//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value

// [], "0", 'false', " ", {}, function(){}



const iceTeaprice=100
if (iceTeaprice>=20 ? console.log("true") : console.log("false")) {
    
}

const cost=5??10
const chknull=null ?? 10
const chkundefined=undefined ?? 15

console.log(cost)
console.log(chknull);
console.log((chkundefined));


