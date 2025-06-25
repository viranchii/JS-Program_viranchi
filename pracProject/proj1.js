let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playero playerx

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
   // console.log("box was clicked");

    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
 
const disableboxes = () => { //one time winner  accesses then not one box is clickble
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => { //Return start 

    for(let box of boxes){
        box.enabled = false;
        box.innerText = "";
    }
}

 const showWinner = (winner) => {
       msg.innerText = `Congratulations,Winner is ${winner}`;
       msgcontainer.classList.remove("hide");
       disableboxes();
 }

const checkWinner = () => {
  for (let pattern of winPatterns) {
    
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
           // console.log("Winner",pos1val);
            showWinner(pos1val);
        }
    }
  }
};

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
