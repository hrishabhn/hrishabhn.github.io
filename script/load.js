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
    // allMovies['atlanta'].detail()
    // castJSONStr(0,0)
    // trip.data.tenerife.detail()
    // flight.data['mad-tfs'].detail()
    // train.data['mad-bcn'].detail()
    // modal.add(actors.detail('Alan Ritchson'))
    actorRepeat()
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

function actorRepeat() {
    let all = {}
    for (const key in allMovies) if (allMovies[key].cast) for (const member of allMovies[key].cast) {
        if (!all[member.actor]) all[member.actor] = 1
        else all[member.actor]++
    }
    for (const actor in all) if (all[actor] > 1) if (!actors.data[actor]) console.log(actor)
}