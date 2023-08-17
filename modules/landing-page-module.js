export const noPlayersFoundHTML = function () {
  return `
    <h3>NO PLAYERS FOUND</h3>
    <p>No results. Try a different search.</p>
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
