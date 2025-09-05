let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choices");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () =>{
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor = "blue";
};

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText = `You Won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorep.innerText = compscore;
        msg.innerText = `You Lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) =>{
    
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissors,paper
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //scissors,rock
            userwin = compchoice === "rock" ? true : false;
        }else{
            //paper,rock
            userwin = compchoice === "paper" ? true : false;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choices) => {
    choices.addEventListener("click",() =>{
        const userchoice = choices.getAttribute("id");
        playgame(userchoice);
    });
});
