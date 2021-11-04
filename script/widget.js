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
        name: 'IE 335 Quiz 4',
        date: 'Nov 5, 2021 12:30:00 GMT-04:00',
    },
    {
        name: 'San Diego',
        date: 'Nov 20, 2021 00:09:30',
    },
    // {
    //     name: 'Thanksgiving',
    //     date: 'Nov 24, 2021',
    // },
    {
        name: 'New York',
        date: 'Dec 19, 2021',
    },
    {
        name: 'Christmas',
        date: 'Dec 25, 2021',
    },
    {
        name: 'New Year',
        date: 'Jan 1, 2022',
    },
    {
        name: 'Madrid',
        date: 'Jan 28, 2022',
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
]

function coundownPopulate() {
    const data = countdownData[0]

    document.getElementById('countdown-no').innerHTML = countdownCalculate(data.date)[0]
    document.getElementById('countdown-period').innerHTML = countdownCalculate(data.date)[1]
    document.getElementById('countdown-name').innerHTML = data.name
}