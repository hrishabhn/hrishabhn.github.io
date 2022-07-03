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
]

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