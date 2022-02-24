function menuItemElem(item) {
    let elem = document.createElement('div')
    elem.classList = 'item'

    if (item.type == 'thumb') {
        elem.append(thumbElement(item.thumb))
    } else if (item.type == 'icon') {
        let icon = iconElement(item.icon)
        icon.classList.add(item.style)
        elem.append(icon)
    }

    elem.append(nameElement(item.name))

    if (item.trigger) {
        elem.onclick = function () {
            item.trigger()
        }
    }

    // if (item.data) {

    // }



    return elem
}



function contextModalShow(data, e) {
    let menu = document.getElementById('context-menu')
    removeAllChildNodes(menu)

    console.log(data)
    for (const tray of data) {
        for (const item of tray) {
            menu.append(menuItemElem(item))
            menu.append(hlineElement())
        }
        menu.lastChild.remove()
        menu.append(dividerElem())
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
        menu.style.removeProperty('top')
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