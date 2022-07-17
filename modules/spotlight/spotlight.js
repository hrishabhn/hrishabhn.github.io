const len = 5

const spotlight = {
    create: function () {
        const elem = document.createElement('div')
        elem.id = 'spotlight'
        elem.classList = 'layer-1'

        const input = document.createElement('input')
        input.placeholder = 'Search'
        input.onkeyup = function (e) { spotlight.run(e) }

        // searchable
        input.showPrompt = function (engine) {
            const prompt = Elems.div('prompt')
            const tab = Elems.p('Tab')
            tab.classList = 'tab'

            prompt.append(Elems.p('Press'))
            prompt.append(tab)
            prompt.append(Elems.p(`to search ${engine}`))

            elem.append(prompt)
        }
        input.hidePrompt = function () { while (elem.lastChild.tagName !== 'INPUT') elem.lastChild.remove() }

        // engine
        input.startEngine = function (searchBase, name) {
            input.value = ''
            input.placeholder = `Searching ${name}`
            input.hidePrompt()

            input.onkeyup = function (e) {
                let link = `${searchBase}${input.value}`
                if (e.key == 'Enter') window.open(`${searchBase}${input.value}`, '_self')
                if (e.key == 'Backspace') if (!input.value) input.reset()
            }

            const prompt = Elems.div('prompt clickable-o')
            prompt.onclick = function () { input.reset() }
            const tab = Elems.p('Cancel')
            tab.classList = 'tab'
            prompt.append(Elems.p(`Searching ${name}`))
            prompt.append(tab)
            elem.append(prompt)
        }
        input.reset = function () {
            input.placeholder = 'Search'
            input.onkeyup = function (e) { spotlight.run(e) }
            input.hidePrompt()
        }

        // done
        elem.append(elems.icon(SFSymbols.magnifyingglass))
        elem.append(input)
        return elem
    },
    elem: function () { return document.getElementById('spotlight').childNodes[1] },
    result: document.getElementById('result-tray'),
    target: function () {
        if (spotlight.result.hasChildNodes()) return spotlight.result.firstChild.firstResult()
        return null
    },
    oldQ: null,
    run: function (e) {
        let qOrig = spotlight.elem().value
        let q = qOrig.toUpperCase()

        // console.log(q)

        if (q) {
            if (e.key == 'Enter') {
                if (spotlight.target()) {
                    if (spotlight.target().href) window.open(spotlight.target().href, '_self')
                    else if (spotlight.target().onclick) spotlight.target().onclick()
                } else {
                    if (qOrig.startsWith('https://')) window.open(qOrig, '_self')
                    else window.open(googleSearch(qOrig), '_self')
                }
            }
            // // !! update this
            else if (e.key == 'Tab') {
                if (spotlight.target()) if (spotlight.target().searchBase) spotlight.elem().startEngine(spotlight.target().searchBase, spotlight.target().name)
            }
            else if (qOrig !== spotlight.oldQ) {
                document.getElementById('main').classList = 'searching'
                while (spotlight.result.firstChild) spotlight.result.firstChild.remove()
                spotlight.elem().hidePrompt()

                let resultCards = [
                    appObject.resultCard(appObject.search(q, focus.apps()), 'Focus Modes'),

                    appObject.resultCard(appObject.search(q, appDataAll.main), 'Main Apps'),
                    appObject.resultCard(appObject.search(q, appDataAll.bookmarks), 'Bookmarks'),
                    appObject.resultCard(appObject.search(q, appDataAll.notion), 'Notion'),
                    appObject.resultCard(appObject.search(q, appDataAll.purdue), 'Purdue'),
                    appObject.resultCard(appObject.search(q, appDataAll.span), 'Spanish Learning'),
                    appObject.resultCard(appObject.search(q, appDataAll.utilities), 'Utilities'),
                    appObject.resultCard(appObject.search(q, appDataAll.design), 'Design'),
                    appObject.resultCard(appObject.search(q, appDataAll.profiles), 'Social Media Pages'),
                    appObject.resultCard(appObject.search(q, worldClock.apps()), 'World Clock'),
                    appObject.resultCard(appObject.search(q, appDataAll.shopping), 'Shopping'),


                    movies.resultCard(movies.search(q)),
                    channels.resultCard(channels.search(q)),
                    actors.resultCard(actors.search(q)),
                    bookElem.resultCard(books.search(q)),
                    podElem.resultCard(podElem.search(q)),

                    appObject.resultCard(appObject.search(q, appDataAll.video), 'Video'),
                    appObject.resultCard(appObject.search(q, appDataAll.read), 'Read'),
                    appObject.resultCard(appObject.search(q, appDataAll.listen), 'Listen'),

                    // result cards
                    SF.resultCard(SF.search(q)),
                    colorTesting.resultCard(q),
                ]

                for (const c of resultCards) if (!c.isEmpty()) spotlight.result.append(c)

                // searchable
                if (spotlight.target()) if (spotlight.target().searchBase) spotlight.elem().showPrompt(spotlight.target().name)
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