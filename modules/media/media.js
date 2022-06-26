const mediaAll = {
    modal: function (pageKey) {
        const data = false ? mediaAll.pages[pageKey] : mediaAll.pages.tv

        let page = document.createElement('div')
        page.id = 'media-all'
        page.append(elems.header())

        // content 
        let pageContent = document.createElement('div')
        pageContent.classList = 'media-all-content'

        // if (data.bg()) pageContent.style.setProperty('background-image', data.bg())
        // else pageContent.style.setProperty('background-image', `linear-gradient(#0C0C12, #242434, #181823)`)

        if (data.hex()) {
            pageContent.style.setProperty('background-image', `linear-gradient(#${data.hex()}33, #${data.hex()}22), linear-gradient(#1c1c1e, #1c1c1e)`)
        } else {
            pageContent.style.setProperty('background-image', `linear-gradient(#2c2c2e, #2c2c2e)`)
        }



        // if (getCookie('recent-movie')) {
        //     const movie = movieDict[getCookie('recent-movie')]
        //     pageContent.style.setProperty('background-image', `linear-gradient(#${movie.style.hex}33, #${movie.style.hex}22), linear-gradient(#1c1c1e, #1c1c1e)`)
        // } else pageContent.style.setProperty('background-image', `linear-gradient(#0C0C12, #242434, #181823)`)

        for (const x of data.content()) pageContent.append(x)

        page.append(pageContent)
        return page
    },
    tray: function (nodes, visible, title) {
        let tray = document.createElement('div')
        tray.classList = 'media-tray'

        let hs = document.createElement('div')
        hs.classList = 'media-hs'
        hs.style.setProperty('--n', visible)

        for (const x of nodes) hs.append(x)

        if (title) tray.append(elems.title(title))
        tray.append(hs)
        return tray
    },
    pages: {
        tv: {
            name: 'TV',
            content: function () {
                return [
                    movieElem.giant.create(),
                    channels.bigTray(),
                    movieElem.tall.tray(movieRaw[0]),
                    movieElem.big.tray(movieRaw[1]),
                    movieElem.small.tray(movieRaw[2]),
                    movieElem.tall.tray(movieRaw[3]),
                    movieElem.small.tray(movieRaw[4]),
                    movieElem.small.tray(movieRaw[5]),
                    movieElem.smart.tray(movieRaw[6]),
                    movieElem.small.tray(movieRaw[7]),
                    movieElem.small.tray(movieRaw[8]),
                    movieElem.tall.tray(movieRaw[9]),
                    movieElem.tall.tray(movieRaw[10]),
                ]
            },
            hex: function () { return getCookie('recent-movie') ? movieDict[getCookie('recent-movie')].style.hex : '1c1c1e' },
        },
        pod: {
            name: 'TV',
            content: function () {
                return [
                    podElem.recent.tray()
                ]
            },
            hex: function () { return null },
            // hex: function () { return '2c2c2e' },
        },
    },
    commonElems: {
        data: function (x) {
            let elem = document.createElement('div')
            elem.classList = 'data'
            elem.innerText = x
            return elem
        },
        detailTextbox(small, big, long) {
            let box = document.createElement('div')
            box.classList = 'media-detail-textbox'
            box.append(elems.name(small))
            box.append(elems.subtitle(big))
            box.append(elems.desc(long))
            return box
        },
    },
    script: {
        addDataElem: function (card, date) {
            if (!date) return card
            // if not in the last 7 days
            if (!(new Date(date) > new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))) return card

            let x = elems.p(mediaNewOrSoon(date))
            x.classList = 'movie-data'
            card.append(x)
            return card
        }
    },
}