let e,a;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequireaf4f;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var a=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,a.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){r[e]=a},t.parcelRequireaf4f=i);var o=i("eGLeC");i("eGLeC");const s=function(e,a){let t=document.createElement("header");return t.insertAdjacentHTML("afterbegin",`
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
  `),t},d=function(e){let a=document.createElement("section");a.classList.add("player-info");let t=document.createElement("div");t.classList.add("player-info-container");let n=document.createElement("div");return n.classList.add("cards-section"),n.insertAdjacentHTML("afterbegin",`
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
    `),t.appendChild(n),a.appendChild(t),a},l=async function(e,a){try{let t=await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Player/${e}?key=4dd38d14fccd43aa9f383a426166a3ce`),n=t.json(),r=await fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=4dd38d14fccd43aa9f383a426166a3ce"),i=r.json(),[o,l]=await Promise.all([n,i]),c=l.find(e=>e.Key===a);document.title=`${o.Name}`;let p=document.createElement("main"),h=s(o,c),m=d(o);return p.appendChild(h),p.appendChild(m),p}catch(n){var t;console.error(n),n.message="There was a problem getting the requested information from the server";let e=document.createElement("main"),a=document.createElement("div");return a.classList.add("error-container"),a.insertAdjacentHTML("afterbegin",(t=n.message,`
      <h3>REQUEST ERROR</h3>
      <p>${t}</p>
      `)),e.appendChild(a),e}},c=window.location.search,p=new URLSearchParams(c),[h,m]=[o.playerDetailsByPlayer,o.allTeamsActive[20]];console.log(h),console.log(m),p.has("key")?(e=p.get("key"),a=p.get("team"),console.log(e),console.log(a)):window.location.href="../index.html",window.addEventListener("DOMContentLoaded",function(){l(e,a).then(e=>{document.body.insertAdjacentElement("afterbegin",e)})});//# sourceMappingURL=player-stats-information.61454a72.js.map

//# sourceMappingURL=player-stats-information.61454a72.js.map
