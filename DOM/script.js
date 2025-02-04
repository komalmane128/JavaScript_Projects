//question1
let newButton=document.createElement("Button");
newButton.innerText="Click Here.!"
newButton.style.backgroundColor="Red";
newButton.style.color="White";
console.log(newButton);
document.querySelector("body").prepend(newButton);

//Question2

let param=document.querySelector("p");
param.classList.add("content");