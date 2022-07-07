const testing = {
    content: document.getElementById('testing').firstChild,
    add: function (text) {
        let c = testing.card(text)
        testing.content.append(c)
        let x = setTimeout(() => { c.remove() }, 5000);
    },
    card: function (text) {
        let card = document.createElement('div')
        card.classList = 'item accent-bg clickable-o card-shadow'
        card.innerText = text
        return card
    },
    load: function() {},
}