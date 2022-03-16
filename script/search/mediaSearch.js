function rowMovies(i) {
    let results = []

    for (let j = 0; j < movieData[i].length; j++) {
        results.push([i, j])
    }

    return results
}
function searchMovies(q) {
    let results = []

    // const genre = containsGenre(i,j,query)
    // const actor = containsActor(i,j,query)

    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; (j < movieData[i].length) && (results.length < len); j++) {
            const name = movieData[i][j].name.toUpperCase().includes(q)
            let cast = false
            let tags = false

            if (movieData[i][j].cast) {
                for (const actor of movieData[i][j].cast) {
                    if ((actor.actor.toUpperCase().includes(q)) || (actor.char.toUpperCase().includes(q))) {
                        cast = true
                    }
                }
            }

            if (movieData[i][j].info.tags) {
                for (const tag of movieData[i][j].info.tags) {
                    if (tag.toUpperCase().includes(q)) {
                        tags = true
                    }
                }
            }

            if (name || cast || tags) {
                results.push([i, j])
            }
        }
    }

    return results
}
function searchMoviesRow(results, title) {
    let row = rowBase(title)
    let nodes = []

    for (let k = 0; k < results.length; k++) {
        let movie = movieData[results[k][0]][results[k][1]]

        let card = cardBase()
        card.classList.add('info-card', 'movie', 'clickable-o')
        card.onclick = function () { showTVDetail(results[k][0], results[k][1]) }
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

    for (let k = 0; k < results.length; k++) {
        let movie = movieData[results[k][0]][results[k][1]]

        let card = cardBase()
        card.onclick = function () { showTVDetail(results[k][0], results[k][1]) }
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

    for (let j = 0; j < bookData[i].length; j++) {
        results.push([i, j])
    }

    return results
}
function rowPods(i) {
    let results = []

    for (let j = 0; j < podData[i].length; j++) {
        results.push([i, j])
    }

    return results
}
function searchBooks(q) {
    let results = []

    for (let i = 0; i < bookData.length; i++) {
        for (let j = 0; (j < bookData[i].length) && (results.length < len); j++) {
            const name = bookData[i][j].name.toUpperCase().includes(q)

            if (name) {
                results.push([i, j])
            }
        }
    }

    return results
}
function searchPods(q) {
    let results = []

    for (let i = 0; i < podData.length; i++) {
        for (let j = 0; (j < podData[i].length) && (results.length < len); j++) {
            const name = podData[i][j].name.toUpperCase().includes(q)

            if (name) {
                results.push([i, j])
            }
        }
    }

    return results
}


function searchBookPodRow(results, title, type) {
    let row = rowBase(title)
    let nodes = []

    if (type == 'book') {
        var data = bookData
        var folder = 'books'
    } else if (type == 'pod') {
        var data = podData
        var folder = 'podcasts'
    }

    for (let k = 0; k < results.length; k++) {
        let item = data[results[k][0]][results[k][1]]

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