const budget = {
    cat: {
        transport: {
            name: 'Transportation',
        },
        grocery: {
            name: 'Grocery',
        },
        home: {
            name: 'Home & Furniture',
        },
    },
    merchant: {
        taxi: {
            name: 'Taxi'
        },
        wanxin: {
            name: 'Supermercado Wan Xin'
        },
        ikea: {
            name: 'Ikea'
        },
        condis: {
            name: 'Condis'
        },
        tmb: {
            name: 'TMB Barcelona'
        },
        lidl: {
            name: 'Lidl'
        },
    },
    modal: function () {
        let card = document.createElement('div')
        card.classList = 'budget-modal'

        return card
    },
    resultCard: function () {
        let card = resultCard.base({
            name: 'Budget',
            buttons: [{
                icon: SFSymbols.dollarsign.circle.fill,
                trigger: function () { modal.add(budget.modal()) },
            }],
        })
        card.classList.add('budget')

        let week = document.createElement('div')
        week.classList = 'week clickable-o'

        let amount = elems.p(budget.weekTotal)
        amount.classList = 'amount'

        let chart = document.createElement('div')
        chart.classList = 'chart'

        let maxSpend = 0
        for (const d of budget.thisWeek) maxSpend = Math.max(maxSpend, d.total)

        for (const d of budget.thisWeek) {
            let col = document.createElement('div')
            col.classList = 'column'

            let bar = document.createElement('div')
            bar.classList = 'bar '

            let fill = document.createElement('div')
            fill.classList = 'fill'
            fill = cardCol(fill, Colors.blue)
            fill.style.setProperty('height', `${(d.total / maxSpend) * 100}%`)
            bar.append(fill)


            console.log()
            col.append(bar)
            col.append(elems.p(processDay.letter[d.date.getDay()]))
            chart.append(col)
        }

        week.append(amount)
        week.append(elems.subtitle(`Past 7 Days`))
        week.append(chart)

        card.lastChild.append(week)

        return card
    },
    thisWeek: [],
    weekTotal: 0,
}

for (let i = 0; i < 7; i++) {
    budget.thisWeek.push({
        date: new Date(removeTime(new Date()).getTime() - (86400000 * i)),
        data: [],
    })
}