import * as teamPage from "../modules/team-stats-information-module.js";
import "dotenv/config";
let teamKey;

const teamPageQueryList = window.location.search;
const teamPageQueryParams = new URLSearchParams(teamPageQueryList);

if (teamPageQueryParams.has("key")) {
  teamKey = teamPageQueryParams.get("key");
  console.log(teamKey);
} else {
  window.location.href = "../index.html";
}

window.addEventListener("DOMContentLoaded", function (e) {
  teamPage
    .buildTeamPage(teamKey)
    .then((mainAndTeam) => {
      console.log(mainAndTeam);
      if (!Array.isArray(mainAndTeam)) {
        document.body.appendChild(mainAndTeam);
        throw new Error(teamPage.errMessageTeamsAPI);
      }

      document.body.appendChild(mainAndTeam[0]);

      return teamPage.getWeatherData(mainAndTeam[1]);
    })
    .then((weatherObj) => {
      const weatherDetails = this.document.querySelector("#stadium-weather");
      if (!weatherObj.hasOwnProperty("current") && !weatherObj.hasOwnProperty("location")) {
        weatherDetails.textContent = weatherObj;
      } else {
        weatherDetails.textContent = `${weatherObj.current.temp_c}ºC and ${weatherObj.current.condition.text}`;
      }
    })
    .catch((err) => console.error(err));
});
