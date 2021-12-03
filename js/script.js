//*1st menu (start game)
const play_game_btn = document.querySelector(".play-game-btn");
const game_container = document.querySelector(".game-container");

play_game_btn.addEventListener("click", () => {
  game_container.style.transform = "translateX(-100vw)";
});

//*2nd menu (choose bugs)
const bugs_choose = document.querySelectorAll(".choose-bug .bug");

bugs_choose.forEach((bug) => {
  bug.addEventListener("click", () => {
    game_container.style.transform = "translateX(-200vw)";
    let chosen_bug = bug.childNodes[0].getAttribute("src");
    startGame(chosen_bug);
  });
});

//*3rd menu (game)
function startGame(chosen_bug) {
  startTimer();
  placeBugs(chosen_bug);
}

function startTimer() {
  let time_counter = 0;
  const timer = document.querySelector(".time");
  setInterval(() => {
    timer.innerText = `Time: ${Math.floor(time_counter / 60)}:${(
      time_counter % 60
    )
      .toString()
      .padStart(2, "0")}`;
    time_counter++;
  }, 1000);
}

const bug_container = document.querySelector(".bug-container");
const score_text = document.querySelector('.score')
let score = 0

function placeBugs(chosen_bug) {
  const newBug = document.createElement("div");
  newBug.className = "bug";
  newBug.innerHTML = `<img src="${chosen_bug}" alt="bug">`;
  bug_container.append(newBug);
  newBug.style.top =
    Math.floor(
      Math.random() * (bug_container.offsetHeight - newBug.offsetHeight)
    ) + "px";
  newBug.style.left =
    Math.floor(
      Math.random() * (bug_container.offsetWidth - newBug.offsetWidth)
    ) + "px";
  newBug.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`

  newBug.addEventListener("click", () => {
    score++
    score_text.innerText = `Score: ${score.toString().padStart(3, "0")}`

    newBug.remove();
    setTimeout(() => {
      placeBugs(chosen_bug);
    }, 300);
    setTimeout(() => {
      placeBugs(chosen_bug);
    }, 500);
  });
}
