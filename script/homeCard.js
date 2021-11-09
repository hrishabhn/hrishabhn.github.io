
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
]



function homeCardBasic(data) {
    if (data.dataBig) {
        var info = `
        <div class="data">
            <p class="big">${data.dataBig}</p><p class="small">${data.dataSmall}</p>
        </div>`
    } else { var info = `` }


    var card = document.createElement('a')
    card.classList = 'homecard basic clickable layer-1 hover-shadow'
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
    card.classList = 'homecard trip clickable layer-1 hover-shadow'
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
    if (data.gate) {
        var gate = `
        <div class="data">
            <p class="big">${data.gate}</p><p class="small">gate</p>
        </div>`
    } else { var gate = `` }

    var card = document.createElement('a')
    card.classList = 'homecard basic flight border clickable layer-1 hover-shadow'
    card.style.setProperty('--fgCol',`#${flightData[data.n].airline.color.fg}`)
    card.style.setProperty('--bgCol',`#${flightData[data.n].airline.color.bg}`)
    card.onclick = function () { openModal(flightDetail(flightData[data.n])) }
    card.innerHTML = `
    <div class="bg"></div>
    <div class="logo">${flightData[data.n].airline.icon.svg}</div>
    <div class="grow"></div>
    <p class="text">${flightData[data.n].airline.name} ${flightData[data.n].number}</p>
    <p class="subtext">${flightData[data.n].dep.airport} &#8594 ${flightData[data.n].arr.airport}</p>
    ${gate}`

    return card
}

function homeCardTV(data) {
    var card = document.createElement('a')
    card.classList = 'homecard tv clickable layer-1 hover-shadow'
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
    card.classList = 'homecard basic book clickable layer-1 hover-shadow'
    card.onclick = function () { pageData[4].open() }
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

function homeCardTray() {
    var tray = document.createElement('div')
    tray.classList = 'hscroll-homecard'
    tray.append(spacerElement(15))
    // tray.append(spacerElement(5,'hidden-mobile'))

    for (let i = 0; i < homeCardData.length; i++) {
        tray.append(homeCardData[i].render())
        tray.append(spacerElement(15))
        // tray.append(spacerElement(5,'hidden-mobile'))
    }


    tray.append(spacerElement(25,'hidden-mobile'))


    // tray.innerHTML = `
    // <div class="homecard basic clickable layer-1">
    //     <div class="icon red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"></path></svg></div>
    //     <div class="grow"></div>
    //     <p class="text">TV &amp; Movies</p>
    //     <p class="subtext">Watch</p>
    // </div>
    // <div class="spacer-x" style="--size: 20px;"></div>
    // <a class="homecard basic flight clickable layer-1" style="--fgCol: #1c1c1e;--bgCol: #ffec00;">
    //     <div class="bg"></div>
    //     <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0.13193467259407043 2.2258338928222656 16.509334564208984 16.509334564208984"><path d="M5.722 12.772c-.027.448.076.807.454 1.034.375.247.997.38 2.03.38 1.055 0 2.22-.202 2.407-1.078.138-.65-.296-.831-1.434-.965l-4.135-.516c-2.71-.337-3.915-1.325-3.475-3.39.7-3.3 3.749-4.332 8.305-4.332 3.233 0 7.194.582 6.73 4.04h-5.342c.064-.517-.202-.853-.635-1.033-.428-.2-1.042-.27-1.649-.27-1.369 0-2.243.315-2.42 1.146-.081.382.162.718 1.345.853l4.013.449c3.2.36 4.601 1.369 4.097 3.748-.612 2.873-3.636 4.218-8.686 4.218-3.368 0-7.798-.603-7.127-4.284z"></path></svg></div>                    <div class="grow"></div>
    //     <p class="text">Cathay Pacific 826</p>
    //     <p class="subtext">HKG &#8594 YYZ</p>
    //     <div class="data">
    //         <p class="big">65</p>
    //         <p class="small">gate</p>
    //     </div>
    // </a>
    // <div class="spacer-x" style="--size: 20px;"></div>
    // <a class="homecard basic clickable layer-1">
    //     <div class="icon red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm0 26c-.462 0-.895-.113-1.286-.3l-6.007 6.007a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l6.007-6.007A2.969 2.969 0 0 1 22 25a2.99 2.99 0 0 1 2-2.816V8a1 1 0 1 1 2 0v14.184A2.99 2.99 0 0 1 28 25a3 3 0 0 1-3 3z"></path></svg></div>
    //     <div class="grow"></div>
    //     <p class="text">IE 386 Exam 2</p>
    //     <p class="subtext">Countdown</p>
    //     <div class="data">
    //         <p class="big">7</p>
    //         <p class="small">hours</p>
    //     </div>
    // </a>
    // <div class="spacer-x" style="--size: 20px;"></div>
    // <a class="homecard trip clickable layer-1">
    //     <div class="bg" style="background-image: url(https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2016-11/Hero_San%20Diego%20Skyline_John%20Bahu.jpg?h=3767f04f&amp;itok=R32qq4Na);"></div>
    //     <div class="gradient">
    //         <p class="text">San Diego</p>
    //         <p class="subtext">Thanksgiving &#149 16 days</p>
    //     </div>
    // </a>`

    return tray
}