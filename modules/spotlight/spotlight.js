const spotlight = {
    create: function () {
        const elem = document.createElement('div')
        elem.classList = 'input layer-0'

        const input = document.createElement('input')
        input.id = 'spotlight'
        input.placeholder = 'Search'
        input.onkeyup = function (e) { spotlightRun(e) }

        elem.append(elems.icon(SFSymbols.magnifyingglass))
        elem.append(input)

        return elem
    },
    elem: function () {
        return document.getElementById('spotlight')
    },
    result: document.getElementById('content-elem'),
    engine: function (data) {
        const input = spotlight.elem()
        let app = document.createElement('div')
        app.classList = 'engine'
        app.append(elems.appThumb(data.thumb))
        app.append(elems.p(`Searching ${data.name}:`))
        input.parentNode.before(app)

        input.value = ''
        input.onkeyup = function (e) {
            if (input.value) {
                if (e.key == 'Enter') window.open(`${data.searchBase}${input.value}`, '_self')
            } else if (e.key == 'Backspace') spotlight.reset()

        }
    },
    reset: function () {
        spotlight.elem().parentNode.previousSibling.remove()
        spotlight.elem().onkeyup = function (e) { spotlightRun(e) }
    },
}