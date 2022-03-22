let splash = document.getElementById('splash')

function splashLoad() {
    let focus = document.createElement('div')
    focus.classList = 'focus limit'
    focus.innerHTML = `<p class="text">${getFocus().name}</p>`

    splash.append(growElement())
    splash.append(spacerElement(50))
    splash.append(focus)
    splash.append(spacerElement(10))
    splash.append(createSpotlight())
    splash.append(spacerElement(35))
    splash.append(widgetTray())
    splash.append(spacerElement(50))
    splash.append(growElement())
    splash.append(dockTray())
}

function dockTray() {
    let nodes = []
    for (const app of getFocus().apps) nodes.push(appCardMini(app))

    let tray = trayWithKids(nodes, 15, 15)
    tray.classList = 'dock layer-1-blur'
    tray.prepend(growElement())
    tray.append(growElement())

    return tray
}

function createSpotlight() {
    let tray = document.createElement('div')
    tray.classList = 'spotlight-tray limit layer-1'

    let container = document.createElement('div')
    container.classList = 'spotlight-container'


    let input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Search'
    input.id = 'spotlight'
    input.onkeyup = function (e) { spotlightRun(e) }

    input.autocomplete = 'off'
    input.spellcheck = 'false'
    // input.autocorrect = 'off'

    container.append(iconElement(iconData['search']))
    container.append(input)

    let result = document.createElement('div')
    result.id = 'results'


    tray.append(container)
    tray.append(result)

    return tray
}

function resetSpotlight() {
    let container = (spotlightElem().parentElement)
    let thumb = container.childNodes[1]
    let input = container.lastChild

    thumb.remove()
    input.value = ''
    input.placeholder = 'Search'
    input.onkeyup = function (e) { spotlightRun(e) }
}

function startSearchEngine(data) {
    let container = (spotlightElem().parentElement)
    let input = container.lastChild

    removeAllChildNodes(resultElem())

    input.before(thumbElement(data.thumb))
    input.value = ''
    input.placeholder = `Search ${data.name}`
    input.onkeyup = function (e) {
        if (e.key == 'Enter') {
            if (input.value) {
                window.open(`${data.searchBase}${input.value}`, '_self')
            }
        } else if (e.key == 'Backspace') {
            if (!input.value) {
                resetSpotlight()
            }
        }
    }
}

function pElement(text) {
    let elem = document.createElement('p')
    elem.innerHTML = text
    return elem
}




// function widgetItemElement(type) {
//     let card = document.createElement(type)
//     card.classList = 'card-item layer-1'
//     return card
// }