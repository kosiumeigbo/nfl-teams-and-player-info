const e="There was a problem getting the requested information from the server. Please try again.",t=function(){return`
    <h3>NO PLAYERS FOUND</h3>
    <p>No results. Try a different search.</p>
    `},a=function(e){return`
    <h3>REQUEST ERROR</h3>
    <p>${e}</p>
    `},r=async function(t){try{let e=await fetch(t),a=await e.json();return a}catch(t){return console.log(t),t.message=e,t}},n=async function(t,a,r){try{let e=t.map(e=>o(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${e.Key}?key=ffb7852aadbe4662a351fad874b411ce`,a,r)),n=await Promise.all(e);return n.flat()}catch(t){return console.log(t),t.message=e,t}},s=async function(t,a){try{let e=t.map(e=>i(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${e.Key}?key=ffb7852aadbe4662a351fad874b411ce`,a)),r=await Promise.all(e);return r.flat()}catch(t){return console.log(t),t.message=e,t}},o=async function(t,a,r){try{let e=[],n=await fetch(t),s=await n.json();return await s.forEach(t=>{t.FirstName.toLowerCase()===a.toLowerCase()&&t.LastName.toLowerCase()===r.toLowerCase()&&e.push(t)}),e}catch(t){return console.log(t),t.message=e,t}},i=async function(t,a){try{let e=[],r=await fetch(t),n=await r.json();return await n.forEach(t=>{(t.FirstName.toLowerCase().includes(a.toLowerCase())||t.LastName.toLowerCase().includes(a.toLowerCase()))&&e.push(t)}),e}catch(t){return console.log(t),t.message=e,t}},c=function(e){let t=document.createElement("div");t.classList.add("photo-name-container");let a=document.createElement("table");a.classList.add("photo-name-table"),t.appendChild(a);let r=document.createElement("div");r.classList.add("other-player-info-container");let n=document.createElement("table");n.classList.add("other-player-info-table"),r.appendChild(n);let s=document.createElement("div");s.classList.add("player-list-container"),s.appendChild(t),s.appendChild(r),a.insertAdjacentHTML("afterbegin",`
    <tr class="heading">
      <th>Player</th>
    </tr>
    `),e.forEach(e=>a.insertAdjacentHTML("beforeend",`
    <tr class="row">
      <td>
        <a
          href="./player-stats-information/player-stats-information.html?key=${e.PlayerID}&team=${e.Team}"
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
    `)),n.insertAdjacentHTML("afterbegin",`
    <tr class="heading">
      <th>Team</th>
      <th>No</th>
      <th>Pos</th>
      <th>Status</th>
      <th>Height</th>
      <th>Weight</th>
      <th>Experience</th>
    </tr>
    `),e.forEach(e=>n.insertAdjacentHTML("beforeend",`
    <tr class="row">
      <td>${e.Team}</td>
      <td>${0===e.Number||e.Number?e.Number:"N/A"}</td>
      <td>${e.Position}</td>
      <td>${e.Active?"ACT":"NON-ACT"}</td>
      <td>${e.HeightFeet}ft ${e.HeightInches}in</td>
      <td>${e.Weight}lbs</td>
      <td>${e.ExperienceString}</td>
    </tr>
    `));let o=document.createElement("section");return o.classList.add("player-list"),o.appendChild(s),o},l=document.querySelector(".team-stats-data-btn"),d=document.querySelector(".player-stats-data-btn"),h=document.querySelector(".info-cards-player-form-section"),m=document.querySelector(".info-cards-container"),f=document.querySelector(".player-search-container"),u=document.querySelector("#player-search-form"),p=document.querySelector("#player-search"),L=document.querySelector("#player-search-btn"),y=document.querySelector(".player-search-results");l.addEventListener("click",function(){f.classList.add("hidden"),m.classList.remove("hidden"),h.classList.remove("hidden"),h.scrollIntoView({behavior:"smooth"})}),d.addEventListener("click",function(){m.classList.add("hidden"),u.classList.remove("hidden"),f.classList.remove("hidden"),h.classList.remove("hidden"),h.scrollIntoView({behavior:"smooth"})}),L.addEventListener("click",function(e){if(e.preventDefault(),""===p.value.trim()){y.innerHTML="",y.innerHTML=`
    <h3>NOT A VALID ENTRY</h3>
    <p>Please enter a valid value</p>
    `;return}let o=p.value.trim().split(" ");if(o.length>=3&&(y.innerHTML="",y.innerHTML=t()),2===o.length){let[e,s]=o;r("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce").then(t=>{if(t instanceof Error)throw t;return n(t,e,s)}).then(e=>{if(e instanceof Error)throw e;0===e.length?(y.innerHTML="",y.innerHTML=t()):(y.innerHTML="",y.appendChild(c(e)))}).catch(e=>{y.innerHTML="",y.innerHTML=a(e.message)})}if(1===o.length){let[e]=o;r("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=ffb7852aadbe4662a351fad874b411ce").then(t=>{if(t instanceof Error)throw t;return s(t,e)}).then(e=>{if(e instanceof Error)throw e;0===e.length?(y.innerHTML="",y.innerHTML=t()):(y.innerHTML="",y.appendChild(c(e)))}).catch(e=>{y.innerHTML="",y.innerHTML=a(e.message)})}});//# sourceMappingURL=index.1567eab8.js.map

//# sourceMappingURL=index.1567eab8.js.map
