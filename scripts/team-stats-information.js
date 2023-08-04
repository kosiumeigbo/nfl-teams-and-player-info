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

const testTeam = apiTestData.allTeamsActive.filter((obj) => obj.Key === teamKey)[0];
console.log(testTeam);

// document.body.textContent = testTeam.Key + ": " + testTeam.FullName;

teamPage.header.innerHTML = teamPage.headerHTML(testTeam);
teamPage.main.appendChild(teamPage.header);
document.body.insertAdjacentElement("afterbegin", teamPage.main);
