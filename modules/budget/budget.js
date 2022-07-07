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
        icon: SFSymbols.heart.fill,
        color: Colors.pink,
    },
}

const budgetMerch = {
    condis: {
        name: 'Condis',
        cat: budgetCat.grocery,
        thumb: 'condis.jpeg',
        color: Colors.blue,
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
        color: Colors.yellow,
    },
    tmb: {
        name: 'TMB Barcelona',
        cat: budgetCat.transport,
        thumb: 'tmb.jpeg',
        color: Colors.red,
    },
    lidl: {
        name: 'Lidl',
        cat: budgetCat.grocery,
        thumb: 'lidl.jpeg',
        color: Colors.indigo,
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
    hpCafe: {
        name: 'HP Cafeteria',
        cat: budgetCat.outing,
        thumb: thumbData.hp,
        color: Colors.blue,
    },
    dia: {
        name: 'Dia',
        cat: budgetCat.grocery,
        // thumb: 'lidl.jpeg',
        // color: Colors.indigo,
    },
    consum: {
        name: 'Consum',
        cat: budgetCat.grocery,
        // thumb: 'lidl.jpeg',
        // color: Colors.indigo,
    },
    bicing: {
        name: 'Bicing',
        cat: budgetCat.transport,
        icon: SFSymbols.bicycle,
        color: Colors.red,
    },
}


for (const k in budgetMerch) {
    const m = budgetMerch[k]
    m.id = k
    if (!m.thumb && !m.icon) {
        m.icon = m.cat.icon
        m.color = m.cat.color
    }
}

const budget = {
    merch: [
        {
            name: budgetCat.outing.name,
            data: [
                budgetMerch.hpCafe,
            ],
        },
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
                budgetMerch.consum,
                budgetMerch.dia,
                budgetMerch.lidl,
                budgetMerch.wanxin,
            ],
        },
        {
            name: budgetCat.transport.name,
            data: [
                budgetMerch.taxi,
                budgetMerch.tmb,
                budgetMerch.bicing,
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
    merchOrd: [],
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
    resultCardTray: function () {
        return [budget.resultCard.week(), budget.resultCard.topCat(), budget.resultCard.topMerch()]
    },
    resultCard: {
        week: function () {
            let card = resultCard.base({
                name: 'Spending',
                buttons: [{
                    icon: SFSymbols.dollarsign.circle.fill,
                    trigger: function () { modal.add(budget.modal()) },
                }],
            })
            card.classList.add('budget')

            let week = document.createElement('div')
            week.classList = 'week'

            let amount = elems.p(budget.weekTotal)
            amount.classList = 'amount'

            let chart = document.createElement('div')
            chart.classList = 'chart'

            let maxSpend = 0
            for (const d of budget.thisWeek) maxSpend = Math.max(maxSpend, d.total)

            for (const d of budget.thisWeek) {
                let col = document.createElement('div')
                col.classList = 'column clickable-o'
                col.onclick = function (e) {
                    let menuData = []
                    for (const t of d.data) menuData.push({
                        type: 'app',
                        name: t.name,
                        desc: `€${t.amount}`,
                        thumb: t.thumb,
                        icon: t.icon,
                        color: t.color,
                    })
                    context.show([{ name: processDate.day.long(d.date), data: menuData }], e)
                }

                let bar = document.createElement('div')
                bar.classList = 'bar '

                let fill = document.createElement('div')
                fill.classList = 'fill accent-bg'
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
        topCat: function () {
            let card = resultCard.base({
                name: 'Top Categories',
                buttons: [{
                    icon: SFSymbols.dollarsign.circle.fill,
                    trigger: function () { modal.add(budget.modal()) },
                }],
            })
            card.classList.add('budget')

            let topCat = document.createElement('div')
            topCat.classList = 'rank'

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

            card.lastChild.append(topCat)

            return card
        },
        topMerch: function () {
            let card = resultCard.base({
                name: 'Top Merchants',
                buttons: [{
                    icon: SFSymbols.dollarsign.circle.fill,
                    trigger: function () { modal.add(budget.modal()) },
                }],
            })
            card.classList.add('budget')

            let topMerch = document.createElement('div')
            topMerch.classList = 'rank'

            let max = 0
            for (const k in budgetMerch) max = Math.max(max, budgetMerch[k].spend)

            let i = 0
            for (const m of budget.merchOrd) if (i < 3) {
                topMerch.append(rankItem({
                    name: m.name,
                    thumb: m.thumb,
                    icon: m.icon,
                    color: m.color,
                    amount: m.spend,
                    total: max,
                }))
                i++
            }

            card.lastChild.append(topMerch)

            return card
        },
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
    item.classList.add('clickable-o')
    if (color) item = cardCol(item, { color: color })

    let top = document.createElement('div')
    top.classList = 'fill-parent'

    top.append(thumbOrIcon(thumb, icon))
    top.firstChild.classList.add('brand-bg')

    let textbox = elems.textbox(name, `€${amount}`)
    top.append(textbox)


    let bar = document.createElement('div')
    bar.classList = 'bar'
    let fill = document.createElement('div')
    fill = cardCol(fill, { color: color })
    fill.classList = 'fill brand-bg'
    fill.style.setProperty('width', `${(amount / total) * 100}%`)

    bar.append(fill)

    item.append(top)
    item.append(bar)


    return item
}

function thumbOrIcon(thumb, icon) {
    if (thumb) return elems.appThumb(thumb)
    if (icon) return elems.icon(icon)
    alert('missing icon or thumb')
}