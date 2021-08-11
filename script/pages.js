var main1 = document.getElementById("main-1");
var testing = document.getElementById("main-2");


function mainPage1(){
  document.getElementById("main-1").className = "main-new";
  document.getElementById("main-2").className = "hidden-always";
  document.getElementById("main-3").className = "hidden-always";
  document.getElementById("main-4").className = "hidden-always";
  document.getElementById("main-5").className = "hidden-always";

  document.getElementById("menu-1").className = "menu-item selected";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("title-page").innerHTML = "Home";
}

function mainPage2(){
  document.getElementById("main-1").className = "hidden-always";
  document.getElementById("main-2").className = "main-new";
  document.getElementById("main-3").className = "hidden-always";
  document.getElementById("main-4").className = "hidden-always";
  document.getElementById("main-5").className = "hidden-always";

  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item selected";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("title-page").innerHTML = "Bookmarks";
}

function mainPage3(){
  document.getElementById("main-1").className = "hidden-always";
  document.getElementById("main-2").className = "hidden-always";
  document.getElementById("main-3").className = "main-new";
  document.getElementById("main-4").className = "hidden-always";
  document.getElementById("main-5").className = "hidden-always";

  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item selected";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("title-page").innerHTML = "Apps";
}

function mainPage4(){
  document.getElementById("main-1").className = "hidden-always";
  document.getElementById("main-2").className = "hidden-always";
  document.getElementById("main-3").className = "hidden-always";
  document.getElementById("main-4").className = "main-new";
  document.getElementById("main-5").className = "hidden-always";

  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item selected";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("title-page").innerHTML = "School";
}

function mainPage5(){
  document.getElementById("main-1").className = "hidden-always";
  document.getElementById("main-2").className = "hidden-always";
  document.getElementById("main-3").className = "hidden-always";
  document.getElementById("main-4").className = "hidden-always";
  document.getElementById("main-5").className = "main-new";

  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item selected";

  document.getElementById("title-page").innerHTML = "Media";
  
  tvLoad(1)
}