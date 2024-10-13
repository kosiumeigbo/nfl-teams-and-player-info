import {
  noPlayersFoundHTML,
  errorMessageHTML,
  buildPlayerListSection,
  noEnteredPlayers,
  getAllTeamsArray,
  searchAllTeamsForFirstAndLastNames,
  searchAllTeamsForStringInput
} from "../modules/landing-page-module.js";

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

    getAllTeamsArray(`https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${process.env.SPORTSDATA_API_KEY}`)
      .then((teams) => {
        if (teams instanceof Error) {
          throw teams;
        }
        return searchAllTeamsForFirstAndLastNames(teams, searchFirstName, searchLastName);
      })
      .then((resArray) => {
        if (resArray instanceof Error) {
          throw resArray;
        }
        if (resArray.length === 0) {
          playerSearchResultsContainer.innerHTML = "";
          playerSearchResultsContainer.innerHTML = noPlayersFoundHTML();
        } else {
          playerSearchResultsContainer.innerHTML = "";
          playerSearchResultsContainer.appendChild(buildPlayerListSection(resArray));
        }
      })
      .catch((err) => {
        playerSearchResultsContainer.innerHTML = "";
        playerSearchResultsContainer.innerHTML = errorMessageHTML(err.message);
      });
  }

  if (searchEntriesArray.length === 1) {
    const [searchName] = searchEntriesArray;

    getAllTeamsArray(`https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${process.env.SPORTSDATA_API_KEY}`)
      .then((teams) => {
        if (teams instanceof Error) {
          throw teams;
        }
        return searchAllTeamsForStringInput(teams, searchName);
      })
      .then((resArray) => {
        if (resArray instanceof Error) {
          throw resArray;
        }
        if (resArray.length === 0) {
          playerSearchResultsContainer.innerHTML = "";
          playerSearchResultsContainer.innerHTML = noPlayersFoundHTML();
        } else {
          playerSearchResultsContainer.innerHTML = "";
          playerSearchResultsContainer.appendChild(buildPlayerListSection(resArray));
        }
      })
      .catch((err) => {
        playerSearchResultsContainer.innerHTML = "";
        playerSearchResultsContainer.innerHTML = errorMessageHTML(err.message);
      });
  }
});
