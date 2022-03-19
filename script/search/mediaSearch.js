function rowMovies(i) {
    let results = []

    for (const movie of movieData[i]) {
        results.push(movie.id)
    }

    return results
}
function searchMovies(q) {
    let results = []

    for (const tray of movieData) {
        for (const movie of tray) {
            const key = movie.id

            const name = allMovies[key].name.toUpperCase().includes(q)
            let cast = false
            let tags = false

            if (movie.cast) for (const actor of movie.cast) if ((actor.actor.toUpperCase().includes(q)) || (actor.char.toUpperCase().includes(q))) cast = true
            if (movie.info.tags) for (const tag of movie.info.tags) if (tag.toUpperCase().includes(q)) tags = true

            if ((name || cast || tags) && !results.includes(key)) results.push(key)
        }
    }

    return results
}

function searchMoviesNewRow(results, title, size) {
    let row = rowBase(title)
    let nodes = []

    // process size
    let small = false
    let big = false
    let med = false

    if (size == 'small') {
        small = true
    } else if (size == 'big') {
        big = true
    } else if (size == 'med') {
        small = true
        med = true
    } else if (size == 'smart') {
        small = true
        if (results.length < 5) med = true
    }

    for (const key of results) {
        const movie = allMovies[key]

        // base card
        var card = document.createElement('div')
        card.classList = 'media-card movie clickable-o'
        if (movie.info.date) card.append(mediaTimeElem(mediaNewOrSoon(movie.info.date)))
        if (movie.style.color) { card.style.setProperty('--brand-col', `#${movie.style.color}`) }

        // size
        if (small) card.classList.add('small')
        else if (big) card.classList.add('big')


        // bg for big
        if (big) card.append(bgElement())

        // thumb
        let thumb
        if (small) thumb = thumbBase(`./media-image/TV/background/${movie.id}.${movie.style.posterType}`)
        else if (big) {
            thumb = thumbBase(`./media-image/TV/mobile/${movie.id}.${movie.style.mobileType}`)
            thumb.style.setProperty('aspect-ratio', movie.style.mobileSize)
            thumbCont = document.createElement('div')
            thumbCont.classList = 'thumb-cont'

            thumbCont.append(thumb)
        }

        thumb.append(gradElement())

        if (small) card.append(thumb)
        else if (big) card.append(thumbCont)

        // title
        card.append(movieCardTitle(key))

        // textbox
        if (big) {
            card.append(textboxBase(null, processDesc(movie)))

            let more = document.createElement('a')
            more.classList = 'more'
            more.append(pElement('MORE'))
            more.append(growElement())
            more.append(iconElement(iconData.more))

            card.append(more)
        }

        // med card
        if (med) {
            card.classList.remove('clickable-o')
            card = movieMedCard(card, key)
        }

        // links
        card.onclick = function () { showTVDetail(key) }
        // card.oncontextmenu = function (e) {
        //     e.preventDefault()
        //     contextModalShow([movieApps(movieData[i, j])], e)
        // }


        nodes.push(card)
    }

    row.append(trayWithKids(nodes, 4))
    return row
}

function movieCardTitle(key) {
    const movie = allMovies[key]

    let box = document.createElement('div')
    box.classList = 'tv-title-box'

    let title = document.createElement('div')
    title.classList = `tv-title ${movie.style.titleSize}`
    title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.titleType})`)

    box.append(title)
    return box
}

function movieMedCard(small, key) {
    const movie = allMovies[key]

    let card = document.createElement('div')
    card.classList = 'movie-small-detail clickable-o'

    let detail = mediaCardDetail(processDesc(movie, 'genre'), movie.name, movie.info.summary)
    detail.classList = 'detail'

    card.append(small)
    card.append(detail)
    return card
}

function mediaCardDetail(genre, name, summary) {
    let card = document.createElement('div')
    card.classList = 'detail'

    let genreElem = pElement(genre)
    genreElem.classList = 'genre'

    card.append(genreElem)
    card.append(titleElement(name))
    card.append(descElement(summary))
    return card
}

function searchMoviesRow(results, title) {
    let row = rowBase(title)
    let nodes = []

    for (const key of results) {
        let movie = allMovies[key]

        let card = cardBase()
        card.classList.add('info-card', 'movie', 'clickable-o')
        card.onclick = function () { showTVDetail(key) }
        card.oncontextmenu = function (e) {
            e.preventDefault()
            contextModalShow([movieApps(movie)], e)
        }
        if (movie.style.color) { card.style.setProperty('--brand-col', `#${movie.style.color}`) }

        let thumb = thumbBase(`./media-image/TV/background/${movie.id}.${movie.style.posterType}`)
        thumb.innerHTML = `<div class="grad"></div>`
        if (movie.style.titleType) {
            let title = document.createElement('div')
            title.classList = `tv-title ${movie.style.titleSize}`
            title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.titleType})`)
            thumb.append(title)
        }

        card.append(thumb)
        let textbox = textboxBase(movie.name, processDesc(movie))
        card.append(textbox)


        if (movie.info.date) {
            card.append(mediaTimeElem(mediaNewOrSoon(movie.info.date)))
        }

        nodes.push(card)
    }

    row.append(trayWithKids(nodes))
    return row
}
function searchMoviesRowBig(results, title) {
    let row = rowBase(title)
    let nodes = []

    for (const key of results) {
        let movie = allMovies[key]

        let card = cardBase()
        card.onclick = function () { showTVDetail(key) }
        card.oncontextmenu = function (e) {
            e.preventDefault()
            contextModalShow([movieApps(movie)], e)
        }
        card.classList.add('info-card', 'movie-big', 'clickable-o')

        card.append(bgElement(movie.style.color))

        let thumbCont = growElement()
        thumbCont.classList = 'thumb-cont'

        let thumb = thumbBase(`./media-image/TV/mobile/${movie.id}.${movie.style.mobileType}`)
        thumb.style.setProperty('--ratio', movie.style.mobileSize)

        let grad = gradElement()
        grad.style.setProperty('background-image', `linear-gradient(#${movie.style.color}00, #${movie.style.color} 90%)`)

        thumb.append(grad)

        thumbCont.append(thumb)
        thumbCont.append(growElement())
        card.append(thumbCont)

        if (movie.style.titleType) {
            var textbox = textboxBase(null, processDesc(movie))

            let title = document.createElement('div')
            title.classList = `tv-title ${movie.style.titleSize}`
            title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.titleType})`)
            textbox.prepend(title)
        } else {
            var textbox = textboxBase(movie.name, processDesc(movie))
        }
        card.append(textbox)

        if (movie.info.date) {
            card.append(mediaTimeElem(mediaNewOrSoon(movie.info.date)))
        }

        if (movie.style.color) { card.style.setProperty('--brand-col', `#${movie.style.color}`) }

        nodes.push(card)
    }

    row.append(trayWithKids(nodes))
    return row
}

function searchActors(q) {
    let results = []

    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; (j < movieData[i].length) && (results.length < 10); j++) {
            if (movieData[i][j].cast) {
                for (const actor of movieData[i][j].cast) {
                    if (actor.actor.toUpperCase().includes(q)) {
                        if (!results.includes(actor.actor)) results.push(actor.actor)
                    }
                }
            }
        }
    }

    return results
}

function searchActorsRow(results) {
    let row = rowBase('Actors')
    let nodes = []

    for (const actor of results) {
        let card = document.createElement('div')
        card.classList = 'actor-card'

        let image = document.createElement('div')
        image.classList = 'image layer-1 clickable-o'

        if (actorData[actor]) {
            image.style.setProperty('background-image', `url(${actorData[actor]})`)
        } else {
            let str = ''
            for (const word of actor.split(' ')) {
                str = str.concat(word[0])
            }
            image.innerHTML = str
        }

        card.append(image)
        card.append(textboxBase(actor, null))

        nodes.push(card)
    }

    row.append(trayWithKids(nodes, 20))
    return row
}

function trayWithKids(nodes, spacing) {
    let tray = trayBase()
    tray.classList.add('unpad')

    if (nodes[0]) {
        tray.append(spacerElement(20))
        for (const node of nodes) {
            tray.append(node)
            tray.append(spacerElement(spacing ?? 12))
        }
        tray.lastChild.remove()
        tray.append(spacerElement(20))
    }

    return tray
}


function mediaNewOrSoon(dateStr) {
    let date = new Date(dateStr)

    let future = (new Date()) < new Date(date)

    if (future) {
        let result = countdownProcess(date, 'short')

        return `${result.num} ${result.word.toUpperCase()}`
    } else { return 'NEW' }
}
function mediaTimeElem(str) {
    let elem = document.createElement('div')
    elem.classList = 'media-data'
    elem.innerHTML = str
    return elem
}







function rowBooks(i) {
    let results = []
    for (const book of bookData[i]) results.push(book.id)
    return results
}
function rowPods(i) {
    let results = []
    for (const pod of podData[i]) results.push(pod.id)
    return results
}

function searchBooks(q) {
    let results = []
    for (const tray of bookData) for (const book of tray) {
        const name = book.name.toUpperCase().includes(q)
        if (name) results.push(book.id)
    }
    return results
}
function searchPods(q) {
    let results = []
    for (const tray of podData) for (const pod of tray) {
        const name = pod.name.toUpperCase().includes(q)
        if (name) results.push(pod.id)
    }
    return results
}


function searchBookPodRow(results, title, type) {
    let row = rowBase(title)
    let nodes = []

    let allData
    let folder
    if (type == 'book') {
        allData = allBooks
        folder = 'books'
    } else if (type == 'pod') {
        allData = allPods
        folder = 'podcasts'
    }

    for (const key of results) {
        let item = allData[key]

        let card = cardBase()
        card.classList.add('info-card', type)
        if (item.style) {
            card.style.setProperty('--brand-col-dark', `var(--${item.style}-dark)`)
            card.style.setProperty('--brand-col-light', `var(--${item.style}-light)`)
        }

        let thumb = thumbBase(`./media-image/${folder}/${item.id}.${item.coverType}`)
        card.append(thumb)
        card.append(textboxBase(item.name, item.author))

        card.href = processLink(item.link)
        card.target = '_blank'

        if ((item.progress) && (item.progress != 'NEW')) card.append(mediaTimeElem(item.progress))
        if (!!parseFloat(item.progress)) thumb.append(mediaProgressBarElem(parseFloat(item.progress)))

        nodes.push(card)
    }

    row.append(trayWithKids(nodes))
    return row
}
function mediaProgressBarElem(progress) {
    let elem = document.createElement('div')
    elem.classList = 'progress'

    let bar = document.createElement('div')
    bar.style.setProperty('width', `${progress}%`)

    elem.append(bar)
    return elem
}
