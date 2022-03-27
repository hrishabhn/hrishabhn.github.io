const modal = {
    index: 0,
    elem: document.getElementById('layer-modal'),
    add: function (card, e, mob) {
        let layer = document.createElement('div')
        layer.classList = 'layer preload'
        if (mob) layer.classList.add('mob')

        let close = document.createElement('a')
        close.classList = 'close'
        close.onclick = function () { modal.remove() }

        layer.append(close)
        if (e) absolutePos(card, e)
        layer.append(card)

        this.elem.append(layer)
        if (this.index == 0) this.elem.classList.remove('hide')
        this.index++

        setTimeout(() => { layer.classList.remove('preload') }, 0);
    },
    remove: function () {
        this.elem.lastChild.remove()
        this.index--
        if (this.index == 0) this.elem.classList.add('hide')
    },
}