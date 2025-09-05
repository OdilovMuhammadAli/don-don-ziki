import { aiChooser } from "./ai-choose.js";
import {
  elAi,
  elHands,
  elModeChangerButton,
  elModeWrapper,
  elPlayer,
  elRefreshGame,
  elStatus,
} from "./html-elements.js";
import { mode, modeChanger } from "./mods.js";
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

elModeChangerButton.addEventListener("click", (evt) => {
  if (mode === "hard") {
    modeChanger("easy");
    evt.target.innerText = "hard";
  } else {
    modeChanger("hard");
    evt.target.innerText = "easy";
  }
});
console.log(elModeWrapper.dataset);

elRefreshGame.addEventListener("click", refreshGame);
