const context = {
    item: function (data) {
        // { type, thumb, icon, name, desc, data}
        let elem = document.createElement('a')
        elem.classList = 'item'
        elem.onclick = function (e) { openApp(data, e) }

        // color
        if (data.color) cardCol(elem, { color: data.color })

        // if (data.type == 'thumb') elem.append(elems.appThumb(data.thumb))
        if (data.type == 'basic') elem.classList.add('basic')
        else if (data.type === 'app') elem.classList.add('app')

        // thumb or icon
        if (data.icon) elem.append(elems.icon(data.icon))
        else if (data.thumb) if (data.thumb) elem.append(elems.appThumb(data.thumb))

        // text
        elem.append(elems.textbox(data.name, data.desc))
        elem.append(elems.grow())

        if (data.link) { elem.style.cursor = 'pointer' }

        // if (data.data) {
        //     elem.append(elems.spacer(10))
        //     elem.append(elems.data(data.data.value))
        // }

        return elem
    },
    show: function (data, e, target) {
        // data should be array of objects
        // each object has name and data array
        // console.log(data)
        let menu = document.getElementById('context-menu')
        removeAllChildNodes(menu)

        for (const subData of data) {
            if (subData.name) {
                menu.append(elems.title(subData.name))
                menu.append(elems.hlineList(12))
            }

            for (const item of subData.data) {
                menu.append(context.item(item))
                menu.append(elems.hline())
            }
            menu.lastChild.remove()
            menu.append(elems.divider())
        }

        menu.lastChild.remove()
        absolutePos(menu, e.pageX, e.pageY)

        // container
        document.getElementById('context-modal').classList = 'show'
    },
    hide: function () {
        // container
        document.getElementById('context-modal').classList = 'hide'
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
        // elem.style.setProperty('transform-origin', 'top right')
    }
}