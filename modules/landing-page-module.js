export const errMessage = "There was a problem getting the requested information from the server. Please try again.";

export const noPlayersFoundHTML = function () {
  return `
    <h3>NO PLAYERS FOUND</h3>
    <p>No results. Try a different search.</p>
    `;
};

export const errorMessageHTML = function (errMessage) {
  return `
    <h3>REQUEST ERROR</h3>
    <p>${errMessage}</p>
    `;
};

export const noEnteredPlayers = function () {
  return `
    <h3>NOT A VALID ENTRY</h3>
    <p>Please enter a valid value</p>
    `;
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
          href="../player-stats-information/player-stats-information.html?key=${playerObj.PlayerID}"
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
      <th>Team</th>
      <th>No</th>
      <th>Pos</th>
      <th>Status</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Experience</th>
    </tr>
    `;
};

export const otherPlayerInfoTableRow = function (playerObj) {
  return `
    <tr class="row">
      <td>${playerObj.Team}</td>
      <td>${playerObj.Number ? playerObj.Number : "N/A"}</td>
      <td>${playerObj.Position}</td>
      <td>${playerObj.Active ? "ACT" : "NON-ACT"}</td>
      <td>${playerObj.HeightFeet}ft ${playerObj.HeightInches}in</td>
      <td>${playerObj.Weight}lbs</td>
      <td>${playerObj.ExperienceString}</td>
    </tr>
    `;
};

export const getAllTeamsArray = async function (urlAllTeams) {
  const response = await fetch(urlAllTeams);
  const allTeamsArray = await response.json();

  return allTeamsArray;
};

export const searchAllTeamsForFirstAndLastNames = async function (teamsArr, searchFirstName, searchLastName) {
  let searchResults = [];

  for (let team of teamsArr) {
    const teamSearchResults = await searchTeamForFirstAndLastNames(
      `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team.Key}?key=ffb7852aadbe4662a351fad874b411ce`,
      searchFirstName,
      searchLastName
    );
    searchResults.push(...teamSearchResults);
  }

  return searchResults;
};

export const searchAllTeamsForStringInput = async function (teamsArr, searchString) {
  let searchResults = [];

  for (let team of teamsArr) {
    const teamSearchResults = await searchTeamForStringInput(
      `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team.Key}?key=ffb7852aadbe4662a351fad874b411ce`,
      searchString
    );
    searchResults.push(...teamSearchResults);
  }

  return searchResults;
};

export const searchTeamForFirstAndLastNames = async function (urlTeam, searchFirstName, searchLastName) {
  let searchResultsTeamArray = [];
  const resTeam = await fetch(urlTeam);
  const playersForTeam = await resTeam.json();

  playersForTeam.forEach((player) => {
    if (
      player.FirstName.toLowerCase() === searchFirstName.toLowerCase() &&
      player.LastName.toLowerCase() === searchLastName.toLowerCase()
    ) {
      searchResultsTeamArray.push(player);
    }
  });

  return searchResultsTeamArray;
};

export const searchTeamForStringInput = async function (urlTeam, searchString) {
  let searchResultsTeamArray = [];
  const resTeam = await fetch(urlTeam);
  const playersForTeam = await resTeam.json();

  playersForTeam.forEach((player) => {
    if (player.FirstName.toLowerCase().includes(searchString) || player.LastName.toLowerCase().includes(searchString)) {
      searchResultsTeamArray.push(player);
    }
  });

  return searchResultsTeamArray;
};
