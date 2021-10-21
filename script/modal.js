function showModal(title,body) {
    var modal = document.getElementById('modal-container')
    var titleElement = document.getElementById('modal-title')
    var modalBodyElement = document.getElementById('modal-body')

    removeAllChildNodes(modalBodyElement)

    titleElement.innerHTML = title
    modalBodyElement.append(body)

    modal.classList = 'show'
}

function hideModal() {
    var modal = document.getElementById('modal-container')
    modal.classList = 'hide'
}

function allCountdownsElement() {
    var container = document.createElement('div')
    container.classList = 'vstack fill-parent'

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






function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}