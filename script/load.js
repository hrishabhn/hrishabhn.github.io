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
    allWidgets.initial()

    pages.render()

    
    apps()
    switches()
    mediaPopulate()
    menuLoad()

    // flightPull()
    // showMediaPopup()
    userLoad()
    searchLoad()
    // widgetBarState()

    // console.log(getCoords())
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
    document.getElementById("locale-current").innerHTML = globalLocale;

    // smartCards(globalLocale)
    buses(globalLocale)
    // courseApps(globalLocale)
}

function mainRefresh() {
    calendarDate()
    getUserLocale()
    // smartCards()
    todayWidget()
    allWidgets.refresh()
    // statusBar(0,1500)
    resetBusCards()
    // console.log("refreshed")
}



function searchLoad() {
    const searchElement = document.getElementById('google-search')

    if ('ontouchstart' in document.documentElement) {
        searchElement.href = 'google://search'
    } else {
        searchElement.href = 'https://www.google.com'
    }
}