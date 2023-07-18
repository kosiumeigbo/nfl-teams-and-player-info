"use strict";
import * as apiTestData from "../modules/api-test-data.js";

// Team Information and Player Information Web Pages Locations
const playerStatsInformationPage = "./player-stats-information/player-stats-information.html";
const teamStatsInformationPage = "./team-stats-information/team-stats-information.html";

// Landing Page Sections
const exploreTeams = document.querySelector(".team-stats-data-btn");
const explorePlayers = document.querySelector(".player-stats-data-btn");
const infoCardsPlayerFormSection = document.querySelector(".info-cards-player-form-section");
const infoCardsContainer = document.querySelector(".info-cards-container");
const playerFormListContainer = document.querySelector(".player-form-list-container");
const teamsTable = document.querySelector(".teams-table");

/* 
const request1 = new XMLHttpRequest();

request1.open("GET", "https://api.sportsdata.io/v3/nfl/scores/json/Stadiums?key=ffb7852aadbe4662a351fad874b411ce");

request1.send();

request1.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
});
*/

exploreTeams.addEventListener("click", function () {
  playerFormListContainer.classList.add("hidden");
  infoCardsContainer.classList.remove("hidden");
  infoCardsPlayerFormSection.classList.remove("hidden");
  infoCardsPlayerFormSection.scrollIntoView({ behavior: "smooth" });
});

explorePlayers.addEventListener("click", function () {
  infoCardsContainer.classList.add("hidden");
  playerFormListContainer.classList.remove("hidden");
  infoCardsPlayerFormSection.classList.remove("hidden");
  infoCardsPlayerFormSection.scrollIntoView({ behavior: "smooth" });
});

teamsTable.addEventListener("click", function (e) {
  if (e.target.dataset.key) {
    console.log(e.target);
    localStorage.setItem("teamKey", e.target.dataset.key);
    window.open(teamStatsInformationPage);
  }
});
