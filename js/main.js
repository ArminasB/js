import {elements} from "./elements.js";
import timerState from "./state.js";

const updateTimerText = (timeElapsed) => {
  elements.timer.textContent = timeElapsed;
  const seconds = timeElapsed % 60;
  const minutes = Math.floor(timeElapsed / 60) % 60;
  const hours = Math.floor(Math.floor(timeElapsed / 60) / 60);
  elements.timer.textContent = `${hours}:${minutes}:${seconds}`;
};

elements.buttonStart.addEventListener("click", () => {
  timerState.start(updateTimerText);
});

elements.buttonStop.addEventListener("click", () => {
  timerState.stop();
});

