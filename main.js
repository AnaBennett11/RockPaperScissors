var changeButton = document.querySelector(".change-button");
var classicRules = document.querySelector("#classicRules");
var difficultRules = document.querySelector("#difficultRules");
var choice = document.querySelector(".choice");
var endResult = document.querySelector(".end-result");
var classicImages = document.querySelector(".classic-images");
var difficultImages = document.querySelector(".difficult-images");
var imageSection = document.querySelector(".image-section");






window.addEventListener("load", displayPage);



function displayPage(){
  hide(changeButton);
  show(classicRules);
  show(difficultRules);
  show(choice);
  hide(endResult);
  hide(imageSection);

}

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}
