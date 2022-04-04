const ideas = {
    widget: function() {
        let card = widgetCardBase('div')
        card.id = 'ideas'
        card.classList.add('list')
    },
    widget: function () {
        // base card with header
        let card = widgetCardBase('div')
        card.id = 'ideas'
        card.append(elems.title('Ideas'))
        card.append(elems.spacer(5))


        let iconElem = elems.icon(SFSymbols.lightbulb.fill)
        iconElem.classList = 'top-icon'
        card.append(iconElem)

        let ideaData
        if (getCookie('ideas-list')) ideaData = JSON.parse(getCookie('ideas-list'))
        else ideaData = []
        ideaData.push('')

        for (const data of ideaData) card.append(ideas.widgetItem(data))

        return card
    },
    widgetItem: function (data) {

        let item = elems.item()

        let check = document.createElement('div')
        check.classList = 'check layer-fg clickable-o'
        check.onclick = function () {
            item.before(widgetIdeasItem(''))
        }

        let input = document.createElement('input')
        input.value = data
        input.placeholder = 'New'
        input.onkeyup = function (e) {
            ideas.set()

            if (e.key == 'Enter') ideas.refresh()
            else if (e.key == 'ArrowUp') {
                e.preventDefault()
                if (item.previousElementSibling) item.previousElementSibling.lastChild.focus()
            } else if (e.key == 'ArrowDown') {
                e.preventDefault()
                if (item.nextElementSibling) item.nextElementSibling.lastChild.focus()
            }
        }

        item.append(check)
        item.append(elems.spacer(5))
        item.append(input)

        return item
    },
    set: function () {
        let card = document.getElementById('ideas')

        let nodes = Array.from(card.childNodes)
        // remove title and spacer
        nodes.shift()
        nodes.shift()

        let data = []

        for (let i = 0; i < nodes.length; i++) {
            let value = nodes[i].lastChild.value
            if (value) data.push(value)
        }

        setCookie('ideas-list', JSON.stringify(data), 7)
    },
    refresh: function () {
        let old = document.getElementById('ideas')
        let newCard = ideas.widget()
        old.parentNode.replaceChild(newCard, old)
        newCard.lastChild.lastChild.focus()
    },
}