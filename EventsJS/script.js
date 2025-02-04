let btn1 = document.querySelector("#btn1");
let currentMode = "light";
let body = document.querySelector("body");
// btn1.onclick = (e) =>{
// console.log("Button 1 ia clicked")
// console.log(e);
// }
btn1.addEventListener("click" ,() => {

    if( currentMode === "light")
    {
        currentMode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        currentMode = "light";
        body.classList.add("white");
        body.classList.remove("dark");
    }

    console.log(currentMode);

});
// const ehandler= () =>{
//     console.log("Button 1 is clicked...2");
// };

// btn1.removeEventListener("click" ,ehandler);
// btn1.addEventListener("click" , (e)=>{
//     console.log("Button 1 is clicked...3");
    
// });



// let div=document.querySelector("div");

// div.onmouseover = () =>{
//     console.log("You are inside div");
// }