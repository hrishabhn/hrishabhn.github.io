function allCountdownsElement() {
    var container = document.createElement('div')
    container.classList = 'countdown vstack fill-parent'

    for (let i = 0; i < countdownData.length; i++) {
        container.append(hlineElement())

        if (countdownData[i].date) {
            var info = `
            <div class="vstack">
                <p class="countdown-no">${countdownProcess((countdownData[i].date),'short').num}</p>
                <p class="countdown-period">${countdownProcess((countdownData[i].date),'short').word}</p>
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

function tvSummary(a,b) {
    if (movieData[a][b].info.summary) {
        var str = movieData[a][b].info.summary
    } else {
        var str = 'No summary'
    }

    return str
}

function modalTextElement(text) {
    let elem = document.createElement('div')
    elem.classList = 'modal-text layer-1'
    elem.innerHTML = text

    return elem
}


var currentModal = -1

function openModal(content) {
    currentModal++

    var modal = document.createElement('div')
    modal.id = `modal-${currentModal}`
    modal.classList = 'modal'

    var close = document.createElement('a')
    close.classList = 'close'
    close.onclick = function() { closeModal() }
    modal.append(close)

    var scroll = document.createElement('div')
    scroll.classList = 'vertical'


    var spacer1 = document.createElement('a')
    var spacer2 = document.createElement('a')
    spacer1.classList = 'spacer-x hidden-mobile fill-width'
    spacer2.classList = 'spacer-x hidden-mobile fill-width'
    spacer1.onclick = function() { closeModal() }
    spacer2.onclick = function() { closeModal() }
    spacer1.style.setProperty('--size','40px')
    spacer2.style.setProperty('--size','40px')

    scroll.append(spacer1)
    scroll.append(content)
    scroll.append(spacer2)

    modal.append(scroll)

    var container = document.getElementById('modal-tray')
    container.append(modal)

    // setTimeout(() => { 
    //     removePreloadModal(currentModal) 
    // }, 0);
}

function removePreloadModal(n) {
    var modal = document.getElementById(`modal-${n}`)
    modal.classList.remove('preload')
}

function closeModal() {
    var modal = document.getElementById(`modal-${currentModal}`)
    modal.remove()
    currentModal--
}
