"use strict";
import * as apiTestData from "../modules/api-test-data.js";
const testTeam = apiTestData.allTeamsActive[3];
let teamKey;

const teamPageQueryList = window.location.search;
const teamPageQueryParams = new URLSearchParams(teamPageQueryList);

if (teamPageQueryParams.has("key")) {
  teamKey = teamPageQueryParams.get("key");
  console.log(teamKey);
} else {
  window.location.href = "../index.html";
}

document.body.textContent = teamKey;
