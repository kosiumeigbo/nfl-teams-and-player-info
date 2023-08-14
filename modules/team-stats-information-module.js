/* Header Section */

export const headerHTML = function (teamObj) {
  return `
<div class="header-container">
  <div class="name-conference-division">
    <h1>${teamObj.FullName}</h1>
    <h3>${teamObj.Conference} ${teamObj.Division}</h3>
  </div>
  <div class="team-logo">
    <img src="${teamObj.WikipediaLogoUrl}" alt="" />
  </div>
</div>
<div class="header-color"></div>
<div style="background-color: #${teamObj.SecondaryColor}" class="secondary-color"></div>
<div style="background-color: #${teamObj.PrimaryColor}" class="primary-color"></div>
    `;
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
      <p>${teamObj.StadiumDetails.State}</p>
    </div>
    <div class="card">
      <h3>Playing Surface</h3>
      <p>${teamObj.StadiumDetails.PlayingSurface}</p>
    </div>
    <div class="card">
      <h3>Current Weather Details</h3>
      <p id="stadium-weather">Weather details are currently unavailable</p>
    </div>
  </div>
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
    <td>${playerObj.Number}</td>
    <td>${playerObj.Position}</td>
    <td>${playerObj.Active ? "ACT" : "NON-ACT"}</td>
    <td>${playerObj.HeightFeet}ft ${playerObj.HeightInches}in</td>
    <td>${playerObj.Weight}lbs</td>
    <td>${playerObj.ExperienceString}</td>
    <td>${playerObj.College}</td>
  </tr>
  `;
};
