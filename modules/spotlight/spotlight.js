const len = 5

const spotlight = {
    create: function () {
        const elem = document.createElement('div')
        elem.id = 'spotlight'
        elem.classList = 'layer-0'

        const input = document.createElement('input')
        input.placeholder = 'Search'
        input.onkeyup = function (e) { spotlight.run(e) }

        elem.append(elems.icon(SFSymbols.magnifyingglass))
        elem.append(input)

        return elem
    },
    elem: function () { return document.getElementById('spotlight').childNodes[1] },
    result: document.getElementById('result-tray'),
    // engine: function (data) {
    //     const input = spotlight.elem()
    //     let app = document.createElement('div')
    //     app.classList = 'engine'
    //     app.append(elems.appThumb(data.thumb))
    //     app.append(elems.p(`Searching ${data.name}:`))
    //     input.parentNode.before(app)

    //     input.value = ''
    //     input.onkeyup = function (e) {
    //         if (input.value) {
    //             if (e.key == 'Enter') window.open(`${data.searchBase}${input.value}`, '_self')
    //         } else if (e.key == 'Backspace') spotlight.reset()

    //     }
    // },
    // reset: function () {
    //     spotlight.elem().parentNode.previousSibling.remove()
    //     spotlight.elem().onkeyup = function (e) { spotlight.run(e) }
    // },
    oldQ: null,
    run: function (e) {
        let qOrig = spotlight.elem().value
        let q = qOrig.toUpperCase()

        // console.log(q)

        if (q) {
            if (e.key == 'Enter') {
                // !! add href
                if (spotlight.result.hasChildNodes()) {
                    let target = spotlight.result.firstChild.firstResult()
                    if (target.href) window.open(target.href, '_self')
                    else if (target.onclick) target.onclick()
                } else {
                    if (qOrig.startsWith('https://')) window.open(qOrig, '_self')
                    else window.open(googleSearch(qOrig), '_self')
                }
            }
            // // !! update this
            // else if (e.key == 'Tab') {

            //     let row = document.getElementById('row-0')
            //     if (row) {
            //         let target = row.lastChild.firstChild
            //         if (target.classList.value == 'spacer-x') { target = target.nextSibling }

            //         if (target.getAttribute('engineData')) {
            //             spotlight.engine(JSON.parse(target.getAttribute('engineData')))
            //         }
            //     }
            // }
            else if (qOrig !== spotlight.oldQ) {
                document.getElementById('main').classList = 'searching'
                while (spotlight.result.firstChild) spotlight.result.firstChild.remove()

                // // remove searchable tab elem
                // let tabOld = document.getElementById('tab-to-search')
                // if (tabOld) tabOld.remove()

                let resultCards = [
                    appObject.resultCard(appObject.search(q, focus.apps()), 'Focus Modes'),
                    appObject.resultCard(appObject.search(q, appData.main), 'Main Apps'),

                    appObject.resultCard(appObject.search(q, appData['notion']), 'Notion'),
                    appObject.resultCard(appObject.search(q, appData['school']), 'School'),
                    appObject.resultCard(appObject.search(q, appData['shopping']), 'Shopping'),
                    appObject.resultCard(appObject.search(q, appData['bookmarks']), 'Bookmarks'),
                    appObject.resultCard(appObject.search(q, appData['video']), 'Video'),
                    appObject.resultCard(appObject.search(q, appData['read']), 'Read'),
                    appObject.resultCard(appObject.search(q, appData['listen']), 'Listen'),
                    appObject.resultCard(appObject.search(q, appData['travel']), 'Travel'),
                    appObject.resultCard(appObject.search(q, appData['utilities']), 'Utilities'),
                    appObject.resultCard(appObject.search(q, appData['profiles']), 'Social Media Pages'),
                    appObject.resultCard(appObject.search(q, appData['design']), 'Design'),
                    appObject.resultCard(appObject.search(q, appData['span']), 'Spanish'),
                    appObject.resultCard(appObject.search(q, appData['worldClock']), 'World Clock'),
                    movies.resultCard(movies.search(q)),
                    actors.resultCard(actors.search(q)),
                    bookElem.resultCard(books.search(q)),
                    podElem.resultCard(podElem.search(q)),

                    // result cards
                    SF.resultCard(SF.search(q)),
                    colorTesting.resultCard(q),
                ]

                for (const c of resultCards) if (!c.isEmpty()) spotlight.result.append(c)
            }
        } else {
            document.getElementById('main').classList = 'initial'
            while (spotlight.result.firstChild) spotlight.result.firstChild.remove()
            content.load()
            if (e.key == 'Enter') window.open('https://google.com', '_self')
        }

        spotlight.oldQ = qOrig
    },
}