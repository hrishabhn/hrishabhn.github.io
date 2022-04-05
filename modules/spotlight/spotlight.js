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
    }
    // create: function() {

    // },
    // create: function() {

    // },
    // create: function() {

    // },
}