let score = 0;

export function updateScore(change) {
  score = Math.max(0, score + change);
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = score;
  } else {
    console.warn('Element with id="score" not found');
  }
}

export function getWinner(player, ai) {
  if (player === ai) return "draw";

  if (
    (player === "rock" && ai === "scissors") ||
    (player === "paper" && ai === "rock") ||
    (player === "scissors" && ai === "paper")
  ) {
    return "win";
  }

  return "lose";
}

export function handleResult(result) {
  const statusElement = document.getElementById("status");

  if (result === "win") {
    updateScore(1);
    if (statusElement) statusElement.textContent = "YOU WIN";
  } else if (result === "lose") {
    updateScore(-1);
    if (statusElement) statusElement.textContent = "YOU LOSE";
  } else {
    if (statusElement) statusElement.textContent = "DRAW";
  }
}
