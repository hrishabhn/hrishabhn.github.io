function mainPopulate(){
    calendarDate()
    getUserLocale()

    todayWidget()

    apps()
    media()

    statusBar(1000,4000)
    // mainPage(5)
    // popupTVPopulate(1)
    // popupBusShow()
    // popupSideShow()
}

function newPopulate(){
    calendarDate()
    getUserLocale()

    todayWidget()

    apps()
    switches()
    mediaPopulate()
    menuLoad()

    // flightPull()
    // showMediaPopup()
    userLoad()
    // tvPopup(movieData[0][0])
    // widgetBarState()
}
function openFullscreen() {
    const elem = document.documentElement

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function locationBasedLoad(userLocale) {
    storeLocale(userLocale)

    // statusBar(1000,4000)
    document.getElementById("district").innerHTML = globalLocale;

    // smartCards(globalLocale)
    buses(globalLocale)
    // courseApps(globalLocale)
}

function mainRefresh() {
    calendarDate()
    getUserLocale()
    // smartCards()
    todayWidget()
    // statusBar(0,1500)
    resetBusCards()
    // console.log("refreshed")
}
