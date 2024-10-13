var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequiread7b;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequiread7b=r);const n="There was a problem getting the requested information from the server. Please try again.",s=function(){return`
    <h3>NO PLAYERS FOUND</h3>
    <p>No results. Try a different search.</p>
    `},o=function(e){return`
    <h3>REQUEST ERROR</h3>
    <p>${e}</p>
    `},i=async function(e){try{let t=await fetch(e),a=await t.json();return a}catch(e){return console.log(e),e.message=n,e}},c=async function(e,t,a){try{let r=e.map(e=>d(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${e.Key}?key=93fc190a9dad467fa4ac0ba550cf2e70`,t,a)),n=await Promise.all(r);return n.flat()}catch(e){return console.log(e),e.message=n,e}},l=async function(e,t){try{let a=e.map(e=>h(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${e.Key}?key=93fc190a9dad467fa4ac0ba550cf2e70`,t)),r=await Promise.all(a);return r.flat()}catch(e){return console.log(e),e.message=n,e}},d=async function(e,t,a){try{let r=[],n=await fetch(e),s=await n.json();return await s.forEach(e=>{e.FirstName.toLowerCase()===t.toLowerCase()&&e.LastName.toLowerCase()===a.toLowerCase()&&r.push(e)}),r}catch(e){return console.log(e),e.message=n,e}},h=async function(e,t){try{let a=[],r=await fetch(e),n=await r.json();return await n.forEach(e=>{(e.FirstName.toLowerCase().includes(t.toLowerCase())||e.LastName.toLowerCase().includes(t.toLowerCase()))&&a.push(e)}),a}catch(e){return console.log(e),e.message=n,e}},f=function(e){let t=document.createElement("div");t.classList.add("photo-name-container");let a=document.createElement("table");a.classList.add("photo-name-table"),t.appendChild(a);let r=document.createElement("div");r.classList.add("other-player-info-container");let n=document.createElement("table");n.classList.add("other-player-info-table"),r.appendChild(n);let s=document.createElement("div");s.classList.add("player-list-container"),s.appendChild(t),s.appendChild(r),a.insertAdjacentHTML("afterbegin",`
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
    `));let o=document.createElement("section");return o.classList.add("player-list"),o.appendChild(s),o};r("eXN3h");// Landing Page Sections
const u=document.querySelector(".team-stats-data-btn"),p=document.querySelector(".player-stats-data-btn"),m=document.querySelector(".info-cards-player-form-section"),y=document.querySelector(".info-cards-container"),L=document.querySelector(".player-search-container"),g=document.querySelector("#player-search-form"),T=document.querySelector("#player-search"),w=document.querySelector("#player-search-btn"),b=document.querySelector(".player-search-results");u.addEventListener("click",function(){L.classList.add("hidden"),y.classList.remove("hidden"),m.classList.remove("hidden"),m.scrollIntoView({behavior:"smooth"})}),p.addEventListener("click",function(){y.classList.add("hidden"),g.classList.remove("hidden"),L.classList.remove("hidden"),m.classList.remove("hidden"),m.scrollIntoView({behavior:"smooth"})}),w.addEventListener("click",function(e){if(e.preventDefault(),""===T.value.trim()){b.innerHTML="",b.innerHTML=`
    <h3>NOT A VALID ENTRY</h3>
    <p>Please enter a valid value</p>
    `;return}let t=T.value.trim().split(" ");if(t.length>=3&&(b.innerHTML="",b.innerHTML=s()),2===t.length){let[e,a]=t;i("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=93fc190a9dad467fa4ac0ba550cf2e70").then(t=>{if(t instanceof Error)throw t;return c(t,e,a)}).then(e=>{if(e instanceof Error)throw e;0===e.length?(b.innerHTML="",b.innerHTML=s()):(b.innerHTML="",b.appendChild(f(e)))}).catch(e=>{b.innerHTML="",b.innerHTML=o(e.message)})}if(1===t.length){let[e]=t;i("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=93fc190a9dad467fa4ac0ba550cf2e70").then(t=>{if(t instanceof Error)throw t;return l(t,e)}).then(e=>{if(e instanceof Error)throw e;0===e.length?(b.innerHTML="",b.innerHTML=s()):(b.innerHTML="",b.appendChild(f(e)))}).catch(e=>{b.innerHTML="",b.innerHTML=o(e.message)})}});//# sourceMappingURL=index.38ce18b6.js.map

//# sourceMappingURL=index.38ce18b6.js.map
