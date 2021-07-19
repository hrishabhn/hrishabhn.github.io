function mainPopulate(){
    calendarDate()
    getUserLocale()

    todayWidget()

    apps()
    media()

    statusBar(1000,4000)
    // mainPage5()
    // popupTVPopulate(11)
    // popupBusShow()
}

function locationBasedLoad(userLocale) {
    document.getElementById("district").innerHTML = userLocale;
    smartCards(userLocale)
    buses(userLocale)
}

function mainRefresh() {
    calendarDate()
    getUserLocale()
    smartCards()
    todayWidget()
    statusBar(0,1500)
    // console.log("refreshed")
}
