const resultCard = {
    base: function ({ name, buttons}) {
        let card = document.createElement('div')
        card.classList = 'result-card layer-0'

        let header = document.createElement('div')
        header.classList = 'header'
        header.append(elems.p(name))
        header.append(elems.grow())

        let body = document.createElement('div')
        body.classList = 'body'

        card.isEmpty = function () { return !body.hasChildNodes() }
        card.firstResult = function () { return body.firstChild }

        if (buttons) for (const b of buttons)
            header.append(appObject.bw({
                name: b.name,
                icon: b.icon,
                trigger: function () { if (b.trigger) b.trigger() }
            }))

        card.append(header)
        card.append(body)

        return card
    }
}