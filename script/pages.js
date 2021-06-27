var main1 = document.getElementById("main-1");
var testing = document.getElementById("main-2");


function mainPage1(){
  document.getElementById("title-text").innerHTML = "Home";
  document.getElementById("title-page").innerHTML = "Home";

  document.getElementById("main-1").className = "main";
  document.getElementById("main-2").className = "main-right main";

  document.getElementById("menu-1").className = "menu-item selected";
  document.getElementById("menu-2").className = "menu-item";
}

function mainPage2(){
  document.getElementById("title-text").innerHTML = "Media";
  document.getElementById("title-page").innerHTML = "Media";

  document.getElementById("main-1").className = "main-left main";
  document.getElementById("main-2").className = "main";

  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item selected";
}

