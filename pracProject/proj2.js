let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomchoice = () => {
    const option =["rock","paper","Scissor"];
   // Math.random(); 0 to 10 me se koi bhi number genrate karta hai 
  const randIdx= Math.floor(Math.random() * 3);//math.floor() use to remove decimal ke bad ki number
    return option[randIdx];
}

const drawGame = () =>{
  //  console.log("Game Was draw");
    msg.innerText = "Game Was Draw,Play again!"
    msg.style.backgroundColor ="#660033";
   
}
const showWinner =(userwin,userchoice,compchoice) =>
{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
       // console.log("You win!")
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
        
    }else{
        compscore++;
        compscorepara.innerText = compscore;
       // console.log("you lose")
        msg.innerText = `You lost! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="Red";
       

    }
}

const playgame = (userchoice) =>{
    console.log("User Choice = ",userchoice);
    //Generate computer choice
    const compchoice = gencomchoice();
    console.log("comp Choice = ",compchoice);

    if(userchoice === compchoice){
        //draw game
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper,scissor
            userwin = compchoice === "paper" ?false:true;
        }else if(userchoice === "paper"){
            //scissor,rock
          userwin = compchoice ==="scissoe"?false:true;
        }else{
            //rock,paper
            userwin = compchoice ==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}



choices.forEach((choice) => {
    //console.log(choice)
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
       //console.log("choice was clicked",choiceId)
        playgame(userchoice)
    })
})