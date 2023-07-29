"use strict";
import * as apiTestData from "../modules/api-test-data.js";

// let teamKey;

if (
  window.performance.getEntriesByType("navigation")[0].type === "navigate" ||
  window.performance.getEntriesByType("navigation")[0].type === "reload"
) {
  const teamKey = localStorage.getItem("teamKeyTab");
  document.body.dataset.key = teamKey;
  document.body.textContent = teamKey;
}

document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    localStorage.setItem("teamKeyTab", document.body.dataset.key);
  }
});
// else {
//   teamKey = localStorage.getItem("teamKeyTab");
//   document.body.dataset.key = teamKey;
//   document.body.textContent = teamKey;
// }
