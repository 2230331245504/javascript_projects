let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let userScorepara = document.querySelector("#userScore");
let compScorepara = document.querySelector("#compScore");
let scoreContent = document.querySelectorAll(".scoreContent");
let heading = document.querySelector("#heading");
let message = document.querySelector(".content");
let mode = "white";

btn.addEventListener("click",()=>{
    if(mode === "white")
    {
        
        body.style.backgroundColor = "black";
        heading.style.backgroundColor = "gray";
        heading.style.color = "black";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.innerText = "White mode!";
        userScorepara.style.color = "white";
        compScorepara.style.color = "white";
        scoreContent.forEach(item =>{
            item.style.color = "white";

        });
        mode = "black";
    }
    else
    {
        
        body.style.backgroundColor = "white";
        heading.style.backgroundColor = "black"
        heading.style.color = "white"
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
        btn.innerText = "Black mode!";
        userScorepara.style.color = "black";
        compScorepara.style.color = "black";
        scoreContent.forEach(item =>{
            item.style.color = "black";

        });
        mode = "white";
    }
});

let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;


const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        message.innerText = `You win! your ${userChoice} beats ${compChoice} `;
        message.style.backgroundColor = "green";
        
    }
    else
    {
       compScore++;
       compScorepara.innerText = compScore;
       message.innerText = `You loose! comp ${compChoice} beats your ${userChoice} `;
       message.style.backgroundColor = "red";

    }
}

const getcompChoice = () =>{
    const str = ["rock","paper","scissor"];
    const genRandumIdx =  Math.floor(Math.random()*3);
    return str[genRandumIdx];
};

const playGame = (userChoice) =>{
    console.log("userChoice =",userChoice);
    const compChoice = getcompChoice();
    console.log("compChoice =",compChoice);

    if(userChoice === compChoice)
    {
        message.innerText = "Game was draw! play again";
        message.style.backgroundColor = "gray";
        message.style.color = "white";
       
    }
    else
    {
        let userWin = true;
        if(userChoice == "rock")
        {
            //paper,scissor
            userWin = compChoice=="paper"?false : true;
            
        }
        else if(userChoice == "paper"){

            //rock,scissor
            userWin = compChoice=="rock"?true : false;
        }
        else
        {
            //rock,paper
            userWin = compChoice=="rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
   
    }
   
};

choices.forEach(items =>{
    items.addEventListener("click",()=>{
        const userChoice = items.getAttribute("id");
        playGame(userChoice);
    });

});
