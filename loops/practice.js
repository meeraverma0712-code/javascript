// p. question 1
// for(let num=0;num<=100;num++){
// if (num % 2===0){
//     console.log("num=", num);
// }
// }



// prac. question 2
let gameNum = 10;
let userNum= prompt ( "Guess the game number: ");
while(userNum!= gameNum){
    userNum= prompt("you entered the wrong number , try again: ")
}
console.log("CONGRATULATIONS YOU ENTERED THE GAME NUMBER!");

 