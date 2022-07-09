const budgetData = [
    {
        merchant: budgetMerch.taxi,
        amount: 10.95,
        date: '1 Jul 2022',
    },
    {
        merchant: budgetMerch.wanxin,
        amount: 1.8,
        date: '1 Jul 2022',
    },
    {
        merchant: budgetMerch.tmb,
        amount: 23.8,
        date: '1 Jul 2022',
    },
    {
        merchant: budgetMerch.ikea,
        amount: 57.5,
        date: '1 Jul 2022',
    },
    {
        name: 'Dinner (Japanese)',
        cat: budgetCat.outing,
        amount: 17.05,
        date: '1 Jul 2022',
    },
    {
        merchant: budgetMerch.ikea,
        amount: 39,
        date: '2 Jul 2022',
    },
    {
        merchant: budgetMerch.wanxin,
        amount: 39.57,
        date: '2 Jul 2022',
    },
    {
        merchant: budgetMerch.condis,
        amount: 10.01,
        date: '2 Jul 2022',
    },
    {
        merchant: budgetMerch.lidl,
        amount: 16.76,
        date: '2 Jul 2022',
    },
    {
        name: 'Dow Jones Bar',
        cat: budgetCat.outing,
        amount: 14,
        date: '2 Jul 2022',
    },
    {
        merchant: budgetMerch.bakery,
        amount: 1.7,
        date: '3 Jul 2022',
    },
    {
        name: 'Haircut (Sharp Blendz)',
        cat: budgetCat.health,
        amount: 20,
        date: '3 Jul 2022',
    },
    {
        merchant: budgetMerch.coaliment,
        amount: 2.29,
        date: '3 Jul 2022',
    },
    {
        merchant: budgetMerch.tmb,
        amount: 9.6,
        date: '4 Jul 2022',
    },
    {
        merchant: budgetMerch.coaliment,
        amount: 4.63,
        date: '4 Jul 2022',
    },
    {
        merchant: budgetMerch.hpCafe,
        amount: 3.36,
        date: '5 Jul 2022',
    },
    {
        merchant: budgetMerch.dia,
        amount: 4.5,
        date: '5 Jul 2022',
    },
    {
        merchant: budgetMerch.lidl,
        amount: 50.99,
        date: '5 Jul 2022',
    },
    {
        merchant: budgetMerch.consum,
        amount: 3.5,
        date: '5 Jul 2022',
    },
    {
        merchant: budgetMerch.tmb,
        amount: 80,
        date: '5 Jul 2022',
        note: 'T-Jove',
    },
    {
        merchant: budgetMerch.hpCafe,
        amount: 2.6,
        date: '6 Jul 2022',
    },
    {
        merchant: budgetMerch.coaliment,
        amount: 2.19,
        date: '6 Jul 2022',
        note: 'Dish soap',
    },
    {
        name: 'Chamber',
        cat: budgetCat.outing,
        amount: 15.8,
        date: '6 Jul 2022',
    },
    {
        merchant: budgetMerch.taxi,
        amount: 6.45,
        date: '6 Jul 2022',
    },
    {
        merchant: budgetMerch.bicing,
        amount: 50.35,
        date: '7 Jul 2022',
    },
    {
        merchant: budgetMerch.ikea,
        amount: 41.44,
        date: '7 Jul 2022',
    },
    {
        merchant: budgetMerch.hpCafe,
        amount: 6.9,
        date: '8 Jul 2022',
    },
    {
        name: 'Bar Crawl',
        cat: budgetCat.outing,
        amount: 43.8,
        date: '8 Jul 2022',
    },
]

function cleanFloat(x) { return Math.round(x * 100) / 100 }

for (const x of budgetData) {
    if (x.merchant) {
        x.name = x.merchant.name
        x.cat = x.merchant.cat
        x.icon = x.merchant.icon
        x.thumb = x.merchant.thumb
        x.color = x.merchant.color
    } else if (x.cat) {
        x.icon = x.cat.icon
        x.color = x.cat.color
    }
    x.date = new Date(x.date)

    for (let i = 0; i < 7; i++)
        if (budget.thisWeek[i].date.getTime() === removeTime(x.date).getTime())
            budget.thisWeek[i].data.push(x)

}

for (const day of budget.thisWeek) {
    day.total = 0
    for (const x of day.data)
        day.total += x.amount
    budget.weekTotal += day.total
}
budget.weekTotal = cleanFloat(budget.weekTotal)

// console.log(budget.thisWeek)

budget.thisWeek.reverse()

for (const k in budgetCat) {
    const c = budgetCat[k]
    c.spend = 0
    for (const d of budget.thisWeek) for (const t of d.data) if (t.cat === c) c.spend += t.amount
    c.spend = cleanFloat(c.spend)
    budget.cat.push(c)
}

budget.cat.sort((a, b) => b.spend - a.spend)

for (const k in budgetMerch) {
    const m = budgetMerch[k]
    m.spend = 0
    for (const d of budget.thisWeek) for (const t of d.data) if (t.merchant === m) m.spend += t.amount
    m.spend = cleanFloat(m.spend)
    budget.merchOrd.push(m)
}

budget.merchOrd.sort((a, b) => b.spend - a.spend)