// let div = document.querySelector("div");
// console.dir(div.innerText);
// div.innerText = div.innerText + " From Apna College Students";


let divs= document.querySelectorAll(".box");

let idx = 1;
for (div of divs){
    div.innerText=`new unique line ${idx}`;
    idx++
}
