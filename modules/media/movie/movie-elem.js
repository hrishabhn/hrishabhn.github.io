const movieElem = {
    giant: {
        create: function () {
            if (!getCookie('recent-movie')) {
                const j = randomNumber(movieData[0].length)
                setCookie('recent-movie', movieData[0][j].id, 7)
            }

            let movie = movieDict[getCookie('recent-movie')]

            let card = document.createElement('a')
            card.classList = 'movie-card-giant'
            card.id = 'movie-card-giant'

            let thumb = elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`)
            card.append(thumb)
            card.append(elems.textbox(movie.name, 'Continue Watching'))
            card.append(movieElem.giant.apps(movie))

            return card
        },
        apps: function (movie) {
            let tray = document.createElement('div')
            tray.classList = 'play-tray'

            let play = elems.a(SFSymbols.play.fill, movie.info.location)
            play.classList = 'play clickable-o'
            play.onclick = function () { movie.play() }

            let more = elems.a(SFSymbols.arrow.up.right, 'More')
            more.classList = 'more clickable-o'
            more.onclick = function () { movie.detail() }

            tray.append(play, more)
            for (const app of movieApps(movie)) {
                let elem = elems.a(app.icon, app.name)
                elem.firstChild.style.setProperty('padding', `${app.pad}px`)
                elem.classList = 'more clickable-o'
                elem.style.setProperty('cursor', 'pointer')
                elem.href = app.link
                elem.target = '_blank'
                tray.append(elem)
            }

            return tray
        },
        update: function (movie) {
            let card = document.getElementById('movie-card-giant')

            // thumb
            card.firstChild.style.setProperty('background-image', `url(./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type})`)

            // textbox
            card.childNodes[1].firstChild.innerText = movie.name
            card.childNodes[1].lastChild.innerText = 'Watch Now'

            // apps
            card.lastChild.remove()
            card.append(movieElem.giant.apps(movie))

            // bgcol
            const pageContent = document.getElementById('media-all').childNodes[1]
            pageContent.style.setProperty('background-image', `linear-gradient(#${movie.style.hex}33, #${movie.style.hex}22), linear-gradient(#1c1c1e, #1c1c1e)`)
        },
    },
    baseCard: function (movie) {
        let item = document.createElement('div')
        item.classList = 'hotstar clickable-o'
        item.onclick = function () { movie.detail() }

        let updateGiant
        let hotstarHover
        item.onmouseover = function () {
            updateGiant = setTimeout(function () { movieElem.giant.update(movie) }, 1000);
            hotstarHover = setTimeout(function () { item.classList.add('hovering') }, 200);
        }
        item.onmouseleave = function () {
            clearTimeout(updateGiant)
            clearTimeout(hotstarHover)
            item.classList.remove('hovering')
        }
        return item
    },
    small: {
        tray: function ({ data, name }) {
            let nodes = []
            for (const x of data) nodes.push(movieElem.small.card(x))
            return mediaAll.tray(nodes, 4, name)
        },
        card: function (movie) {
            let item = movieElem.baseCard(movie)
            item.classList.add('movie-card-small')

            item.append(elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`))
            item.append(movieElem.title(movie.id))

            item = mediaAll.script.addDataElem(item, movie.info.date)
            // item = addFloatEffect(item, item.childNodes[1].firstChild)
            return item
        },
    },
    med: {
        tray: function ({ data, name }) {
            let nodes = []
            for (const x of data) {
                nodes.push(movieElem.small.card(x))
                nodes.push(movieElem.med.card(x))
            }
            return mediaAll.tray(nodes, 4, name)
        },
        card: function (movie) {
            let item = mediaAll.commonElems.detailTextbox(movie.desc.genre, movie.name, movie.info.summary)
            item.classList.add('clickable-o')
            item.onclick = function () { movie.detail() }
            return item
        },
    },
    smart: {
        tray: function ({ data, name }) {
            if (data.length > 3) return movieElem.small.tray({ data, name })
            else return movieElem.med.tray({ data, name })
        }
    },
    big: {
        tray: function ({ data, name }) {
            let nodes = []
            for (const x of data) nodes.push(movieElem.big.card(x))
            return mediaAll.tray(nodes, 3, name)
        },
        card: function (movie) {
            let item = movieElem.baseCard(movie)
            item.classList.add('movie-card-big')

            item.style.setProperty('--col-1', `#${movie.style.hex}00`)
            item.style.setProperty('--col-2', `#${movie.style.hex}`)

            let title = movieElem.title(movie.id)
            title.append(elems.p(movie.desc.full))

            item.append(elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`))
            item.append(elems.bg())
            item.append(title)
            // item = addFloatEffect(item, item.childNodes[1].firstChild)
            item = mediaAll.script.addDataElem(item, movie.info.date)
            return item
        },
    },
    tall: {
        tray: function ({ data, name }) {
            let nodes = []
            for (const x of data) nodes.push(movieElem.tall.card(x))
            return mediaAll.tray(nodes, 4, name)
        },
        card: function (movie) {
            let item = movieElem.baseCard(movie)
            item.classList.add('movie-card-tall')

            item.style.setProperty('--col-1', `#${movie.style.hex}00`)
            item.style.setProperty('--col-2', `#${movie.style.hex}`)

            let title = movieElem.title(movie.id)
            title.append(elems.p(movie.desc.full))

            let thumb = elems.thumb(`./media-image/TV/mobile/${movie.id}.${movie.style.poster.mobile.type}`)
            thumb.style.setProperty('aspect-ratio', movie.style.poster.mobile.size)
            thumb.append(elems.grad())


            item.append(elems.bg())
            item.append(thumb)
            item.append(elems.grow())
            item.append(title)
            item = mediaAll.script.addDataElem(item, movie.info.date)
            return item
        },
    },
    title: function (key) {
        const movie = movieDict[key]

        let box = document.createElement('div')
        box.classList = 'tv-title-box-new'

        let title = document.createElement('div')
        title.classList = `tv-title ${movie.style.title.size}`
        title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.title.type})`)

        box.append(title)
        return box
    },
}