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

function tvPopup(a,b,old) {
    showModal(null,tvPopupElement(a,b,old))
}

function tvPopupElement(a,b,old) {
    const movie = movieData[a][b]

    if (movie.link) {
        var linkHTML = `href="${processLink(movie.link)}"`
    } else {
        var linkHTML = ``
    }

    if (old) {
        var backButton = `<a class="floating clickable" style="padding: 5px 7px 5px 5px;" onclick="tvPopup(${old[0]},${old[1]},null)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="5.07 6.368 11.263 11.263"><path d="m9.929 12 3.821-3.821a1.061 1.061 0 0 0-1.5-1.5l-4.614 4.614a.999.999 0 0 0 0 1.414l4.614 4.614a1.061 1.061 0 0 0 1.5-1.5L9.929 12z"/></svg></a>`
    } else {
        var backButton = ``
    }

    var container = document.createElement('div')
    container.classList = 'tv-popup vstack fill-parent'
    container.innerHTML = `
    <div class="current">
        <div class="bg" style="--col: #${movie.style.color};"></div>
        <div class="poster card-shadow" style="--poster: url(media-image/TV/background/${movie.id}.${movie.style.posterType});">
            <div class="gradient hidden-mobile" style="--col: #${movie.style.color}00;"></div>
            <div class="title hidden-mobile" style="--title: url(media-image/TV/title/${movie.id}.${movie.style.titleType});"></div>
        </div>
        <div class="spacer-x" style="--size: 15px;"></div>
        <div class="spacer-x only-mobile" style="--size: 10px;"></div>
        <div class="info">
            <div class="fill-width hidden-mobile">
                <div class="name">${movie.name}</div>
                <div class="grow hidden-mobile"></div>
            </div>
            <div class="title-mob only-mobile ${movie.style.titleSize}" style="--title: url(media-image/TV/title/${movie.id}.${movie.style.titleType});"></div>
            <div class="spacer-x" style="--size: 8px;"></div>
            <div class="spacer-x only-mobile" style="--size: 12px;"></div>
            <div class="fill-width">
                <a class="play clickable card-shadow" ${linkHTML} style="--col: #${movie.style.color};" target="_blank">
                    <div class="icon"><svg data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></svg></div>
                    <div class="spacer-x" style="--size: 5px;"></div>
                    <p>${processLocation(movie.info.location)}</p>
                </a>
                <div class="grow hidden-mobile"></div>
            </div>
            <div class="spacer-x" style="--size: 8px;"></div>
            <div class="fill-width">
                <div class="desc">${processDesc(movie,null)}</div>
                <div class="grow hidden-mobile"></div>
            </div>
            <div class="spacer-x" style="--size: 10px;"></div>
            <div class="summary">${movie.info.summary}</div>
            <div class="spacer-x" style="--size: 10px;"></div>
        </div>
        ${tvPopupAppTray(a,b)}
        <div class="top-tray">
            ${backButton}
            <div class="grow"></div>
            <a class="floating clickable" style="padding: 0px;" onclick="hideModal()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.8 16.2-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7 7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z"/><path d="m7.8 14.8 7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z"/></svg></a>
        </div>
    </div>
    <div class="spacer-x" style="--size: 20px;"></div>
    ${tvPopupSuggest(a,b)}
    <div class="spacer-x" style="--size: 30px;"></div>
    <div class="spacer-x only-mobile" style="--size: 30px;"></div>
    <div class="grow"></div>`

    // container.innerHTML = ('nicsdjkcnlsk')

    return container
}

function tvPopupAppTray(a,b) {
    const movie = movieData[a][b]

    if (movie.apps) {
        var tray = document.createElement('div')
        tray.classList = 'video-app-tray hscroll'

        if (movie.apps.tvTimeID) {
            var button = document.createElement('a')
            button.classList = 'video-app layer-1 clickable button-fg'
            button.href = `https://www.tvtime.com/en/show/${movie.apps.tvTimeID}`
            button.target = `_blank`

            button.innerHTML = `
            <div class="icon"><svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 875"><rect class="cls-2" x="175.34" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-3" x="350.26" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-4" x="525.17" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-5" x="350.26" y="349.66" width="174.91" height="174.91"></rect><rect class="cls-6" x="350.26" y="524.57" width="174.91" height="174.91"></rect></svg></div>
            <div class="spacer-x" style="--size: 8px;"></div>
            <div class="text">TV Time</div>`
            tray.append(button)
            tray.append(spacerElement(10))
        }
        if (movie.apps.reelgoodLink) {
            var button = document.createElement('a')
            button.classList = 'video-app layer-1 clickable button-fg'
            button.href = movie.apps.reelgoodLink
            button.target = `_blank`

            button.innerHTML = `
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m14.21 11.477 2.475 4.441h-3.803l-2.014-4.047h-1.4v4.047H6.151v-6.85l3.317-1.791v1.755h2.333c.686 0 1.38-.423 1.38-1.231 0-.809-.694-1.232-1.38-1.232h-.915V3.75h1.382c2.563 0 4.284 1.642 4.284 4.087 0 2.005-1.187 3.183-2.342 3.641zM0 0l8.75 5.032L0 10.064V0zm1.189 4.637h.8v1.997l3.536-2.09L1.189 2.05v2.587z"></path></svg></div>
            <div class="spacer-x" style="--size: 8px;"></div>
            <div class="text">Reelgood</div>`
            tray.append(button)
            tray.append(spacerElement(10))
        }
        if (movie.apps.imdbID) {
            var button = document.createElement('a')
            button.classList = 'video-app layer-1 clickable button-fg'
            button.href = `https://www.imdb.com/title/${movie.apps.imdbID}`
            button.target = `_blank`

            button.innerHTML = `
            <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="69.3499984741211 -75.6249885559082 440.6999816894531 440.6999816894531"><path d="M69.35 58.24h45.63v175.65H69.35V58.24Z"></path><path d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61l-10.57 82.06Z"></path><path d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93Zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79Z"></path><path d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11Zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95c-2.33-3.39-5.72-6.02-10.16-7.9-4.44-1.88-9.68-2.82-15.72-2.82-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96v175.65Z"></path></svg></div>
            <div class="spacer-x" style="--size: 8px;"></div>
            <div class="text">IMDb</div>`
            tray.append(button)
            tray.append(spacerElement(10))
        }
        if (movie.apps.subReddit) {
            var button = document.createElement('a')
            button.classList = 'video-app layer-1 clickable button-fg'
            button.href = `https://www.reddit.com/r/${movie.apps.subReddit}`
            button.target = `_blank`

            button.innerHTML = `
            <div class="icon"><svg data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z"></path></svg></div>
            <div class="spacer-x" style="--size: 8px;"></div>
            <div class="text">Reddit</div>`
            tray.append(button)
            tray.append(spacerElement(10))
        }

        return tray.outerHTML
    } else {
        return ''
    }



    return `
    <div class="video-app-tray testing layer-2 card-shadow">
        <div class="grow">
            <a class="video-app clickable">
                <div class="icon"><svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 875"><rect class="cls-2" x="175.34" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-3" x="350.26" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-4" x="525.17" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-5" x="350.26" y="349.66" width="174.91" height="174.91"></rect><rect class="cls-6" x="350.26" y="524.57" width="174.91" height="174.91"></rect></svg></div>
                <div class="spacer-x" style="--size: 8px;"></div>
                <div class="text">TV Time</div>
            </a>
            <div class="spacer-x" style="--size: 10px;"></div>
            <a class="video-app clickable">
                <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m14.21 11.477 2.475 4.441h-3.803l-2.014-4.047h-1.4v4.047H6.151v-6.85l3.317-1.791v1.755h2.333c.686 0 1.38-.423 1.38-1.231 0-.809-.694-1.232-1.38-1.232h-.915V3.75h1.382c2.563 0 4.284 1.642 4.284 4.087 0 2.005-1.187 3.183-2.342 3.641zM0 0l8.75 5.032L0 10.064V0zm1.189 4.637h.8v1.997l3.536-2.09L1.189 2.05v2.587z"></path></svg></div>
                <div class="spacer-x" style="--size: 8px;"></div>
                <div class="text">Reelgood</div>
            </a>
            <div class="spacer-x" style="--size: 10px;"></div>
            <a class="video-app clickable">
                <div class="icon"><svg data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z"></path></svg></div>
                <div class="spacer-x" style="--size: 8px;"></div>
                <div class="text">IMDb</div>
            </a>
            <div class="spacer-x" style="--size: 10px;"></div>
            <a class="video-app clickable">
                <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="69.3499984741211 -75.6249885559082 440.6999816894531 440.6999816894531"><path d="M69.35 58.24h45.63v175.65H69.35V58.24Z"></path><path d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61l-10.57 82.06Z"></path><path d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93Zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79Z"></path><path d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11Zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95c-2.33-3.39-5.72-6.02-10.16-7.9-4.44-1.88-9.68-2.82-15.72-2.82-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96v175.65Z"></path></svg></div>
                <div class="spacer-x" style="--size: 8px;"></div>
                <div class="text">Reddit</div>
            </a>
            <div class="spacer-x" style="--size: 10px;"></div>
        </div>
    </div>`
}

function tvPopupSuggest(a,b) {
    if ((movieData[a][b].info.desc) || (movieData[a][b].info.service)) {
        var suggestElement = document.createElement('div')
        suggestElement.classList = 'suggest'

        if (movieData[a][b].info.desc) {
            const genre = movieData[a][b].info.desc.genre
        
            for (let i = 0; i < genre.length; i++) {
                const sameMovies = sameGenre(genre[i],a,b)
    
                suggestElement.append(tvPopupSuggestRow(sameMovies,genre[i],a,b))
            }
        }

        if (movieData[a][b].info.service) {
            const sameMovies = sameService(movieData[a][b].info.service,a,b)
            suggestElement.append(tvPopupSuggestRow(sameMovies,movieData[a][b].info.location,a,b))
        }

        return suggestElement.outerHTML
    } else {
        return document.createElement('div').outerHTML
    }
}

function tvPopupSuggestRow(sameMovies,title,oldA,oldB) {
    // const sameMovies = sameGenre(genre,a,b)

    var vstack = document.createElement('div')
    vstack.classList = 'vstack fill-width'

    var htmlString = spacerElement(20).outerHTML

    htmlString = `${htmlString}
    <div class="fill-width">
    <div class="spacer-x" style="--size: 20px;"></div>
    <div class="spacer-x hidden-mobile" style="--size: 10px;"></div>
    <div class="media-title">More in ${capitalizeFirstLetter(title)}</div>
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
        card.classList = 'card layer-1'
        card.style.setProperty('--col',`#${movie.style.color}`)


        if (movie.link) {
            var link = `href="${processLink(movie.link)}"`
        } else {
            var link = ''
        }

        card.innerHTML = `
        <a class="poster clickable" onclick="tvPopup(${a},${b},[${oldA},${oldB}])" style="--poster: url(media-image/TV/background/${movie.id}.${movie.style.posterType});">
            <div class="gradient" style="--col: #${movie.style.color}00;"></div>
            <div class="title" style="--title: url(media-image/TV/title/${movie.id}.${movie.style.titleType});"></div>
        </a>
        <div class="info">
            <p class="text desc">${processDesc(movie,'genre')}</p>
            <div class="spacer-x" style="--size: 5px;"></div>
            <p class="text title">${movie.name}</p>
            <div class="spacer-x" style="--size: 2px;"></div>
            <p class="text summary">${movie.info.summary}</p>
            <div class="spacer-x" style="--size: 10px;"></div>
            <div class="fill-width">
                <a class="play clickable" ${link} target="_blank">
                    <div class="icon"><svg data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></svg></div>
                    <div class="spacer-x" style="--size: 5px;"></div>
                    <p>Watch</p>
                </a>
                <div class="grow"></div>
                <div class="service" style="--service: url('media-image/service/${processService(movie)}.svg');"></div>
            </div>
        </div>
        `

        hscroll.append(card)

        if (i < sameMovies.length - 1) {
            hscroll.append(spacerElement(10))
            hscroll.append(spacerElement(5,'hidden-mobile'))
        }

        // console.log(movie)
    }

    hscroll.append(spacerElement(20))
    hscroll.append(spacerElement(10,'hidden-mobile'))




    htmlString = `${htmlString}${hscroll.outerHTML}`
    vstack.innerHTML = htmlString
    return vstack
}

function sameGenre(genre,a,b) {
    var sameMovies = []

    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; j < movieData[i].length; j++) {
            if (movieData[i][j].info.desc) {
                for (let k = 0; k < movieData[i][j].info.desc.genre.length; k++) {
                    if (movieData[i][j].info.desc.genre[k] == genre) {
                        if ((a != i) || (b != j)) {
                            sameMovies.push([i,j])
                        }
                    }
                }
            }
        }
    }

    return sameMovies
}
function sameService(service,a,b) {
    var sameMovies = []

    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; j < movieData[i].length; j++) {
            if (movieData[i][j].info.service) {
                if (movieData[i][j].info.service == service) {
                    if ((a != i) || (b != j)) {
                        sameMovies.push([i,j])
                    }
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
