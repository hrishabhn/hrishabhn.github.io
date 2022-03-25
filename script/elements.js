// function appendSpacer(html, n) {
//     html = `${html}<div class="spacer-x" style="--size: ${n}px;"></div>`
//     return html
// }

// function scrollEmbed(html, margin) {
//     html = `<div class="scroll margin-${margin}">${html}</div>`
//     return html
// }

// function contentTitleHTML(title) {
//     // var titleHTML = `<div class="content-container"><div class="content-title">${title}</div></div><div class="spacer-15"></div>`
//     var titleHTML = `<div class="content-title">${title}</div>`
//     return titleHTML
// }

// function contentContainerEmbed(html) {
//     html = `<div class="content-container layer1">${html}</div>`
//     return html
// }

// 

const elems = {
    spacer: function (x) {
        var spacer = document.createElement('div')
        spacer.classList = 'spacer-x'
        spacer.style.setProperty('--size', `${x}px`)
        return spacer
    },
    grow: function () {
        var grow = document.createElement('div')
        grow.style.setProperty('flex-grow', 1)
        return grow
    },
    bg: function (hex) {
        let bg = document.createElement('div')
        bg.classList = 'bg'
        if (hex) bg.style.setProperty('background-color', `#${hex}`)
        return bg
    },
    grad: function () {
        let grad = document.createElement('div')
        grad.classList = 'grad'
        return grad
    },
    hline: function () {
        var hline = document.createElement('div')
        hline.classList = 'hline'
        return hline
    },
    hlineList: function (left) {
        var hline = document.createElement('div')
        hline.classList = 'hline list'
        hline.style.setProperty('--left', `${left}px`)
        return hline
    },


    // types
    p: function (text) {
        let elem = document.createElement('p')
        elem.innerHTML = text
        return elem
    },
    a: function (icon, text) {
        let elem = document.createElement('a')
        if (icon) elem.append(elems.icon(icon))
        if (text) elem.append(elems.p(text))
        return elem
    },

    // text
    title: function (text) {
        let elem = elems.p(text)
        elem.classList = 'title'
        return elem
    },
    subtitle: function (text) {
        var elem = elems.p(text)
        elem.classList = 'sub-title'
        return elem
    },
    name: function (text) {
        let elem = elems.p(text)
        elem.classList = 'name'
        return elem
    },
    desc: function (text) {
        let elem = elems.p(text)
        elem.classList = 'desc'
        return elem
    },
    textbox: function (name, desc) {
        let textbox = document.createElement('div')
        textbox.classList = 'textbox'
        if (name) textbox.append(elems.name(name))
        if (desc) textbox.append(elems.desc(desc))
        return textbox
    },

    // images/icons
    icon: function (svg) {
        let icon = document.createElement('div')
        icon.classList = 'icon'
        if (svg) icon.innerHTML = svg
        return icon
    },
    // icon: function (svg) {

    // },
    // icon: function (svg) {

    // },
    // icon: function (svg) {

    // },
}



// function contentContainerElement(child) {
//     var container = document.createElement('div')
//     container.classList = 'content-container layer1'

//     if (child) {
//         container.append(child)
//     }
//     return container
// }

// function searchElement(contentItem) {
//     // console.log(contentItem)
//     var element = document.createElement('a')
//     element.id = 'search'
//     element.href = contentItem.link
//     // element.target = '_blank'
//     element.classList = 'layer-1 button-fg card-shadow clickable page-width'
//     element.append(elems.icon(iconData['search']))
//     element.append(elems.spacer(10))

//     var text = document.createElement('p')
//     text.innerHTML = contentItem.engine
//     element.append(text)
//     // console.log(element)

//     return element
// }


function colContainerRender(content1, content2) {
    var container = document.createElement('div')
    container.classList = 'col-container page-width'

    container.append(colRender(content1))
    container.append(elems.spacer(15))
    container.append(elems.spacer(5, 'hidden-mobile'))
    container.append(colRender(content2))

    return container
}
function colRender(content) {
    var col = document.createElement('div')
    col.classList = 'col'
    col.append(content)

    // for (let i = 0; i < content.length; i++) {
    //     col.append(content[i])
    // }

    return col
}


// function bgElement(col) {
//     let bg = document.createElement('div')
//     bg.classList = 'bg'
//     bg.style.setProperty('background-color', `#${col}`)
//     return bg
// }
// function gradElement() {
//     let grad = document.createElement('div')
//     grad.classList = 'grad'
//     return grad
// }

// function titleElement(title) {
//     let elem = document.createElement('p')
//     elem.classList = 'title'
//     elem.innerHTML = title
//     return elem
// }

// function elems.icon(svgStr) {
//     let icon = document.createElement('div')
//     icon.classList = 'icon'

//     if (svgStr) { icon.innerHTML = svgStr }
//     return icon
// }
function thumbElement(thumb) {
    let elem = document.createElement('div')
    elem.classList = 'thumb'

    if (thumb) { elem.style.setProperty('background-image', `url(./appThumb/${thumb}`) }
    return elem
}

function itemElement() {
    let item = document.createElement('a')
    item.classList = 'item'
    return item
}
// function nameElement(name) {
//     let elem = document.createElement('p')
//     elem.classList = 'name'
//     elem.innerHTML = name
//     return elem
// }
// function descElement(desc) {
//     let elem = document.createElement('p')
//     elem.classList = 'desc'
//     elem.innerHTML = desc
//     return elem
// }
function headerElement() {
    let elem = document.createElement('div')
    elem.classList = 'header'
    return elem
}

// function aElement(icon, text) {
//     let elem = document.createElement('a')

//     if (icon) elem.append(elems.icon(icon))
//     if (text) elem.append(elems.p(text))

//     return elem
// }

function dataElem(value, unit) {
    let elem = document.createElement('div')
    elem.classList = 'data'

    let valueElem = document.createElement('p')
    valueElem.classList = 'value'
    valueElem.innerHTML = value
    elem.append(valueElem)

    if (unit) {
        let unitElem = document.createElement('p')
        unitElem.classList = 'unit'
        unitElem.innerHTML = unit
        elem.append(unitElem)
    }

    return elem
}