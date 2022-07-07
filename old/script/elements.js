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
    tray: function () {
        let tray = document.createElement('div')
        tray.classList = 'tray'
        return tray
    },
    divider: function () {
        let divider = document.createElement('div')
        divider.classList = 'divider'
        return divider
    },
    header: function() {
        let elem = document.createElement('div')
        elem.classList = 'header'
        return elem
    },
    mobCardBottom: function () {
        var spacer = document.createElement('div')
        spacer.classList = 'spacer-x only-mobile'
        spacer.style.setProperty('--size', '40px')
        return spacer
    },

    // types
    p: function (text) {
        let elem = document.createElement('p')
        elem.innerText = text
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
    thumb: function (url) {
        let thumb = document.createElement('div')
        thumb.classList = 'thumb'
        if (url) thumb.style.setProperty('background-image', `url(${url})`)
        return thumb
    },
    appThumb: function (thumb) {
        return elems.thumb(`./appThumb/${thumb}`)
    },

    // other
    data: function (value, unit) {
        let elem = document.createElement('div')
        elem.classList = 'data'

        let valueElem = elems.p(value)
        valueElem.classList = 'value'
        elem.append(valueElem)

        if (unit) {
            let unitElem = elems.p(unit)
            unitElem.classList = 'unit'
            elem.append(unitElem)
        }

        return elem
    }
}