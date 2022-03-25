const mediaElems = {
    movie: {
        new: {
            // card: function () { },
            row: function (results, title, size) {
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
                    if (big) card.append(elems.bg())

                    // thumb
                    let thumb
                    if (small) thumb = thumbBase(`./media-image/TV/background/${movie.id}.${movie.style.poster.wideType}`)
                    else if (big) {
                        thumb = thumbBase(`./media-image/TV/mobile/${movie.id}.${movie.style.poster.mobile.type}`)
                        thumb.style.setProperty('aspect-ratio', movie.style.poster.mobile.size)
                        thumbCont = document.createElement('div')
                        thumbCont.classList = 'thumb-cont'

                        thumbCont.append(thumb)
                    }
                    thumb.append(elems.grad())

                    if (small) card.append(thumb)
                    else if (big) card.append(thumbCont)

                    // title
                    if (!(big && !movie.style.poster.mobile.title)) card.append(movieCardTitle(key))

                    // textbox
                    if (big) {
                        if (!(big && !movie.style.poster.mobile.title)) card.append(textboxBase(null, movie.desc.full))
                        else card.append(textboxBase(movie.name, movie.desc.full))


                        let more = document.createElement('a')
                        more.classList = 'more'
                        more.append(elems.p('MORE'))
                        more.append(growElement())
                        more.append(elems.icon(iconData.more))

                        card.append(more)
                    }

                    // med card
                    if (med) {
                        card.classList.remove('clickable-o')
                        card = mediaDetailCard(card, movie.desc.genre, movie.name, movie.info.summary)
                    }

                    // links
                    card.onclick = function () { movie.detail() }
                    // card.oncontextmenu = function (e) {
                    //     e.preventDefault()
                    //     context.show([movieApps(movieData[i, j])], e)
                    // }


                    nodes.push(card)
                }

                row.append(trayWithKids(nodes, 4))
                return row
            },
        },
        small: {
            card: function () { },
            row: function (results, title) {
                let row = rowBase(title)
                let nodes = []

                for (const key of results) {
                    let movie = allMovies[key]

                    let card = cardBase()
                    card.classList.add('info-card', 'movie', 'clickable-o')
                    card.onclick = function () { movie.detail() }
                    card.oncontextmenu = function (e) {
                        e.preventDefault()
                        context.show([movieApps(movie)], e)
                    }
                    if (movie.style.color) { card.style.setProperty('--brand-col', `#${movie.style.color}`) }

                    let thumb = thumbBase(`./media-image/TV/background/${movie.id}.${movie.style.poster.wideType}`)
                    thumb.innerHTML = `<div class="grad"></div>`
                    if (movie.style.title.type) {
                        let title = document.createElement('div')
                        title.classList = `tv-title ${movie.style.title.size}`
                        title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.title.type})`)
                        thumb.append(title)
                    }

                    card.append(thumb)
                    let textbox = textboxBase(movie.name, movie.desc.full)
                    card.append(textbox)


                    if (movie.info.date) {
                        card.append(mediaTimeElem(mediaNewOrSoon(movie.info.date)))
                    }

                    nodes.push(card)
                }

                row.append(trayWithKids(nodes))
                return row

            },
        },
        big: {
            card: function () { },
            row: function (results, title) {
                let row = rowBase(title)
                let nodes = []

                for (const key of results) {
                    let movie = allMovies[key]

                    let card = cardBase()
                    card.onclick = function () { movie.detail() }
                    card.oncontextmenu = function (e) {
                        e.preventDefault()
                        context.show([movieApps(movie)], e)
                    }
                    card.classList.add('info-card', 'movie-big', 'clickable-o')

                    card.append(elems.bg(movie.style.color))

                    let thumbCont = growElement()
                    thumbCont.classList = 'thumb-cont'

                    let thumb = thumbBase(`./media-image/TV/mobile/${movie.id}.${movie.style.poster.mobile.type}`)
                    thumb.style.setProperty('--ratio', movie.style.poster.mobile.size)

                    let grad = elems.grad()
                    grad.style.setProperty('background-image', `linear-gradient(#${movie.style.color}00, #${movie.style.color} 90%)`)

                    thumb.append(grad)

                    thumbCont.append(thumb)
                    thumbCont.append(growElement())
                    card.append(thumbCont)

                    if (movie.style.title.type) {
                        var textbox = textboxBase(null, movie.desc.full)

                        let title = document.createElement('div')
                        title.classList = `tv-title ${movie.style.title.size}`
                        title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.title.type})`)
                        textbox.prepend(title)
                    } else {
                        var textbox = textboxBase(movie.name, movie.desc.full)
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
            },
        },
    },
}

// movie

function movieCardTitle(key) {
    const movie = allMovies[key]

    let box = document.createElement('div')
    box.classList = 'tv-title-box'

    let title = document.createElement('div')
    title.classList = `tv-title ${movie.style.title.size}`
    title.style.setProperty('background-image', `url(./media-image/TV/title/${movie.id}.${movie.style.title.type})`)

    box.append(title)
    return box
}

function mediaDetailCard(thumb, genre, name, summary) {
    if (genre || name || summary) {
        let card = document.createElement('a')
        card.classList = 'media-detail clickable-o'

        let detail = document.createElement('div')
        detail.classList = 'detail'

        if (genre) {
            let genreElem = elems.p(genre)
            genreElem.classList = 'genre'
            detail.append(genreElem)
        }
        if (name) detail.append(elems.title(name))
        if (summary) detail.append(elems.desc(summary))

        card.append(thumb)
        card.append(detail)
        return card
    } else return thumb
}

// actor
function searchActorsRow(results) {
    let row = rowBase('Actors')
    let nodes = []
    for (const actor of results) nodes.push(actorCard(actor, null))
    row.append(trayWithKids(nodes, 20))
    return row
}

// bookpod
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

        card.href = item.link
        card.target = '_blank'

        if ((item.progress) && (item.progress != 'NEW')) card.append(mediaTimeElem(item.progress))
        if (!!parseFloat(item.progress)) thumb.append(mediaProgressBarElem(parseFloat(item.progress)))

        nodes.push(card)
    }

    row.append(trayWithKids(nodes))
    return row
}

function searchBookPodNewRow(results, title, type) {
    let row = rowBase(title)
    let nodes = []

    // process type
    let allData
    let folder
    if (type == 'book') {
        allData = allBooks
        folder = 'books'
    } else if (type == 'pod') {
        allData = allPods
        folder = 'podcasts'
    }

    let med = false
    if (results.length < 5) {
        med = true
    }

    for (const key of results) {
        const item = allData[key]

        // base card
        let card = document.createElement('a')
        card.classList = `media-card ${type} clickable-o`

        let thumb = thumbBase(`./media-image/${folder}/${item.id}.${item.coverType}`)
        card.append(thumb)


        if ((item.progress) && (item.progress != 'NEW')) card.append(mediaTimeElem(item.progress))
        if (!!parseFloat(item.progress)) thumb.append(mediaProgressBarElem(parseFloat(item.progress)))




        // if (movie.info.date) card.append(mediaTimeElem(mediaNewOrSoon(movie.info.date)))
        // if (movie.style.color) { card.style.setProperty('--brand-col', `#${movie.style.color}`) }

        // // size
        // if (small) card.classList.add('small')
        // else if (big) card.classList.add('big')

        // // thumb
        // let thumb
        // if (small) thumb = thumbBase(`./media-image/TV/background/${movie.id}.${movie.style.poster.wideType}`)
        // else if (big) {
        //     thumb = thumbBase(`./media-image/TV/mobile/${movie.id}.${movie.style.poster.mobile.type}`)
        //     thumb.style.setProperty('aspect-ratio', movie.style.poster.mobile.size)
        //     thumbCont = document.createElement('div')
        //     thumbCont.classList = 'thumb-cont'

        //     thumbCont.append(thumb)
        // }
        // thumb.append(elems.grad())

        // if (small) card.append(thumb)
        // else if (big) card.append(thumbCont)

        // // title
        // card.append(movieCardTitle(key))

        // // textbox
        // if (big) {
        //     card.append(textboxBase(null, movie.desc.full))

        //     let more = document.createElement('a')
        //     more.classList = 'more'
        //     more.append(elems.p('MORE'))
        //     more.append(growElement())
        //     more.append(elems.icon(iconData.more))

        //     card.append(more)
        // }

        // med card
        if (med) {
            card.classList.remove('clickable-o')
            if (type == 'pod') card = mediaDetailCard(card, item.name, item.title, item.summary ?? null)
            else if (type == 'book') card = mediaDetailCard(card, item.author, item.name, item.summary ?? null)
        }

        // // links
        // card.onclick = function () { movie.detail() }
        // // card.oncontextmenu = function (e) {
        // //     e.preventDefault()
        // //     context.show([movieApps(movieData[i, j])], e)
        // // }
        // card.onclick = function () { window.open(item.link, '_blank') }
        card.href = item.link
        card.target = '_blank'


        nodes.push(card)
    }

    row.append(trayWithKids(nodes, 4))
    return row
}




// shared
function mediaNewOrSoon(date) {
    if (countdown.future(date)) {
        const result = countdown.process.short(date)
        return `${result.num} ${result.word.toUpperCase()}`
    } else { return 'NEW' }
}

function mediaTimeElem(str) {
    let elem = document.createElement('div')
    elem.classList = 'media-data'
    elem.innerHTML = str
    return elem
}

function mediaProgressBarElem(progress) {
    let elem = document.createElement('div')
    elem.classList = 'progress'

    let bar = document.createElement('div')
    bar.style.setProperty('width', `${progress}%`)

    elem.append(bar)
    return elem
}