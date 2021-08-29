// var main1 = document.getElementById("main-1");
// var testing = document.getElementById("main-2");

var mainCurrent = 1;

function mainPage(n) {
  var oldMain = document.getElementById("main-" + mainCurrent)
  var oldMenu = document.getElementById("menu-" + mainCurrent)
  oldMain.classList.add("hidden")
  oldMenu.classList.remove("selected")
  var mainOld = mainCurrent

  mainCurrent = n;
  var newMain = document.getElementById("main-" + mainCurrent)
  var newMenu = document.getElementById("menu-" + mainCurrent)
  newMain.classList.remove("hidden")
  newMenu.classList.add("selected")

  pageLoads(n)
  pageReset(mainOld)
}

function pageLoads(n) {
  var title = document.getElementById("title-page")
  var header = document.getElementById("header-text")

  switch (n) {
    case 1:
      title.innerHTML = "Home"
      header.innerHTML = "Home"
      break
    case 2:
      title.innerHTML = "Bookmarks"
      header.innerHTML = "Bookmarks"
      break
    case 3:
      title.innerHTML = "Apps"
      header.innerHTML = "Apps"
      break
    case 4:
      title.innerHTML = "School"
      header.innerHTML = "School"
      break
    case 5:
      title.innerHTML = "Media"
      header.innerHTML = "Media"
      hideWidgets()
      break
  }
}

function pageReset(n) {
  switch (n) {
    case 5:
      showWidgets()
      // console.log("nice")
      // tvLoadReset()
      break
  }
}

function hideWidgets() {
  document.getElementById("header").onclick = function(){ showWidgets() }
  document.getElementById("col-1").classList.add("hidden-always")
  document.getElementById("col-2").classList.add("big")
}

function showWidgets() {
  document.getElementById("header").onclick = function(){ hideWidgets() }
  document.getElementById("col-1").classList.remove("hidden-always")
  document.getElementById("col-2").classList.remove("big")
}


// function mainPage1(){
//   document.getElementById("main-1").className = "main-new";
//   document.getElementById("main-2").className = "hidden-always";
//   document.getElementById("main-3").className = "hidden-always";
//   document.getElementById("main-4").className = "hidden-always";
//   document.getElementById("main-5").className = "hidden-always";

//   document.getElementById("menu-1").className = "menu-item selected";
//   document.getElementById("menu-2").className = "menu-item";
//   document.getElementById("menu-3").className = "menu-item";
//   document.getElementById("menu-4").className = "menu-item";
//   document.getElementById("menu-5").className = "menu-item";

//   document.getElementById("title-page").innerHTML = "Home";
// }

// function mainPage2(){
//   document.getElementById("main-1").className = "hidden-always";
//   document.getElementById("main-2").className = "main-new";
//   document.getElementById("main-3").className = "hidden-always";
//   document.getElementById("main-4").className = "hidden-always";
//   document.getElementById("main-5").className = "hidden-always";

//   document.getElementById("menu-1").className = "menu-item";
//   document.getElementById("menu-2").className = "menu-item selected";
//   document.getElementById("menu-3").className = "menu-item";
//   document.getElementById("menu-4").className = "menu-item";
//   document.getElementById("menu-5").className = "menu-item";

//   document.getElementById("title-page").innerHTML = "Bookmarks";
// }

// function mainPage3(){
//   document.getElementById("main-1").className = "hidden-always";
//   document.getElementById("main-2").className = "hidden-always";
//   document.getElementById("main-3").className = "main-new";
//   document.getElementById("main-4").className = "hidden-always";
//   document.getElementById("main-5").className = "hidden-always";

//   document.getElementById("menu-1").className = "menu-item";
//   document.getElementById("menu-2").className = "menu-item";
//   document.getElementById("menu-3").className = "menu-item selected";
//   document.getElementById("menu-4").className = "menu-item";
//   document.getElementById("menu-5").className = "menu-item";

//   document.getElementById("title-page").innerHTML = "Apps";
// }

// function mainPage4(){
//   document.getElementById("main-1").className = "hidden-always";
//   document.getElementById("main-2").className = "hidden-always";
//   document.getElementById("main-3").className = "hidden-always";
//   document.getElementById("main-4").className = "main-new";
//   document.getElementById("main-5").className = "hidden-always";

//   document.getElementById("menu-1").className = "menu-item";
//   document.getElementById("menu-2").className = "menu-item";
//   document.getElementById("menu-3").className = "menu-item";
//   document.getElementById("menu-4").className = "menu-item selected";
//   document.getElementById("menu-5").className = "menu-item";

//   document.getElementById("title-page").innerHTML = "School";
// }

// function mainPage5(){
//   document.getElementById("main-1").className = "hidden-always";
//   document.getElementById("main-2").className = "hidden-always";
//   document.getElementById("main-3").className = "hidden-always";
//   document.getElementById("main-4").className = "hidden-always";
//   document.getElementById("main-5").className = "main-new";

//   document.getElementById("menu-1").className = "menu-item";
//   document.getElementById("menu-2").className = "menu-item";
//   document.getElementById("menu-3").className = "menu-item";
//   document.getElementById("menu-4").className = "menu-item";
//   document.getElementById("menu-5").className = "menu-item selected";

//   document.getElementById("title-page").innerHTML = "Media";
  
//   tvLoad(1)
// }