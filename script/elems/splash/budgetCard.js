function budgetCard() {
    let card = document.createElement('div')
    card.classList = 'budget-card card-item layer-1 card-shadow'

    let title = titleElement('Spending')
    title.classList.add('green-fg')

    let spent = pElement(`&#128 ${spendingData.totalSpent}`)
    spent.classList = 'spent'

    let avail = pElement(`&#128 ${spendingData.totalRemaining} Available`)
    avail.classList = 'available'

    card.append(title)
    card.append(spent)
    card.append(avail)

    let chart = budgetCardChart()
    card.append(chart)
    card.append(budgetCardIcons())

    return card
}

function budgetCardChart() {
    let chart = document.createElement('div')
    chart.classList = 'chart clickable-o'
    chart.onclick = function (e) { contextModalShow(budgetMenuData(), e) }

    for (let i = 0; i < 7; i++) {
        let col = document.createElement('div')
        col.classList = 'col'

        let bar = document.createElement('div')
        bar.classList = 'bar layer-2'

        let barBody = document.createElement('div')
        barBody.classList = 'bar-body'
        let barHeight = (spendingData.days[i].total / spendingData.maxDaily) * 100
        barBody.style.setProperty('height', `${barHeight}%`)

        for (const cat in spendingData.days[i].spend) {
            let box = document.createElement('div')
            box.classList = 'box'
            box.classList.add(spendingCategories[cat].col)
            let boxHeight = (spendingData.days[i].spend[cat] / spendingData.days[i].total) * 100
            box.style.setProperty('height', `${boxHeight}%`)

            barBody.append(box)
        }

        bar.append(barBody)
        col.append(bar)
        col.append(spacerElement(5))
        col.append(pElement(processDay(((i + 1) % 7), 'letter')))

        chart.append(col)
        chart.append(growElement())
    }
    chart.lastChild.remove()

    return chart
}

function budgetCardIcons() {
    let tray = document.createElement('div')
    tray.classList = 'icon-tray clickable-o'
    tray.onclick = function (e) { contextModalShow(budgetMenuCatData(), e) }

    for (const cat in spendingCategories) {
        let icon = (iconElement(spendingCategories[cat].icon))
        icon.classList.add(spendingCategories[cat].col)
        tray.append(icon)
        tray.append(spacerElement(5))
    }
    tray.lastChild.remove()
    tray.append(growElement())
    
    return tray
}

function budgetMenuCatData() {
    let data = []
    for (const cat in spendingData.categories) {
        data.push({
            type: 'icon',
            name: cat,
            icon: spendingCategories[cat].icon,
            style: spendingCategories[cat].col,
            data: {
                value: `€${spendingData.categories[cat]}`,
            },
        })
    }

    return [data]
}

function budgetMenuData() {
    let data = []
    for (const day of spendingData.days) {
        if (day.trans.length) {
            let dayData = []

            for (const item of day.trans) {
                dayData.push({
                    type: 'icon',
                    name: item.name,
                    icon: spendingCategories[item.category].icon,
                    style: spendingCategories[item.category].col,
                    data: {
                        value: `€${item.amount}`,
                    },
                })
            }


            dayData.reverse()
            data.push(dayData)
            data.push({
                type: 'title',
                name: (day.date.getDate() == new Date().getDate()) ? 'Today' : processDay(day.date.getDay(), 'long'),
            })
        }
    }
    data.reverse()

    return data
}

