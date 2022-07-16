const ideas = {
    data: function () {
        if (getCookie('ideas')) return JSON.parse(getCookie('ideas'))
        return []
    },
    set: function () { setCookie('ideas', JSON.stringify(document.getElementById('ideas').data()), 10) },
    refresh: function () { document.getElementById('ideas').replaceWith(ideas.resultCard()) },
    resultCard: function () {
        let card = resultCard.base({
            name: 'Ideas',
            buttons: [{ icon: SFSymbols.list.bullet }],
            type: 'vstack',
            gap: 5,
        })
        card.classList.add('fill-height')  //@
        card.id = 'ideas'

        card.data = function () {
            let d = []
            // for children of body
            for (node of card.lastChild.childNodes)
                // if node is not hline
                if (!node.classList.contains('hline'))
                    // if node is input
                    if (node.childNodes[1].tagName == 'INPUT')
                        // if input has value
                        if (node.childNodes[1].value)
                            // send to data
                            d.push(node.childNodes[1].value)

            return d
        }

        if (ideas.data().length) for (const idea of ideas.data()) {
            card.lastChild.append(ideas.resultCardItem(idea))
            card.lastChild.append(elems.hlineList(20))
        }

        card.lastChild.append(ideas.resultCardItem(''))





        return card
    },
    resultCardItem: function (x) {
        let item = document.createElement('div')
        item.classList = 'idea-item'

        let s = document.createElement('span')
        s.onclick = function () {
            setCookie('current-task', x, 1)
            location.reload()
        }

        let i = document.createElement('input')
        i.value = x
        i.placeholder = 'Add'

        i.onkeyup = function (e) {
            ideas.set()
            if (e.key == 'Enter') ideas.refresh()
            // tasks.ideas.set()
            // if (e.key == 'Enter') tasks.ideas.refresh()
        }

        item.append(s)
        item.append(i)

        return item
    },
}