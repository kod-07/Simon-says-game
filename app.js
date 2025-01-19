let gameSeq = [];
let userSeq = [];
let score = 0;
let colors = ["yellow","red","blue","green"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;
document.addEventListener("keypress", start);
function start(){
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250)
}
function levelUp(){
    userSeq = [];
    level ++;
    h2.innerText = `Level ${level} `;

    let random = Math.floor(Math.random() *3);
    let randomColor = colors[random];
    let randbtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    // console.log(random);
    console.log(gameSeq);
    btnFlash(randbtn);
   

}

function checkAns(idx){
    console.log(level);
    if(userSeq[idx]===gameSeq[idx]){
        if (userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
            score++;
        }
    }else{
        h2.innerHTML=`Game Over !!!<br>Your Score ${score} <br> Press any key to start `;
        document.querySelector("body").style.background = "red";
        setTimeout(()=>{
            document.querySelector("body").style.background = "white";
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");

    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}



let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    let gameSeq = [];
    let userSeq = [];
    let started = false;
    let level = 0;
    start();
}