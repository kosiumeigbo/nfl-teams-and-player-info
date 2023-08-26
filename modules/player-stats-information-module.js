import { playerDetailsByPlayer, allTeamsActive } from "../modules/api-test-data.js";

const playerActBackgroundColor = "rgb(14, 183, 14)";
const playerNonActBackgroundColor = "rgb(197, 53, 13)";

export const headerHTML = function (playerObj, teamObj) {
  return `
    <div class="header-container">
        <div class="player-header-info">
            <h2 class="name">${playerObj.Name}</h2>
            <div class="pos-number">
            <span><strong>${playerObj.Position}</strong></span> &#8226; <span>#${playerObj.Number}</span>
            </div>
            <a href="../team-stats-information/team-stats-information.html?key=${teamObj.Key}" target="_blank">${
    teamObj.FullName
  }</a>
            <div class="status"><span style="background-color: ${
              playerObj.Active ? playerActBackgroundColor : playerNonActBackgroundColor
            }">${playerObj.Active ? "ACTIVE" : "INACTIVE"}</span></div>
        </div>
        <div class="player-photo">
            <img
            src="${playerObj.PhotoUrl}"
            alt="${playerObj.Name}'s photo"
            />
        </div>
    </div>
    <div class="header-color"></div>
    <div style="background-color: #${teamObj.SecondaryColor}" class="secondary-color"></div>
    <div style="background-color: #${teamObj.PrimaryColor}" class="primary-color"></div>
  `;
};

export const headerSection = function (playerObj, teamObj) {
  const header = document.createElement("header");
  header.insertAdjacentHTML("afterbegin", headerHTML(playerObj, teamObj));
  return header;
};

export const buildPlayerPage = async function (playerID) {
  return;
};
