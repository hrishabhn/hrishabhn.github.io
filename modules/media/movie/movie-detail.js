const tvDetail = {
    elem: document.getElementById('tv-modal'),
    show: function (key) {
        let close = document.createElement('a')
        close.classList = 'close'
        close.onclick = function () { tvDetail.hide() }
        tvDetail.elem.append(close)

        tvDetail.elem.append(tvDetail.card(key))
        tvDetail.elem.classList.add('open')
    },
    hide: function () {
        tvDetail.elem.classList.remove('open')
        removeAllChildNodes(tvDetail.elem)
    },
    card: function (key) {
        const movie = movieDict[key]

        let card = document.createElement('div')
        card.classList = 'tv-detail-card'

        card.append(elems.bg(movie.style.hex))

        // desktop thumb
        let wide = document.createElement('div')
        wide.classList = 'fill-width wide-thumb'

        wide.append(elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`))
        wide.append(elems.grad())
        card.append(wide)

        // mobile thumb
        if (movie.style.poster.mobile.type) {
            let tall = document.createElement('div')
            tall.classList = 'fill-width tall-thumb only-mobile'

            let thumb = elems.thumb(`./media-image/TV/mobile/${movie.id}.${movie.style.poster.mobile.type}`)
            thumb.style.setProperty('aspect-ratio', movie.style.poster.mobile.size)

            let grad = elems.grad()
            grad.style.setProperty('background-image', `linear-gradient(#00000000,#${movie.style.hex})`)
            thumb.append(grad)

            let title = movieCardTitle(key)
            title.classList.add('only-mobile')

            tall.append(thumb)
            card.append(tall)
            card.append(title)

            wide.classList.add('hidden-mobile')
        } else {
            card.style.setProperty('margin', '0 50px')
        }

        // title, desc, play button
        let info = elems.textbox(movie.name, movie.desc.full)
        info.firstChild.classList.add('hidden-mobile')
        info.classList = 'info'

        let play = elems.a(iconData.play, movie.info.location)
        play.classList = 'play clickable'
        play.onclick = function () { movie.play() }

        info.firstChild.after(play)

        // summary
        if (movie.info.summary) {
            let sum = elems.p(movie.info.summary)
            sum.classList = 'summary'
            info.append(sum)
        }

        // apps
        info.append(tvDetail.app.tray(movie))
        card.append(info)
        card.append(elems.grow())

        if (movie.cast || movie.info.tags) {
            let more = document.createElement('div')
            more.classList = 'extra layer-0 primary-fg'

            // cast
            if (movie.cast) {
                more.append(actors.row(movie.cast, 'Cast'))
                more.append(elems.hline())
            }

            // suggest
            if (movie.info.tags) for (const mainTag of movie.info.tags) {
                let results = []
                for (const tray of movieData) for (item of tray)
                    if (item.info.tags) for (const tag of item.info.tags)
                        if ((tag == mainTag) && (item.id != key)) results.push(item.id)
                if (results.length) more.append(mediaElems.movie.row(results, `More in ${movies.tags[mainTag]}`, 'small'))
                more.append(elems.hline())
            }

            more.lastChild.remove()

            card.append(more)
        }



        let close = elems.a(iconData.close, null)
        close.classList = 'close-tv-modal clickable-o'
        close.onclick = function () {
            tvDetail.hide()
        }
        card.append(close)

        return card
    },
    app: {
        tray: function (movie) {
            let tray = document.createElement('div')
            tray.classList = 'movie-detail-app-tray'
            for (const app of movieApps(movie)) tray.append(this.card(app))
            return tray
        },
        card: function ({ icon, pad, name, link }) {
            let elem = document.createElement('a')
            elem.classList = 'app clickable card-shadow'
            elem.target = '_blank'
            elem.onmouseover = function () {
                for (const child of elem.parentNode.childNodes) child.classList.remove('active')
                elem.classList.add('active')
            }

            let iconElem = elems.icon(icon)
            if (pad) iconElem.style.setProperty('padding', `${pad}px`)

            elem.append(iconElem)
            // elem.append(elems.spacer(spacing ?? 0))
            elem.append(elems.p(name))

            if (link) elem.href = link

            return elem
        },
    },
}

function movieApps(movie) {
    let data = []

    // google
    data.push({
        icon: iconData.movie.google,
        pad: 5,
        name: 'Google',
        link: googleSearch(movie.name)
    })

    // tv time
    if (movie.apps.tvTimeID) data.push({
        icon: iconData.movie.tvtime,
        pad: 1,
        name: 'TV Time',
        link: `https://www.tvtime.com/en/show/${movie.apps.tvTimeID}`
    })

    // reelgood
    data.push({
        icon: iconData.movie.reelgood,
        pad: 3,
        name: 'Reelgood',
        link: movie.apps.reelgoodLink ? movie.apps.reelgoodLink : `https://reelgood.com/search?q=${movie.name}`
    })

    // imdb
    data.push({
        icon: iconData.movie.imdb,
        pad: 3,
        name: 'IMDb',
        link: movie.apps.imdbID ? `https://www.imdb.com/title/${movie.apps.imdbID}` : `https://www.imdb.com/find?q=${movie.name}`
    })

    // reddit
    data.push({
        icon: iconData.movie.reddit,
        pad: 3,
        name: 'Reddit',
        link: movie.apps.subReddit ? `https://www.reddit.com/r/${movie.apps.subReddit}` : googleSearch(`${movie.name} site:reddit.com`)
    })

    // justwatch
    data.push({
        icon: iconData.movie.justwatch,
        pad: 4,
        name: 'JustWatch',
        link: `https://www.justwatch.com/es/buscar?q==${movie.name}`
    })

    return data
}