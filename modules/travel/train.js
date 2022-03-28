const trainlineData = {
    'renfe': {
        name: 'Renfe',
        accent: '830065',
        style: 'purple',
        // thumb: thumbData['british'],
        logo: {
            text: '<svg fill="#830065" viewBox="58.399986267089844 46.805904388427734 2688.98974609375 1027.8673095703125" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m1622 355.2h-391c-20.6 115.9-54.7 314.2-71.6 411.1h166.1c12.7-72.9 47.5-272.8 62.9-360.3h124.6c52.3 0 89.9 35.3 81.2 95.8-8.3 47.9-28.4 163.3-46.1 264.5h166.1c11.8-68 34.8-199.8 45.6-261.9 14.8-84.2-29.7-149.2-137.8-149.2"></path><path d="m773.5 717.3c-77.2-12.7-62.8-105-62.8-105 68.5 8.2 154.9 6.3 213.9 0.4 51.1-5 151.9-17.7 180.7-96.3 28.5-77.9 6.8-140.9-87.2-158.5-69.2-12.8-133.5-13.5-217.5-2.2-119.9 16.1-185.9 56.7-215.2 128-16.1 39.3-25.8 86-30.1 128.4-7.6 77.1 6.9 147.8 103.4 155.5 129.4 10.4 231.2 8.1 339-8.8l33.6-47.9c-102.3 17-218.9 12.9-257.8 6.4m-32.5-229c20.6-49 50.9-79.8 107.6-92.8 25.1-5.8 46.5-5.7 76.5 0.8 44.5 9.5 58.2 61.4 38.6 101.9-21.8 45.2-51 55.3-89.2 63.1-41.4 8.6-95.9 9.8-155.9 5.7 4.2-25.1 14.7-60.4 22.4-78.7"></path><path d="m2404 717.3c-77.2-12.7-62.8-105-62.8-105 68.6 8.2 154.9 6.3 213.9 0.4 51.1-5 151.9-17.7 180.6-96.3 28.5-77.9 6.9-140.9-87.1-158.5-69.3-12.8-133.6-13.5-217.6-2.2-119.9 16.1-185.7 56.7-215.1 128-16.2 39.3-25.9 86-30.1 128.4-7.6 77.1 6.9 147.8 103.4 155.5 129.3 10.4 231.1 8.1 339.1-8.8l33.5-47.9c-102.3 17-218.8 12.9-257.8 6.4m-32.4-229c20.5-49 50.8-79.8 107.4-92.8 25.1-5.8 46.6-5.7 76.6 0.8 44.5 9.5 58.1 61.4 38.7 101.9-21.9 45.2-51 55.3-89.2 63.1-41.4 8.6-95.9 9.8-155.9 5.7 4.1-25.1 14.6-60.4 22.4-78.7"></path><path d="m272.3 492.2c8.8-50.2 26.6-79.2 81.1-89.1 48.8-8.9 139.1-3 192.1 2.9l35.6-50.9c-80.3-5.8-215.9-12.4-296.3-0.7-114.6 16.6-161.3 40-174.3 113.3-7.7 43.9-42.3 242.3-52.1 298.6h166.1c11.4-65.4 39.7-227.7 47.8-274.1"></path><path d="m2065 103.3c-94.4 66.2-126.4 147.4-143.8 247.2l-70.4 402.7c-15.8 91.6-22.8 139.4-38.4 184.4-12.5 37.7-53.6 93.1-122 94l-29.9 42.6c88.3 4.3 158.9-21.2 208.8-56.1 94.4-66.1 129.2-160.7 146.7-260.3 1.2-6.8 31.9-183.1 46.6-266.6 10.7-59.3 41.8-91.8 107.3-92.7l30.4-43.3h-114c16.2-92.4 22-132.3 35.3-170.7 13-37.7 53.7-93.1 121.9-93.9l30.4-43.3c-88.5-4.4-159 21.1-208.9 56"></path></svg>',
            icon: null,
        },
        link: {
            mobile: 'renfe://',
            desktop: 'https://www.renfe.com/es/en',
        },
    },
    'ouigo': {
        name: 'Ouigo',
        accent: 'e50a70',
        style: 'pink',
        // thumb: thumbData['british'],
        logo: {
            text: '<svg fill="#e50a70" viewBox="10.416999816894531 77.19901275634766 212.42401123046875 65.17998504638672" xmlns="http://www.w3.org/2000/svg"><path d="m10.417 118.871v-.131c0-12.995 10.376-23.639 24.653-23.639s24.521 10.514 24.521 23.508v.131c0 12.995-10.376 23.639-24.653 23.639-14.276-.001-24.521-10.514-24.521-23.508m38.533 0v-.131c0-7.836-5.816-14.366-14.012-14.366-8.195 0-13.879 6.399-13.879 14.235v.131c0 7.836 5.816 14.366 14.012 14.366s13.879-6.399 13.879-14.235m14.738 3.133v-21.483c0-2.808 2.247-5.028 5.089-5.028s5.089 2.22 5.089 5.028v21.223c0 7.444 3.767 11.297 9.98 11.297s9.98-3.722 9.98-10.971v-21.549c0-2.808 2.247-5.028 5.089-5.028s5.089 2.22 5.089 5.028v21.157c0 13.844-7.865 20.635-20.291 20.635-12.424 0-20.025-6.856-20.025-20.309m46.927-21.483c0-2.808 2.247-5.028 5.089-5.028s5.089 2.22 5.089 5.028v36.438c0 2.808-2.247 5.028-5.089 5.028s-5.089-2.221-5.089-5.028zm15.465 18.35v-.131c0-12.995 10.245-23.639 24.257-23.639 7.006 0 11.632 1.567 15.796 4.44.991.718 2.115 2.09 2.115 4.049 0 2.743-2.247 4.963-5.023 4.963-1.454 0-2.379-.522-3.106-1.045-2.775-1.959-5.75-3.134-10.112-3.134-7.402 0-13.284 6.464-13.284 14.235v.131c0 8.358 5.816 14.497 14.012 14.497 3.701 0 7.006-.914 9.583-2.743v-6.529h-6.873c-2.445 0-4.429-1.895-4.429-4.311s1.983-4.375 4.429-4.375h11.632c2.843 0 5.09 2.221 5.09 5.028v11.101c0 2.938-1.124 4.963-3.569 6.399-3.768 2.286-9.253 4.571-16.193 4.571-14.411 0-24.325-9.991-24.325-23.507m47.588 0v-.131c0-12.995 10.376-23.639 24.652-23.639s24.521 10.514 24.521 23.508v.131c0 12.995-10.376 23.639-24.652 23.639s-24.521-10.514-24.521-23.508m38.532 0v-.131c0-7.836-5.816-14.366-14.012-14.366s-13.88 6.399-13.88 14.235v.131c0 7.836 5.816 14.366 14.012 14.366s13.88-6.399 13.88-14.235m-90.349-35.521a6.15 6.15 0 1 1 -12.301-.001 6.15 6.15 0 0 1 12.301.001"></path></svg>',
            icon: null,
        },
        link: {
            mobile: 'ouigo://',
            desktop: 'https://www.renfe.com/es/en',
        },
    },
}

const trainData = {
    'mad-bcn': {
        number: 'Avlo 6301',
        dep: {
            code: 'MAD',
            city: 'Madrid',
            station: 'Puerta de Atocha',
            time: '6:20am',
        },
        arr: {
            code: 'BCN',
            city: 'Barcelona',
            station: 'Barcelona Sants',
            time: '8:50am',
        },
        duration: '2h 30m',
        start: 'Thu, 31 Mar',
        date: '31 Mar, 2022 06:20:00',
        seat: '3-1B',
        line: trainlineData.renfe,
        return: 'bcn-mad',
        // link: 'https://www.notion.so/Feb-2022-London-7bbb8355d70342d087d2f8e7cf43effc'
    },
    'bcn-mad': {
        number: '6610',
        dep: {
            code: 'BCN',
            city: 'Barcelona',
            station: 'Barcelona Sants',
            time: '8:45pm',
        },
        arr: {
            code: 'MAD',
            city: 'Madrid',
            station: 'Puerta de Atocha',
            time: '11:30pm',
        },
        duration: '2h 45m',
        start: 'Sat, 2 Apr',
        date: '2 Apr, 2022 20:45:00',
        seat: '15-8B',
        line: trainlineData.ouigo,
        return: 'mad-bcn',
        // link: 'https://www.notion.so/Feb-2022-London-7bbb8355d70342d087d2f8e7cf43effc'
    },
}

const train = {
    data: trainData,
    card: function (key) {
        const train = trainData[key]

        let card = document.createElement('div')
        card.classList = 'travel-card flight layer-1 card-shadow'
        card.style.setProperty('--col', `#${train.line.accent}`)

        // header
        const subtext = `${train.number} &#149 ${processDate.day.short(train.date)} ${new Date(train.date).getDate()} ${processDate.month.short(train.date)}`

        // tray
        const trayData = [
            {
                icon: SFSymbols.wallet.pass.fill,
                text: 'Ticket',
                link: train.link ?? null,
            },
            // {
            //     icon: SFSymbols.airplane,
            //     text: train.aircraft.name,
            //     // trigger: function() { show plane card }
            // },
            {
                icon: SFSymbols.app.dashed,
                text: 'App',
                // link: processDeviceLink(flight.airline.link),
            },
            {
                icon: SFSymbols.arrow.triangle.circlepath,
                text: 'Other Leg',
                trigger: function () { trainData[train.return].detail() }
            },
        ]

        let nodes = [
            travelCard.row({
                left: travelCard.left.dep(),
                right: travelCard.deparr(train.dep),
            }),
            travelCard.row({
                left: travelCard.left.train(),
                right: travelCard.duration(train.duration),
            }),
            travelCard.row({
                left: travelCard.left.arr(),
                right: travelCard.deparr(train.arr),
            }),
            elems.spacer(8),
        ]

        card.append(travelCard.header({
            logo: train.line.logo,
            name: subtext,
            desc: `${train.dep.city} to ${train.arr.city}`
        }))
        card.append(travelCard.actionTray(trayData))
        card.append(elems.hline())
        for (const node of nodes) card.append(node)
        card.append(elems.mobCardBottom())

        return card
    },
    widget: function (key) {
        const train = key ? trainData[key] : Object.values(trainData)[0]

        let card = widgetCardBase('a')
        card.classList.add('flight', 'clickable-b')
        card.onclick = function () { train.detail() }

        // top
        card.append(travelWidget.top({
            logo: train.line.logo,
            code: null,
            number: train.number,
        }))
        card.append(elems.grow())

        // middle
        card.append(travelWidget.middle({
            icon: SFSymbols.tram.fill,
            city: train.arr.city,
            style: train.line.style,
        }))
        card.append(elems.spacer(5))

        // bottom
        card.append(travelWidget.count({ date: train.date }))
        card.append(elems.spacer(2))
        card.append(travelWidget.date({ train: train, date: train.date }))

        return card
    },
}

for (const key in train.data) {
    train.data[key].detail = function () { modal.add(train.card(key), null, true) }
    train.data[key].type = 'train'
}