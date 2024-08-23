let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true; //2 players "X" and "O"

const wincomb=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame= () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){ //player O 
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }
        else{  //player X
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    })
});



const disableboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}


const checkWinner = () => {
    for(let pattern of wincomb){
        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
       
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2===posval3){
                disableboxes();
                showWinner(posval1);
            }
            
        }    
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);