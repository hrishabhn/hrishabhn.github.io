function loadApp() {
    focus.load()
    dnd.load()
    routine.load()

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