let e;const t="Server could not be reached.",a=function(e){let t=document.createElement("header");return t.innerHTML=`
<div class="header-container">
  <div class="name-conference-division">
    <h1>${e.FullName}</h1>
    <h3>${e.Conference} ${e.Division}</h3>
  </div>
  <div class="team-logo">
    <img src="${e.WikipediaLogoUrl}" alt="${e.FullName} Team Logo" />
  </div>
</div>
<div class="header-color"></div>
<div style="background-color: #${e.SecondaryColor}" class="secondary-color"></div>
<div style="background-color: #${e.PrimaryColor}" class="primary-color"></div>
    `,t},r=function(){let e=document.createElement("section");return e.classList.add("nav-links"),e.innerHTML=`
  <div class="nav-links-container">
    <button data-btn="team-info">Team Info</button>
    <button data-btn="team-roster">Team Roster</button>
  </div>
  `,e},n=function(e){switch(e){case"AL":return"Alabama";case"AK":return"Alaska";case"AZ":return"Arizona";case"AR":return"Arkansas";case"CA":return"California";case"CO":return"Colorado";case"CT":return"Connecticut";case"DE":return"Delaware";case"DC":return"District of Columbia";case"FL":return"Florida";case"GA":return"Georgia";case"HI":return"Hawaii";case"ID":return"Idaho";case"IL":return"Illinois";case"IN":return"Indiana";case"IA":return"Iowa";case"KS":return"Kansas";case"KY":return"Kentucky";case"LA":return"Louisiana";case"ME":return"Maine";case"MD":return"Maryland";case"MA":return"Massachusetts";case"MI":return"Michigan";case"MN":return"Minnesota";case"MS":return"Mississippi";case"MO":return"Missouri";case"MT":return"Montana";case"NE":return"Nebraska";case"NV":return"Nevada";case"NH":return"New Hampshire";case"NJ":return"New Jersey";case"NM":return"New Mexico";case"NY":return"New York";case"NC":return"North Carolina";case"ND":return"North Dakota";case"OH":return"Ohio";case"OK":return"Oklahoma";case"OR":return"Oregon";case"PA":return"Pennsylvania";case"RI":return"Rhode Island";case"SC":return"South Carolina";case"SD":return"South Dakota";case"TN":return"Tennessee";case"TX":return"Texas";case"UT":return"Utah";case"VT":return"Vermont";case"VA":return"Virginia";case"WA":return"Washington";case"WV":return"West Virginia";case"WI":return"Wisconsin";case"WY":return"Wyoming";default:return"Cannot recognise name"}},s=function(e){let t=document.createElement("section");t.classList.add("team-info");let a=document.createElement("div");a.classList.add("team-info-container");let[r,s]=[document.createElement("div"),document.createElement("div")];return r.classList.add("cards-section"),s.classList.add("cards-section"),r.insertAdjacentHTML("afterbegin",`
      <h2>Coaching Staff and Defensive Scheme</h2>
      <div class="cards-container">
        <div class="card">
            <h3>Head Coach</h3>
            <p>${e.HeadCoach}</p>
        </div>
        <div class="card">
            <h3>Offensive Coordinator</h3>
            <p>${e.OffensiveCoordinator}</p>
        </div>
        <div class="card">
            <h3>Defensive Coordinator</h3>
            <p>${e.DefensiveCoordinator}</p>
        </div>
        <div class="card">
            <h3>Special Teams Coach</h3>
            <p>${e.SpecialTeamsCoach}</p>
        </div>
        <div class="card">
            <h3>Defensive Scheme</h3>
            <p>${e.DefensiveScheme}</p>
        </div>
        <div class="card">
            <h3>Offensive Scheme</h3>
            <p>${e.OffensiveScheme}</p>
        </div>
      </div>
  `),s.insertAdjacentHTML("afterbegin",`
  <h2>Stadium Details</h2>
  <div class="stadium">
    <img src="../images/stadiums/${e.Key}.jpg" alt="" />
  </div>
  <div class="cards-container">
    <div class="card">
      <h3>Name</h3>
      <p>${e.StadiumDetails.Name}</p>
    </div>
    <div class="card">
      <h3>Capacity</h3>
      <p>${e.StadiumDetails.Capacity}</p>
    </div>
    <div class="card">
      <h3>City</h3>
      <p>${e.StadiumDetails.City}</p>
    </div>
    <div class="card">
      <h3>State</h3>
      <p>${n(e.StadiumDetails.State)}</p>
    </div>
    <div class="card">
      <h3>Playing Surface</h3>
      <p>${e.StadiumDetails.PlayingSurface}</p>
    </div>
    <div class="card">
      <h3>Current Weather Details</h3>
      <p id="stadium-weather">Loading...</p>
    </div>
  </div>
  `),a.appendChild(r),a.appendChild(s),t.appendChild(a),t},i=function(e){let t=document.createElement("section");if(t.classList.add("team-roster"),t.classList.add("hidden"),e instanceof Array){let a=document.createElement("div");a.classList.add("photo-name-container");let r=document.createElement("table");r.classList.add("photo-name-table"),a.appendChild(r);let n=document.createElement("div");n.classList.add("other-player-info-container");let s=document.createElement("table");s.classList.add("other-player-info-table"),n.appendChild(s),r.insertAdjacentHTML("afterbegin",`
  <tr class="heading">
    <th>Player</th>
  </tr>
  `),e.forEach(e=>r.insertAdjacentHTML("beforeend",`
  <tr class="row">
    <td>
      <a
        href="../player-stats-information/player-stats-information.html?key=${e.PlayerID}&team=${e.Team}"
        target="_blank"
      >
        <img
          src="${e.PhotoUrl}"
          alt="${e.Name} photo"
        />
        <p>${e.Name}</p>
      </a>
    </td>
  </tr>
  `)),s.insertAdjacentHTML("afterbegin",`
  <tr class="heading">
    <th>No</th>
    <th>Pos</th>
    <th>Status</th>
    <th>Height</th>
    <th>Weight</th>
    <th>Experience</th>
    <th>College</th>
  </tr>
  `),e.forEach(e=>s.insertAdjacentHTML("beforeend",`
  <tr class="row">
    <td>${0===e.Number||e.Number?e.Number:"N/A"}</td>
    <td>${e.Position}</td>
    <td>${e.Active?"ACT":"NON-ACT"}</td>
    <td>${e.HeightFeet}ft ${e.HeightInches}in</td>
    <td>${e.Weight}lbs</td>
    <td>${e.ExperienceString}</td>
    <td>${e.College}</td>
  </tr>
  `));let i=document.createElement("div");i.classList.add("team-roster-container"),i.appendChild(a),i.appendChild(n),t.appendChild(i)}else{let a=document.createElement("div");a.classList.add("error-container"),a.insertAdjacentHTML("afterbegin",e),t.insertAdjacentElement("afterbegin",a)}return t},c=function(e){return`
      <h3>REQUEST ERROR</h3>
      <p>${e}</p>
      `},d=async function(e){try{let t=await fetch(`https://api.weatherapi.com/v1/current.json?key=6e08ab4df3fa41fb8e690211230808&q=${e.StadiumDetails.GeoLat},${e.StadiumDetails.GeoLong}`),a=await t.json();return console.log(a),a}catch(e){return console.error(e),"Weather API Server could not be reached."}},o=async function(e){try{let t=await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${e}?key=ffb7852aadbe4662a351fad874b411ce`),a=await t.json();return a}catch(e){return console.error(e),c("Team Players server could not be reached.")}},l=async function(e){try{let t=await fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce"),n=await t.json(),c=n.find(t=>t.Key===e);document.title=`${c.FullName}`;let d=await o(e),l=document.createElement("main"),h=a(c),u=r(),m=s(c),p=i(d);return u.addEventListener("click",function(e){"team-info"===e.target.dataset.btn&&(p.classList.add("hidden"),m.classList.remove("hidden"),m.scrollIntoView({behavior:"smooth"})),"team-roster"===e.target.dataset.btn&&(m.classList.add("hidden"),p.classList.remove("hidden"),p.scrollIntoView({behavior:"smooth"}))}),l.appendChild(h),l.appendChild(u),l.appendChild(m),l.appendChild(p),[l,c]}catch(r){console.error(r);let e=document.createElement("main"),a=document.createElement("div");return a.classList.add("error-container"),a.insertAdjacentHTML("afterbegin",c(t)),e.appendChild(a),e}},h=window.location.search,u=new URLSearchParams(h);u.has("key")?console.log(e=u.get("key")):window.location.href="../index.html",window.addEventListener("DOMContentLoaded",function(a){l(e).then(e=>{if(console.log(e),!Array.isArray(e))throw document.body.appendChild(e),Error(t);return document.body.appendChild(e[0]),d(e[1])}).then(e=>{let t=this.document.querySelector("#stadium-weather");e.hasOwnProperty("current")||e.hasOwnProperty("location")?t.textContent=`${e.current.temp_c}\xbaC and ${e.current.condition.text}`:t.textContent=e}).catch(e=>console.error(e))});//# sourceMappingURL=team-stats-information.dc71bbba.js.map

//# sourceMappingURL=team-stats-information.dc71bbba.js.map
