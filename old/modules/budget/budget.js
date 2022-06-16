const budget = {
    modal: function () {
        let card = document.createElement('div')
        card.classList = 'budget-modal layer-0 card-shadow'

        card.append(elems.title('Create Transaction'))
        card.append(elems.spacer(5))

        const inputTypes = [
            'Amount',
            'Name',
            'Category',
            'Date',
            'Hour',
            'Minute',
        ]

        for (const input of inputTypes) {
            card.append(elems.subtitle(input))
            card.append(budget.modalInput(input))

        }

        let create = document.createElement('a')
        create.classList = 'create clickable blue'
        create.textContent = 'Create JSON String'
        create.onclick = function () {
            let dateInputs = {
                date: document.getElementById('budget-modal-Date').value,
                hour: document.getElementById('budget-modal-Hour').value,
                min: document.getElementById('budget-modal-Minute').value,
            }

            if (!dateInputs.date.length)
                dateInputs.date = new Date().getDate().toString()

            for (const item in dateInputs) while (dateInputs[item].length < 2)
                dateInputs[item] = `0${dateInputs[item]}`


            let data = {
                amount: parseFloat(document.getElementById('budget-modal-Amount').value),
                name: document.getElementById('budget-modal-Name').value,
                category: document.getElementById('budget-modal-Category').value,
                date: `${new Date().getFullYear()}-${`0${new Date().getMonth() + 1}`}-${dateInputs.date}T${dateInputs.hour}:${dateInputs.min}:00+02:00`
            }

            alert(`${JSON.stringify(data)},`)
        }

        card.append(create)

        return card
    },
    modalInput(id) {

        let input = document.createElement('input')
        input.type = 'text'
        input.placeholder = id
        input.id = `budget-modal-${id}`

        return input
    },
    widget: function () {
        let card = widgetCardBase('div')
        card.id = 'budget'

        let icon = elems.icon(SFSymbols.creditcard.fill)
        icon.classList = 'top-icon clickable-b'
        icon.onclick = function () { modal.add(budget.modal()) }
        icon.style.setProperty('cursor', 'pointer')

        // chart
        let chart = document.createElement('div')
        chart.classList = 'budget-chart clickable-o'
        chart.onclick = function (e) { context.show(budget.menuData(), e) }

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
            col.append(elems.spacer(5))
            col.append(elems.p(processDay.letter[((i + 1) % 7)]))

            chart.append(col)
            chart.append(elems.grow())
        }
        chart.lastChild.remove()


        card.append(elems.data(spendingData.totalSpent, 'Spent'))
        card.append(icon)
        card.append(chart)

        return card
    },
    menuData: function () {
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
    },
}