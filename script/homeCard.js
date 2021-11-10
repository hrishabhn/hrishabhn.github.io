
// {
//     type: 'basic',
//     action: function() { pageData3.open() },
//     text: pageData3.info.name,
//     subtext: pageData3.info.subtext,
//     color: pageData3.info.style,
//     icon: pageData3.info.icon,
//     render: function() { return homeCardBasic(this) }
// },
// {
//     type: 'trip',
//     action: function() { openModal(tripCard(0)) },
//     text: tripData[0].name,
//     subtext: `${tripData[0].subhead} &#149 ${countdownProcess((tripData[0].start),'short').num} ${countdownProcess((tripData[0].start),'short').word}`,
//     image: tripData[0].image,
//     render: function() { return homeCardTrip(this) }
// },
// {
//     type: 'flight',
//     action: function() { openModal(flightDetail(flightData[0])) },
//     text: `${flightData[0].airline.name} ${flightData[0].number}`,
//     subtext: `${flightData[0].dep.airport} &#8594 ${flightData[0].arr.airport}`,
//     // gate: flightData[0].dep.gate,
//     color: flightData[0].airline.color,
//     logo: flightData[0].airline.icon.svg,
//     render: function() { return homeCardFlight(this) }
// },
// {
//     type: 'bus',
//     action: function() {  },
//     text: busData[0].airline.name,
//     subtext: `${busData[0].dep.airport} &#8594 ${busData[0].arr.airport}`,
//     color: busData[0].airline.color,
//     logo: busData[0].airline.icon.svg,
//     render: function() { return homeCardFlight(this) }
// },
// {
//     type: 'tv',
//     action: function() { tvPopupShow(0,0) },
//     text: movieData[0][0].name,
//     subtext: `${processDesc(movieData[0][0])}`,
//     image: `media-image/TV/background/${movieData[0][0].id}.${movieData[0][0].style.posterType}`,
//     render: function() { return homeCardTrip(this) }
// },
// {
//     type: 'book',
//     action: function() { pageData3.open() },
//     text: bookData[0][0].name,
//     subtext: bookData[0][0].author,
//     image: `media-image/books/${bookData[0][0].id}.${bookData[0][0].coverType}`,
//     render: function() { return homeCardBook(this) }
// },
// {
//     type: 'countdown',
//     action: function() { showModal('Countdowns',allCountdownsElement()) },
//     text: countdownData[0].name,
//     subtext: 'Countdown',
//     dataBig: countdownProcess((countdownData[0].date),'short').num,
//     dataSmall: countdownProcess((countdownData[0].date),'short').word,
//     color: 'indigo',
//     icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm0 26c-.462 0-.895-.113-1.286-.3l-6.007 6.007a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l6.007-6.007A2.969 2.969 0 0 1 22 25a2.99 2.99 0 0 1 2-2.816V8a1 1 0 1 1 2 0v14.184A2.99 2.99 0 0 1 28 25a3 3 0 0 1-3 3z"></path></svg>',
//     render: function() { return homeCardBasic(this) }
// },

const homeCardData = [
    [
        {
            type: 'book',
            a: 0,
            b: 0,
            render: function() { return homeCardBook(this) }
        },
        {
            type: 'tv',
            a: 0,
            b: 0,
            render: function() { return homeCardTV(this) }
        },
        {
            type: 'tv',
            a: 0,
            b: 1,
            render: function() { return homeCardTV(this) }
        },
        {
            type: 'trip',
            n: 0,
            render: function() { return homeCardTrip(this) }
        },
        {
            type: 'book',
            a: 0,
            b: 1,
            render: function() { return homeCardBook(this) }
        },
        {
            type: 'tv',
            a: 0,
            b: 2,
            render: function() { return homeCardTV(this) }
        },
        {
            type: 'flight',
            n: 0,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },
        {
            type: 'flight',
            n: 2,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },
        {
            type: 'trip',
            n: 1,
            render: function() { return homeCardTrip(this) }
        },
    ],
    [
        {
            type: 'trip',
            n: 0,
            render: function() { return homeCardTrip(this) }
        },
        {
            type: 'trip',
            n: 1,
            render: function() { return homeCardTrip(this) }
        },
        {
            type: 'trip',
            n: 2,
            render: function() { return homeCardTrip(this) }
        },
        {
            type: 'trip',
            n: 3,
            render: function() { return homeCardTrip(this) }
        },
        {
            type: 'trip',
            n: 4,
            render: function() { return homeCardTrip(this) }
        },
        {
            type: 'trip',
            n: 5,
            render: function() { return homeCardTrip(this) }
        },
    ],
    [
        {
            type: 'flight',
            n: 0,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },
        {
            type: 'flight',
            n: 1,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },
        {
            type: 'flight',
            n: 2,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },
        {
            type: 'flight',
            n: 3,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },
        {
            type: 'flight',
            n: 4,
            // gate: flightData[0].dep.gate,
            render: function() { return homeCardFlight(this) }
        },

    ],
]



function homeCardTray(n) {
    var tray = hscrollHuluElement()
    tray.append(spacerElement(15,'only-mobile'))

    for (let i = 0; i < homeCardData[n].length; i++) {
        tray.append(homeCardData[n][i].render())
        tray.append(spacerElement(15))
        // tray.append(spacerElement(5,'hidden-mobile'))
    }
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(100,'hidden-mobile'))
    tray.append(spacerElement(85,'hidden-mobile'))


    return tray
}


function homeCardBasic(data) {
    if (data.dataBig) {
        var info = `
        <div class="data">
            <p class="big">${data.dataBig}</p><p class="small">${data.dataSmall}</p>
        </div>`
    } else { var info = `` }


    var card = document.createElement('a')
    card.classList = 'homecard basic clickable layer-1'
    card.onclick = function () { data.action() }
    card.innerHTML = `
    <div class="icon ${data.color}">${data.icon}</div>
    <div class="grow"></div>
    <p class="text">${data.text}</p>
    <p class="subtext">${data.subtext}</p>
    ${info}`

    return card
}
function homeCardTrip(data) {
    var card = document.createElement('a')
    card.classList = 'homecard trip clickable layer-1 border'
    card.onclick = function () { openModal(tripCard(data.n)) }
    card.innerHTML = `
    <div class="bg" style="background-image: url(${tripData[data.n].image});"></div>
    <div class="gradient">
        <p class="text">${tripData[data.n].name}</p>
        <p class="subtext">${tripData[data.n].subhead} &#149 ${countdownProcess((tripData[data.n].start),'short').num} ${countdownProcess((tripData[data.n].start),'short').word}</p>
    </div>`

    return card
}

function homeCardFlight(data) {
    const flight = flightData[data.n]

    if (data.gate) {
        var gate = `
        <div class="data">
            <p class="big">${data.gate}</p><p class="small">gate</p>
        </div>`
    } else { var gate = `` }

    var card = document.createElement('a')
    card.classList = 'homecard basic flight border clickable layer-1'
    card.style.setProperty('--fgCol',`#${flight.airline.color.fg}`)
    card.style.setProperty('--bgCol',`#${flight.airline.color.bg}`)
    card.onclick = function () { openModal(flightDetail(flight)) }
    card.innerHTML = `
    <div class="bg"></div>
    <div class="logo">${flight.airline.icon.svg}</div>
    <div class="grow"></div>
    <p class="text">${flight.airline.name} ${flight.number}</p>
    <p class="subtext">${flight.dep.airport} &#8594 ${flight.arr.airport}</p>
    ${gate}`

    return card
}

function homeCardTV(data) {
    var card = document.createElement('a')
    card.classList = 'homecard tv clickable layer-1'
    card.onclick = function () { tvPopupShow(data.a,data.b) }
    card.innerHTML = `
    <div class="bg" style="background-image: url(media-image/TV/background/${movieData[data.a][data.b].id}.${movieData[data.a][data.b].style.posterType});"></div>
    <div class="gradient">
        <p class="text">${movieData[data.a][data.b].name}</p>
    </div>`

    return card
}
function homeCardBook(data) {
    var card = document.createElement('a')
    card.classList = 'homecard basic book clickable layer-1'
    card.onclick = function () { pageData[5].open() }
    card.innerHTML = `
    <div class="cover" style="background-image: url(media-image/books/${bookData[data.a][data.b].id}.${bookData[data.a][data.b].coverType});"></div>
    <div class="info fill-height">
        <div class="grow"></div>
        <p class="text">${bookData[data.a][data.b].name}</p>
        <p class="subtext">${bookData[data.a][data.b].author}</p>
    </div>
    <div class="grow"></div>`

    return card
}
