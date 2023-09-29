const playerActBackgroundColor = "rgb(14, 183, 14)";
const playerNonActBackgroundColor = "rgb(197, 53, 13)";
const errMessage = "There was a problem getting the requested information from the server";

export const headerHTML = function (playerObj, teamObj) {
  return `
    <div class="header-container">
        <div class="player-header-info">
            <h2 class="name">${playerObj.Name}</h2>
            <div class="pos-number">
            <span><strong>${playerObj.Position}</strong></span> &#8226; <span>#${
    playerObj.Number === 0 || playerObj.Number ? playerObj.Number : "N/A"
  }</span>
            </div>
            <a href="../team-stats-information/team-stats-information.html?key=${teamObj.Key}" target="_blank">${
    teamObj.FullName
  }</a>
            <div class="status"><span style="background-color: ${
              playerObj.Active ? playerActBackgroundColor : playerNonActBackgroundColor
            }">${playerObj.Active ? "ACTIVE" : "INACTIVE"}</span></div>
        </div>
        <div class="player-photo">
            <img
            src="${playerObj.PhotoUrl}"
            alt="${playerObj.Name}'s photo"
            />
        </div>
    </div>
    <div class="header-color"></div>
    <div style="background-color: #${teamObj.SecondaryColor}" class="secondary-color"></div>
    <div style="background-color: #${teamObj.PrimaryColor}" class="primary-color"></div>
  `;
};

export const headerSection = function (playerObj, teamObj) {
  const header = document.createElement("header");
  header.insertAdjacentHTML("afterbegin", headerHTML(playerObj, teamObj));
  return header;
};

export const playerInfoHTML = function (playerObj) {
  return `
    <h2>Player Details and Information</h2>
    <div class="cards-container">
      <div class="card">
          <h3>Age</h3>
          <p>${playerObj.Age}</p>
      </div>
      <div class="card">
          <h3>Date of Birth</h3>
          <p>${playerObj.BirthDateString}</p>
      </div>
      <div class="card">
          <h3>College</h3>
          <p>${playerObj.College}</p>
      </div>
      <div class="card">
          <h3>Experience</h3>
          <p>${playerObj.ExperienceString}</p>
      </div>
      <div class="card">
          <h3>Height</h3>
          <p>${playerObj.HeightFeet}ft ${playerObj.HeightInches}in</p>
      </div>
      <div class="card">
          <h3>Weight</h3>
          <p>${playerObj.Weight}lbs</p>
      </div>
    </div>
    `;
};

export const playerInfoSection = function (playerObj) {
  const infoSection = document.createElement("section");
  infoSection.classList.add("player-info");

  const infoSectionContainer = document.createElement("div");
  infoSectionContainer.classList.add("player-info-container");

  const playerDetailsSection = document.createElement("div");
  playerDetailsSection.classList.add("cards-section");

  playerDetailsSection.insertAdjacentHTML("afterbegin", playerInfoHTML(playerObj));
  infoSectionContainer.appendChild(playerDetailsSection);
  infoSection.appendChild(infoSectionContainer);

  return infoSection;
};

export const errorMessageHTML = function (errMessage) {
  return `
      <h3>REQUEST ERROR</h3>
      <p>${errMessage}</p>
      `;
};

/* ------------------------------------------------------------------------------------------------------- */

export const buildPlayerPage = async function (playerID, teamKey) {
  try {
    const playerRes = await fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/Player/${playerID}?key=4dd38d14fccd43aa9f383a426166a3ce`
    );
    const playerPromise = playerRes.json();

    const teamsRes = await fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=4dd38d14fccd43aa9f383a426166a3ce`
    );
    const teamsPromise = teamsRes.json();

    const [player, teams] = await Promise.all([playerPromise, teamsPromise]);
    const team = teams.find((obj) => obj.Key === teamKey);

    document.title = `${player.Name}`;

    const main = document.createElement("main");

    const pageHeader = headerSection(player, team);
    const pageInfoSection = playerInfoSection(player);

    main.appendChild(pageHeader);
    main.appendChild(pageInfoSection);

    return main;
  } catch (e) {
    console.error(e);
    e.message = errMessage;

    const main = document.createElement("main");
    const errorContainer = document.createElement("div");

    errorContainer.classList.add("error-container");
    errorContainer.insertAdjacentHTML("afterbegin", errorMessageHTML(e.message));

    main.appendChild(errorContainer);

    return main;
  }
};
