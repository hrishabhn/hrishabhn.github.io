const mediaElems = {
    movie: {
        // card: function () { },
        row: function (results, title, size) {
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
                if (movie.style.color) card = cardHover(card, movie.style.color, null)

                // size
                if (small) card.classList.add('small')
                else if (big) card.classList.add('big')


                // bg for big
                if (big) card.append(elems.bg())

                // thumb
                let thumb
                if (small) thumb = elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`)
                else if (big) {
                    thumb = elems.thumb(`./media-image/TV/mobile/${movie.id}.${movie.style.poster.mobile.type}`)
                    thumb.style.setProperty('aspect-ratio', movie.style.poster.mobile.size)
                    thumbCont = document.createElement('div')
                    thumbCont.classList = 'thumb-cont'

                    thumbCont.append(thumb)
                }
                thumb.append(elems.grad())

                if (small) card.append(thumb)
                else if (big) card.append(thumbCont)

                // title - if not(big AND no mobile title)
                if (big) if (!(big && !movie.style.poster.mobile.title))
                    card.append(movieCardTitle(key))
                if (small) if (movie.style.poster.wide.title)
                    card.append(movieCardTitle(key))

                // textbox
                if (big) {
                    if (!(big && !movie.style.poster.mobile.title)) card.append(elems.textbox(null, movie.desc.full))
                    else card.append(elems.textbox(movie.name, movie.desc.full))


                    let more = document.createElement('a')
                    more.classList = 'more'
                    more.append(elems.p('MORE'))
                    more.append(elems.grow())
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
                //     context.show([movieApps(movie)], e)
                // }


                nodes.push(card)
            }

            return content.tray(title, nodes, 40, 5)
        },
    },
    bookPod: {
        row: function (results, title, type) {
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
                card = cardHover(card, null, item.style)

                let thumb = elems.thumb(`./media-image/${folder}/${item.id}.${item.coverType}`)
                card.append(thumb)


                if ((item.progress) && (item.progress != 'NEW')) card.append(mediaTimeElem(item.progress))
                if (!!parseFloat(item.progress)) thumb.append(mediaProgressBarElem(parseFloat(item.progress)))



                // med card
                if (med) {
                    card.classList.remove('clickable-o')
                    if (type == 'pod') card = mediaDetailCard(card, item.name, item.title, item.summary ?? null)
                    else if (type == 'book') card = mediaDetailCard(card, item.author, item.name, item.summary ?? null)
                }

                card.href = item.link
                card.target = '_blank'


                nodes.push(card)
            }

            return content.tray(title, nodes, 40, 4)
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

// shared
function mediaNewOrSoon(date) {
    if (countdown.future(date)) {
        const result = countdown.process.short(date)
        return `${result.num} ${result.word.toUpperCase()}`
    } else return 'NEW'
}

function mediaTimeElem(str) {
    let elem = document.createElement('div')
    elem.classList = 'media-data'
    elem.textContent = str
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