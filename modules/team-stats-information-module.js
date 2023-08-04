/* Main Part of Page */

export const main = document.createElement("main");

/* Header Section */
export const header = document.createElement("header");

export const headerHTML = function (teamObj) {
  return `
<div class="header-container">
  <h1>${teamObj.FullName}</h1>
  <p>${teamObj.Conference} ${teamObj.Division}</p>
</div>
<div class="header-color"></div>
<div class="team-logo">
  <img src="${teamObj.WikipediaLogoUrl}" alt="" />
</div>
<div style="background-color: #${teamObj.SecondaryColor}" class="secondary-color"></div>
<div style="background-color: #${teamObj.PrimaryColor}" class="primary-color"></div>
    `;
};
