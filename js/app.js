import { aiChooser } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";
import {
  elAi,
  elHands,
  elPlayer,
  elRefreshGame,
  elStatus,
} from "./html-elements.js";
import { mode } from "./mods.js";
import { refreshGame } from "./refresh-game.js";
import { switchZone } from "./switch-zone.js";

elHands.forEach((hand) => {
  hand.addEventListener("click", (evt) => {
    const player = evt.target.alt;
    const playerSrc = evt.target.src;
    switchZone(true);
    elPlayer.src = evt.target.src;

    setTimeout(() => {
      const ai = aiChooser(mode);
      elAi.src = `./images/${ai}.svg`;
      const winner = checkWinner(ai, player);
      elStatus.innerText = winner;
    }, 1000);
  });
});
elRefreshGame.addEventListener("click", refreshGame);
