"use strict";
import * as apiTestData from "../modules/api-test-data.js";
import * as teamPage from "../modules/team-stats-information-module.js";
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
    });
});
