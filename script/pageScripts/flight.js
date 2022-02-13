function flightDetailCard(flightKey) {
    const flight = flightData[flightKey]

    let card = document.createElement('div')
    card.classList = 'flight-detail-card layer-1'
    card.style.setProperty('--col',`#${flight.airline.accent}`)
    card.innerHTML = `
    <div class="header">
        ${iconElement(flight.airline.logo.icon).outerHTML}
        <div class="textbox">
            <p class="subtext">${flight.airline.code} ${flight.number} &#149 ${processDate(flight.date).day.short} ${processDate(flight.date).date} ${processDate(flight.date).month.short}</p>
            <p class="text">${flight.dep.city} to ${flight.arr.city}</p>
        </div>
    </div>
    `

    let rest = document.createElement('div')
    rest.classList = 'fill-width vstack'

    rest.innerHTML = `
    <div class="status-bar">
    <p>Departs in 7 days</p>
    </div>
    ${flightDetailCardDepArr(flight.dep,'dep').outerHTML}
    <div class="duration-bar">
    <div></div>
    <div class="line layer-fg"></div>
    <p>Total ${flight.duration}</p>
    <div class="line layer-fg"></div>
    </div>
    ${flightDetailCardDepArr(flight.arr,'arr').outerHTML}
    ${flightDetailCardExtras(flight).outerHTML}
    `
    rest.prepend(flightDetailCardActionTray(flight))

    card.append(spacerElement(20))
    card.append(rest)
    card.append(spacerElement(15))
    card.append(spacerElement(40,'only-mobile'))



    return card
}

function flightDetailCardActionTray(flight) {
    const actionData = [
        {
            icon: iconData['ticket'],
            text: 'Ticket',
            link: flight.link,
        },
        // {
        //     icon: iconData['status'],
        //     text: 'Status',
        // },
        {
            icon: iconData['exit'],
            text: 'App',
            link: processDeviceLink(flight.airline.link),
        },
        {
            icon: iconData['reverse'],
            text: 'Other Leg',
            trigger: function() { addModalLayer(flightDetailCard(flight.return)) }
        },
    ]

    let tray = document.createElement('div')
    tray.classList = 'action-tray'
    
    for (let i = 0; i < actionData.length; i++) {
        let data = actionData[i]

        let action = document.createElement('a')
        action.classList = 'action clickable'
        action.target = '_blank'
        if (i > 0) {
            action.classList.add('secondary')
        } else {
            action.classList.add('primary')
        }

        action.innerHTML = `
        <div class="icon">${data.icon}</div>
        <p>${data.text}</p>
        
        `

        if (data.link) {
            action.href = data.link
        } else if (data.trigger) {
            action.onclick = function() { data.trigger() }
        }

        tray.append(action)
        tray.append(spacerElement(10))
    }
    tray.lastChild.remove()

    return tray
}

function flightDetailCardDepArr(flightDepArr, depArr) {
    let card = document.createElement('div')
    card.classList = `deparr ${depArr}`
    card.innerHTML = `
    <div class="row">
        <div class="arrow">${iconData['arrow']}</div>
        <div class="airport-code">${flightDepArr.code}</div>
        <div></div>
        <div class="time">${flightDepArr.time}</div>
        <div></div>
    </div>
    <div class="row">
        <div></div>
        <p>${flightDepArr.airport}</p>
        <div></div>
        <p class="bold">Terminal ${dashIfFalse(flightDepArr.terminal)} &#149 Gate ${dashIfFalse(flightDepArr.gate)}</p>
        <div></div>
    </div>
    `

    return card
}

function dashIfFalse(input) {
    if (input) {
        return input
    } else {
        return '--'
    }
}

function flightDetailCardExtras(flight) {
    let tray = document.createElement('div')
    tray.classList = 'extras-tray'

    const extraData = [
        {
            icon: iconData['plane'],
            text: flight.aircraft.name,
            subtext: 'Aircraft',
        },
        {
            icon: iconData['seat'],
            text: 'Seat --',
            subtext: 'Economy',
        },
    ]

    for (const data of extraData) {
        let item = document.createElement('a')
        item.innerHTML = `
        <div class="icon">${data.icon}</div>
        <p class="text">${data.text}</p>
        <p class="subtext">${data.subtext}</p>
        `

        tray.append(item)
    }



    return tray
}
