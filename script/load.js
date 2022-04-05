function loadApp() {
    focusLoad()
    dndLoad()
    routine.load()

    topbarLoad()
    dndElemLoad()
    splashLoad()

    spotlightLoad()
    bodyLoad()

    paramsLoad()

    // Testing
    // skipToContent()
    // modal.add(workoutCard())
    // allMovies['atlanta'].detail()
    // actors.castSTR('office')
    // trip.data.tenerife.detail()
    // flight.data['mad-tfs'].detail()
    // train.data['mad-bcn'].detail()
    // modal.add(actors.detail('Alan Ritchson'))
    actors.repeatedNoImg()
}

function paramsLoad() {
    const params = new URLSearchParams(window.location.search)
    if (params.get('q')) {
        let q = params.get('q')
        document.getElementById('spotlight').value = q
        spotlightRun(q)
    }
}


function bodyLoad() {
    let focus = getFocus()
    let home = document.getElementById('home-all')
    if (focus.trays) for (const tray of focus.trays()) home.append(tray)
}

function skipToContent() {
    document.getElementById('rest-of-stuff').scrollTop = window.innerHeight - 60
}