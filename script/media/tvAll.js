function filterTest() {
    input = document.getElementById('tv-all-search').value.toUpperCase()
    // console.log(input)
    x = document.getElementsByClassName('tv-all-item')
    for (const item of x) {
        if (item.dataset.name.toUpperCase().includes(input)) {
            item.classList.remove('hidden-always')
        } else { item.classList.add('hidden-always') }
        // console.log(item.dataset.name)
    }
}

function tvAllCardElement() {
    var card = document.createElement('div')
    card.classList = 'tv-all-card layer-0'
    card.innerHTML = `
    <p class="header" onclick="closeModal()">All TV & Movies</p>
    <input type="text" onkeyup="filterTest()" id="tv-all-search" class="layer-1 button-text" placeholder="Search"></input>`

    var tray = document.createElement('div')
    tray.classList = 'tv-all-tray'


    for (let i = 0; i < movieData.length; i++) {
        for (let j = 0; j < movieData[i].length; j++) {
            tray.append(tvAllItemElement(i,j))
        }
    }

    card.append(tray)
    card.append(growElement())

    return card
}

function tvAllItemElement(a,b) {
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
    movieCardElement.classList = 'tv-all-item tv-poster'
    movieCardElement.style.setProperty('--poster',`url(media-image/TV/background/${data.id}.${data.style.posterType})`)
    movieCardElement.dataset.name = data.name

    var movieCardHTML = `
    <div class="gradient" style="--col: #${col}00;"></div>
    <div class="title ${data.style.titleSize}" style="--title: url(media-image/TV/title/${data.id}.${data.style.titleType});"></div>
    <a class="play" ${htmlLink} target="_blank"></a>
    <a class="more floating clickable" onclick="tvPopupShow(${a},${b})">
        <svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg>
    </a>`

    movieCardElement.innerHTML = movieCardHTML

    return movieCardElement
}
