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
]

// console.log(budgetData)

for (const x of budgetData) {
    if (x.merchant) {
        x.name = x.merchant.name
        x.cat = x.merchant.cat
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

// console.log(budget.thisWeek)

budget.thisWeek.reverse()

for (const k in budgetCat) {
    const c = budgetCat[k]
    c.spend = 0
    for (const d of budget.thisWeek) for (const t of d.data) if (t.cat === c) c.spend += t.amount
    budget.cat.push(c)
}

budget.cat.sort((a, b) => b.spend - a.spend)

for (const k in budgetMerch) {
    const m = budgetMerch[k]
    m.id = k
    if (!m.thumb && !m.icon) {
        m.icon = m.cat.icon
        m.color = m.cat.color
    }
}