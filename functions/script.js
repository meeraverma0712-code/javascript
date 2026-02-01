// arrow function

// const arrowSum= (a , b)=> {
//     console.log(a+b);
// }

// const arrowMul= (a , b)=> {
//     console.log(a*b);
// }

// function countVowel(str){
// let count =0;
// for (const char of str){
//     if(
//     char ==="a" ||
//     char ==="e" ||
//     char ==="i" ||
//     char ==="0" ||
//     char ==="u" 
//     )
//     {
// count++;
// }
// }
// return count;


// }


//arrowfunc way

// const countVowel = (str)=>{
// let count = 0;
// for (const char of str){
//     if(
//     char ==="a" ||
//     char ==="e" ||
//     char ==="i" ||
//     char ==="0" ||
//     char ==="u" 
//     )
//     {
// count++;
// }
// }
// return count;
// }



//callback function

let arr=["pune", "mumbai","delhi"];
arr.forEach((val) => {
    console.log(val.toUpperCase());
})