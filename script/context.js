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


    var x = e.pageX
    var y = e.pageY

    if (y < 70) { y = 70 }

    menu.style.removeProperty('bottom')
    menu.style.removeProperty('right')

    menu.style.setProperty('top', `${y}px`)
    menu.style.setProperty('left', `${x}px`)

    let menuWidth = menu.offsetWidth
    let menuHeight = menu.offsetHeight

    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let overflowY = (windowHeight - (y + menuHeight)) < 0
    let overflowX = (windowWidth - (x + menuWidth)) < 0

    if (overflowY) {
        // menu.style.removeProperty('top')
        menu.style.setProperty('bottom', '10px')
    }
    if (overflowX) {
        menu.style.removeProperty('left')
        menu.style.setProperty('right', '10px')
    }

    let container = document.getElementById('context-modal')
    container.classList = 'show'
}

function contextModalHide() {
    let container = document.getElementById('context-modal')
    container.classList = 'hide'
}