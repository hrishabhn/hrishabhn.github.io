function showModal(title,body) {
    var modal = document.getElementById('modal-container')
    var titleElement = document.getElementById('modal-title')
    var modalBodyElement = document.getElementById('modal-body')

    if (title) {
        titleElement.innerHTML = title
        titleElement.classList.remove('hidden-always')
    } else {
        titleElement.classList.add('hidden-always')
    }

    removeAllChildNodes(modalBodyElement)
    modalBodyElement.append(body)

    modal.classList = 'show'
    // console.log('show')
}

function hideModal() {
    var modal = document.getElementById('modal-container')
    modal.classList = 'hide'
    // console.log('hide')
}

function allCountdownsElement() {
    var container = document.createElement('div')
    container.classList = 'countdown vstack fill-parent'

    for (let i = 0; i < countdownData.length; i++) {
        container.append(hlineElement())

        if (countdownData[i].date) {
            var info = `
            <div class="vstack">
                <p class="countdown-no">${countdownCalculate(countdownData[i].date)[0]}</p>
                <p class="countdown-period">${countdownCalculate(countdownData[i].date)[1]}</p>
            </div>`
        } else {
            var info = ``
        }

        var item = document.createElement('div')
        item.classList = 'item'
        item.innerHTML = `
        <div class="name">${countdownData[i].name}</div>
        <div class="grow"></div>
        ${info}`

        container.append(item)
    }

    return container
}

function tvPopup(a,b) {
    showModal(null,tvPopupElement(a,b))
}

function tvPopupElement(a,b) {
    const movie = movieData[a][b]

    if (movie.link) {
        var linkHTML = `href="${processLink(movie.link)}"`
    } else {
        var linkHTML = ``
    }

    var container = document.createElement('div')
    container.classList = 'tv-popup vstack fill-parent'
    container.innerHTML = `
    <div class="poster" style="--poster: url(media-image/TV/background/${movie.id}.${movie.style.posterType});">
        <div class="gradient" style="--col: #00000000;"></div>
        <div class="title" style="--title: url(media-image/TV/title/${movie.id}.${movie.style.titleType});"></div>
    </div>

    <div class="info">
        <div class="desc">${processDesc(movie,null)}</div>
        <div class="spacer-x" style="--size: 10px;"></div>
        <a class="play clickable" ${linkHTML} target="_blank">${processLocation(movie.info.location)}</a>
        <div class="summary">${movie.info.summary}</div>
    </div>
    ${tvPopupSuggest(a,b)}
    <div class="spacer-x" style="--size: 30px;"></div>
    <div class="spacer-x only-mobile" style="--size: 30px;"></div>`

    // container.innerHTML = ('nicsdjkcnlsk')

    return container
}

function tvPopupSuggest(a,b) {
    const genre = movieData[a][b].info.desc.genre
    // console.log(genre)

    var suggestElement = document.createElement('div')
    suggestElement.classList = 'suggest'

    for (let i = 0; i < genre.length; i++) {
        suggestElement.append(tvPopupSuggestRow(genre[i]))
    }

    return suggestElement.outerHTML
}

function tvPopupSuggestRow(genre) {
    const sameMovies = sameGenre(genre)


    var vstack = document.createElement('div')
    vstack.classList = 'vstack fill-width'

    var htmlString = spacerElement(20).outerHTML

    htmlString = `${htmlString}
    <div class="fill-width">
    <div class="spacer-x" style="--size: 20px;"></div>
    <div class="spacer-x hidden-mobile" style="--size: 10px;"></div>
    <div class="media-title">More in ${capitalizeFirstLetter(genre)}</div>
        <div class="grow"></div>
    </div>`

    var hscroll = document.createElement('div')
    hscroll.classList = 'hscroll'

    hscroll.append(spacerElement(20))
    hscroll.append(spacerElement(10,'hidden-mobile'))

    for (let i = 0; i < sameMovies.length; i++) {
        const a = sameMovies[i][0]
        const b = sameMovies[i][1]
        const movie = movieData[a][b]

        var card = document.createElement('div')
        card.classList = 'card layer-2'
        card.innerHTML = `
        <a class="poster clickable" onclick="tvPopup(${a},${b})" style="--poster: url(media-image/TV/background/${movie.id}.${movie.style.posterType});">
            <div class="gradient" style="--col: #${movie.style.color}00;"></div>
            <div class="title" style="--title: url(media-image/TV/title/${movie.id}.${movie.style.titleType});"></div>
        </a>
        <div class="info">
            <p class="desc">${processDesc(movie,'genre')}</p>
            <div class="spacer-x" style="--size: 5px;"></div>
            <p class="title">${movie.name}</p>
            <div class="spacer-x" style="--size: 2px;"></div>
            <p class="summary">${movie.info.summary}</p>
        </div>`

        hscroll.append(card)

        if (i < sameMovies.length - 1) {
            hscroll.append(spacerElement(10))
            hscroll.append(spacerElement(5,'hidden-mobile'))
        }

        console.log(movie)
    }

    hscroll.append(spacerElement(20))
    hscroll.append(spacerElement(10,'hidden-mobile'))




    htmlString = `${htmlString}${hscroll.outerHTML}`
    vstack.innerHTML = htmlString
    return vstack
}

function sameGenre(genre) {
    var sameMovies = []

    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; j < movieData[i].length; j++) {
            if (movieData[i][j].info.desc) {
                for (let k = 0; k < movieData[i][j].info.desc.genre.length; k++) {
                    if (movieData[i][j].info.desc.genre[k] == genre) {
                        sameMovies.push([i,j])
                    }

                    // console.log(movieData[i][j].info.desc.genre[k])
                }
            }
        }
    }



    return sameMovies
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
