import { aiChooser } from "./ai-choose.js";
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
import { getWinner, handleResult } from "./score.js";

elHands.forEach((hand) => {
  hand.addEventListener("click", (evt) => {
    const player = evt.target.alt;
    const playerSrc = evt.target.src;

    switchZone(true);
    elPlayer.src = playerSrc;

    setTimeout(() => {
      const ai = aiChooser(mode);
      elAi.src = `./images/${ai}.svg`;

      const result = getWinner(player, ai);
      handleResult(result);
    }, 1000);
  });
});

elRefreshGame.addEventListener("click", refreshGame);
