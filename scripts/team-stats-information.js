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
