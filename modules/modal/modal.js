const modal = {
    elem: document.getElementById('layer-modal'),
    add: function (card, e, mob) {
        let layer = document.createElement('div')
        layer.classList = 'layer preload'
        if (mob) layer.classList.add('mob')

        let close = document.createElement('a')
        close.classList = 'close'
        close.onclick = function () { modal.remove() }

        layer.append(close)
        if (e) absolutePos(card, e.pageX, e.pageY)
        layer.append(card)

        modal.elem.append(layer)
        modal.update()
        setTimeout(() => { layer.classList.remove('preload') }, 0);
    },
    topbar: function (card, target) {
        let layer = document.createElement('div')
        layer.classList = 'layer preload top'

        let close = document.createElement('a')
        close.classList = 'close'
        close.onclick = function () { modal.remove() }

        layer.append(close)
        if (target) absolutePos(card, target.getBoundingClientRect().left, target.getBoundingClientRect().bottom)
        layer.append(card)

        modal.elem.append(layer)
        modal.update()

        setTimeout(() => { layer.classList.remove('preload') }, 0);
    },
    remove: function () {
        if (modal.elem.hasChildNodes()) modal.elem.lastChild.remove()
        modal.update()
    },
    update: function () {
        if (modal.elem.hasChildNodes()) modal.elem.classList.remove('hide')
        else modal.elem.classList.add('hide')
    },
}