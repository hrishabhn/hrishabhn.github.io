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

// function modalScroll() {
//     const modalBody = document.getElementById('modal-scroll')

//     if (modalBody.scrollTop < 0) {
//         hideModal()
//     }
// }

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

function tvSummaryElement(a,b) {
    var container = document.createElement('div')
    container.classList = 'summary vstack fill-parent'
    container.append(hlineElement())
    container.append(spacerElement(5))

    var summary = document.createElement('p')

    if (movieData[a][b].info.summary) {
        summary.innerHTML = movieData[a][b].info.summary
    } else {
        summary.innerHTML = 'No summary'
    }

    container.append(summary)
    return container
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var currentModal = -1

function openModal(content) {
    currentModal++

    var modal = document.createElement('div')
    modal.id = `modal-${currentModal}`
    modal.classList = 'modal preload'

    var close = document.createElement('a')
    close.classList = 'close'
    close.onclick = function() { closeModal() }
    modal.append(close)

    var scroll = document.createElement('div')
    scroll.classList = 'vertical'


    var spacer1 = document.createElement('a')
    var spacer2 = document.createElement('a')
    spacer1.classList = 'spacer-x hidden-mobile'
    spacer2.classList = 'spacer-x hidden-mobile'
    spacer1.style.setProperty('--size','40px')
    spacer2.style.setProperty('--size','40px')

    scroll.append(spacer1)
    scroll.append(content)
    scroll.append(spacer2)

    modal.append(scroll)

    var container = document.getElementById('modal-tray')
    container.append(modal)

    setTimeout(() => { 
        removePreloadModal(currentModal) 
    }, 0);
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
