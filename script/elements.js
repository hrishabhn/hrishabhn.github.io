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
    item: function () {
        let item = document.createElement('a')
        item.classList = 'item'
        return item
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
    appThumb: function (thumb) {
        let elem = document.createElement('div')
        elem.classList = 'thumb'
        if (thumb) { elem.style.setProperty('background-image', `url(./appThumb/${thumb}`) }
        return elem
    },

    // other
    data: function (value, unit) {

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