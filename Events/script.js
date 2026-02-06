let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click" , () => {
    if (currMode ==="light"){
        currMode ="dark";
        body.classList.add("dark");
    }
    else{
        currMode= "light";
        body.classList.add("light");
       
    }
        console.log(currMode);
})