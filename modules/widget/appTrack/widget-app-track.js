if (!getCookie('app-tracking')) setCookie('app-tracking', JSON.stringify([]), 7)

function appTrackAdd(data) {
    let appTracking = JSON.parse(getCookie('app-tracking'))
    appTracking.push({
        app: JSON.stringify(data),
        date: new Date().getTime(),
    })
    setCookie('app-tracking', JSON.stringify(appTracking), 7)
}

function widgetTrackContent() {
    let data = appTrackProcess()

    // for (const item of data) console.log(item)


    let nodes = []
    let index = 0


    while (data.length && index < 2) {
        const item = data.shift()
        const app = item.app

        let row = document.createElement('div')
        row.classList = 'row'

        // console.log(app)

        let thumb = thumbElement(app.thumb)
        let text = textboxBase(app.name, `${item.count} time${item.count > 1 ? 's' : ''}`)

        // console.log(app)

        row.append(thumb)
        row.append(spacerElement(18))
        row.append(text)

        nodes.push(spacerElement(8))
        nodes.push(row)

        index++
    }

    if (data.length) {
        const remain = data.slice(0, 5).reverse()


        nodes.push(spacerElement(8))
        let row = document.createElement('div')
        row.classList = 'row end'

        while (remain.length && index < 7) {
            const app = remain.shift().app
            let thumb = thumbElement(app.thumb)

            row.append(thumb)

            index++
        }
        nodes.push(row)
    }





    return nodes
}

function appTrackProcess() {
    let data = JSON.parse(getCookie('app-tracking'))
    let apps = data.map(({ app }) => app);
    let doneApps = {}

    for (const app of apps) {
        if (!doneApps[app]) doneApps[app] = 1
        else doneApps[app]++
    }

    let processed = []

    for (const app in doneApps) processed.push({
        app: JSON.parse(app),
        count: doneApps[app],
    })

    processed.sort((a, b) => (a.count > b.count) ? 1 : -1)

    return processed.reverse()
}