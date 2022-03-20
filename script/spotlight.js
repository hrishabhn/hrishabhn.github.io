function spotlightElem() { return document.getElementById('spotlight') }
function resultElem() { return document.getElementById('results') }

const len = 5

function spotlightLoad() {
    spotlightElem().focus()
}

function dividerElem() {
    let divider = document.createElement('div')
    divider.classList = 'divider'
    return divider
}

function spotlightRun(e) {
    let qOrig = spotlightElem().value
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
                window.open(`https://www.google.com/search?q=${qOrig}`, '_self')
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
            removeAllChildNodes(resultElem())
            let resultRowArray = [
                searchAppsRow(searchApps(q, focusApps()), 'Focus'),
                searchAppsRow(searchApps(q, appData['main']), 'Apps'),
                searchAppsRow(searchApps(q, appData['notion']), 'Notion'),
                searchAppsRow(searchApps(q, appData['school']), 'School'),
                searchAppsRow(searchApps(q, appData['shopping']), 'Shopping'),
                searchAppsRow(searchApps(q, appData['bookmarks']), 'Bookmarks'),
                searchAppsRow(searchApps(q, appData['video']), 'Video'),
                searchAppsRow(searchApps(q, appData['read']), 'Read'),
                searchAppsRow(searchApps(q, appData['listen']), 'Listen'),
                searchAppsRow(searchApps(q, appData['travel']), 'Travel'),
                searchAppsRow(searchApps(q, appData['utilities']), 'Utilities'),
                searchAppsRow(searchApps(q, appData['profiles']), 'Social Media Pages'),
                searchAppsRow(searchApps(q, appData['design']), 'Social Media Pages'),
                searchAppsRow(searchApps(q, appData['worldClock']), 'World Clock'),
                // searchCalRow(searchCal(q)),
                movies.searchRow(q),
                actors.searchRow(q),
                // searchBookPodNewRow(books.search(q), 'Books', 'book'),
                books.searchRow(q),
                pods.searchRow(q),
                // searchBookPodBig(['decoder'], 'pod'),
            ]

            let i = 0

            for (let item of resultRowArray) {
                let relevant = item.lastChild.hasChildNodes()

                if (relevant) {
                    resultElem().append(dividerElem())
                    item.id = `row-${i}`
                    resultElem().append(item)
                    i++
                }

            }
        }



    } else {
        removeAllChildNodes(resultElem())
        if (e.key == 'Enter') {
            window.open('https://google.com', '_self')
        }

    }


    // // console.log(e)

    // if ((e.key == 'ArrowUp') || (e.key == 'ArrowDown')) {
    //     arrowKeys(e)
    // } else {
    //     arrowIndex = -1
    //     let results = []
    // removeAllChildNodes(resultList)

    //     let movies = searchMovies(q)

    //     for (const movieIndex of movies) {
    //         let movie = movieData[movieIndex[0]][movieIndex[1]]


    //         results.push(resultListItemElement({
    //             text: movie.name,
    //             subtext: movie.info.location,
    //             image: `url(./media-image/TV/background/${movie.id}.${movie.style.posterType})`,
    //             color: movie.style.color,
    //             imgRatio: '16 / 9',
    //             detail: tvDetail(movieIndex[0],movieIndex[1])
    //         }))
    //     }


    //     for (let i = 0; i < results.length; i++) {
    //         let item = results[i]
    //         item.onmouseover = function() { mouseHover(i) }
    //         resultList.append(item)

    //     }


    //     resultList.append(growElement())
    //     // arrowIndex = 0
    // }








    // removeAllChildNodes(homeAll)

    // let resultRows = [
    //     searchAppsRow(searchApps(q, focusApps()), 'Focus'),
    //     searchAppsRow(searchApps(q, appData['main']), 'Apps'),
    //     searchAppsRow(searchApps(q, appData['notion']), 'Notion'),
    //     searchAppsRow(searchApps(q, appData['video']), 'Video'),
    //     searchMoviesRow(searchMovies(q), 'TV & Movies'),
    //     searchBooksRow(searchBooks(q)),
    // ]

    // for (const row of resultRows) {
    //     if (row.lastChild.hasChildNodes()) {
    //         homeAll.append(row)
    //     }
    // }

    // if (!homeAll.hasChildNodes()) {
    //     homeAll.append(rowBase('No results'))
    // }

    // console.log(homeAll.hasChildNodes())


    // console.log(!!searchApps(q,prodApps)[0])



    // prevHover = null
}




// function resultListItemElement(data) {

//     if (data.color) {
//         var color = data.color
//     }


//     let box = document.createElement('div')
//     box.classList = 'result-box'
//     box.innerHTML = `
//     <div class="back" style="--col: #${color};--col40: #${color}66;--col60: #${color}99;"></div>`

//     let card = document.createElement('div')
//     card.classList = 'result-card layer-1 card-shadow'
//     card.innerHTML = `
//     <div class="bg" style="background-color: #${color};"></div>
//     <div class="thumb" style="background-image: ${data.image}"></div>
//     <div style="height: 8px;"></div>
//     <p class="text">${data.text}</p>
//     <p class="subtext">${data.subtext}</p>
//     <div class="grow"></div>`
//     card.onclick = function() { showDetail(data.detail) }

//     box.append(card)


//     // let elem = document.createElement('div')
//     // elem.classList = 'result-item layer-1 clickable-o card-shadow'
//     // elem.innerHTML = `
//     // <div class="thumb image-border thin" style="background-image: ${data.image}; height: ${data.imgH}px; width: ${data.imgW}px;"></div>
//     // <div class="spacer-x" style="--size: 10px;"></div>
//     // <div class="textbox">
//     //     <p1>${data.text}</p1>
//     //     <div class="spacer-x" style="--size: 2px;"></div>
//     //     <div class="grow"></div>
//     //     <p2>${data.subtext}</p2>
//     // </div>
//     // `

//     return box
// }

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

function searchAppsRow(data, title) {
    let row = rowBase(title)
    let nodes = []

    for (let k = 0; k < data.length; k++) {
        let card = appCard(data[k])
        nodes.push(card)
    }
    row.append(trayWithKids(nodes, 10))
    return row
}


function rowBase(title) {
    let row = document.createElement('div')
    row.classList = 'content-row'
    if (title) {
        row.innerHTML = `<p class="header">${title}</p>`
    }

    return row
}

function trayBase() {
    let tray = document.createElement('div')
    tray.classList = 'tray'
    return tray
}

function cardBase() {
    let card = document.createElement('a')
    card.classList = 'layer-1 card-hover'
    return card
}
function thumbBase(link) {
    let thumb = document.createElement('div')
    thumb.classList = 'thumb'
    thumb.style.setProperty('background-image', `url(${link})`)
    return thumb
}
function textboxBase(name, desc) {
    let textbox = document.createElement('div')
    textbox.classList = 'textbox'

    if (name) textbox.append(nameElement(name))
    if (desc) textbox.append(descElement(desc))

    return textbox
}


document.addEventListener('keydown', keyPress)

function keyPress(e) {
    // console.log(e)

    if (e.key == '/') {

        if (!(document.activeElement == spotlightElem())) {
            e.preventDefault()
            spotlightElem().focus()
        }
    } else if (e.key == 'Tab') {
        if (document.activeElement == spotlightElem()) {
            e.preventDefault()
        }
    } else if (e.key == 'Escape') {
        e.preventDefault()
    }
}