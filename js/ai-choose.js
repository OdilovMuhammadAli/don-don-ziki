import { hands } from "./constants.js";

export function aiChooser(mode = "easy") {
  const randomIndex = Math.trunc(Math.random() * (mode === "easy" ? 3 : 5));
  return hands[randomIndex];
}
