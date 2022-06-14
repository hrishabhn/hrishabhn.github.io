function loadApp() {
    focus.load()
    dnd.load()
    routine.load()

    loadAccent()

    leftbar.load()
    dock.load()
    spotlight.elem().focus()
    topbar.load()


    content.load()

    paramsLoad()


    // Testing
    // movieDict['himym'].detail()
    // SF.test.modal()




    // modal.add(workoutCard())
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
    } else {
        document.documentElement.style.setProperty('--accent-dark', `var(--blue-dark)`);
        document.documentElement.style.setProperty('--accent-light', `var(--blue-light)`);
    }
}

function paramsLoad() {
    const params = new URLSearchParams(window.location.search)
    if (params.get('q')) {
        let q = params.get('q')
        spotlight.elem().value = q
        spotlight.run(q)
    }
}