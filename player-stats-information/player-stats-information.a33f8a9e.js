let e,a;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequiread7b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var a=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,a.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){r[e]=a},t.parcelRequiread7b=i);const o=function(e,a){let t=document.createElement("header");return t.insertAdjacentHTML("afterbegin",`
    <div class="header-container">
        <div class="player-header-info">
            <h2 class="name">${e.Name}</h2>
            <div class="pos-number">
            <span><strong>${e.Position}</strong></span> &#8226; <span>#${0===e.Number||e.Number?e.Number:"N/A"}</span>
            </div>
            <a href="../team-stats-information/team-stats-information.html?key=${a.Key}" target="_blank">${a.FullName}</a>
            <div class="status"><span style="background-color: ${e.Active?"rgb(14, 183, 14)":"rgb(197, 53, 13)"}">${e.Active?"ACTIVE":"INACTIVE"}</span></div>
        </div>
        <div class="player-photo">
            <img
            src="${e.PhotoUrl}"
            alt="${e.Name}'s photo"
            />
        </div>
    </div>
    <div class="header-color"></div>
    <div style="background-color: #${a.SecondaryColor}" class="secondary-color"></div>
    <div style="background-color: #${a.PrimaryColor}" class="primary-color"></div>
  `),t},s=function(e){let a=document.createElement("section");a.classList.add("player-info");let t=document.createElement("div");t.classList.add("player-info-container");let n=document.createElement("div");return n.classList.add("cards-section"),n.insertAdjacentHTML("afterbegin",`
    <h2>Player Details and Information</h2>
    <div class="cards-container">
      <div class="card">
          <h3>Age</h3>
          <p>${e.Age}</p>
      </div>
      <div class="card">
          <h3>Date of Birth</h3>
          <p>${e.BirthDateString}</p>
      </div>
      <div class="card">
          <h3>College</h3>
          <p>${e.College}</p>
      </div>
      <div class="card">
          <h3>Experience</h3>
          <p>${e.ExperienceString}</p>
      </div>
      <div class="card">
          <h3>Height</h3>
          <p>${e.HeightFeet}ft ${e.HeightInches}in</p>
      </div>
      <div class="card">
          <h3>Weight</h3>
          <p>${e.Weight}lbs</p>
      </div>
    </div>
    `),t.appendChild(n),a.appendChild(t),a},d=async function(e,a){try{let t=await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Player/${e}?key=93fc190a9dad467fa4ac0ba550cf2e70`),n=t.json(),r=await fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=93fc190a9dad467fa4ac0ba550cf2e70"),i=r.json(),[d,c]=await Promise.all([n,i]),l=c.find(e=>e.Key===a);document.title=`${d.Name}`;let h=document.createElement("main"),p=o(d,l),m=s(d);return h.appendChild(p),h.appendChild(m),h}catch(n){var t;console.error(n),n.message="There was a problem getting the requested information from the server";let e=document.createElement("main"),a=document.createElement("div");return a.classList.add("error-container"),a.insertAdjacentHTML("afterbegin",(t=n.message,`
      <h3>REQUEST ERROR</h3>
      <p>${t}</p>
      `)),e.appendChild(a),e}};i("eXN3h");const c=window.location.search,l=new URLSearchParams(c);l.has("key")?(e=l.get("key"),a=l.get("team"),console.log(e),console.log(a)):window.location.href="../index.html",window.addEventListener("DOMContentLoaded",function(){d(e,a).then(e=>{document.body.insertAdjacentElement("afterbegin",e)})});//# sourceMappingURL=player-stats-information.a33f8a9e.js.map

//# sourceMappingURL=player-stats-information.a33f8a9e.js.map
