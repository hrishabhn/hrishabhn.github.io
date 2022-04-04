const tvModal = document.getElementById('tv-modal')

// function showTVDetail(key) {
//     removeAllChildNodes(tvModal)

//     let close = document.createElement('a')
//     close.classList = 'close'
//     close.onclick = function () { hideTVDetail() }
//     tvModal.append(close)

//     tvModal.append(tvDetail(key))
//     tvModal.classList.add('open')
// }

function hideTVDetail() {
    tvModal.classList.remove('open')
    removeAllChildNodes(tvModal)
}

function tvDetail(key) {
    const movie = allMovies[key]

    let card = document.createElement('div')
    card.classList = 'tv-detail-card'

    card.append(elems.bg(movie.style.color))

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
        grad.style.setProperty('background-image', `linear-gradient(#00000000,#${movie.style.color})`)
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

    let play = elems.a(iconData.play, `Watch on ${movie.info.location}`)
    play.classList = 'play clickable'
    if (movie.link) play.href = movie.link

    info.firstChild.after(play)

    // summary
    if (movie.info.summary) {
        let sum = elems.p(movie.info.summary)
        sum.classList = 'summary'
        info.append(sum)
    }

    // apps
    info.append(tvDetailApps(key))
    card.append(info)
    card.append(elems.grow())

    if (movie.cast || movie.info.tags) {
        let more = document.createElement('div')
        more.classList = 'vstack fill-width grow layer-0 primary-fg'

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
            if (results.length) more.append(mediaElems.movie.new.row(results, `More in ${movies.tags[mainTag]}`, 'small'))
            more.append(elems.hline())
        }

        more.lastChild.remove()

        card.append(more)
    }



    let close = elems.a(iconData.close, null)
    close.classList = 'close-tv-modal clickable-o'
    close.onclick = function () {
        hideTVDetail()
    }
    card.append(close)

    return card
}

function tvDetailApps(key) {
    const movie = allMovies[key]
    const apps = movie.apps

    let nodes = []

    function tvDetailAppBase(icon, iconSize, spacing, text, link) {
        let elem = document.createElement('a')
        elem.classList = 'app clickable card-shadow'
        elem.target = '_blank'

        let iconElem = elems.icon(icon)
        iconElem.style.setProperty('--size', `${iconSize}px`)

        elem.append(iconElem)
        elem.append(elems.spacer(spacing))
        elem.append(elems.p(text))

        if (link) elem.href = link

        return elem
    }

    // apps
    nodes.push(tvDetailAppBase(
        icon = iconData.movie.google,
        iconSize = 0,
        spacing = 5,
        text = 'Google',
        link = googleSearch(movie.name)
    ))

    // tv time
    if (movie.apps.tvTimeID) nodes.push(tvDetailAppBase(
        icon = iconData.movie.tvtime,
        iconSize = -3,
        spacing = 8,
        text = 'TV Time',
        link = `https://www.tvtime.com/en/show/${movie.apps.tvTimeID}`
    ))

    // reelgood
    nodes.push(tvDetailAppBase(
        icon = iconData.movie.reelgood,
        iconSize = -2,
        spacing = 8,
        text = 'Reelgood',
        link = movie.apps.reelgoodLink ? movie.apps.reelgoodLink : `https://reelgood.com/search?q=${movie.name}`
    ))

    // imdb
    nodes.push(tvDetailAppBase(
        icon = iconData.movie.imdb,
        iconSize = -2,
        spacing = 8,
        text = 'IMDb',
        link = movie.apps.imdbID ? `https://www.imdb.com/title/${movie.apps.imdbID}` : `https://www.imdb.com/find?q=${movie.name}`
    ))

    // reddit
    if (movie.apps.subReddit) nodes.push(tvDetailAppBase(
        icon = iconData.movie.reddit,
        iconSize = -1,
        spacing = 8,
        text = 'Reddit',
        link = `https://www.reddit.com/r/${movie.apps.subReddit}`

    ))

    // justwatch
    nodes.push(tvDetailAppBase(
        icon = iconData.movie.justwatch,
        iconSize = 0,
        spacing = 5,
        text = 'JustWatch',
        link = `https://www.justwatch.com/es/buscar?q=${movie.name}`
    ))

    return trayWithKids(nodes, 8)
}

function actorCard(actor, char) {
    let card = document.createElement('div')
    card.classList = 'actor-card clickable-o'

    let image = document.createElement('a')
    image.classList = 'image layer-1'
    image.href = googleSearch(actor)
    image.target = '_blank'

    if (actors.data[actor]) image.style.setProperty('background-image', `url(${actors.data[actor]})`)
    else {
        let str = ''
        for (const word of actor.split(' ')) str = str.concat(word[0])
        image.textContent = str
    }

    card.append(image)
    card.append(elems.textbox(actor, char ?? null))

    return card
}