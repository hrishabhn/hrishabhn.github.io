function budgetCard() {
    let card = document.createElement('div')
    card.classList = 'budget-card card-item layer-1 card-shadow'

    let title = pElement(`This Week's Spending:`)
    title.classList = 'title'

    let spent = pElement(`&#128 ${spendingData.weekTotal}`)
    spent.classList = 'spent'

    let avail = pElement(`&#128 ${spendingData.weekly - spendingData.weekTotal} Available`)
    avail.classList = 'available'

    card.append(title)
    card.append(spent)
    card.append(avail)

    card.append(budgetCardChart())
    card.append(budgetCardIcons())

    return card
}


function budgetCardChart() {
    let chart = document.createElement('div')
    chart.classList = 'chart'

    for (let i = 0; i < 7; i ++) {
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
            box.style.setProperty('height',`${boxHeight}%`)

            barBody.append(box)
        }

        bar.append(barBody)
        col.append(bar)
        col.append(spacerElement(5))
        col.append(pElement('M'))


        chart.append(col)
        chart.append(growElement())
    }
    chart.lastChild.remove()

    return chart
}

function budgetCardIcons() {
    let tray = document.createElement('div')
    tray.classList = 'icon-tray'

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