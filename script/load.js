function mainPopulate(){
    calendarDate()
    // getLocation()
    // test()
    smartCards()
    apps()
    media()
    statusBar(1000,4000)
    widgets()
    buses()
    // busETAPopulate(961)
}

function mainRefresh() {
    smartCards()
    widgets()
    buses()
    statusBar(0,1500)
    console.log("refreshed")
}


function test() {
    console.log(lat)
}