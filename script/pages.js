var main1 = document.getElementById("main-1");
var testing = document.getElementById("main-2");


function mainPage1(){
  document.getElementById("menu-1").className = "menu-item selected";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item";
  
  document.getElementById("menu-current").className = "menu-current menu-current-1";

  document.getElementById("title-text").innerHTML = "Home";
  document.getElementById("title-page").innerHTML = "Home";

  // document.getElementById("wallpaper").className = "wallpaper wp-1"

  document.getElementById("main-1").className = "main";
  document.getElementById("main-2").className = "main-right main";
  document.getElementById("main-3").className = "main-right main";
  document.getElementById("main-4").className = "main-right main";
  document.getElementById("main-5").className = "main-right main";
}

function mainPage2(){
  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item selected";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("menu-current").className = "menu-current menu-current-2";

  document.getElementById("title-text").innerHTML = "Apps";
  document.getElementById("title-page").innerHTML = "Apps";

  // document.getElementById("wallpaper").className = "wallpaper wp-2"

  document.getElementById("main-1").className = "main-left main";
  document.getElementById("main-2").className = "main";
  document.getElementById("main-3").className = "main-right main";
  document.getElementById("main-4").className = "main-right main";
  document.getElementById("main-5").className = "main-right main";
}

function mainPage3(){
  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item selected";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("menu-current").className = "menu-current menu-current-3";

  document.getElementById("title-text").innerHTML = "Apps";
  document.getElementById("title-page").innerHTML = "Apps";

  // document.getElementById("wallpaper").className = "wallpaper wp-3"

  document.getElementById("main-1").className = "main-left main";
  document.getElementById("main-2").className = "main-left main";
  document.getElementById("main-3").className = "main";
  document.getElementById("main-4").className = "main-right main";
  document.getElementById("main-5").className = "main-right main";
}

function mainPage4(){
  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item selected";
  document.getElementById("menu-5").className = "menu-item";

  document.getElementById("menu-current").className = "menu-current menu-current-4";

  document.getElementById("title-text").innerHTML = "Media";
  document.getElementById("title-page").innerHTML = "Media";

  // document.getElementById("wallpaper").className = "wallpaper wp-4"

  document.getElementById("main-1").className = "main-left main";
  document.getElementById("main-2").className = "main-left main";
  document.getElementById("main-3").className = "main-left main";
  document.getElementById("main-4").className = "main";
  document.getElementById("main-5").className = "main-right main";
}

function mainPage5(){
  document.getElementById("menu-1").className = "menu-item";
  document.getElementById("menu-2").className = "menu-item";
  document.getElementById("menu-3").className = "menu-item";
  document.getElementById("menu-4").className = "menu-item";
  document.getElementById("menu-5").className = "menu-item selected";

  document.getElementById("menu-current").className = "menu-current menu-current-5";

  document.getElementById("title-text").innerHTML = "Media";
  document.getElementById("title-page").innerHTML = "Media";

  // document.getElementById("wallpaper").className = "wallpaper wp-5"

  document.getElementById("main-1").className = "main-left main";
  document.getElementById("main-2").className = "main-left main";
  document.getElementById("main-3").className = "main-left main";
  document.getElementById("main-4").className = "main-left main";
  document.getElementById("main-5").className = "main";
}