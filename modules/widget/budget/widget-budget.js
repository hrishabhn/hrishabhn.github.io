function widgetBudgetChart() {
    let chart = document.createElement('div')
    chart.classList = 'budget-chart clickable-o'
    chart.onclick = function (e) { context.show(widgetBudgetChartMenuData(), e) }

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
        col.append(pElement(processDay.letter(((i + 1) % 7))))

        chart.append(col)
        chart.append(growElement())
    }
    chart.lastChild.remove()

    return chart
}


function widgetBudgetChartMenuData() {
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
                name: (day.date.getDate() == new Date().getDate()) ? 'Today' : processDate.day.long(day.date)
            })
        }
    }
    data.reverse()

    return data
}

