function mainPopulate(){
    calendarDate()
    getUserLocale()

    todayWidget()


    apps()
    media()

    statusBar(1000,4000)
    // lights()
}

function locationBasedLoad(userLocale) {
    smartCards(userLocale)
    buses(userLocale)
}

function mainRefresh() {
    calendarDate()
    getUserLocale()
    smartCards()
    todayWidget()
    // buses()
    statusBar(0,1500)
    // console.log("refreshed")
}


// function test() {
//     console.log(lat)
// }