let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequiread7b;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiread7b=n);const i="Server could not be reached.",s=function(e){let t=document.createElement("header");return t.innerHTML=`
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
    `,t},c=function(){let e=document.createElement("section");return e.classList.add("nav-links"),e.innerHTML=`
  <div class="nav-links-container">
    <button data-btn="team-info">Team Info</button>
    <button data-btn="team-roster">Team Roster</button>
  </div>
  `,e},d=function(e){switch(e){case"AL":return"Alabama";case"AK":return"Alaska";case"AZ":return"Arizona";case"AR":return"Arkansas";case"CA":return"California";case"CO":return"Colorado";case"CT":return"Connecticut";case"DE":return"Delaware";case"DC":return"District of Columbia";case"FL":return"Florida";case"GA":return"Georgia";case"HI":return"Hawaii";case"ID":return"Idaho";case"IL":return"Illinois";case"IN":return"Indiana";case"IA":return"Iowa";case"KS":return"Kansas";case"KY":return"Kentucky";case"LA":return"Louisiana";case"ME":return"Maine";case"MD":return"Maryland";case"MA":return"Massachusetts";case"MI":return"Michigan";case"MN":return"Minnesota";case"MS":return"Mississippi";case"MO":return"Missouri";case"MT":return"Montana";case"NE":return"Nebraska";case"NV":return"Nevada";case"NH":return"New Hampshire";case"NJ":return"New Jersey";case"NM":return"New Mexico";case"NY":return"New York";case"NC":return"North Carolina";case"ND":return"North Dakota";case"OH":return"Ohio";case"OK":return"Oklahoma";case"OR":return"Oregon";case"PA":return"Pennsylvania";case"RI":return"Rhode Island";case"SC":return"South Carolina";case"SD":return"South Dakota";case"TN":return"Tennessee";case"TX":return"Texas";case"UT":return"Utah";case"VT":return"Vermont";case"VA":return"Virginia";case"WA":return"Washington";case"WV":return"West Virginia";case"WI":return"Wisconsin";case"WY":return"Wyoming";default:return"Cannot recognise name"}},o=function(e){let t=document.createElement("section");t.classList.add("team-info");let a=document.createElement("div");a.classList.add("team-info-container");let[r,n]=[document.createElement("div"),document.createElement("div")];return r.classList.add("cards-section"),n.classList.add("cards-section"),r.insertAdjacentHTML("afterbegin",`
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
  `),n.insertAdjacentHTML("afterbegin",`
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
      <p>${d(e.StadiumDetails.State)}</p>
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
  `),a.appendChild(r),a.appendChild(n),t.appendChild(a),t},l=function(e){let t=document.createElement("section");if(t.classList.add("team-roster"),t.classList.add("hidden"),e instanceof Array){let a=document.createElement("div");a.classList.add("photo-name-container");let r=document.createElement("table");r.classList.add("photo-name-table"),a.appendChild(r);let n=document.createElement("div");n.classList.add("other-player-info-container");let i=document.createElement("table");i.classList.add("other-player-info-table"),n.appendChild(i),r.insertAdjacentHTML("afterbegin",`
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
  `)),i.insertAdjacentHTML("afterbegin",`
  <tr class="heading">
    <th>No</th>
    <th>Pos</th>
    <th>Status</th>
    <th>Height</th>
    <th>Weight</th>
    <th>Experience</th>
    <th>College</th>
  </tr>
  `),e.forEach(e=>i.insertAdjacentHTML("beforeend",`
  <tr class="row">
    <td>${0===e.Number||e.Number?e.Number:"N/A"}</td>
    <td>${e.Position}</td>
    <td>${e.Active?"ACT":"NON-ACT"}</td>
    <td>${e.HeightFeet}ft ${e.HeightInches}in</td>
    <td>${e.Weight}lbs</td>
    <td>${e.ExperienceString}</td>
    <td>${e.College}</td>
  </tr>
  `));let s=document.createElement("div");s.classList.add("team-roster-container"),s.appendChild(a),s.appendChild(n),t.appendChild(s)}else{let a=document.createElement("div");a.classList.add("error-container"),a.insertAdjacentHTML("afterbegin",e),t.insertAdjacentElement("afterbegin",a)}return t},h=function(e){return`
      <h3>REQUEST ERROR</h3>
      <p>${e}</p>
      `},u=async function(e){try{let t=await fetch(`https://api.weatherapi.com/v1/current.json?key=407e88d643e74d7fb68211341241310&q=${e.StadiumDetails.GeoLat},${e.StadiumDetails.GeoLong}`),a=await t.json();return console.log(a),a}catch(e){return console.error(e),"Weather API Server could not be reached."}},m=async function(e){try{let t=await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${e}?key=93fc190a9dad467fa4ac0ba550cf2e70`),a=await t.json();return a}catch(e){return console.error(e),h("Team Players server could not be reached.")}},p=async function(e){try{let t=await fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=93fc190a9dad467fa4ac0ba550cf2e70"),a=await t.json(),r=a.find(t=>t.Key===e);document.title=`${r.FullName}`;let n=await m(e),i=document.createElement("main"),d=s(r),h=c(),u=o(r),p=l(n);return h.addEventListener("click",function(e){"team-info"===e.target.dataset.btn&&(p.classList.add("hidden"),u.classList.remove("hidden"),u.scrollIntoView({behavior:"smooth"})),"team-roster"===e.target.dataset.btn&&(u.classList.add("hidden"),p.classList.remove("hidden"),p.scrollIntoView({behavior:"smooth"}))}),i.appendChild(d),i.appendChild(h),i.appendChild(u),i.appendChild(p),[i,r]}catch(a){console.error(a);let e=document.createElement("main"),t=document.createElement("div");return t.classList.add("error-container"),t.insertAdjacentHTML("afterbegin",h(i)),e.appendChild(t),e}};n("eXN3h");const f=window.location.search,v=new URLSearchParams(f);v.has("key")?console.log(e=v.get("key")):window.location.href="../index.html",window.addEventListener("DOMContentLoaded",function(t){p(e).then(e=>{if(console.log(e),!Array.isArray(e))throw document.body.appendChild(e),Error(i);return document.body.appendChild(e[0]),u(e[1])}).then(e=>{let t=this.document.querySelector("#stadium-weather");e.hasOwnProperty("current")||e.hasOwnProperty("location")?t.textContent=`${e.current.temp_c}\xbaC and ${e.current.condition.text}`:t.textContent=e}).catch(e=>console.error(e))});//# sourceMappingURL=team-stats-information.14314021.js.map

//# sourceMappingURL=team-stats-information.14314021.js.map
