
function widgetIdeas() {
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


    for (const data of ideaData) {
        let item = elems.item()

        let check = document.createElement('div')
        check.classList = 'check layer-fg'

        let input = document.createElement('input')
        input.value = data
        input.placeholder = 'New'
        input.onkeyup = function (e) {
            setIdeas()

            if (e.key == 'Enter') refreshIdeas()
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

        card.append(item)
    }

    return card
}

function setIdeas() {
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
}


function refreshIdeas() {
    let old = document.getElementById('ideas')
    let newCard = widgetIdeas()
    old.parentNode.replaceChild(newCard, old)
    newCard.lastChild.lastChild.focus()
}