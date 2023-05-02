document.getElementById("restart").addEventListener("click", () => {
  window.location.reload(true);
});
const box1 = document.getElementById("boxone");
const box2 = document.getElementById("boxtwo");
const box3 = document.getElementById("boxthree");
const box4 = document.getElementById("boxfour");
const box5 = document.getElementById("boxfive");
const box6 = document.getElementById("boxsix");
const box7 = document.getElementById("boxseven");
const box8 = document.getElementById("boxeight");
const box9 = document.getElementById("boxnine");

let cross = 1;
let zero = 0;

let check1 = 0;
let check2 = 0;
let check3 = 0;
let check4 = 0;
let check5 = 0;
let check6 = 0;
let check7 = 0;
let check8 = 0;
let check9 = 0;

const player1 = document.getElementById("playerone");
const player2 = document.getElementById("playertwo");
player2.style.background = "grey";

let ErrorAudio = new Audio("resources/tie.mp3");

box1.addEventListener("click", () => {
  if (cross == 1 && check1 == 0) {
    box1.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check1 = 1;
  } else if (zero == 1 && check1 == 0) {
    box1.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check1 = 2;
  } else {
    ErrorAudio.play();
  }
});
box2.addEventListener("click", () => {
  if (cross == 1 && check2 == 0) {
    box2.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check2 = 1;
  } else if (zero == 1 && check2 == 0) {
    box2.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check2 = 2;
  } else {
    ErrorAudio.play();
  }
});
box3.addEventListener("click", () => {
  if (cross == 1 && check3 == 0) {
    box3.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check3 = 1;
  } else if (zero == 1 && check3 == 0) {
    box3.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check3 = 2;
  } else {
    ErrorAudio.play();
  }
});
box4.addEventListener("click", () => {
  if (cross == 1 && check4 == 0) {
    box4.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check4 = 1;
  } else if (zero == 1 && check4 == 0) {
    box4.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check4 = 2;
  } else {
    ErrorAudio.play();
  }
});
box5.addEventListener("click", () => {
  if (cross == 1 && check5 == 0) {
    box5.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check5 = 1;
  } else if (zero == 1 && check5 == 0) {
    box5.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check5 = 2;
  } else {
    ErrorAudio.play();
  }
});
box6.addEventListener("click", () => {
  if (cross == 1 && check6 == 0) {
    box6.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check6 = 1;
  } else if (zero == 1 && check6 == 0) {
    box6.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check6 = 2;
  } else {
    ErrorAudio.play();
  }
});
box7.addEventListener("click", () => {
  if (cross == 1 && check7 == 0) {
    box7.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check7 = 1;
  } else if (zero == 1 && check7 == 0) {
    box7.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check7 = 2;
  } else {
    ErrorAudio.play();
  }
});
box8.addEventListener("click", () => {
  if (cross == 1 && check8 == 0) {
    box8.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check8 = 1;
  } else if (zero == 1 && check8 == 0) {
    box8.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check8 = 2;
  } else {
    ErrorAudio.play();
  }
});
box9.addEventListener("click", () => {
  if (cross == 1 && check9 == 0) {
    box9.style.backgroundImage = "url(resources/cross.png)";
    cross = 0;
    zero = 1;
    check9 = 1;
  } else if (zero == 1 && check9 == 0) {
    box9.style.backgroundImage = "url(resources/zero.png)";
    cross = 1;
    zero = 0;
    check9 = 2;
  } else {
    ErrorAudio.play();
  }
});

const text = document.getElementById("text");
const result = document.querySelector(".result");
const game = document.querySelector(".game");
let Final_Result = 0;
const PlayerOneImage = document.getElementById("playeronevictory");
const PlayerTwoImage = document.getElementById("playertwovictory");
setInterval(() => {
  if (check1 == 1 && check2 == 1 && check3 == 1) {
    Final_Result = 1;
    check1 = 0;
  } else if (check4 == 1 && check5 == 1 && check6 == 1) {
    Final_Result = 1;
    check4 = 0;
  } else if (check7 == 1 && check8 == 1 && check9 == 1) {
    Final_Result = 1;
    check7 = 0;
  } else if (check1 == 1 && check4 == 1 && check7 == 1) {
    Final_Result = 1;
    check1 = 0;
  } else if (check2 == 1 && check5 == 1 && check8 == 1) {
    Final_Result = 1;
    check2 = 0;
  } else if (check3 == 1 && check6 == 1 && check9 == 1) {
    Final_Result = 1;
    check3 = 0;
  } else if (check3 == 1 && check5 == 1 && check7 == 1) {
    Final_Result = 1;
    check3 = 0;
  } else if (check1 == 1 && check5 == 1 && check9 == 1) {
    Final_Result = 1;
    check1 = 0;
  } else if (check1 == 2 && check2 == 2 && check3 == 2) {
    Final_Result = 2;
    check1 = 0;
  } else if (check4 == 2 && check5 == 2 && check6 == 2) {
    Final_Result = 2;
    check4 = 0;
  } else if (check7 == 2 && check8 == 2 && check9 == 2) {
    Final_Result = 2;
    check7 = 0;
  } else if (check1 == 2 && check4 == 2 && check7 == 2) {
    Final_Result = 2;
    check1 = 0;
  } else if (check2 == 2 && check5 == 2 && check8 == 2) {
    Final_Result = 2;
    check2 = 0;
  } else if (check3 == 2 && check6 == 2 && check9 == 2) {
    Final_Result = 2;
    check3 = 0;
  } else if (check3 == 2 && check5 == 2 && check7 == 2) {
    Final_Result = 2;
    check3 = 0;
  } else if (check1 == 2 && check5 == 2 && check9 == 2) {
    Final_Result = 2;
    check1 = 0;
  } else {
    if (Final_Result != 1 || Final_Result != 2  ) {
     
    }
  }
}, 1);

let node = document.querySelectorAll(".box");
let clock=5;
let TimerCondition = 0;
setInterval(() => {
  if (Final_Result == 1 || Final_Result == 2) {
    TimerCondition = 1;
  }
});
setInterval(() => {
  if (TimerCondition == 1) {

    document.getElementById("clock").innerText = clock;
    if (clock == 0) {
      clock = 5;
    }
    clock--;
  }
},950 );
setInterval(() => {
  if (Final_Result == 1) {
    text.innerText = "Player 1 won";
    result.style.color = "#7d30d4";
    result.style.display = "flex";
    game.style.display = "none";
    PlayerOneImage.style.display = "flex";
    player1.style.background = "#7d30d4";
    player2.style.background = "grey";
    setTimeout(() => {
      for (let i = 0; i < node.length; i++) {
        node[i].style.backgroundImage = "url()";
      }
      result.style.display = "none";
      game.style.display = "grid";
      cross = 1;
      zero = 0;
      TimerCondition = 0;
      PlayerOneImage.style.display = "none";
      
    }, 5000);

    Final_Result = 0;
    check1 = 0;
    check2 = 0;
    check3 = 0;
    check4 = 0;
    check5 = 0;
    check6 = 0;
    check7 = 0;
    check8 = 0;
    check9 = 0;
  } else if (Final_Result == 2) {
    text.innerText = "Player 2 won";
    result.style.color = "#ff7300";
    result.style.display = "flex";
    game.style.display = "none";
    PlayerTwoImage.style.display = "flex";
    setTimeout(() => {
      for (let i = 0; i < node.length; i++) {
        node[i].style.backgroundImage = "url()";
      }
      result.style.display = "none";
      game.style.display = "grid";
      cross = 1;
      zero = 0;
      PlayerTwoImage.style.display = "none";
      TimerCondition = 0;
    }, 5000);
    player2.style.background = "#ff7300";
    player1.style.background = "grey";
    Final_Result = 0;
    check1 = 0;
    check2 = 0;
    check3 = 0;
    check4 = 0;
    check5 = 0;
    check6 = 0;
    check7 = 0;
    check8 = 0;
    check9 = 0;
  }
  else{
    if (cross == 1 && zero == 0) {
      player1.style.background = "#7d30d4";
      player2.style.background = "grey";
    } else if (zero == 1 && cross == 0) {
      player2.style.background = "#ff7300";
      player1.style.background = "grey";
    } else {
      alert("Error");
    }
  }
}, 1);
