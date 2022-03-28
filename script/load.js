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
    // setWallpaper()

    // Testing
    // skipToContent()
    // modal.add(workoutCard())
    // allMovies['silicon'].detail()
    // castJSONStr(0,0)
    // travel.trip.data.tenerife.detail()
    // travel.flight.data['mad-tfs'].detail()
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

    if (focus.trays) {
        for (const tray of focus.trays()) {
            home.append(tray)
        }
    }
}

function skipToContent() {
    document.getElementById('rest-of-stuff').scrollTop = window.innerHeight - 60
}

function castJSONStr(key) {
    const movie = allMovies[key]
    console.log(movie)

    let str = ''

    for (const item of movie.cast) {
        str = str.concat(`'${item.actor}': '',\n`)
    }

    console.log(str)
}