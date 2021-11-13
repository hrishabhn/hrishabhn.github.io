function videoRefresh() {
    const randomLists = [0,3,4]
    const movieBigA = randomLists[Math.floor(Math.random() * randomLists.length)]
    const movieBigB = Math.floor(Math.random() * movieData[movieBigA].length)

    tvBig(movieBigA,movieBigB)
}

function tvBig(a,b) {
    const movie = movieData[a][b]
    // console.log(movie.name)

    var card = document.getElementById('tv-big-card')
    var title = document.getElementById('tv-big-title')
    var serv = document.getElementById('tv-big-service')
    var link = document.getElementById('tv-big-play')
    var more = document.getElementById('tv-big-more')

    // if (movie.style.mobileType) {
    //     card.style.setProperty('--poster',`url('media-image/TV/mobile/${movie.id}.${movie.style.mobileType}')`)
    //     card.style.setProperty('--ratio',movie.style.mobileSize)
    // } else {

    // }







    card.style.setProperty('--poster',`url('media-image/TV/background/${movie.id}.${movie.style.posterType}')`)
    title.style.setProperty('--title',`url('media-image/TV/title/${movie.id}.${movie.style.titleType}')`)

    if (movie.info.studio) {
        serv.style.setProperty('--service',`url('media-image/service/${movie.info.studio}.svg')`)
    } else if (movie.info.service) {
        serv.style.setProperty('--service',`url('media-image/service/${movie.info.service}.svg')`)
    } else {
        serv.style.removeProperty('--service')
    }

    if (movie.link) {
        link.href = processLink(movie.link)
    } else {
        link.removeAttribute('href')
    }

    more.onclick = function() { tvPopupShow(a,b) }

    // const tvTimeElement = document.getElementById('tv-big-tvtime')
    // const tvTimeSpacer = document.getElementById('tv-big-tvtime-spacer')
    // const reelgoodElement = document.getElementById('tv-big-reelgood')
    // const reelgoodSpacer = document.getElementById('tv-big-reelgood-spacer')
    // const imdbElement = document.getElementById('tv-big-imdb')
    // const imdbSpacer = document.getElementById('tv-big-imdb-spacer')
    // const redditElement = document.getElementById('tv-big-reddit')
    // const redditSpacer = document.getElementById('tv-big-reddit-spacer')

    // if (movie.apps.tvTimeID) {
    //     tvTimeElement.href = `https://www.tvtime.com/en/show/${movie.apps.tvTimeID}`
    //     tvTimeElement.classList.remove('hidden-always')
    //     tvTimeSpacer.classList.remove('hidden-always')
    // } else {
    //     tvTimeElement.removeAttribute('href')
    //     tvTimeElement.classList.add('hidden-always')
    //     tvTimeSpacer.classList.add('hidden-always')
    // }
    // if (movie.apps.reelgoodLink) {
    //     reelgoodElement.href = movie.apps.reelgoodLink
    //     reelgoodElement.classList.remove('hidden-always')
    //     reelgoodSpacer.classList.remove('hidden-always')
    // } else {
    //     reelgoodElement.removeAttribute('href')
    //     reelgoodElement.classList.add('hidden-always')
    //     reelgoodSpacer.classList.add('hidden-always')
    // }
    // if (movie.apps.imdbID) {
    //     imdbElement.href = `https://www.imdb.com/title/${movie.apps.imdbID}`
    //     imdbElement.classList.remove('hidden-always')
    //     imdbSpacer.classList.remove('hidden-always')
    // } else {
    //     imdbElement.removeAttribute('href')
    //     imdbElement.classList.add('hidden-always')
    //     imdbSpacer.classList.add('hidden-always')
    // }
    // if (movie.apps.subReddit) {
    //     redditElement.href = `https://www.reddit.com/r/${movie.apps.subReddit}`
    //     redditElement.classList.remove('hidden-always')
    //     redditSpacer.classList.remove('hidden-always')
    // } else {
    //     redditElement.removeAttribute('href')
    //     redditElement.classList.add('hidden-always')
    //     redditSpacer.classList.add('hidden-always')
    // }

    if (movie.style.mobileType) {
        card.classList.add('hidden-mobile')
        tvBigMob(a,b)
        // console.log('yamob')
    } else {
        card.classList.remove('hidden-mobile')
        tvBigMob(null)
        // console.log('nomob')
    }

}

function tvBigMob(a,b) {
    const card = document.getElementById('tv-big-card-mob')

    if (a != null) {

        const movie = movieData[a][b]
        // console.log(movie.name)

        const gradient = document.getElementById('tv-big-grad-mob')
        const title = document.getElementById('tv-big-title-mob')
        // const serv = document.getElementById('tv-big-service-mob')
        const link = document.getElementById('tv-big-play-mob')
        const more = document.getElementById('tv-big-more-mob')

        card.classList.remove('hidden-always')

        card.style.setProperty('--poster',`url('media-image/TV/mobile/${movie.id}.${movie.style.mobileType}')`)
        card.style.setProperty('--ratio',movie.style.mobileSize)
        gradient.style.setProperty('--col1',`#${movie.style.color}00`)
        gradient.style.setProperty('--col2',`#${movie.style.color}`)
        title.style.setProperty('--title',`url('media-image/TV/title/${movie.id}.${movie.style.titleType}')`)


        // if (movie.info.studio) {
        //     serv.style.setProperty('--service',`url('media-image/service/${movie.info.studio}.svg')`)
        // } else if (movie.info.service) {
        //     serv.style.setProperty('--service',`url('media-image/service/${movie.info.service}.svg')`)
        // } else {
        //     serv.style.removeProperty('--service')
        // }

        if (movie.link) {
            link.href = processLink(movie.link)
        } else {
            link.removeAttribute('href')
        }

        more.onclick = function() { tvPopupShow(a,b) }
    } else {
        card.classList.add('hidden-always')
        console.log('noooo')
    }
}


function tvMidTray(a) {
    var tray = hscrollHuluElement()
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))
    tray.append(spacerElement(15,'only-mobile'))

    // console.log(movieData[a].length)

    for (let b = 0; b < movieData[a].length; b++) {
        tray.append(tvMidElement(a,b))

        if (b < movieData[a].length) {
            tray.append(spacerElement(15))
            tray.append(spacerElement(5,'hidden-mobile'))
        }
    }
    tray.append(spacerElement(15,'only-mobile'))

    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(80,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))

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
        var dateHTML = `<div class="spacer-x" style="--size: 4px;"></div><p class="desc">${countdownProcess((data.info.date),'short').num} ${countdownProcess((data.info.date),'short').word}</p>`
    } else if (data.info.weekday) {
        var dateHTML = `<div class="spacer-x" style="--size: 4px;"></div><p class="desc">${data.info.weekday}</p>`
    } else {
        var dateHTML = ``
    }


    var movieCardElement = document.createElement('div')
    movieCardElement.classList = 'tv-mid-card snap'

    var movieCardHTML = `
    <div class="tv-poster" style="--poster: url(media-image/TV/background/${data.id}.${data.style.posterType});">
        <div class="gradient" style="--col: #${col}00;"></div>
        <div class="title ${data.style.titleSize}" style="--title: url(media-image/TV/title/${data.id}.${data.style.titleType});"></div>
        <a class="play" ${htmlLink} target="_blank"></a>
        <a class="more floating clickable" onclick="tvBig(${a},${b})">
            <svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>
        </a>
    </div>
    <div class="spacer-x" style="--size: 15px;"></div>
    <a class="tv-mid-info clickable-text" onclick="tvPopupShow(${a},${b})">
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

function processLocation(location) {
    if (location) {
        if (location == 'Coming Soon') {
            return location
        } else {
            return `Watch on ${location}`
        }
    } else {
        return `Watch`
    }
}

function processService(movie) {
    if (movie.info.studio) {
        return movie.info.studio
    } else if (movie.info.service) {
        return movie.info.service
    } else {
        return null
    }
}

function tvSmallTray(a) {
    var tray = hscrollHuluElement()
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))
    tray.append(spacerElement(15,'only-mobile'))

    for (let b = 0; b < movieData[a].length; b++) {
        tray.append(tvSmallElement(a,b))

        if (b < movieData[a].length - 1) {
            tray.append(spacerElement(4))
            // tray.append(spacerElement(5,'hidden-mobile'))
        }
    }
    tray.append(spacerElement(15,'only-mobile'))

    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(80,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))

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

    var movieCardElement = document.createElement('div')
    movieCardElement.classList = 'snap'

    var movieCardHTML = `
    <div class="tv-poster" style="--poster: url(media-image/TV/background/${data.id}.${data.style.posterType});">
        <div class="gradient" style="--col: #${col}00;"></div>
        <div class="title ${data.style.titleSize}" style="--title: url(media-image/TV/title/${data.id}.${data.style.titleType});"></div>
        <a class="play" ${htmlLink} target="_blank"></a>
        <a class="more floating clickable" onclick="tvPopupShow(${a},${b})">
            <svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>
        </a>
    </div>`

    movieCardElement.innerHTML = movieCardHTML

    return movieCardElement
}


function tvHuluTray(a) {
    var tray = hscrollHuluElement()
    // tray.classList.add('page-width')

    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))
    tray.append(spacerElement(15,'only-mobile'))
    
    for (let b = 0; b < movieData[a].length; b++) {
        tray.append(tvHuluElement(a,b))

        if (b < movieData[a].length - 1) {
            tray.append(spacerElement(5))
        }
    }

    tray.append(spacerElement(15,'only-mobile'))

    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(80,'hidden-mobile'))
    tray.append(spacerElement(20,'hidden-mobile'))

    return tray
}

function tvHuluElement(a,b) {
    const movie = movieData[a][b]

    if ((movie.link !== null) && (movie.link !== undefined)) {
        var htmlLink = `href="${processLink(movie.link)}"`
    } else {
        var htmlLink = ``
    }

    if (movie.style.color) {
        var col = movie.style.color
    } else {
        var col = '000000'
    }

    var service = processService(movie)

    if (service) {
        var serviceHTML = `style="--service: url(media-image/service/${processService(movie)}.svg);"`
    } else {
        var serviceHTML = ``
    }

    if (movie.info.date) {
        var dateHTML = `<div class="spacer-x" style="--size: 8px;"></div><p class="detail">Returns in ${countdownProcess((movie.info.date),'short').num} ${countdownProcess((movie.info.date),'short').word}</p>`
    } else if (movie.info.weekday) {
        var dateHTML = `<div class="spacer-x" style="--size: 8px;"></div><p class="detail">Every ${movie.info.weekday}</p>`
    } else {
        var dateHTML = ``
    }



    var movieCardElement = document.createElement('div')
    movieCardElement.classList = 'hulu-card snap'
    movieCardElement.style.setProperty('--col',`#${movie.style.color}`)

    var movieCardHTML = `
    <div class="bg"></div>
    <div class="poster-container">
        <div class="poster" style="--poster: url(media-image/TV/mobile/${movie.id}.${movie.style.mobileType}); --ratio: ${movie.style.mobileSize};">
            <div class="service" ${serviceHTML}></div>
            <div class="gradient" style="--col1: #${movie.style.color}00;--col2: #${movie.style.color};"></div>
        </div>
    </div>
    <div class="title ${movie.style.titleSize}" style="--title: url(media-image/TV/title/${movie.id}.${movie.style.titleType});"></div>
    <div class="spacer-x" style="--size: 8px;"></div>
    <p class="desc">${processDesc(movie)}</p>
    ${dateHTML}
    <div class="spacer-x" style="--size: 10px;"></div>
    <a class="info clickable-text" onclick="tvPopupShow(${a},${b})">
        <p>MORE</p>
        <div class="grow"></div>
        <div class="icon">
            <svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>
        </div>
    </a>`

    movieCardElement.innerHTML = movieCardHTML

    return movieCardElement
}
