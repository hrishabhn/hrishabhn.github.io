const flightData = [
    {
        number: 'F9 2039',
        dep: {
            airport: 'IND',
            time: '1:28pm',
            terminal: '-',
            gate: '-',
        },
        arr: {
            airport: 'LAS',
            time: '2:42pm',
        },
        seat: '-',
        duration: '4h 14m',
        date: 'Sat, 20 Nov 2021',
        airline: {
            logo: 'https://1000logos.net/wp-content/uploads/2020/03/Frontier-Airlines-Logo.png',
            color: '248168',
            text: 'fff'
        },
    },
    {
        number: 'F9 2129',
        dep: {
            airport: 'LAS',
            time: '3:59pm',
            terminal: '3',
            gate: '-',
        },
        arr: {
            airport: 'SAN',
            time: '5:12pm',
        },
        seat: '-',
        duration: '1h 13m',
        date: 'Sat, 20 Nov 2021',
        airline: {
            logo: 'https://1000logos.net/wp-content/uploads/2020/03/Frontier-Airlines-Logo.png',
            color: '248168',
            text: 'fff'
        },
    },
    {
        number: 'NK 788',
        dep: {
            airport: 'SAN',
            time: '7:37pm',
            terminal: '-',
            gate: '-',
        },
        arr: {
            airport: 'LAS',
            time: '8:55pm',
        },
        seat: '-',
        duration: '1h 18m',
        date: 'Tue, 30 Nov 2021',
        airline: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Spirit_Airlines_logo.svg/1200px-Spirit_Airlines_logo.svg.png',
            color: 'ffec00',
            text: '1c1c1e'
        },
    },
    {
        number: 'NK 566',
        dep: {
            airport: 'LAS',
            time: '11:50pm',
            terminal: '-',
            gate: '-',
        },
        arr: {
            airport: 'IND',
            time: '6:11am (+1)',
        },
        seat: '-',
        duration: '6h 21m',
        date: 'Tue, 30 Nov 2021',
        airline: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Spirit_Airlines_logo.svg/1200px-Spirit_Airlines_logo.svg.png',
            color: 'ffec00',
            text: '1c1c1e'
        },
    },
]




function flightCard(n) {
    const flight = flightData[n]

    var card = document.createElement('div')
    card.classList = 'flight-card layer-1 card-shadow'
    card.style.setProperty('--col',`#${flight.airline.color}`)

    card.innerHTML = `
    <div class="bg top" style="color: #${flight.airline.text};">${flight.number}</div>
    <div class="fill-width grow">
        <div class="airline" style="--airline: url(${flight.airline.logo});"></div>
        <div class="vstack fill-height cut">
            <div class="cutout layer-0"></div>
            <div class="perforation"></div>
            <div class="cutout layer-0"></div>
        </div>
        <div class="info">
            <div class="dep-arr fill-width">
                <div class="item">
                    <p class="city">${flight.dep.airport}</p>
                    <p class="time">${flight.dep.time}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                    <div class="plane">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.535 14.465c-19.569-19.568-51.395-19.241-70.557.726L322.092 124.488 66.131 39.781 12.4 93.513l213.352 131.365-107.956 112.494-69.231-11.366L0 374.571l101.78 35.649L137.429 512l48.565-48.565-11.366-69.231 112.494-107.955L418.487 499.6l53.732-53.732-84.706-255.961L496.808 85.022c19.968-19.162 20.295-50.988.727-70.557z"></path></svg>
                    </div>
                    <p class="time">${flight.duration}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                <p class="city">${flight.arr.airport}</p>
                <p class="time">${flight.arr.time}</p>
                </div>
            </div>
            <div class="spacer-x" style="--size: 20px;"></div>
            <div class="locations fill-width">
                <div class="item">
                    <p class="text">Terminal</p>
                    <p class="subtext">${flight.dep.terminal}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                    <p class="text">Gate</p>
                    <p class="subtext">${flight.dep.gate}</p>
                </div>
                <div class="grow"></div>
                <div class="item">
                    <p class="text">Seat</p>
                    <p class="subtext">${flight.seat}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg bottom"></div>`

    return card
}