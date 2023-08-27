import { playerDetailsByPlayer, allTeamsActive } from "../modules/api-test-data.js";
import {
  headerSection,
  playerInfoSection,
  buildPlayerPage
} from "../modules/player-stats-information-module.js";

const playerPageQueryList = window.location.search;
const playerPageQueryParams = new URLSearchParams(playerPageQueryList);
let playerKey, teamKey;

const [player, team] = [playerDetailsByPlayer, allTeamsActive[20]];
console.log(player);
console.log(team);

if (playerPageQueryParams.has("key")) {
  playerKey = playerPageQueryParams.get("key");
  teamKey = playerPageQueryParams.get("team");
  console.log(playerKey);
  console.log(teamKey);
} else {
  window.location.href = "../index.html";
}

window.addEventListener("DOMContentLoaded", function () {
  buildPlayerPage(playerKey, teamKey).then((mainSection) => {
    document.body.insertAdjacentElement("afterbegin", mainSection);
  });
});
