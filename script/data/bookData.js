const bookData0 = [
    {
        name: 'Project Hail Mary',
        id: 'project',
        link: 'kindle://',
        author: 'Andy Weir',
        coverType: 'jpg',
        progress: '6%',
        format: 'EBook',
        style: 'brown',
    },
    {
        name: 'Gweilo: Memories of a Hong Kong Childhood',
        id: 'gweilo',
        link: 'kindle://',
        author: 'Martin Booth',
        coverType: 'jpg',
        progress: '34%',
        format: 'EBook',
        style: 'secondary',
    },
    {
        name: "100 Things We've Lost to the Internet",
        id: 'lost',
        link: 'kindle://',
        author: 'Pamela Paul',
        coverType: 'jpg',
        progress: '51%',
        format: 'EBook',
        style: 'orange',
    },
    {
        name: "Stolen Focus",
        id: 'focus',
        link: 'kindle://',
        author: 'Johann Hari',
        coverType: 'jpg',
        progress: '3%',
        format: 'EBook',
        style: 'secondary',
    },
    {
        name: '12 Rules for Life',
        id: '12rules',
        link: 'kindle://',
        author: 'Jordan B. Peterson',
        coverType: 'jpg',
        progress: '9%',
        format: 'EBook & Audiobook',
        style: 'secondary',
    },
]
const bookData1 = [
    {
        name: 'A Short History of Nearly Everything',
        id: 'short',
        link: 'ibooks://',
        author: 'Bill Bryson',
        coverType: 'jpg',
        progress: '9%',
        format: 'EBook',
        style: 'purple',
    },
    {
        name: 'Faster Than Normal',
        id: 'faster',
        link: {
            audible: 'B0763VPQF6',
        },
        author: 'Peter Shankman',
        coverType: 'jpg',
        progress: '3h 0m left',
        format: 'AudioBook',
        style: 'blue',
    },
    {
        name: 'Ready Player One',
        id: 'ready',
        link: 'ibooks://',
        author: 'Ernest Cline',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'The Culture Map',
        id: 'cultureMap',
        link: 'ibooks://',
        author: 'Erin Meyer',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'Brave New World',
        id: 'braveNewWorld',
        link: 'ibooks://',
        author: 'Aldous Huxley',
        coverType: 'jpg',
        progress: '22%',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'The Ride of a Lifetime',
        id: 'ride',
        link: {
            audible: '0525499334',
        },
        author: 'Robert Iger',
        coverType: 'jpg',
        progress: '4h 39m left',
        format: 'AudioBook',
        // style: 'secondary',
    },
    {
        name: 'The Martian',
        id: 'martian',
        link: {
            audible: 'B082BHJMFF',
        },
        author: 'Andy Weir',
        coverType: 'jpg',
        progress: '29%',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'Never Split the Difference',
        id: 'split',
        link: 'ibooks://',
        author: 'Chris Voss',
        coverType: 'jpg',
        progress: '4%',
        format: 'EBook',
        // style: 'secondary',
    },
]
const bookData2 = [
    {
        name: 'The Four',
        id: 'four',
        link: 'ibooks://',
        author: 'Scott Galloway',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook & Audiobook',
        style: 'secondary',
    },
    {
        name: 'The Future is Asian',
        id: 'future',
        link: 'ibooks://',
        author: 'Parag Khanna',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'The Raging 2020s',
        id: 'raging',
        link: 'ibooks://',
        author: 'Alec Ross',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'The Expatriates',
        id: 'expats',
        link: 'ibooks://',
        author: 'Janice Y. K. Lee',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'The Culture Code',
        id: 'cultureCode',
        link: 'ibooks://',
        author: 'Daniel Coyle',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
]
const bookData3 = [
    {
        name: 'Going Solo',
        id: 'goingSolo',
        link: 'ibooks://',
        author: 'Roald Dahl',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'No Rules Rules',
        id: 'noRules',
        link: 'ibooks://',
        author: 'Reed Hastings & Erin Meyer',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        style: 'red',
    },
    {
        name: 'Homo Deus',
        id: 'homodeus',
        link: {
            audible: 'B01N4DCBK6',
        },
        author: 'Yuval Noah Harari',
        coverType: 'jpg',
        progress: 'FINISHED',
        format: 'AudioBook',
        style: 'secondary',
    },
    {
        name: 'Has the West Lost It?',
        id: 'west',
        link: 'ibooks://',
        author: 'Kishore Mahbubani',
        coverType: 'jpg',
        progress: 'FINISHED',
        format: 'EBook',
        // style: 'secondary',
    },
    {
        name: 'Sapiens',
        id: 'sapiens',
        link: {
            audible: 'B0741G911Q',
        },
        author: 'Yuval Noah Harari',
        coverType: 'jpg',
        progress: 'FINISHED',
        format: 'AudioBook',
        // style: 'secondary',
    },
    {
        name: 'Animal Farm',
        id: 'animalFarm',
        link: '',
        author: 'George Orwell',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        style: 'red',
    },
    {
        name: "The Hitchhiker's Guide to the Galaxy",
        id: 'hitchhiker',
        link: {
            audible: 'B002VA9SWS',
        },
        author: 'Douglas Adams',
        coverType: 'jpg',
        progress: 'FINISHED',
        format: 'AudioBook',
        // style: 'secondary',
    },
    {
        name: 'The Age of Surveillance Capitalism',
        id: 'surveillance',
        link: '',
        author: 'Shoshana Zuboff',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'Hardcover',
    },
    {
        name: '1984',
        id: '1984',
        link: '',
        author: 'George Orwell',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        // style: 'secondary',
    },
    {
        name: 'Boy',
        id: 'boy',
        link: 'ibooks://',
        author: 'Roald Dahl',
        coverType: 'jpg',
        progress: 'FINISHED',
        format: 'EBook',
        // style: 'secondary',
    },
]

const bookData = [
    bookData0,
    bookData1,
    bookData2,
    bookData3,
]