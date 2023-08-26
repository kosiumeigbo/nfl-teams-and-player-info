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
  try {
    const response = await fetch(urlAllTeams);
    const allTeamsArray = await response.json();

    return allTeamsArray;
  } catch (e) {
    console.log(e);
    e.message = errMessage;
    return e;
  }
};

export const searchAllTeamsForFirstAndLastNames = async function (teamsArr, searchFirstName, searchLastName) {
  try {
    const teamPromises = teamsArr.map((team) => {
      return searchTeamForFirstAndLastNames(
        `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team.Key}?key=ffb7852aadbe4662a351fad874b411ce`,
        searchFirstName,
        searchLastName
      );
    });

    const searchResults = await Promise.all(teamPromises);
    return searchResults.flat();
  } catch (e) {
    console.log(e);
    e.message = errMessage;
    return e;
  }
};

export const searchAllTeamsForStringInput = async function (teamsArr, searchString) {
  try {
    const teamPromises = teamsArr.map((team) => {
      return searchTeamForStringInput(
        `https://api.sportsdata.io/v3/nfl/scores/json/Players/${team.Key}?key=ffb7852aadbe4662a351fad874b411ce`,
        searchString
      );
    });

    const searchResults = await Promise.all(teamPromises);
    return searchResults.flat();
  } catch (e) {
    console.log(e);
    e.message = errMessage;
    return e;
  }
};

export const searchTeamForFirstAndLastNames = async function (urlTeam, searchFirstName, searchLastName) {
  try {
    let searchResultsTeamArray = [];
    const resTeamPlayers = await fetch(urlTeam);
    const playersForTeam = await resTeamPlayers.json();

    await playersForTeam.forEach((player) => {
      if (
        player.FirstName.toLowerCase() === searchFirstName.toLowerCase() &&
        player.LastName.toLowerCase() === searchLastName.toLowerCase()
      ) {
        searchResultsTeamArray.push(player);
      }
    });

    return searchResultsTeamArray;
  } catch (e) {
    console.log(e);
    e.message = errMessage;
    return e;
  }
};

export const searchTeamForStringInput = async function (urlTeamPlayers, searchString) {
  try {
    let searchResultsTeamArray = [];
    const resTeamPlayers = await fetch(urlTeamPlayers);
    const playersForTeam = await resTeamPlayers.json();

    await playersForTeam.forEach((player) => {
      if (
        player.FirstName.toLowerCase().includes(searchString.toLowerCase()) ||
        player.LastName.toLowerCase().includes(searchString.toLowerCase())
      ) {
        searchResultsTeamArray.push(player);
      }
    });

    return searchResultsTeamArray;
  } catch (e) {
    console.log(e);
    e.message = errMessage;
    return e;
  }
};

export const buildPlayerListSection = function (players) {
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
  players.forEach((player) => photoNameTable.insertAdjacentHTML("beforeend", playerPhotoNameTableRow(player)));

  otherPlayerInfoTable.insertAdjacentHTML("afterbegin", otherPlayerInfoTableHeading());
  players.forEach((player) => otherPlayerInfoTable.insertAdjacentHTML("beforeend", otherPlayerInfoTableRow(player)));

  const playerListSection = document.createElement("section");
  playerListSection.classList.add("player-list");
  playerListSection.appendChild(playerListSectionContainer);

  return playerListSection;
};
