const budgetCat = {
    grocery: {
        name: 'Grocery',
    },
    transport: {
        name: 'Transportation',
    },
    home: {
        name: 'Home & Furniture',
    },
}

const budgetMerch = {
    condis: {
        name: 'Condis'
    },
    taxi: {
        name: 'Taxi'
    },
    wanxin: {
        name: 'Supermercado Wan Xin'
    },
    ikea: {
        name: 'Ikea'
    },
    tmb: {
        name: 'TMB Barcelona'
    },
    lidl: {
        name: 'Lidl'
    },
}

const budget = {
    merchant: {
        condis: {
            name: 'Condis'
        },
        taxi: {
            name: 'Taxi'
        },
        wanxin: {
            name: 'Supermercado Wan Xin'
        },
        ikea: {
            name: 'Ikea'
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
        card.classList = 'budget-modal layer-1'

        let header = elems.header()
        header.append(elems.textbox('Budget', 'Add new transaction'))

        // name
        let name = document.createElement('input')
        name.placeholder = 'Name'

        // merchant
        let merchant = document.createElement('select')
        merchant.innerHTML = '<option value="" selected disabled hidden>Merchant</option>'
        for (const m in budgetMerch) {
            let o = document.createElement('option')
            o.innerHTML = budgetMerch[m].name
            o.value = m
            merchant.append(o)
        }

        // amount
        let amount = document.createElement('input')
        amount.placeholder = 'Amount'

        // category
        let cat = document.createElement('select')
        cat.innerHTML = '<option value="" selected disabled hidden>Category</option>'
        for (const c in budgetCat) {
            let o = document.createElement('option')
            o.innerHTML = budgetCat[c].name
            o.value = c
            cat.append(o)
        }

        let date = document.createElement('div')
        date.classList = 'date-cont'
        date.append(elems.p(''))
        date.update = function (d) { date.firstChild.textContent = `${d.getDate()} ${capitalizeFirstLetter(processDate.month.short(d))} ${d.getFullYear()}` }
        date.update(new Date())
        date.append(elems.grow())

        date.append(appObject.bw({
            name: 'Previous Day',
            icon: SFSymbols.arrowtriangle.left.fill,
            trigger: function () { date.update(new Date(new Date(date.firstChild.textContent).getTime() - 86400000)) },
        }))
        date.append(appObject.bw({
            name: 'Next Day',
            icon: SFSymbols.arrowtriangle.right.fill,
            trigger: function () { date.update(new Date(new Date(date.firstChild.textContent).getTime() + 86400000)) },
        }))


        card.append(header)
        card.append(elems.spacer(10))
        card.append(name)
        card.append(elems.spacer(10))
        card.append(merchant)
        card.append(elems.spacer(10))
        card.append(amount)
        card.append(elems.spacer(10))
        card.append(cat)
        card.append(elems.spacer(10))
        card.append(date)

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