const modal = {
    add: function (card) {
        let layer = document.createElement('div')
        layer.classList = 'layer'
        layer.innerHTML = '<a class="close"></a>'

        let close = document.createElement('a')
        close.classList = 'close'
        close.onclick = function () { this.remove() }

        layer.append(close)
        layer.append(card)

        layerModal.append(layer)
        if (modalIndex == 0) {
            layerModal.classList.remove('hide')
        }

        modalIndex++
    },
    remove: function () {
        layerModal.lastChild.remove()
        modalIndex--
        if (modalIndex == 0) {
            layerModal.classList.add('hide')
        }
    },
}

const layerModal = document.getElementById('layer-modal')

function modalTest() {
    addModalLayer(flightDetailCard('mad-lhr'))
}

let modalIndex = 0

function addModalLayer(card) {
    let layer = document.createElement('div')
    layer.classList = 'layer'
    layer.innerHTML = '<a class="close"></a>'

    let close = document.createElement('a')
    close.classList = 'close'
    close.onclick = function() { removeModalLayer() }

    layer.append(close)
    layer.append(card)

    layerModal.append(layer)
    if (modalIndex == 0) {
        layerModal.classList.remove('hide')
    }

    modalIndex++
}

function removeModalLayer() {
    layerModal.lastChild.remove()
    modalIndex--
    if (modalIndex == 0) {
        layerModal.classList.add('hide')
    }
}