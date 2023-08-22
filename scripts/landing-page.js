"use strict";
import * as apiTestData from "../modules/api-test-data.js";
import {
  playerPhotoNameTableHeading,
  playerPhotoNameTableRow,
  otherPlayerInfoTableHeading,
  otherPlayerInfoTableRow,
  noPlayersFoundHTML,
  errorMessageHTML,
  errMessage,
  noEnteredPlayers,
  getAllTeamsArray,
  searchAllTeamsForFirstAndLastNames,
  searchAllTeamsForStringInput
} from "../modules/landing-page-module.js";

// Team Information and Player Information Web Pages Locations
const playerStatsInformationPage = "./player-stats-information/player-stats-information.html";
const teamStatsInformationPage = "./team-stats-information/team-stats-information.html";

// Landing Page Sections
const exploreTeams = document.querySelector(".team-stats-data-btn");
const explorePlayers = document.querySelector(".player-stats-data-btn");
const infoCardsPlayerFormSection = document.querySelector(".info-cards-player-form-section");
const infoCardsContainer = document.querySelector(".info-cards-container");
const playerSearchContainer = document.querySelector(".player-search-container");
const playerSearchForm = document.querySelector("#player-search-form");
const playerSearchArea = document.querySelector("#player-search");
const playerSearchBtn = document.querySelector("#player-search-btn");
const playerSearchResultsContainer = document.querySelector(".player-search-results");

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
  playerSearchContainer.classList.add("hidden");
  infoCardsContainer.classList.remove("hidden");
  infoCardsPlayerFormSection.classList.remove("hidden");
  infoCardsPlayerFormSection.scrollIntoView({ behavior: "smooth" });
});

explorePlayers.addEventListener("click", function () {
  infoCardsContainer.classList.add("hidden");
  playerSearchForm.classList.remove("hidden");
  playerSearchContainer.classList.remove("hidden");
  infoCardsPlayerFormSection.classList.remove("hidden");
  infoCardsPlayerFormSection.scrollIntoView({ behavior: "smooth" });
});

playerSearchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (playerSearchArea.value.trim() === "") {
    playerSearchResultsContainer.innerHTML = "";
    playerSearchResultsContainer.innerHTML = noEnteredPlayers();
    return;
  }

  const searchEntriesArray = playerSearchArea.value.trim().split(" ");

  if (searchEntriesArray.length >= 3) {
    playerSearchResultsContainer.innerHTML = "";
    playerSearchResultsContainer.innerHTML = noPlayersFoundHTML();
  }

  if (searchEntriesArray.length === 2) {
    const [searchFirstName, searchLastName] = searchEntriesArray;

    getAllTeamsArray("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce")
      .then((teams) => {
        console.log(teams);
        return searchAllTeamsForFirstAndLastNames(teams, searchFirstName, searchLastName);
      })
      .then((resArray) => {
        console.log(resArray);
        if (resArray.length === 0) {
          playerSearchResultsContainer.innerHTML = "";
          playerSearchResultsContainer.innerHTML = noPlayersFoundHTML();
        } else {
          playerSearchResultsContainer.innerHTML = "";

          const photoNameContainer = document.createElement("div");
          photoNameContainer.classList.add("photo-name-container");
          const photoNameTable = document.createElement("table");
          photoNameTable.classList.add("photo-name-table");
          photoNameContainer.appendChild(photoNameTable);

          const otherPlayerInfoContainer = document.createElement("div");
          otherPlayerInfoContainer.classList.add("other-player-info-container");
          const otherPlayerInfoTable = document.createElement("table");
          otherPlayerInfoTable.classList.add("other-player-info-table");
          otherPlayerInfoContainer.appendChild(otherPlayerInfoTable);

          const playerListSectionContainer = document.createElement("div");
          playerListSectionContainer.classList.add("player-list-container");
          playerListSectionContainer.appendChild(photoNameContainer);
          playerListSectionContainer.appendChild(otherPlayerInfoContainer);

          photoNameTable.insertAdjacentHTML("afterbegin", playerPhotoNameTableHeading());
          resArray.forEach((player) => photoNameTable.insertAdjacentHTML("beforeend", playerPhotoNameTableRow(player)));

          otherPlayerInfoTable.insertAdjacentHTML("afterbegin", otherPlayerInfoTableHeading());
          resArray.forEach((player) =>
            otherPlayerInfoTable.insertAdjacentHTML("beforeend", otherPlayerInfoTableRow(player))
          );

          const playerListSection = document.createElement("section");
          playerListSection.classList.add("player-list");
          playerListSection.appendChild(playerListSectionContainer);

          playerSearchResultsContainer.appendChild(playerListSection);
        }
      });
  }

  if (searchEntriesArray.length === 1) {
    const [searchName] = searchEntriesArray;

    getAllTeamsArray("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce")
      .then((teams) => {
        console.log(teams);
        return searchAllTeamsForStringInput(teams, searchName);
      })
      .then((resArray) => {
        console.log(resArray);
        if (resArray.length === 0) {
          playerSearchResultsContainer.innerHTML = "";
          playerSearchResultsContainer.innerHTML = noPlayersFoundHTML();
        } else {
          playerSearchResultsContainer.innerHTML = "";

          const photoNameContainer = document.createElement("div");
          photoNameContainer.classList.add("photo-name-container");
          const photoNameTable = document.createElement("table");
          photoNameTable.classList.add("photo-name-table");
          photoNameContainer.appendChild(photoNameTable);

          const otherPlayerInfoContainer = document.createElement("div");
          otherPlayerInfoContainer.classList.add("other-player-info-container");
          const otherPlayerInfoTable = document.createElement("table");
          otherPlayerInfoTable.classList.add("other-player-info-table");
          otherPlayerInfoContainer.appendChild(otherPlayerInfoTable);

          const playerListSectionContainer = document.createElement("div");
          playerListSectionContainer.classList.add("player-list-container");
          playerListSectionContainer.appendChild(photoNameContainer);
          playerListSectionContainer.appendChild(otherPlayerInfoContainer);

          photoNameTable.insertAdjacentHTML("afterbegin", playerPhotoNameTableHeading());
          resArray.forEach((player) => photoNameTable.insertAdjacentHTML("beforeend", playerPhotoNameTableRow(player)));

          otherPlayerInfoTable.insertAdjacentHTML("afterbegin", otherPlayerInfoTableHeading());
          resArray.forEach((player) =>
            otherPlayerInfoTable.insertAdjacentHTML("beforeend", otherPlayerInfoTableRow(player))
          );

          const playerListSection = document.createElement("section");
          playerListSection.classList.add("player-list");
          playerListSection.appendChild(playerListSectionContainer);

          playerSearchResultsContainer.appendChild(playerListSection);
        }
      });
  }
});
