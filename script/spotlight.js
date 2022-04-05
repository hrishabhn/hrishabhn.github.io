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
                appTray.main(searchApps(q, focus.apps()), 'Focus'),
                appTray.main(searchApps(q, appData['main']), 'Apps'),
                appTray.main(searchApps(q, appData['notion']), 'Notion'),
                appTray.main(searchApps(q, appData['school']), 'School'),
                appTray.main(searchApps(q, appData['shopping']), 'Shopping'),
                appTray.main(searchApps(q, appData['bookmarks']), 'Bookmarks'),
                appTray.main(searchApps(q, appData['video']), 'Video'),
                appTray.main(searchApps(q, appData['read']), 'Read'),
                appTray.main(searchApps(q, appData['listen']), 'Listen'),
                appTray.main(searchApps(q, appData['travel']), 'Travel'),
                appTray.main(searchApps(q, appData['utilities']), 'Utilities'),
                appTray.main(searchApps(q, appData['profiles']), 'Social Media Pages'),
                appTray.main(searchApps(q, appData['design']), 'Design'),
                appTray.main(searchApps(q, appData['worldClock']), 'World Clock'),
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




function searchApps(q, data) {
    let results = []
    for (let i = 0; i < data.length; i++) {
        const name = data[i].name.toUpperCase().includes(q)
        const desc = data[i].desc.toUpperCase().includes(q)

        let tagMatch = false
        if (data[i].tags) {
            for (const tag of data[i].tags) {
                if (tag.toUpperCase().includes(q)) {
                    tagMatch = true
                }
            }
        }

        if ((name) || (desc) || (tagMatch)) {
            results.push(data[i])
        }
    }
    return results
}