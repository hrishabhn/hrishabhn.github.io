function loadApp() {
    focusLoad()

    topbarLoad()
    splashLoad()

    spotlightLoad()
    bodyLoad()


    // Testing
    // skipToContent()
    // addModalLayer(workoutCard())
    // showTVDetail(0,0)
    // castJSONStr(0,0)

    // busTest()
    // tripTest()
    // addModalLayer(budgetDetailCard())

    // addModalLayer(tripCard('tenerife'))
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

function castJSONStr(i, j) {
    const movie = movieData[i][j]
    console.log(movie)

    let str = ''

    for (const item of movie.cast) {
        str = str.concat(`'${item.actor}': '',\n`)
    }

    console.log(str)
}