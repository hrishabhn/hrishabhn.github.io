function loadApp() {
    focus.load()
    dnd.load()
    routine.load()

    loadAccent()

    leftbar.load()
    spotlight.elem().focus()
    topbarLoad()
    content.load()




    // splashLoad()

    // spotlightLoad()

    // paramsLoad()






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

function loadAccent() {
    if (focus.get().style) {
        document.documentElement.style.setProperty('--accent-dark', `var(--${focus.get().style}-dark)`);
        document.documentElement.style.setProperty('--accent-light', `var(--${focus.get().style}-light)`);
    }
}

function paramsLoad() {
    const params = new URLSearchParams(window.location.search)
    if (params.get('q')) {
        let q = params.get('q')
        document.getElementById('spotlight').value = q
        spotlightRun(q)
    }
}

function skipToContent() {
    document.getElementById('rest-of-stuff').scrollTop = window.innerHeight - 60
}