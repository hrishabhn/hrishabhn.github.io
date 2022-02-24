let spendingData = {
    weekly: 200,
    days: [
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
    ],
    maxDaily: 0,
    weekTotal: 0,
}

const spendingCategories = {
    'Coffee': {
        col: 'orange',
        icon: iconData['coffee'],
    },
    'Drinks': {
        col: 'red',
        icon: iconData['beer'],
    },
    'Food': {
        col: 'blue',
        icon: iconData['book'],
    },
    'Grocery': {
        col: 'green',
        icon: iconData['basket'],
    },
    'Health': {
        col: 'pink',
        icon: iconData['heart'],
    },
}


function thisMon() {
    let prevMonday = new Date()
    prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7)
    return prevMonday
}

for (let trans of budgetData) {
    let thisWeek = new Date(trans.date).getDate() >= thisMon().getDate()
    if (thisWeek) {
        // append transactions to specific day
        let myDayIndex = (new Date(trans.date).getDay() + 6) % 7
        delete trans.date
        spendingData.days[myDayIndex].trans.push(trans)
    }
}

for (let i = 0; i < spendingData.days.length; i++) {
    let day = spendingData.days[i]
    let categorySpend = {}
    let total = 0

    for (const col in spendingCategories) {
        categorySpend[col] = 0
    }

    for (const trans of day.trans) {
        categorySpend[trans.category] += trans.amount
        total += trans.amount

        if (total > spendingData.maxDaily) {
            spendingData.maxDaily = total
        }
    }
    total = parseFloat(total.toFixed(12))
    day.spend = categorySpend
    day.total = total
    day.date = new Date(thisMon().getTime() + (1000 * 60 * 60 * 24 * i))
    spendingData.weekTotal += total
}