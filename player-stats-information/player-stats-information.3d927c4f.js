let e,a;const t=function(e,a){let t=document.createElement("header");return t.insertAdjacentHTML("afterbegin",`
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
  `),t},n=function(e){let a=document.createElement("section");a.classList.add("player-info");let t=document.createElement("div");t.classList.add("player-info-container");let n=document.createElement("div");return n.classList.add("cards-section"),n.insertAdjacentHTML("afterbegin",`
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
    `),t.appendChild(n),a.appendChild(t),a},s=async function(e,a){try{let s=await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Player/${e}?key=4dd38d14fccd43aa9f383a426166a3ce`),i=s.json(),r=await fetch("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=4dd38d14fccd43aa9f383a426166a3ce"),o=r.json(),[d,c]=await Promise.all([i,o]),l=c.find(e=>e.Key===a);document.title=`${d.Name}`;let h=document.createElement("main"),m=t(d,l),p=n(d);return h.appendChild(m),h.appendChild(p),h}catch(t){var s;console.error(t),t.message="There was a problem getting the requested information from the server";let e=document.createElement("main"),a=document.createElement("div");return a.classList.add("error-container"),a.insertAdjacentHTML("afterbegin",(s=t.message,`
      <h3>REQUEST ERROR</h3>
      <p>${s}</p>
      `)),e.appendChild(a),e}},i=window.location.search,r=new URLSearchParams(i),[o,d]=[playerDetailsByPlayer,allTeamsActive[20]];console.log(o),console.log(d),r.has("key")?(e=r.get("key"),a=r.get("team"),console.log(e),console.log(a)):window.location.href="../index.html",window.addEventListener("DOMContentLoaded",function(){s(e,a).then(e=>{document.body.insertAdjacentElement("afterbegin",e)})});//# sourceMappingURL=player-stats-information.3d927c4f.js.map

//# sourceMappingURL=player-stats-information.3d927c4f.js.map
