var main1 = document.getElementById("main-1");
var testing = document.getElementById("main-2");


function mainPage1(){
  main1.className = "main";
  document.getElementById("main-2").className = "main-right main";
}

function mainPage2(){
  main1.className = "main-left main";
  document.getElementById("main-2").className = "main";
}

