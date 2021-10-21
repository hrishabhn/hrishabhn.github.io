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
        name: 'Halloween',
        date: 'Oct 31, 2021',
    },
    {
        name: 'Thanksgiving',
        date: 'Nov 24, 2021',
    },
    {
        name: 'Christmas',
        date: 'Dec 18, 2021',
    },
    {
        name: 'Madrid',
        date: 'Jan 31, 2022',
    },
    {
        name: 'Past Countdowns',
        date: null,
    },
    {
        name: 'Start of Fall 2021',
        date: 'Aug 23, 2021',
    },

    // {
    //     name: 'Start of Exams',
    //     date: 'Sep 27, 2021',
    // },
    // {
    //     name: 'Spanish Exam',
    //     date: 'Sep 27, 2021 16:30:00',
    // },
    // {
    //     name: 'ECE Exam',
    //     date: 'Sep 27, 2021 20:00:00',
    // },
    // {
    //     name: 'NUCL Exam',
    //     date: 'Sep 29, 2021 20:00:00',
    // },
    // {
    //     name: 'IE 386 Exam',
    //     date: 'Sep 30, 2021 09:30:00',
    // },
    // {
    //     name: 'IE 335 Quiz',
    //     date: 'Oct 1, 2021 12:30:00',
    // },
    // {
    //     name: 'End of Exams',
    //     date: 'Oct 1, 2021 13:30:00',
    // },
    // {
    //     name: 'Utah',
    //     date: 'Oct 8, 2021 08:50:00',
    // },
]

function coundownPopulate() {
    const data = countdownData[0]

    document.getElementById('countdown-no').innerHTML = countdownCalculate(data.date)[0]
    document.getElementById('countdown-period').innerHTML = countdownCalculate(data.date)[1]
    document.getElementById('countdown-name').innerHTML = data.name
}


function countdownCalculate(date) {
    if (!date) {
        return null
    }


    var futureDate = new Date(date).getTime()
    // console.log(futureDate)
    var nowDate = new Date().getTime()
    var distance = futureDate - nowDate
    var past = false

    if (distance < 0) {
        distance = nowDate - futureDate
        past = true
    }
    // console.log(distance)
    // console.log(past)

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var result

    if (days > 0) {
        result = [days,'days']
    } else if (hours > 0) {
        result = [hours,'hours']
    } else if (minutes > 0) {
        result = [minutes,'minutes']
    } else {
        result = [seconds,'seconds']
    }

    // console.log(result)
    return result
}