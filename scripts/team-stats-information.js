"use strict";
import * as apiTestData from "../modules/api-test-data.js";
import * as teamPage from "../modules/team-stats-information-module.js";
let teamKey;
let team;

const teamPageQueryList = window.location.search;
const teamPageQueryParams = new URLSearchParams(teamPageQueryList);

if (teamPageQueryParams.has("key")) {
  teamKey = teamPageQueryParams.get("key");
  console.log(teamKey);
  document.querySelector("title").textContent = teamKey;
  document.body.textContent = teamKey;
} else {
  window.location.href = "../index.html";
}
/*
// Event Listener to fetch api to get selected team
window.addEventListener("DOMContentLoaded", function (e) {
  fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce")
    .then((res) => {
      if (!res.ok) throw new Error(errMessageTeamsAPI);
      return res.json();
    })
    .then((data) => {
      team = data.find((obj) => obj.Key === teamKey);
      console.log(team);

      document.querySelector("title").textContent = `${team.FullName}`;

      // Create and Insert Main section to Body
      const main = document.createElement("main");
      document.body.insertAdjacentElement("afterbegin", main);

      // Create and fill header and append to main
      const header = document.createElement("header");
      header.innerHTML = teamPage.headerHTML(team);
      main.appendChild(header);

      // Create navLinks section with nav-links class, add HTML and append to main
      const navLinks = document.createElement("section");
      navLinks.classList.add("nav-links");
      navLinks.innerHTML = teamPage.navLinksHTML();
      main.appendChild(navLinks);

      // Create teamInfo section and add all necessary HTML
      const teamInfoSection = document.createElement("section");
      teamInfoSection.classList.add("team-info");

      const teamInfoSectionContainer = document.createElement("div");
      teamInfoSectionContainer.classList.add("team-info-container");

      const [coachingDetailsSection, stadiumDetailsSection] = [
        document.createElement("div"),
        document.createElement("div")
      ];
      coachingDetailsSection.classList.add("cards-section");
      stadiumDetailsSection.classList.add("cards-section");

      coachingDetailsSection.insertAdjacentHTML("afterbegin", teamPage.coachingDetailsHTML(team));
      stadiumDetailsSection.insertAdjacentHTML("afterbegin", teamPage.stadiumDetailsHTML(team));

      teamInfoSectionContainer.appendChild(coachingDetailsSection);
      teamInfoSectionContainer.appendChild(stadiumDetailsSection);
      teamInfoSection.appendChild(teamInfoSectionContainer);
      main.appendChild(teamInfoSection);

      // Create teamRoster section and add all necessary HTML
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

      const teamRosterSectionContainer = document.createElement("div");
      teamRosterSectionContainer.classList.add("team-roster-container");
      teamRosterSectionContainer.appendChild(photoNameContainer);
      teamRosterSectionContainer.appendChild(otherPlayerInfoContainer);

      const teamRosterSection = document.createElement("section");
      teamRosterSection.classList.add("team-roster");
      teamRosterSection.classList.add("hidden");
      teamRosterSection.appendChild(teamRosterSectionContainer);

      main.appendChild(teamRosterSection);

      return fetch(
        `http://api.weatherapi.com/v1/current.json?key=6e08ab4df3fa41fb8e690211230808&q=${team.StadiumDetails.GeoLat},${team.StadiumDetails.GeoLong}`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(errMessageWeatherAPI);
      return res.json();
    })
    .then((weather) => {
      // console.log(weather);

      document.querySelector(
        "#stadium-weather"
      ).textContent = `${weather.current.temp_c}ºC and ${weather.current.condition.text}`;

      return fetch(
        `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamKey}?key=ffb7852aadbe4662a351fad874b411ce`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(errMessagePlayersAPI);
      return res.json();
    })
    .then((players) => {
      const photoNameTable = document.querySelector(".photo-name-table");
      photoNameTable.insertAdjacentHTML("afterbegin", teamPage.playerPhotoNameTableHeading());
      players.forEach((player) =>
        photoNameTable.insertAdjacentHTML("beforeend", teamPage.playerPhotoNameTableRow(player))
      );

      const otherPlayerInfoTable = document.querySelector(".other-player-info-table");
      otherPlayerInfoTable.insertAdjacentHTML("afterbegin", teamPage.otherPlayerInfoTableHeading());
      players.forEach((player) =>
        otherPlayerInfoTable.insertAdjacentHTML("beforeend", teamPage.otherPlayerInfoTableRow(player))
      );

      const navButtons = document.querySelector(".nav-links");

      navButtons.addEventListener("click", function (e) {
        if (e.target.dataset.btn === "team-info") {
          document.querySelector(".team-roster").classList.add("hidden");
          document.querySelector(".team-info").classList.remove("hidden");
        }

        if (e.target.dataset.btn === "team-roster") {
          document.querySelector(".team-info").classList.add("hidden");
          document.querySelector(".team-roster").classList.remove("hidden");
        }
      });
    })
    .catch((err) => {
      console.error(err);
      if (err.message === errMessageTeamsAPI) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        errorContainer.insertAdjacentHTML("afterbegin", teamPage.errorMessageHTML(err.message));

        const main = document.createElement("main");
        main.appendChild(errorContainer);
        document.body.insertAdjacentElement("afterbegin", main);
      }

      if (err.message === errMessagePlayersAPI) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        errorContainer.insertAdjacentHTML("afterbegin", teamPage.errorMessageHTML(err.message));

        document.querySelector(".team-roster").insertAdjacentElement("afterbegin", errorContainer);

        const navButtons = document.querySelector(".nav-links");

        navButtons.addEventListener("click", function (e) {
          if (e.target.dataset.btn === "team-info") {
            document.querySelector(".team-roster").classList.add("hidden");
            document.querySelector(".team-info").classList.remove("hidden");
          }

          if (e.target.dataset.btn === "team-roster") {
            document.querySelector(".team-info").classList.add("hidden");
            document.querySelector(".team-roster").classList.remove("hidden");
          }
        });
      }
    });
});
*/

/////////////////////////////////////////////////////////////////////////////
/*
const testTeam = apiTestData.allTeamsActive.filter((obj) => obj.Key === teamKey)[0];
console.log(testTeam);
console.log(apiTestData.playerDetailsByTeam[0]);

// Change title of the page to the name of the selected team
document.querySelector("title").textContent = `${testTeam.FullName}`;
*/
/* --------- Main Section Starts --------- */
/*
// Create and Insert Main section to Body
const main = document.createElement("main");
document.body.insertAdjacentElement("afterbegin", main);

// Create and fill header and append to main
const header = document.createElement("header");
header.innerHTML = teamPage.headerHTML(testTeam);
main.appendChild(header);

// Create navLinks section with nav-links class, add HTML and append to main
const navLinks = document.createElement("section");
navLinks.classList.add("nav-links");
navLinks.innerHTML = teamPage.navLinksHTML();
main.appendChild(navLinks);

// Create teamInfo section and add all necessary HTML
const teamInfoSection = document.createElement("section");
teamInfoSection.classList.add("team-info");

const teamInfoSectionContainer = document.createElement("div");
teamInfoSectionContainer.classList.add("team-info-container");

const [coachingDetailsSection, stadiumDetailsSection] = [document.createElement("div"), document.createElement("div")];
coachingDetailsSection.classList.add("cards-section");
stadiumDetailsSection.classList.add("cards-section");

coachingDetailsSection.insertAdjacentHTML("afterbegin", teamPage.coachingDetailsHTML(testTeam));
stadiumDetailsSection.insertAdjacentHTML("afterbegin", teamPage.stadiumDetailsHTML(testTeam));

teamInfoSectionContainer.appendChild(coachingDetailsSection);
teamInfoSectionContainer.appendChild(stadiumDetailsSection);
teamInfoSection.appendChild(teamInfoSectionContainer);
main.appendChild(teamInfoSection);

// Create teamRoster section and add all necessary HTML
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

const teamRosterSectionContainer = document.createElement("div");
teamRosterSectionContainer.classList.add("team-roster-container");
teamRosterSectionContainer.appendChild(photoNameContainer);
teamRosterSectionContainer.appendChild(otherPlayerInfoContainer);

const teamRosterSection = document.createElement("section");
teamRosterSection.classList.add("team-roster");
teamRosterSection.classList.add("hidden");
teamRosterSection.appendChild(teamRosterSectionContainer);

main.appendChild(teamRosterSection);

//////////////////////////////////////////////////////////////////

const players = apiTestData.playerDetailsByTeam;

players.forEach((player) => console.log(player));

// const photoNameTable = document.querySelector(".photo-name-table");
photoNameTable.insertAdjacentHTML("afterbegin", teamPage.playerPhotoNameTableHeading());
players.forEach((player) => photoNameTable.insertAdjacentHTML("beforeend", teamPage.playerPhotoNameTableRow(player)));

// const otherPlayerInfoTable = document.querySelector(".other-player-info-table");
otherPlayerInfoTable.insertAdjacentHTML("afterbegin", teamPage.otherPlayerInfoTableHeading());
players.forEach((player) =>
  otherPlayerInfoTable.insertAdjacentHTML("beforeend", teamPage.otherPlayerInfoTableRow(player))
);
const navButtons = document.querySelector(".nav-links");

navButtons.addEventListener("click", function (e) {
  if (e.target.dataset.btn === "team-info") {
    document.querySelector(".team-roster").classList.add("hidden");
    document.querySelector(".team-info").classList.remove("hidden");
  }

  if (e.target.dataset.btn === "team-roster") {
    document.querySelector(".team-info").classList.add("hidden");
    document.querySelector(".team-roster").classList.remove("hidden");
  }
});
*/
/* --------- Main Section Ends --------- */
