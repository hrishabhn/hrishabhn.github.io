function videoRefresh() {
    const randomLists = [0,3,4]
    const movieBigA = randomLists[Math.floor(Math.random() * randomLists.length)]
    const movieBigB = Math.floor(Math.random() * movieData[movieBigA].length)

    tvBig(movieBigA,movieBigB)
}

function tvBig(a,b) {
    const movie = movieData[a][b]

    var card = document.getElementById('tv-big-card')
    var title = document.getElementById('tv-big-title')
    var serv = document.getElementById('tv-big-service')
    var link = document.getElementById('tv-big-play')
    var more = document.getElementById('tv-big-more')

    card.style.setProperty('--poster',`url('media-image/TV/background/${movie.id}.${movie.style.posterType}')`)
    title.style.setProperty('--title',`url('media-image/TV/title/${movie.id}.${movie.style.titleType}')`)

    if (movie.info.studio) {
        serv.style.setProperty('--service',`url('media-image/service/${movie.info.studio}.svg')`)
    } else {
        serv.style.setProperty('--service',`url('media-image/service/${movie.info.service}.svg')`)
    }

    if (movie.link) {
        link.href = processLink(movie.link)
    } else {
        link.removeAttribute('href')
    }

    more.onclick = function() { tvPopup(a,b) }
}

function tvMidTray(a) {
    var tray = hscrollMediaElement()
    tray.append(spacerElement(15))
    tray.append(spacerElement(5,'hidden-mobile'))

    // console.log(movieData[a].length)

    for (let b = 0; b < movieData[a].length; b++) {
        tray.append(tvMidElement(a,b))

        if (b < movieData[a].length) {
            tray.append(spacerElement(15))
            tray.append(spacerElement(5,'hidden-mobile'))
        }
    }
    tray.append(spacerElement(15))
    tray.append(spacerElement(5,'hidden-mobile'))

    return tray
}

function tvMidElement(a,b) {
    const data = movieData[a][b]

    if ((data.link !== null) && (data.link !== undefined)) {
        var htmlLink = `href="${processLink(data.link)}"`
    } else {
        var htmlLink = ``
    }

    if (data.style.color) {
        var col = data.style.color
    } else {
        var col = '000000'
    }

    if (data.info.date) {
        var dateHTML = `<div class="spacer-x" style="--size: 4px;"></div><p class="desc">${countdownCalculate(data.info.date)[0]} ${countdownCalculate(data.info.date)[1]}</p>`
        // console.log(countdownCalculate(data.info.date))
    } else if (data.info.weekday) {
        var dateHTML = `<div class="spacer-x" style="--size: 4px;"></div><p class="desc">${data.info.weekday}</p>`
    } else {
        var dateHTML = ``
    }


    var movieCardElement = document.createElement('div')
    movieCardElement.classList = 'tv-mid-card'

    var movieCardHTML = `
    <div class="tv-poster" style="--poster: url(media-image/TV/background/${data.id}.${data.style.posterType});">
        <div class="gradient" style="--col: #${col}00;"></div>
        <div class="title ${data.style.titleSize}" style="--title: url(media-image/TV/title/${data.id}.${data.style.titleType});"></div>
        <a class="play" ${htmlLink} target="_blank"></a>
        <a class="more clickable" onclick="tvBig(${a},${b})">
            <svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>
        </a>
    </div>
    <div class="spacer-x" style="--size: 15px;"></div>
    <a class="tv-mid-info clickable-text" onclick="tvPopup(${a},${b})">
        <p class="desc">${processDesc(data,'genre')}</p>
        <div class="spacer-x" style="--size: 4px;"></div>
        <p class="title">${data.name}</p>
        <div class="spacer-x" style="--size: 2px;"></div>
        <p class="summary">${data.info.summary}</p>
        ${dateHTML}
    </a>`

    movieCardElement.innerHTML = movieCardHTML

    return movieCardElement
}


function tvSmallTray(a) {
    var tray = hscrollMediaElement()
    tray.append(spacerElement(15))
    tray.append(spacerElement(5,'hidden-mobile'))

    // console.log(movieData[a].length)

    for (let b = 0; b < movieData[a].length; b++) {
        tray.append(tvSmallElement(a,b))

        if (b < movieData[a].length - 1) {
            tray.append(spacerElement(15))
            tray.append(spacerElement(5,'hidden-mobile'))
        }
    }
    tray.append(spacerElement(15))
    tray.append(spacerElement(5,'hidden-mobile'))

    return tray
}

function tvSmallElement(a,b) {
    const data = movieData[a][b]

    if ((data.link !== null) && (data.link !== undefined)) {
        var htmlLink = `href="${processLink(data.link)}"`
    } else {
        var htmlLink = ``
    }

    if (data.style.color) {
        var col = data.style.color
    } else {
        var col = '000000'
    }

    if (data.info.date) {
        var dateHTML = `<div class="spacer-x" style="--size: 4px;"></div><p class="desc">${countdownCalculate(data.info.date)[0]} ${countdownCalculate(data.info.date)[1]}</p>`
        // console.log(countdownCalculate(data.info.date))
    } else if (data.info.weekday) {
        var dateHTML = `<div class="spacer-x" style="--size: 4px;"></div><p class="desc">${data.info.weekday}</p>`
    } else {
        var dateHTML = ``
    }


    var movieCardElement = document.createElement('div')
    // movieCardElement.classList = 'tv-mid-card'

    var movieCardHTML = `
    <div class="tv-poster" style="--poster: url(media-image/TV/background/${data.id}.${data.style.posterType});">
        <div class="gradient" style="--col: #${col}00;"></div>
        <div class="title ${data.style.titleSize}" style="--title: url(media-image/TV/title/${data.id}.${data.style.titleType});"></div>
        <a class="play" ${htmlLink} target="_blank"></a>
        <a class="more clickable" onclick="tvBig(${a},${b})">
            <svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>
        </a>
    </div>`

    movieCardElement.innerHTML = movieCardHTML

    return movieCardElement
}