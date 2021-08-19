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

    calWidget()
    weatherWidget()

    apps()
    mediaPopulate()

    // mainPage(4)
    flightPull()
}

function locationBasedLoad(userLocale) {
    storeLocale(userLocale)

    // statusBar(1000,4000)
    document.getElementById("district").innerHTML = globalLocale;

    // smartCards(globalLocale)
    buses(globalLocale)
}

function mainRefresh() {
    calendarDate()
    getUserLocale()
    // smartCards()
    // todayWidget()
    // statusBar(0,1500)
    resetBusCards()
    // console.log("refreshed")
}
