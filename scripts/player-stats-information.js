import { playerDetailsByPlayer, allTeamsActive } from "../modules/api-test-data.js";
import { headerHTML, headerSection } from "../modules/player-stats-information-module.js";

const playerPageQueryList = window.location.search;
const playerPageQueryParams = new URLSearchParams(playerPageQueryList);
let playerKey;

if (playerPageQueryParams.has("key")) {
  playerKey = playerPageQueryParams.get("key");
  console.log(playerKey);
} else {
  window.location.href = "../index.html";
}

document.body.appendChild(headerSection(playerDetailsByPlayer, allTeamsActive[10]));
