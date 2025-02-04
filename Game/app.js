let boxes=document.querySelectorAll(".box"); //tic tac toe game code
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turno= true; //playerx , playero

let winPattern = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8],
];

const newGame = () =>{
    turno =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        // console.log("Box is clicked");
        if(turno)
        {
            box.innerText = "O";
            turno = false;
        }
        else
        {
            box.innerText = "X";
            turno = true;
        }
        box.disabled =true;
        checkWinner ();
    })
})

const disbledBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableBoxes = () =>
    {
        for(let box of boxes)
        {
            box.disabled = false;
            box.innerText= "";
        }
    }

const showWinner = (winner) =>{
    msg.innerText = `Congartulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbledBoxes();
}

const checkWinner = () => {

    for(let pattern of winPattern)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        //  console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

            let posval1=boxes[pattern[0]].innerText;
            let posval2=boxes[pattern[1]].innerText;
            let posval3=boxes[pattern[2]].innerText;

            if(posval1 !="" && posval2 != "" && posval3 != "")
            {
                if(posval1 == posval2 && posval2== posval3)
                {
                    console.log("Winner**" , posval1);
                    showWinner(posval1);
                }
            }
    }

} 

newGameBtn.addEventListener ("click" , newGame);
resetBtn.addEventListener ("click" , newGame);