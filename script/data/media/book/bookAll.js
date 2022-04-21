const allBooks = {
    'project': {
        name: 'Project Hail Mary',
        id: 'project',
        link: 'kindle://',
        author: 'Andy Weir',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        style: 'brown',
        summary: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company. His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it's up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species. And with the clock ticking down and the nearest human being light-years away, he's got to do it all alone. Or does he?",
    },
    'gweilo': {
        name: 'Gweilo: Memories of a Hong Kong Childhood',
        id: 'gweilo',
        link: 'kindle://',
        author: 'Martin Booth',
        coverType: 'jpg',
        progress: '34%',
        format: 'EBook',
        style: 'secondary',
        summary: 'At seven years old, Martin Booth found himself with all of Hong Kong at his feet. His father was posted there in 1952, and this memoir is his telling of that youth, a time when he had access to the corners of a colony normally closed to a "Gweilo," a "pale fellow" like him. \nHis experiences were colorful and vast. Befriending rickshaw coolies and local stallholders, he learned Cantonese, sampled delicacies such as boiled water beetles and one-hundred-year-old eggs, and participated in vibrant festivals. He even entered the forbidden Kowloon Walled City, wandered into a secret lair of Triads, and visited an opium den.\n\nFrom the plink-plonk man with his dancing monkey to the Queen of Kowloon (a crazed tramp who may have been a Romanov), Martin Booth saw it all---but his memoir illustrates the deeper challenges he faced in his warring parents: a broad-minded mother who embraced all things Chinese and a bigoted father who was enraged by his family\'s interest in "going native."\n\nMartin Booth\'s compelling memoir, the last book he completed before dying, glows with infectious curiosity and humor and is an intimate representation of the now extinct time and place of his growing up.',
    },
    'lost': {
        name: "100 Things We've Lost to the Internet",
        id: 'lost',
        link: 'kindle://',
        author: 'Pamela Paul',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        style: 'orange',
    },
    'focus': {
        name: "Stolen Focus",
        id: 'focus',
        link: 'kindle://',
        author: 'Johann Hari',
        coverType: 'jpg',
        progress: '3%',
        format: 'EBook',
        style: 'secondary',
    },
    'jordan': {
        name: '12 Rules for Life',
        id: 'jordan',
        link: 'kindle://',
        author: 'Jordan B. Peterson',
        coverType: 'jpg',
        progress: '9%',
        format: 'EBook & Audiobook',
        style: 'secondary',
    },
    'short': {
        name: 'A Short History of Nearly Everything',
        id: 'short',
        link: 'ibooks://',
        author: 'Bill Bryson',
        coverType: 'jpg',
        progress: '9%',
        format: 'EBook',
        style: 'purple',
    },
    'faster': {
        name: 'Faster Than Normal',
        id: 'faster',
        audible: 'B0763VPQF6',
        author: 'Peter Shankman',
        coverType: 'jpg',
        progress: '3h 0m left',
        format: 'AudioBook',
        style: 'blue',
    },
    'ready': {
        name: 'Ready Player One',
        id: 'ready',
        link: 'ibooks://',
        author: 'Ernest Cline',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    'cultureMap': {
        name: 'The Culture Map',
        id: 'cultureMap',
        link: 'ibooks://',
        author: 'Erin Meyer',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    'braveNewWorld': {
        name: 'Brave New World',
        id: 'braveNewWorld',
        link: 'ibooks://',
        author: 'Aldous Huxley',
        coverType: 'jpg',
        progress: '22%',
        format: 'EBook',
        // style: 'secondary',
    },
    'ride': {
        name: 'The Ride of a Lifetime',
        id: 'ride',
        audible: '0525499334',
        author: 'Robert Iger',
        coverType: 'jpg',
        progress: '4h 39m left',
        format: 'AudioBook',
        // style: 'secondary',
    },
    'martian': {
        name: 'The Martian',
        id: 'martian',
        audible: 'B082BHJMFF',
        author: 'Andy Weir',
        coverType: 'jpg',
        progress: '29%',
        format: 'EBook',
        // style: 'secondary',
    },
    'split': {
        name: 'Never Split the Difference',
        id: 'split',
        link: 'ibooks://',
        author: 'Chris Voss',
        coverType: 'jpg',
        progress: '4%',
        format: 'EBook',
        // style: 'secondary',
    },
    'four': {
        name: 'The Four',
        id: 'four',
        link: 'ibooks://',
        author: 'Scott Galloway',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook & Audiobook',
        style: 'secondary',
    },
    'future': {
        name: 'The Future is Asian',
        id: 'future',
        link: 'ibooks://',
        author: 'Parag Khanna',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    'raging': {
        name: 'The Raging 2020s',
        id: 'raging',
        link: 'ibooks://',
        author: 'Alec Ross',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    'expats': {
        name: 'The Expatriates',
        id: 'expats',
        link: 'ibooks://',
        author: 'Janice Y. K. Lee',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    'cultureCode': {
        name: 'The Culture Code',
        id: 'cultureCode',
        link: 'ibooks://',
        author: 'Daniel Coyle',
        coverType: 'jpg',
        progress: 'NEW',
        format: 'EBook',
        // style: 'secondary',
    },
    'goingSolo': {
        name: 'Going Solo',
        id: 'goingSolo',
        link: 'ibooks://',
        author: 'Roald Dahl',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        // style: 'secondary',
    },
    'noRules': {
        name: 'No Rules Rules',
        id: 'noRules',
        link: 'ibooks://',
        author: 'Reed Hastings & Erin Meyer',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        style: 'red',
    },
    'homodeus': {
        name: 'Homo Deus',
        id: 'homodeus',
        audible: 'B01N4DCBK6',
        author: 'Yuval Noah Harari',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        style: 'secondary',
    },
    'west': {
        name: 'Has the West Lost It?',
        id: 'west',
        link: 'ibooks://',
        author: 'Kishore Mahbubani',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        // style: 'secondary',
    },
    'sapiens': {
        name: 'Sapiens',
        id: 'sapiens',
        audible: 'B0741G911Q',
        author: 'Yuval Noah Harari',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        // style: 'secondary',
    },
    'animalFarm': {
        name: 'Animal Farm',
        id: 'animalFarm',
        link: '',
        author: 'George Orwell',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        style: 'red',
    },
    'hitchhiker': {
        name: "The Hitchhiker's Guide to the Galaxy",
        id: 'hitchhiker',
        audible: 'B002VA9SWS',
        author: 'Douglas Adams',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        // style: 'secondary',
    },
    'surveillance': {
        name: 'The Age of Surveillance Capitalism',
        id: 'surveillance',
        link: '',
        author: 'Shoshana Zuboff',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'Hardcover',
    },
    'nineteen': {
        name: '1984',
        id: 'nineteen',
        link: '',
        author: 'George Orwell',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'AudioBook',
        // style: 'secondary',
    },
    'boy': {
        name: 'Boy',
        id: 'boy',
        link: 'ibooks://',
        author: 'Roald Dahl',
        coverType: 'jpg',
        progress: 'Finished',
        format: 'EBook',
        // style: 'secondary',
    },
    'hitchhiker2': {
        name: "The Hitchhiker's Guide to the Galaxy",
        id: 'hitchhiker2',
        link: 'kindle://',
        author: 'Douglas Adams',
        coverType: 'jpg',
        progress: '9%',
        format: 'EBook',
        // style: 'secondary',
    },
    'ender1': {
        name: "Ender's Game",
        id: 'ender1',
        link: 'kindle://',
        author: 'Orson Scott Card',
        coverType: 'jpg',
        progress: 'New',
        format: 'EBook',
        // style: 'secondary',
    },
    'humankind': {
        name: "Humankind: A Hopeful History",
        id: 'humankind',
        link: 'kindle://',
        author: 'Rutger Bregman',
        coverType: 'jpg',
        progress: '10%',
        format: 'EBook',
        // style: 'secondary',
        summary: 'If there is one belief that has united the left and the right, psychologists and philosophers, ancient thinkers and modern ones, it is the tacit assumption that humans are bad. It\'s a notion that drives newspaper headlines and guides the laws that shape our lives. From Machiavelli to Hobbes, Freud to Pinker, the roots of this belief have sunk deep into Western thought. Human beings, we\'re taught, are by nature selfish and governed primarily by self-interest.\n\nBut what if it isn\'t true? International bestseller Rutger Bregman provides new perspective on the past 200,000 years of human history, setting out to prove that we are hardwired for kindness, geared toward cooperation rather than competition, and more inclined to trust rather than distrust one another. In fact this instinct has a firm evolutionary basis going back to the beginning of Homo sapiens. \n\nFrom the real-life Lord of the Flies to the solidarity in the aftermath of the Blitz, the hidden flaws in the Stanford prison experiment to the true story of twin brothers on opposite sides who helped Mandela end apartheid, Bregman shows us that believing in human generosity and collaboration isn\'t merely optimistic—it\'s realistic. Moreover, it has huge implications for how society functions. When we think the worst of people, it brings out the worst in our politics and economics. But if we believe in the reality of humanity\'s kindness and altruism, it will form the foundation for achieving true change in society, a case that Bregman makes convincingly with his signature wit, refreshing frankness, and memorable storytelling.',
    },
}

for (const key in allBooks) {
    const book = allBooks[key]
    if (!book.link) book.link = processBookPodLink(book)
}