var changeButton = document.querySelector(".change-button");
var classicRules = document.querySelector(".classicRules");
var difficultRules = document.querySelector(".difficultRules");






window.addEventListener("load", displayPage);



function displayPage(){
  hide(changeButton);
}

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}
