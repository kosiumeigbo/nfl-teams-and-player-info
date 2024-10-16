export const errMessageTeamsAPI = "Server could not be reached.";
const errMessageWeatherAPI = "Weather API Server could not be reached.";
const errMessagePlayersAPI = "Team Players server could not be reached.";

/* Header Section */

export const headerHTML = function (teamObj) {
  return `
<div class="header-container">
  <div class="name-conference-division">
    <h1>${teamObj.FullName}</h1>
    <h3>${teamObj.Conference} ${teamObj.Division}</h3>
  </div>
  <div class="team-logo">
    <img src="${teamObj.WikipediaLogoUrl}" alt="${teamObj.FullName} Team Logo" />
  </div>
</div>
<div class="header-color"></div>
<div style="background-color: #${teamObj.SecondaryColor}" class="secondary-color"></div>
<div style="background-color: #${teamObj.PrimaryColor}" class="primary-color"></div>
    `;
};

export const headerSection = function (teamObj) {
  const header = document.createElement("header");
  header.innerHTML = headerHTML(teamObj);
  return header;
};

/* Nav Section */
export const navLinksHTML = function () {
  return `
  <div class="nav-links-container">
    <button data-btn="team-info">Team Info</button>
    <button data-btn="team-roster">Team Roster</button>
  </div>
  `;
};

export const navLinksSection = function () {
  const navLinks = document.createElement("section");
  navLinks.classList.add("nav-links");
  navLinks.innerHTML = navLinksHTML();

  return navLinks;
};

/* Team Info Section */
export const coachingDetailsHTML = function (teamObj) {
  return `
      <h2>Coaching Staff and Defensive Scheme</h2>
      <div class="cards-container">
        <div class="card">
            <h3>Head Coach</h3>
            <p>${teamObj.HeadCoach}</p>
        </div>
        <div class="card">
            <h3>Offensive Coordinator</h3>
            <p>${teamObj.OffensiveCoordinator}</p>
        </div>
        <div class="card">
            <h3>Defensive Coordinator</h3>
            <p>${teamObj.DefensiveCoordinator}</p>
        </div>
        <div class="card">
            <h3>Special Teams Coach</h3>
            <p>${teamObj.SpecialTeamsCoach}</p>
        </div>
        <div class="card">
            <h3>Defensive Scheme</h3>
            <p>${teamObj.DefensiveScheme}</p>
        </div>
        <div class="card">
            <h3>Offensive Scheme</h3>
            <p>${teamObj.OffensiveScheme}</p>
        </div>
      </div>
  `;
};

export const getState = function (abbr) {
  const key = abbr;
  switch (key) {
    case "AL":
      return "Alabama";
    case "AK":
      return "Alaska";
    case "AZ":
      return "Arizona";
    case "AR":
      return "Arkansas";
    case "CA":
      return "California";
    case "CO":
      return "Colorado";
    case "CT":
      return "Connecticut";
    case "DE":
      return "Delaware";
    case "DC":
      return "District of Columbia";
    case "FL":
      return "Florida";
    case "GA":
      return "Georgia";
    case "HI":
      return "Hawaii";
    case "ID":
      return "Idaho";
    case "IL":
      return "Illinois";
    case "IN":
      return "Indiana";
    case "IA":
      return "Iowa";
    case "KS":
      return "Kansas";
    case "KY":
      return "Kentucky";
    case "LA":
      return "Louisiana";
    case "ME":
      return "Maine";
    case "MD":
      return "Maryland";
    case "MA":
      return "Massachusetts";
    case "MI":
      return "Michigan";
    case "MN":
      return "Minnesota";
    case "MS":
      return "Mississippi";
    case "MO":
      return "Missouri";
    case "MT":
      return "Montana";
    case "NE":
      return "Nebraska";
    case "NV":
      return "Nevada";
    case "NH":
      return "New Hampshire";
    case "NJ":
      return "New Jersey";
    case "NM":
      return "New Mexico";
    case "NY":
      return "New York";
    case "NC":
      return "North Carolina";
    case "ND":
      return "North Dakota";
    case "OH":
      return "Ohio";
    case "OK":
      return "Oklahoma";
    case "OR":
      return "Oregon";
    case "PA":
      return "Pennsylvania";
    case "RI":
      return "Rhode Island";
    case "SC":
      return "South Carolina";
    case "SD":
      return "South Dakota";
    case "TN":
      return "Tennessee";
    case "TX":
      return "Texas";
    case "UT":
      return "Utah";
    case "VT":
      return "Vermont";
    case "VA":
      return "Virginia";
    case "WA":
      return "Washington";
    case "WV":
      return "West Virginia";
    case "WI":
      return "Wisconsin";
    case "WY":
      return "Wyoming";
    default:
      return "Cannot recognise name";
  }
};

export const stadiumDetailsHTML = function (teamObj) {
  return `
  <h2>Stadium Details</h2>
  <div class="stadium">
    <img src="../images/stadiums/${teamObj.Key}.jpg" alt="" />
  </div>
  <div class="cards-container">
    <div class="card">
      <h3>Name</h3>
      <p>${teamObj.StadiumDetails.Name}</p>
    </div>
    <div class="card">
      <h3>Capacity</h3>
      <p>${teamObj.StadiumDetails.Capacity}</p>
    </div>
    <div class="card">
      <h3>City</h3>
      <p>${teamObj.StadiumDetails.City}</p>
    </div>
    <div class="card">
      <h3>State</h3>
      <p>${getState(teamObj.StadiumDetails.State)}</p>
    </div>
    <div class="card">
      <h3>Playing Surface</h3>
      <p>${teamObj.StadiumDetails.PlayingSurface}</p>
    </div>
    <div class="card">
      <h3>Current Weather Details</h3>
      <p id="stadium-weather">Loading...</p>
    </div>
  </div>
  `;
};

export const infoSection = function (teamObj) {
  const teamInfo = document.createElement("section");
  teamInfo.classList.add("team-info");

  const teamInfoContainer = document.createElement("div");
  teamInfoContainer.classList.add("team-info-container");

  const [coachingDetailsSection, stadiumDetailsSection] = [
    document.createElement("div"),
    document.createElement("div")
  ];
  coachingDetailsSection.classList.add("cards-section");
  stadiumDetailsSection.classList.add("cards-section");

  coachingDetailsSection.insertAdjacentHTML("afterbegin", coachingDetailsHTML(teamObj));
  stadiumDetailsSection.insertAdjacentHTML("afterbegin", stadiumDetailsHTML(teamObj));

  teamInfoContainer.appendChild(coachingDetailsSection);
  teamInfoContainer.appendChild(stadiumDetailsSection);
  teamInfo.appendChild(teamInfoContainer);

  return teamInfo;
};

export const playerPhotoNameTableHeading = function () {
  return `
  <tr class="heading">
    <th>Player</th>
  </tr>
  `;
};

export const playerPhotoNameTableRow = function (playerObj) {
  return `
  <tr class="row">
    <td>
      <a
        href="../player-stats-information/player-stats-information.html?key=${playerObj.PlayerID}&team=${playerObj.Team}"
        target="_blank"
      >
        <img
          src="${playerObj.PhotoUrl}"
          alt="${playerObj.Name} photo"
        />
        <p>${playerObj.Name}</p>
      </a>
    </td>
  </tr>
  `;
};

export const otherPlayerInfoTableHeading = function () {
  return `
  <tr class="heading">
    <th>No</th>
    <th>Pos</th>
    <th>Status</th>
    <th>Height</th>
    <th>Weight</th>
    <th>Experience</th>
    <th>College</th>
  </tr>
  `;
};

export const otherPlayerInfoTableRow = function (playerObj) {
  return `
  <tr class="row">
    <td>${playerObj.Number === 0 || playerObj.Number ? playerObj.Number : "N/A"}</td>
    <td>${playerObj.Position}</td>
    <td>${playerObj.Active ? "ACT" : "NON-ACT"}</td>
    <td>${playerObj.HeightFeet}ft ${playerObj.HeightInches}in</td>
    <td>${playerObj.Weight}lbs</td>
    <td>${playerObj.ExperienceString}</td>
    <td>${playerObj.College}</td>
  </tr>
  `;
};

export const rosterSection = function (playersPar) {
  const teamRoster = document.createElement("section");
  teamRoster.classList.add("team-roster");
  teamRoster.classList.add("hidden");

  if (playersPar instanceof Array) {
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

    photoNameTable.insertAdjacentHTML("afterbegin", playerPhotoNameTableHeading());
    playersPar.forEach((player) => photoNameTable.insertAdjacentHTML("beforeend", playerPhotoNameTableRow(player)));

    otherPlayerInfoTable.insertAdjacentHTML("afterbegin", otherPlayerInfoTableHeading());
    playersPar.forEach((player) =>
      otherPlayerInfoTable.insertAdjacentHTML("beforeend", otherPlayerInfoTableRow(player))
    );

    const teamRosterContainer = document.createElement("div");
    teamRosterContainer.classList.add("team-roster-container");
    teamRosterContainer.appendChild(photoNameContainer);
    teamRosterContainer.appendChild(otherPlayerInfoContainer);

    teamRoster.appendChild(teamRosterContainer);
  } else {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-container");
    errorContainer.insertAdjacentHTML("afterbegin", playersPar);

    teamRoster.insertAdjacentElement("afterbegin", errorContainer);
  }

  return teamRoster;
};

export const errorMessageHTML = function (errMessage) {
  return `
      <h3>REQUEST ERROR</h3>
      <p>${errMessage}</p>
      `;
};

export const getWeatherData = async function (teamObj) {
  try {
    const weatherRes = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${teamObj.StadiumDetails.GeoLat},${teamObj.StadiumDetails.GeoLong}`
    );
    const weatherObj = await weatherRes.json();
    console.log(weatherObj);
    return weatherObj;
  } catch (e) {
    console.error(e);
    return errMessageWeatherAPI;
  }
};

export const getTeamPlayers = async function (teamKey) {
  try {
    const teamPlayersRes = await fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamKey}?key=${process.env.SPORTSDATA_API_KEY}`
    );
    const teamPlayersArray = await teamPlayersRes.json();
    return teamPlayersArray;
  } catch (e) {
    console.error(e);
    return errorMessageHTML(errMessagePlayersAPI);
  }
};

export const buildTeamPage = async function (teamKey) {
  try {
    const teamsRes = await fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${process.env.SPORTSDATA_API_KEY}`
    );
    const teamsArr = await teamsRes.json();
    const team = teamsArr.find((obj) => obj.Key === teamKey);

    document.title = `${team.FullName}`;

    const teamPlayers = await getTeamPlayers(teamKey);

    const main = document.createElement("main");

    const teamHeaderSection = headerSection(team);
    const teamNavLinksSection = navLinksSection();
    const teamInfoSection = infoSection(team);
    const teamRosterSection = rosterSection(teamPlayers);

    teamNavLinksSection.addEventListener("click", function (e) {
      if (e.target.dataset.btn === "team-info") {
        teamRosterSection.classList.add("hidden");
        teamInfoSection.classList.remove("hidden");
        teamInfoSection.scrollIntoView({ behavior: "smooth" });
      }

      if (e.target.dataset.btn === "team-roster") {
        teamInfoSection.classList.add("hidden");
        teamRosterSection.classList.remove("hidden");
        teamRosterSection.scrollIntoView({ behavior: "smooth" });
      }
    });

    main.appendChild(teamHeaderSection);
    main.appendChild(teamNavLinksSection);
    main.appendChild(teamInfoSection);
    main.appendChild(teamRosterSection);

    return [main, team];
  } catch (e) {
    console.error(e);

    const main = document.createElement("main");

    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-container");
    errorContainer.insertAdjacentHTML("afterbegin", errorMessageHTML(errMessageTeamsAPI));
    main.appendChild(errorContainer);

    return main;
  }
};
