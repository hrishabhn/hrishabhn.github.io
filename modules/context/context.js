const context = {
    item: function (data) {
        let elem = document.createElement('a')
        elem.classList = 'item'
        elem.onclick = function (e) { openApp(data, e) }

        if (data.type == 'thumb') elem.append(elems.appThumb(data.thumb))
        else if (data.type == 'icon') elem.append(elems.icon(data.icon))
        else if (data.type == 'col-block') {
            let block = document.createElement('div')
            block.classList = 'col-block'
            block.style.setProperty('background-color', `#${data.color}`)
            elem.append(block)
        }

        elem.append(elems.textbox(data.name, data.desc))
        elem.append(elems.grow())

        if (data.link) { elem.style.cursor = 'pointer' }

        if (data.data) {
            elem.append(elems.spacer(10))
            elem.append(elems.data(data.data.value))
        }

        return elem
    },
    show: function (data, e, target) {
        // console.log(data)
        let menu = document.getElementById('context-menu')
        removeAllChildNodes(menu)

        for (const tray of data) {
            if (tray.length) {
                for (const item of tray) {
                    menu.append(context.item(item))
                    menu.append(elems.hline())
                }
                menu.lastChild.remove()
                menu.append(elems.divider())
            } else if (tray.name) {
                menu.append(elems.title(tray.name))
                menu.append(elems.hlineList(12))
            }


        }
        menu.lastChild.remove()
        absolutePos(menu, e.pageX, e.pageY)

        let container = document.getElementById('context-modal')
        container.classList = 'show'
    },
    hide: function () {
        let container = document.getElementById('context-modal')
        container.classList = 'hide'
    },
}

function absolutePos(elem, x, y) {
    elem.style.setProperty('position', 'absolute')

    if (y < 60) y = 60

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
    elem.style.removeProperty('transform-origin')
    if (overflowX) {
        elem.style.removeProperty('left')
        elem.style.setProperty('right', '10px')
        elem.style.setProperty('transform-origin', 'top right')
    }
}