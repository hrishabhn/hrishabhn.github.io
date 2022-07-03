const budgetCat = {
    grocery: {
        name: 'Grocery',
        icon: SFSymbols.cart.fill,
        color: Colors.green,
    },
    transport: {
        name: 'Transportation',
        icon: SFSymbols.tram.fill,
        color: Colors.blue,
    },
    home: {
        name: 'Home & Furniture',
        icon: SFSymbols.house.fill,
        color: Colors.yellow,
    },
    outing: {
        name: 'Food & Drinks',
        icon: SFSymbols.forkAndKnife,
        color: Colors.red,
    },
    coffee: {
        name: 'Coffee & Pastries',
        icon: SFSymbols.cupAndSaucer.fill,
        color: Colors.orange,
    },
    health: {
        name: 'Health & Wellness',
        icon: SFSymbols.cupAndSaucer.fill,
        color: Colors.pink,
    },
}

const budgetMerch = {
    condis: {
        name: 'Condis',
        cat: budgetCat.grocery,
        thumb: 'condis.jpeg',
    },
    taxi: {
        name: 'Taxi',
        cat: budgetCat.transport,
    },
    wanxin: {
        name: 'Supermercado Wan Xin',
        cat: budgetCat.grocery,
    },
    ikea: {
        name: 'Ikea',
        cat: budgetCat.home,
        thumb: 'ikea.jpeg',
    },
    tmb: {
        name: 'TMB Barcelona',
        cat: budgetCat.transport,
        thumb: 'tmb.jpeg',
    },
    lidl: {
        name: 'Lidl',
        cat: budgetCat.grocery,
        thumb: 'lidl.jpeg',
    },
    bakery: {
        name: 'Bakery',
        cat: budgetCat.coffee,
        icon: SFSymbols.cupAndSaucer.fill,
        color: Colors.orange,
    },
    coaliment: {
        name: 'Coaliment',
        cat: budgetCat.grocery,
    },
}

const budget = {
    merch: [
        {
            name: budgetCat.coffee.name,
            data: [
                budgetMerch.bakery,
            ],
        },
        {
            name: budgetCat.grocery.name,
            data: [
                budgetMerch.condis,
                budgetMerch.coaliment,
                budgetMerch.lidl,
                budgetMerch.wanxin,
            ],
        },
        {
            name: budgetCat.transport.name,
            data: [
                budgetMerch.taxi,
                budgetMerch.tmb,
            ],
        },
        {
            name: budgetCat.home.name,
            data: [
                budgetMerch.ikea,
            ],
        },
    ],
    cat: [],
    modal: function () {
        let card = document.createElement('div')
        card.classList = 'budget-modal layer-1'

        let header = elems.header()
        header.append(elems.textbox('Budget', 'Add new transaction'))

        let merch = document.createElement('div')
        merch.classList = 'item merch clickable-o'
        merch.style.setProperty('grid-row', 'span 2')
        merch.update = function ({ name, value, thumb, icon, color }) {
            removeAllChildNodes(merch)
            if (thumb) merch.append(elems.appThumb(thumb))
            else if (icon) {
                merch.append(elems.icon(icon))
                merch = cardCol(merch, { color: color })
            } else alert('missing image on merch')
            merch.append(elems.grow())
            merch.append(elems.p(name))
            merch.value = value
        }
        merch.update({ name: 'Merchant', icon: SFSymbols.person.fill })

        merch.onclick = function (e) {
            let data = []
            for (const c of budget.merch) {
                let subData = []
                for (const m of c.data) {
                    subData.push({
                        type: 'app',
                        name: m.name,
                        thumb: m.thumb,
                        icon: m.icon,
                        color: m.color,
                        trigger: function () {
                            let newData = {
                                name: m.name,
                                value: m.id,
                            }
                            if (m.thumb) newData.thumb = m.thumb
                            else if (m.icon) {
                                newData.icon = m.icon
                                newData.color = m.color
                            }

                            merch.update(newData)
                            context.hide()
                        },
                    })
                }
                data.push({
                    name: c.name,
                    data: subData,
                })
            }
            // return data

            context.show(data, e)
        }

        // name
        let name = document.createElement('input')
        name.classList = 'item'
        name.placeholder = 'Name'

        // category
        let cat = document.createElement('select')
        cat.classList = 'item'
        cat.innerHTML = '<option value="" selected disabled hidden>Category</option>'
        for (const c in budgetCat) {
            let o = document.createElement('option')
            o.innerHTML = budgetCat[c].name
            o.value = c
            cat.append(o)
        }

        // amount
        let amount = document.createElement('input')
        amount.classList = 'item'
        amount.placeholder = 'Amount'
        amount.style.setProperty('grid-column', '1 / -1')

        // date
        let date = document.createElement('div')
        date.classList = 'item'
        date.style.setProperty('grid-column', '1 / -1')
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

        let btn = elems.a(null, 'Copy')
        btn.classList = 'copy clickable-o'
        btn.onclick = function () {
            let str
            if (merch.value) {
                str = `
    {
        merchant: budgetMerch.${merch.value},
        amount: ${amount.value},
        date: '${date.firstChild.textContent}',
    },`
            } else if (name.value) {
                str = `
    {
        name: '${name.value}',
        cat: budgetCat.${cat.value},
        amount: ${amount.value},
        date: '${date.firstChild.textContent}',
    },`

            }

            navigator.clipboard.writeText(str)
            btn.textContent = 'Copied!'
        }

        card.append(header)
        card.append(merch)
        card.append(name)
        card.append(cat)
        card.append(amount)
        card.append(date)
        card.append(btn)

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

        // top categories
        let topCat = document.createElement('div')
        topCat.classList = 'rank clickable-o'
        topCat.append(elems.title('Top Categories'))

        let max = 0
        for (const k in budgetCat) max = Math.max(max, budgetCat[k].spend)

        let i = 0
        for (const c of budget.cat) if (i < 3) {
            topCat.append(rankItem({
                name: c.name,
                icon: c.icon,
                color: c.color,
                amount: c.spend,
                total: max,
            }))
            i++
        }

        card.lastChild.append(week)
        card.lastChild.append(topCat)
        
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

function rankItem({ name, thumb, icon, color, amount, total }) {
    let item = elems.item()
    if (color) item = cardCol(item, { color: color })
    item.append(thumbOrIcon(thumb, icon))
    item.firstChild.classList.add('brand-col')

    let textbox = elems.textbox(name, amount)
    let bar = document.createElement('div')
    bar.classList = 'bar'
    let fill = document.createElement('div')
    fill.classList = 'fill'
    fill.style.setProperty('width', `${(amount / total) * 100}%`)

    bar.append(fill)
    textbox.append(bar)

    item.append(textbox)

    return item
}

function thumbOrIcon(thumb, icon) {
    if (thumb) return elems.appThumb(thumb)
    if (icon) return elems.icon(icon)
    alert('missing icon or thumb')
}