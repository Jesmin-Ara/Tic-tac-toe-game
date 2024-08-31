let buttons = document.querySelectorAll(".game-btn");
let resetBtn = document.querySelector("#reset-btn"); 
let againBtn = document.querySelector("#again-btn");
let winnerSection = document.querySelector(".winner-container");
let winnerText  = document.querySelector(".winner-text");
let turnX = true;
let main = document.querySelector("main");
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

buttons.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (turnX) {
      btns.innerText = "X";
      turnX = false;
    } else {
      btns.innerText = "O";
      turnX = true;
    }
    btns.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  for (const pattern of winPatterns) {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 == pos2 && pos2 == pos3) {
        winnerText.innerText = `"${pos1}" Wins`;
				winnerSection.style.display = "flex";
				main.style.display = "none";
      }
    }
  }
}

againBtn.addEventListener("click", () => {
	location.reload();
});
resetBtn.addEventListener("click", () => {
	location.reload();
});
