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

