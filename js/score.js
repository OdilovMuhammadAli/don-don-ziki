let score = 0;

export function updateScore(change) {
  score += change;
  document.getElementById("score").innerText = score;
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
  if (result === "win") {
    updateScore(1);
    document.getElementById("status").textContent = "YOU WIN";
  } else if (result === "lose") {
    updateScore(-1);
    document.getElementById("status").textContent = "YOU LOSE";
  } else {
    document.getElementById("status").textContent = "DRAW";
  }
}
