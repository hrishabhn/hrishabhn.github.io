let spendingData = {
    days: [
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
        { trans: [], },
    ],
    totalAvailable: 200,
    totalSpent: 0,
    totalRemaining: 0,
    maxDaily: 0,
    categories: {

    }
}

const spendingCategories = {
    'Grocery': {
        col: 'green',
        icon: iconData['basket'],
    },
    'Drinks': {
        col: 'yellow',
        icon: iconData['beer'],
    },
    'Food': {
        col: 'blue',
        icon: iconData['book'],
    },
    'Coffee': {
        col: 'orange',
        icon: iconData['coffee'],
    },
    'Health': {
        col: 'pink',
        icon: iconData['heart'],
    },
    'Subscription': {
        col: 'mint',
        icon: iconData['repeat'],
    },
}

for (const cat in spendingCategories) {
    spendingData.categories[cat] = 0
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
        spendingData.categories[trans.category] += fixFloat(trans.amount)
        spendingData.categories[trans.category] = fixFloat(spendingData.categories[trans.category])
        total += trans.amount

        if (total > spendingData.maxDaily) {
            spendingData.maxDaily = total
        }
    }

    total = fixFloat(total)

    day.spend = categorySpend
    day.total = total
    day.date = new Date(thisMon().getTime() + (1000 * 60 * 60 * 24 * i))
    spendingData.totalSpent += total
}

spendingData.totalRemaining = parseFloat((spendingData.totalAvailable - spendingData.totalSpent).toFixed(12))

function fixFloat(input) {
    return parseFloat(input.toFixed(12))
}