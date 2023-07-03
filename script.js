// const request1 = new XMLHttpRequest();
// const img = document.querySelector("img");
// let yo;
// let teamKey;
// let playerID;
// request1.open("GET", "https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=ffb7852aadbe4662a351fad874b411ce");

// request1.send();

// request1.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   teamKey = data.filter((team) => team.Key === "ATL")[0].Key;
//   console.log(teamKey);
//   //   img.src = data[0].PhotoUrl;
//   //   console.log(img.src);
//   const request2 = new XMLHttpRequest();

//   request2.open(
//     "GET",
//     `https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/${teamKey}?key=ffb7852aadbe4662a351fad874b411ce`
//   );

//   request2.send();

//   request2.addEventListener("load", function () {
//     const data2 = JSON.parse(this.responseText);
//     console.log(data2);
//     playerID = data2.filter((player) => player.Name === "Drake London")[0].PlayerID;
//     console.log(playerID);

//     const request3 = new XMLHttpRequest();

//     request3.open(
//       "GET",
//       `https://api.sportsdata.io/v3/nfl/scores/json/Player/${playerID}?key=ffb7852aadbe4662a351fad874b411ce`
//     );
//     request3.send();

//     request3.addEventListener("load", function () {
//       const data3 = JSON.parse(this.responseText);
//       console.log(data3);
//     });
//   });
// });
