function loadApp() {
    baseElements[0].render()
    pageDataRender()
    loadSwitches()

    widgetPopulate()
    openFirstPage(0)
    // tvPopupShow(0,0)
    // testTV()
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

