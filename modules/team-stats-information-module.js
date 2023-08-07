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
      <p>30º</p>
    </div>
  </div>
  `;
};
