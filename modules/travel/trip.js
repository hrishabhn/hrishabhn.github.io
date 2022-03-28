const tripData = {
    'barca': {
        name: 'Barcelona',
        desc: 'Weekend Trip',
        thumb: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/49/province-of-barcelona.jpg?w=700&h=500&s=1',
        link: 'https://www.notion.so/hrishabhn/Tenerife-52381b8829184f028e66d384ab84690c',
        events: [
            train.data['mad-bcn'],
            train.data['bcn-mad'],
        ],
    },
    'tenerife': {
        name: 'Tenerife',
        desc: 'Easter Break',
        thumb: 'https://s1.eestatic.com/2021/08/11/ocio/603452207_200344208_1706x960.jpg',
        link: 'https://www.notion.so/hrishabhn/Tenerife-52381b8829184f028e66d384ab84690c',
        events: [
            flightData['mad-tfs'],
            flightData['tfs-mad'],
        ],
    },
}

const trip = {
    data: tripData,
    card: function (key) {
        const trip = tripData[key]

        let card = document.createElement('div')
        card.classList = 'travel-card trip layer-1 card-shadow'
        card.style.setProperty('--col', `#${colorData.fluent.red}`)

        // header
        const start = (trip.events[0].date)
        const startText = `${countdown.process.short(start).num} ${countdown.process.short(start).word}`

        // tray
        const trayData = [
            {
                icon: SFSymbols.wallet.pass.fill,
                text: 'Notes',
                link: trip.link ?? null,
            },
        ]

        card.append(elems.thumb(trip.thumb))
        card.append(travelCard.header({
            logo: null,
            name: `${trip.desc} &#149 ${startText}`,
            desc: trip.name,
        }))
        card.append(travelCard.actionTray(trayData))
        card.append(elems.hline())

        // rest
        for (const event of trip.events) {
            card.append(travelCard.row(travelCard.processEvent(event)))
            card.append(elems.hlineList(50))
        }
        card.lastChild.remove()
        card.append(elems.spacer(8))
        card.append(elems.grow())
        card.append(elems.mobCardBottom())

        return card
    },
    widget: function (key) {
        const trip = key ? tripData[key] : Object.values(tripData)[0]

        let card = widgetCardBase('a')
        card.classList.add('trip', 'clickable-b')
        card.onclick = function () { trip.detail() }

        const start = (trip.events[0].date)
        const startText = `${countdown.process.short(start).num} ${countdown.process.short(start).word}`

        card.append(elems.thumb(trip.thumb))
        card.append(elems.data(trip.name, startText))

        return card
    },
}


for (const key in trip.data) {
    trip.data[key].detail = function () { modal.add(trip.card(key), null, true) }
    trip.data[key].type = 'trip'
}
