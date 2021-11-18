function loadApp() {
    baseElements[0].render()
    pageDataRender()
    widgetbarRender()
    loadSwitches()

    widgetPopulate()
    openFirstPage(0)
    // openModal(tripCard(0))
    // openModal(flightDetail(flightData[0],'flight'))
    // tvPopupShow(0,0)
    // testTV()
    calTest()
    // spotlightShow()

    weatherPopulate()
}

function openFirstPage(n) {


    const pageCookie = getCookie('page')
    // console.log(pageCookie)
    if (pageCookie) {
        pageData[pageCookie].open()
    } else {
        if (n) {
            pageData[n].open()
        } else {
            if (!('ontouchstart' in document.documentElement)) {
                pageData[9].open()
            } else {
                pageData[0].open()
            }
        }
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

document.addEventListener('keyup',keyUp)
document.addEventListener('keydown',keyDown)

function keyUp(e) {
    if (e.key == '/') {
        // document.getElementById('global-search').focus()
        spotlightShow()
    }
}

function keyDown(e) {
    if (e.keyCode == 27) {
        e.preventDefault()
        spotlightHide()
    }
}