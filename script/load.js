function loadApp() {
    routineLoad()

    baseElements[0].render()
    pageDataRender()
    loadSwitches()

    widgetPopulate()
    openFirstPage(0)
    // tvPopupShow(0,0)
    // testTV()
    // openModal(flightDetail(flightData[2]))
    // showModal(null,tripCard(0))
    // openModal(tripCard(0))
}

function openFirstPage(n) {
    const pageCookie = getCookie('page')
    // console.log(pageCookie)
    if (pageCookie) {
        pageData[pageCookie].open()
    } else {
        pageData[n].open()
    }
}


// function testTV() {
//     for (let i = 0; i < movieData.length; i++) {
//         for (let j = 0; j < movieData[i].length; j++) {
//             tvPopup(i,j)
//         }
//     }
// }

const body = document.getElementById('body')

const baseElements = [
    {
        id: 'leftbar',
        render: function() {
            const element = document.getElementById(this.id)

            var time = document.createElement('div')
            time.classList = 'time hidden-mobile'
            time.innerHTML = processTime(dateNow().hour,dateNow().minute)

            var date = document.createElement('div')
            date.classList = 'date hidden-mobile'
            date.innerHTML = `${processDay(dateNow().day,'long')}, ${dateNow().date} ${processMonth(dateNow().month,'long')}`

            // console.log(processDay(dateNow().day,'long'))

            element.append(time)
            element.append(date)
        },
    }
]

function checkPass() {
    console.log(getCookie('verified'))

    if (!getCookie('verified')) {
        var pass = prompt('Enter password:')

        while (pass != 'pass') {
            pass = prompt('Wrong password, try again:')
        }

        setCookie('verified',true,14)
        console.log(getCookie('verified'))
    }
}