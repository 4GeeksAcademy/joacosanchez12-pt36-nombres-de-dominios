/* eslint-disable */
window.onload = function() {
  let pronombre = ["the", "our"];
  let adjetivo = ["great", "big", "little"];
  let sustantivo = ["jogger", "racoon"];

  function domainGenerate() {
    let domainList = document.querySelector("#domain-list");
    domainList.innerHTML = "";

    for (let pron of pronombre) {
      for (let adj of adjetivo) {
        for (let sus of sustantivo) {
          let listItem = document.createElement("li");
          listItem.textContent = `www.${pron}${adj}${sus}.com`;
          listItem.classList.add("list-group-item");
          domainList.appendChild(listItem);
        }
      }
    }
  }

  document.querySelector("#generate").addEventListener("click", domainGenerate);
};
