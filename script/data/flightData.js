const airlineData = {
    'iberia': {
        code: 'IB',
        thumb: thumbData['iberia'],
    },
    'british': {
        code: 'BA',
        thumb: thumbData['british'],
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
        duration: '2h 30m',
        date: 'Thu, 17 Feb',
        seat: '99Z',
        airline: airlineData['iberia'],
        aircraft: 'A321',
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
        aircraft: 'A320neo',
    },
}
