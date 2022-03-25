function menuItemElem(item) {
    let elem = document.createElement('a')
    elem.classList = 'item'
    elem.onclick = function (e) {
        openApp(item, e)
    }

    if (item.type == 'thumb') {
        elem.append(thumbElement(item.thumb))
    } else if (item.type == 'icon') {
        let icon = iconElement(item.icon)
        icon.classList.add(item.style)
        elem.append(icon)
    } else if (item.type == 'col-block') {
        let block = document.createElement('div')
        block.classList = 'col-block'
        block.style.setProperty('background-color', `#${item.color}`)
        elem.append(block)
    }

    elem.append(textboxBase(item.name, item.desc))
    elem.append(growElement())

    if (item.link) {
        // elem.href = item.link
        elem.style.cursor = 'pointer'
    }

    if (item.data) {
        elem.append(spacerElement(10))
        elem.append(dataElem(item.data.value))
    }

    return elem
}

function contextModalShow(data, e) {
    console.log(data)

    let menu = document.getElementById('context-menu')
    removeAllChildNodes(menu)

    for (const tray of data) {
        if (tray[0]) {
            for (const item of tray) {
                menu.append(menuItemElem(item))
                menu.append(hlineElement())
            }
            menu.lastChild.remove()
            menu.append(dividerElem())
        } else if (tray.name) {
            menu.append(titleElement(tray.name))
            menu.append(hlineListElement(12))
        }


    }
    menu.lastChild.remove()

    absolutePos(menu, e)

    let container = document.getElementById('context-modal')
    container.classList = 'show'
}

function contextModalHide() {
    let container = document.getElementById('context-modal')
    container.classList = 'hide'
}

function absolutePos(elem, e) {
    elem.style.setProperty('position', 'absolute')

    var x = e.pageX
    var y = e.pageY

    if (y < 70) y = 70

    elem.style.removeProperty('bottom')
    elem.style.removeProperty('right')

    elem.style.setProperty('top', `${y}px`)
    elem.style.setProperty('left', `${x}px`)

    let menuWidth = elem.offsetWidth
    let menuHeight = elem.offsetHeight

    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let overflowY = (windowHeight - (y + menuHeight)) < 0
    let overflowX = (windowWidth - (x + menuWidth)) < 0

    if (overflowY) {
        // elem.style.removeProperty('top')
        elem.style.setProperty('bottom', '10px')
    }
    if (overflowX) {
        elem.style.removeProperty('left')
        elem.style.setProperty('right', '10px')
    }
}