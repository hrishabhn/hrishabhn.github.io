function mainPopulate(){
    calendarDate()
    // getLocation()
    // test()
    smartCards()
    apps()
    media()
    statusBar(1000,4000)
    todayWidget()
    buses()
}

function mainRefresh() {
    calendarDate()
    smartCards()
    todayWidget()
    buses()
    statusBar(0,1500)
    // console.log("refreshed")
}


// function test() {
//     console.log(lat)
// }