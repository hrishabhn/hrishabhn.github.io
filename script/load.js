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
    document.getElementById("district").innerHTML = userLocale;

    smartCards(userLocale)
    // console.log("bruhhh")

    buses(userLocale)
    // console.log("bruhhh")

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