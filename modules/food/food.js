const food = {
    data: [
        {
            name: 'Restaurante de Sichuan',
            link: 'https://glovoapp.com/es/en/madrid/restaurante-de-sichuan-madrid',
            desc: 'Order on Glovo',
            thumb: 'sichuan.jpeg',
            style: 'red',
            tags: [
                'chinese',
                'asian',
            ],
        },
        {
            name: 'Gonzalez & Co',
            link: 'https://glovoapp.com/es/en/madrid/gonzalez-and-co-store-madrid/',
            desc: 'Order on Glovo',
            thumb: 'gonzalez.jpeg',
            style: 'red',
            tags: [
                'mexican',
            ],
        },
        {
            name: 'Dia',
            link: 'https://glovoapp.com/es/en/madrid/supermercado-dia-2/',
            desc: 'Order on Glovo',
            thumb: 'dia.jpeg',
            style: 'red',
            tags: [
                'grocery',
            ],
        },
    ],
    search: function (q) {
        let results = []
        for (const rest of food.data) {
            const name = rest.name.toUpperCase().includes(q)
            const desc = rest.desc.toUpperCase().includes(q)
            if (name || desc) results.push(rest)
        }
        return results
    },
    searchRow: function (q) {
        const results = food.search(q)
        let nodes = []
        for (const app of results) nodes.push(food.card(app))
        return content.tray('Restaurants & Food', nodes, 40, 10)
    },
    card: function (app) {
        let card = document.createElement('a')
        card.classList = 'food-card card-hover layer-1 clickable-o'
        card.onclick = function (e) { openApp(app, e) }
        card = cardCol(card, { accent: app.accent, style: app.style, color: app.color })

        card.append(elems.thumb(`./images/restaurant/${app.thumb}`))
        card.append(elems.textbox(app.name, app.desc))

        return card
    },
}