var main1 = document.getElementById("main-1");
var testing = document.getElementById("main-2");


function mainPage1(){
  document.getElementById("title-text").innerHTML = "Home";
  document.getElementById("main-1").className = "main";
  document.getElementById("main-2").className = "main-right main";
}

function mainPage2(){
  document.getElementById("title-text").innerHTML = "Media";
  document.getElementById("main-1").className = "main-left main";
  document.getElementById("main-2").className = "main";
}

