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
