const len = 5

function spotlightRun(e) {
    let qOrig = spotlight.elem().value
    let q = qOrig.toUpperCase()

    // console.log(q)

    if (q) {
        if (e.key == 'Enter') {
            let row = document.getElementById('row-0')

            if (row) {
                let target = row.lastChild.firstChild
                if (target.classList.value == 'spacer-x') { target = target.nextSibling }
                if (target.href) {
                    window.open(target.href, '_self')
                } else if (target.onclick) {
                    target.onclick()
                }
            } else {
                if (qOrig.startsWith('https://')) window.open(qOrig, '_self')
                else window.open(`https://www.google.com/search?q=${qOrig}`, '_self')

                // window.open(`https://neeva.com/search?q=${qOrig}`, '_self')
            }
        } else if (e.key == 'Tab') {
            let row = document.getElementById('row-0')
            if (row) {
                let target = row.lastChild.firstChild
                if (target.classList.value == 'spacer-x') { target = target.nextSibling }

                if (target.getAttribute('engineData')) {
                    startSearchEngine(JSON.parse(target.getAttribute('engineData')))
                }
            }
        } else {
            removeAllChildNodes(spotlight.result)
            let resultRowArray = [
                appObject.main.tray(appObject.search(q, focus.apps()), 'Focus'),
                appObject.main.tray(appObject.search(q, appData['main']), 'Apps'),
                appObject.main.tray(appObject.search(q, appData['notion']), 'Notion'),
                appObject.main.tray(appObject.search(q, appData['school']), 'School'),
                appObject.main.tray(appObject.search(q, appData['shopping']), 'Shopping'),
                appObject.main.tray(appObject.search(q, appData['bookmarks']), 'Bookmarks'),
                appObject.main.tray(appObject.search(q, appData['video']), 'Video'),
                appObject.main.tray(appObject.search(q, appData['read']), 'Read'),
                appObject.main.tray(appObject.search(q, appData['listen']), 'Listen'),
                appObject.main.tray(appObject.search(q, appData['travel']), 'Travel'),
                appObject.main.tray(appObject.search(q, appData['utilities']), 'Utilities'),
                appObject.main.tray(appObject.search(q, appData['profiles']), 'Social Media Pages'),
                appObject.main.tray(appObject.search(q, appData['design']), 'Design'),
                appObject.main.tray(appObject.search(q, appData['worldClock']), 'World Clock'),
                // searchCalRow(searchCal(q)),
                movies.searchRow(q),
                actors.searchRow(q),
                // searchBookPodNewRow(books.search(q), 'Books', 'book'),
                books.searchRow(q),
                pods.searchRow(q),
                food.searchRow(q),
                // searchBookPodBig(['decoder'], 'pod'),
            ]

            let i = 0

            for (let item of resultRowArray) {
                let relevant = item.lastChild.hasChildNodes()

                if (relevant) {
                    spotlight.result.append(elems.divider())
                    item.id = `row-${i}`
                    spotlight.result.append(item)
                    i++
                }

            }
        }



    } else {
        removeAllChildNodes(spotlight.result)
        content.load()
        if (e.key == 'Enter') window.open('https://google.com', '_self')
    }
}