let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.querySelector("#message");

// Wininng Combinations array
let WininngCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// Player 'X' plays first
let xTurn = true;
let count = 0;

// Disable all buttons
const disableButtons = () => {
  btnRef.forEach((btn) => (btn.disabled = true));
  // enable popup
  popupRef.classList.remove("hide");
};

// Enable all buttons (For new game and restart)
const enableButtons = () => {
  btnRef.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = false;
  });
  // disable popup
  popupRef.classList.add("hide");
};

// when one player wins
const winFunction = (player) => {
  disableButtons();
  if (player === "X") {
    msgRef.innerHTML = "🥳 <br> Player 'X' Wins!";
  } else {
    msgRef.innerHTML = "🥳 <br> Player 'O' Wins!";
  }
};

// when it is a draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw!";
};

// New game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Restart
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Winning Logic
const winChecker = () => {
  // Loop through the winning combinations
  for (let i of WininngCombinations) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    // Check if the elements are not empty
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Check for win on every click
    winChecker();
  });
});

//Enable Buttons and disable popup on page load
window.onload = enableButtons;
