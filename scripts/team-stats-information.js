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

// Event Listener to fetch api to get selected team
window.addEventListener("DOMContentLoaded", function (e) {
  fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce")
    .then((res) => res.json())
    .then((data) => {
      team = data.find((obj) => obj.Key === teamKey);
      console.log(team.FullName);

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

      // Create playerList section and add all necessary HTML
      const teamRosterSection = document.createElement("section");
      teamRosterSection.classList.add("team-roster");
      teamRosterSection.classList.add("hidden");
      const teamRosterSectionContainer = document.createElement("div");
      teamRosterSectionContainer.classList.add("team-roster-container");
      teamRosterSectionContainer.insertAdjacentHTML("afterbegin", teamPage.teamRosterHeadings());
      const teamRosterRows = document.createElement("div");
      teamRosterRows.classList.add("team-roster-grid");
      teamRosterRows.classList.add("rows");
      teamRosterSectionContainer.insertAdjacentElement("beforeend", teamRosterRows);
      teamRosterSection.appendChild(teamRosterSectionContainer);
      main.appendChild(teamRosterSection);

      return fetch(
        `http://api.weatherapi.com/v1/current.json?key=6e08ab4df3fa41fb8e690211230808&q=${team.StadiumDetails.GeoLat},${team.StadiumDetails.GeoLong}`
      );
    })
    .then((res) => res.json())
    .then((weather) => {
      console.log(weather);

      return fetch(
        `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamKey}?key=ffb7852aadbe4662a351fad874b411ce`
      );
    })
    .then((res) => res.json())
    .then((players) => {
      console.log(players);

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
    });
});

/////////////////////////////////////////////////////////////////////////////

const testTeam = apiTestData.allTeamsActive.filter((obj) => obj.Key === teamKey)[0];
console.log(testTeam);

// document.body.textContent = testTeam.Key + ": " + testTeam.FullName;

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
teamInfoSection.classList.add("hidden");
main.appendChild(teamInfoSection);

// Create playerList section and add all necessary HTML
const teamRosterSection = document.createElement("section");
teamRosterSection.classList.add("team-roster");
teamRosterSection.classList.add("hidden");
const teamRosterSectionContainer = document.createElement("div");
teamRosterSectionContainer.classList.add("team-roster-container");
teamRosterSectionContainer.insertAdjacentHTML("afterbegin", teamPage.teamRosterHeadings());
const teamRosterRows = document.createElement("div");
teamRosterRows.classList.add("team-roster-grid");
teamRosterRows.classList.add("rows");
teamRosterSectionContainer.insertAdjacentElement("beforeend", teamRosterRows);
teamRosterSection.appendChild(teamRosterSectionContainer);
main.appendChild(teamRosterSection);

//////////////////////////////////////////////////////////////////

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
