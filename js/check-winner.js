import { rock, paper, scissors, lizard, spock } from "./constants.js";

export function checkWinner(ai, player) {
  if (ai === player) {
    return "draw";
  } else if (ai === paper && player === rock) {
    return "ai";
  } else if (ai === rock && player === scissors) {
    return "ai";
  } else if (ai === scissors && player === paper) {
    return "ai";
  } else if (ai === lizard && player === spock) {
    return "ai";
  } else if (ai === lizard && player === paper) {
    return "ai";
  } else if (ai === rock && player === lizard) {
    return "ai";
  } else if (ai === spock && player === rock) {
    return "ai";
  } else if (ai === spock && player === scissors) {
    return "ai";
  } else if (ai === paper && player === spock) {
    return "ai";
  } else if (ai === scissors && player === lizard) {
    return "ai";
  } else {
    return "player";
  }
}
