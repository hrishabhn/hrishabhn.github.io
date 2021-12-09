function googleLoad() {
    if ('ontouchstart' in document.documentElement) {
        link = 'google://search'
    } else {
        link = 'https://www.google.com'
    }

    return link
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function headerScroll(page) {
    var header = document.getElementById('header')
    var pageElement = document.getElementById(`page-${page}`)

    if (pageElement.scrollTop > 20) {
        header.classList.add('small')
    } else {
        header.classList.remove('small')
    }

    // console.log(pageElement.scrollTop)
    // console.log(header)
}

function widgetPopulate() {
    coundownPopulate()
}


const countdownData = [
    {
        name: 'End of Semester',
        date: 'Dec 17, 2021 21:00:00',
    },
    {
        name: 'New York',
        date: 'Dec 19, 2021',
    },
    {
        name: 'Boston',
        date: 'Dec 23, 2021',
    },
    {
        name: 'Christmas',
        date: 'Dec 25, 2021',
    },
    {
        name: 'New Years',
        date: 'Jan 1, 2022',
    },
    {
        name: 'Toronto',
        date: 'Dec 3, 2021',
    },
    {
        name: 'Madrid',
        date: 'Jan 27, 2022',
    },
    // {
    //     name: 'Past Countdowns',
    //     date: null,
    // },
    // {
    //     name: 'Start of Fall 2021',
    //     date: 'Aug 23, 2021',
    // },

    // {
    //     name: 'Start of Exams',
    //     date: 'Sep 27, 2021',
    // },
    // {
    //     name: 'Spanish Exam',
    //     date: 'Sep 27, 2021 16:30:00 GMT-04:00',
    // },
    // {
    //     name: 'ECE Exam',
    //     date: 'Sep 27, 2021 20:00:00 GMT-04:00',
    // },
    // {
    //     name: 'NUCL Exam',
    //     date: 'Sep 29, 2021 20:00:00 GMT-04:00',
    // },
    // {
    //     name: 'IE 386 Exam',
    //     date: 'Sep 30, 2021 09:30:00 GMT-04:00',
    // },
    // {
    //     name: 'IE 335 Quiz',
    //     date: 'Oct 1, 2021 12:30:00 GMT-04:00',
    // },
    // {
    //     name: 'End of Exams',
    //     date: 'Oct 1, 2021 13:30:00 GMT-04:00',
    // },
    // {
    //     name: 'Utah',
    //     date: 'Oct 8, 2021 08:50:00 GMT-04:00',
    // },
    // {
    //     name: 'SPAN Exam 2',
    //     date: 'Oct 25, 2021 16:30:00 GMT-04:00',
    // },
    // {
    //     name: 'NUCL Exam 2',
    //     date: 'Oct 27, 2021 20:00:00 GMT-04:00',
    // },
    // {
    //     name: 'Halloween',
    //     date: 'Oct 31, 2021',
    // },
    // {
    //     name: 'ECE Exam 2',
    //     date: 'Nov 1, 2021 20:00:00 GMT-04:00',
    // },
    // {
    //     name: 'IE 386 Exam 2',
    //     date: 'Nov 4, 2021 09:30:00 GMT-04:00',
    // },
    // {
    //     name: 'IE 335 Quiz 4',
    //     date: 'Nov 5, 2021 12:30:00 GMT-04:00',
    // },
    // {
    //     name: 'San Diego',
    //     date: 'Nov 20, 2021 00:09:30',
    // },
]

function coundownPopulate() {
    const data = countdownData[0]

    document.getElementById('countdown-no').innerHTML = countdownProcess((data.date),'short').num
    document.getElementById('countdown-period').innerHTML = countdownProcess((data.date),'short').word
    document.getElementById('countdown-name').innerHTML = data.name
}

function countdownModalElement(data) {
    let card = document.createElement('div')
    card.classList = 'countdown-big layer-1'

    let title = titleElement()
    title.innerHTML = data.name
    card.append(title)

    let hstack = document.createElement('div')

    if (countdownCalculate(data.date).only.days) {
        hstack.append(coutdownVstackElement(countdownCalculate(data.date).part.days,'days'))
        hstack.append(spacerElement(40))
    }

    if (countdownCalculate(data.date).only.hours) {
        hstack.append(coutdownVstackElement(countdownCalculate(data.date).part.hours,'hours'))
        hstack.append(spacerElement(40))
    }

    if (countdownCalculate(data.date).only.minutes) {
        hstack.append(coutdownVstackElement(countdownCalculate(data.date).part.minutes,'minutes'))
        // hstack.append(spacerElement(40))
    }
    
    // hstack.append(coutdownVstackElement(countdownCalculate(data.date).part.seconds,'seconds'))

    
    
    
    
    
    card.append(hstack)
    
    // let countdown = document.createElement('div')
    // countdown.classList = 'time'
    // countdown.innerHTML = countdownProcess(data.date,'long')
    // card.append(countdown)
    return card
}

function coutdownVstackElement(num,unit) {
    let vstack = document.createElement('div')
    vstack.classList = 'vstack'
    
    let numElem = document.createElement('p')
    numElem.classList = 'num'
    numElem.innerHTML = num
    vstack.append(numElem)

    let unitElem = document.createElement('p')
    unitElem.classList = 'unit'
    unitElem.innerHTML = unit
    vstack.append(unitElem)

    return(vstack)
}