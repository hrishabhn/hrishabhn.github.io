function loadApp() {
    focusLoad()

    topbarLoad()
    splashLoad()

    spotlightLoad()
    bodyLoad()

    // skipToContent()
    // addModalLayer(workoutCard())
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