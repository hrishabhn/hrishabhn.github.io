const airlineData = {
    'iberia': {
        code: 'IB',
        thumb: thumbData['iberia'],
        color: 'D6192D',
        link: {
            mobile: 'iberia://',
            desktop: 'https://www.iberia.com',
        },
    },
    'british': {
        code: 'BA',
        thumb: thumbData['british'],
        color: '0035AD',
        link: {
            mobile: 'iberia://',
            desktop: 'https://www.iberia.com',
        },
    },
}

const aircraftData = {
    'a321': {
        name: 'A321',
    },
    'a320neo': {
        name: 'A320neo',
    },
}

const flightData = {
    'mad-lhr': {
        number: '3164',
        dep: {
            code: 'MAD',
            city: 'Madrid',
            airport: 'Barajas',
            time: '5:20pm',
            // date: new Date('')
            terminal: '4S',
            gate: '69',
        },
        arr: {
            code: 'LHR',
            city: 'London',
            airport: 'London Heathrow',
            time: '6:55pm',
            // date: new Date('')
            terminal: '5',
            gate: '69',
        },
        duration: '2h 25m',
        date: 'Thu, 17 Feb',
        seat: '99Z',
        airline: airlineData['iberia'],
        aircraft: aircraftData['a321'],
        return: 'lhr-mad',
        link: 'https://www.notion.so/Feb-2022-London-7bbb8355d70342d087d2f8e7cf43effc'
    },
    'lhr-mad': {
        number: '464',
        dep: {
            code: 'LHR',
            city: 'London',
            airport: 'London Heathrow',
            time: '4:55pm',
            // date: new Date('')
            terminal: '5',
            gate: '69',
        },
        arr: {
            code: 'MAD',
            city: 'Madrid',
            airport: 'Barajas',
            time: '8:20pm',
            // date: new Date('')
            terminal: '4S',
            gate: '69',
        },
        duration: '2h 25m',
        date: 'Sun, 20 Feb',
        seat: '99Z',
        airline: airlineData['british'],
        aircraft: aircraftData['a320neo'],
        return: 'mad-lhr',
        link: 'https://www.notion.so/Feb-2022-London-7bbb8355d70342d087d2f8e7cf43effc'
    },
}
