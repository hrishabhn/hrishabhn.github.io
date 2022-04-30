const ideas = {
    widget: function () {
        let card = widgetCardBase('div')
        card.id = 'ideas'
        card.classList.add('list')
        card.append(elems.title('Ideas'))
        card.append(elems.spacer(5))

        let icon = elems.icon(SFSymbols.lightbulb.fill)
        icon.classList = 'top-icon'
        card.append(icon)

        let ideaData
        if (getCookie('ideas-list')) ideaData = JSON.parse(getCookie('ideas-list'))
        else ideaData = {}
        ideaData[''] = false

        for (const key in ideaData) {
            card.append(ideas.item(key, ideaData[key]))
            card.append(elems.hlineList(20))
        }

        card.lastChild.remove()
        return card
    },
    item: function (data, done) {
        let elem = document.createElement('div')
        elem.classList = 'task'
        if (done) elem.classList.add('done')
        // onclick

        let check = document.createElement('a')
        check.append(document.createElement('div'))
        check.classList.add('clickable-o')
        check.style.setProperty('cursor', 'pointer')
        check.onclick = function () {
            elem.classList.toggle('done')
            ideas.toggle(data)
        }

        let input = document.createElement('input')
        input.value = data
        input.placeholder = 'New'
        input.onkeyup = function (e) {
            ideas.set()
            if (e.key == 'Enter') ideas.refresh()
        }

        elem.append(check)
        elem.append(input)
        return elem
    },
    set: function () {
        let card = document.getElementById('ideas')
        let nodes = Array.from(card.childNodes)
        // remove title, icon and spacer
        nodes.shift()
        nodes.shift()
        nodes.shift()

        let data = {}
        let old
        if (getCookie('ideas-list')) old = JSON.parse(getCookie('ideas-list'))
        else old = {}

        let i = 0
        while (i < nodes.length) {
            let value = nodes[i].lastChild.value
            if (value)
                if (old[value]) data[value] = true
                else data[value] = false
            i += 2
        }
        setCookie('ideas-list', JSON.stringify(data), 7)
    },
    toggle: function (data) {
        let cook = JSON.parse(getCookie('ideas-list'))
        console.log(cook[data])
        cook[data] = !cook[data]
        setCookie('ideas-list', JSON.stringify(cook), 7)
    },
    refresh: function () {
        let old = document.getElementById('ideas')
        let newCard = ideas.widget()
        old.parentNode.replaceChild(newCard, old)
        newCard.lastChild.lastChild.focus()
    },
}