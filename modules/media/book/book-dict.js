const bookDict = {
    project: {
        name: 'Project Hail Mary',
        author: 'Andy Weir',
        progress: 'Finished',
        summary: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company. His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it's up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species. And with the clock ticking down and the nearest human being light-years away, he's got to do it all alone. Or does he?",
    },
    gweilo: {
        name: 'Gweilo: Memories of a Hong Kong Childhood',
        author: 'Martin Booth',
        progress: '34%',
        summary: 'At seven years old, Martin Booth found himself with all of Hong Kong at his feet. His father was posted there in 1952, and this memoir is his telling of that youth, a time when he had access to the corners of a colony normally closed to a "Gweilo," a "pale fellow" like him. \nHis experiences were colorful and vast. Befriending rickshaw coolies and local stallholders, he learned Cantonese, sampled delicacies such as boiled water beetles and one-hundred-year-old eggs, and participated in vibrant festivals. He even entered the forbidden Kowloon Walled City, wandered into a secret lair of Triads, and visited an opium den.\n\nFrom the plink-plonk man with his dancing monkey to the Queen of Kowloon (a crazed tramp who may have been a Romanov), Martin Booth saw it all---but his memoir illustrates the deeper challenges he faced in his warring parents: a broad-minded mother who embraced all things Chinese and a bigoted father who was enraged by his family\'s interest in "going native."\n\nMartin Booth\'s compelling memoir, the last book he completed before dying, glows with infectious curiosity and humor and is an intimate representation of the now extinct time and place of his growing up.',
    },
    lost: {
        name: "100 Things We've Lost to the Internet",
        author: 'Pamela Paul',
        progress: 'Finished',
    },
    focus: {
        name: "Stolen Focus",
        author: 'Johann Hari',
        progress: '3%',
    },
    jordan: {
        name: '12 Rules for Life',
        author: 'Jordan B. Peterson',
        progress: '9%',
    },
    short: {
        name: 'A Short History of Nearly Everything',
        author: 'Bill Bryson',
        progress: '9%',
    },
    'faster': {
        name: 'Faster Than Normal',
        // audible: 'B0763VPQF6',
        author: 'Peter Shankman',
        progress: '3h 0m left',
    },
    'ready': {
        name: 'Ready Player One',
        author: 'Ernest Cline',
        progress: 'NEW',
    },
    'cultureMap': {
        name: 'The Culture Map',
        author: 'Erin Meyer',
        progress: 'NEW',
    },
    'braveNewWorld': {
        name: 'Brave New World',
        author: 'Aldous Huxley',
        progress: '22%',
    },
    'ride': {
        name: 'The Ride of a Lifetime',
        author: 'Robert Iger',
        // audible: '0525499334',
        progress: '4h 39m left',
    },
    'martian': {
        name: 'The Martian',
        author: 'Andy Weir',
        progress: '29%',
        // audible: 'B082BHJMFF',
    },
    'split': {
        name: 'Never Split the Difference',
        author: 'Chris Voss',
        progress: '4%',
    },
    'four': {
        name: 'The Four',
        author: 'Scott Galloway',
        progress: 'NEW',
    },
    'future': {
        name: 'The Future is Asian',
        author: 'Parag Khanna',
        progress: 'NEW',
    },
    'raging': {
        name: 'The Raging 2020s',
        author: 'Alec Ross',
        progress: 'NEW',
    },
    'expats': {
        name: 'The Expatriates',
        author: 'Janice Y. K. Lee',
        progress: 'NEW',
    },
    'cultureCode': {
        name: 'The Culture Code',
        author: 'Daniel Coyle',
        progress: 'NEW',
    },
    'goingSolo': {
        name: 'Going Solo',
        author: 'Roald Dahl',
        progress: 'Finished',
    },
    'noRules': {
        name: 'No Rules Rules',
        author: 'Reed Hastings & Erin Meyer',
        progress: 'Finished',
    },
    'homodeus': {
        name: 'Homo Deus',
        author: 'Yuval Noah Harari',
        progress: 'Finished',
        // audible: 'B01N4DCBK6',
    },
    'west': {
        name: 'Has the West Lost It?',
        author: 'Kishore Mahbubani',
        progress: 'Finished',
    },
    'sapiens': {
        name: 'Sapiens',
        author: 'Yuval Noah Harari',
        progress: 'Finished',
        // audible: 'B0741G911Q',
    },
    'animalFarm': {
        name: 'Animal Farm',
        author: 'George Orwell',
        progress: 'Finished',
    },
    'hitchhiker': {
        name: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        progress: 'Finished',
        // audible: 'B002VA9SWS',
    },
    'surveillance': {
        name: 'The Age of Surveillance Capitalism',
        author: 'Shoshana Zuboff',
        progress: 'Finished',
    },
    'nineteen': {
        name: '1984',
        author: 'George Orwell',
        progress: 'Finished',
    },
    'boy': {
        name: 'Boy',
        author: 'Roald Dahl',
        progress: 'Finished',
    },
    'hitchhiker2': {
        name: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        progress: '9%',
    },
    'ender1': {
        name: "Ender's Game",
        author: 'Orson Scott Card',
        progress: 'New',
    },
    'humankind': {
        name: "Humankind: A Hopeful History",
        author: 'Rutger Bregman',
        progress: '10%',
        summary: 'If there is one belief that has united the left and the right, psychologists and philosophers, ancient thinkers and modern ones, it is the tacit assumption that humans are bad. It\'s a notion that drives newspaper headlines and guides the laws that shape our lives. From Machiavelli to Hobbes, Freud to Pinker, the roots of this belief have sunk deep into Western thought. Human beings, we\'re taught, are by nature selfish and governed primarily by self-interest.\n\nBut what if it isn\'t true? International bestseller Rutger Bregman provides new perspective on the past 200,000 years of human history, setting out to prove that we are hardwired for kindness, geared toward cooperation rather than competition, and more inclined to trust rather than distrust one another. In fact this instinct has a firm evolutionary basis going back to the beginning of Homo sapiens. \n\nFrom the real-life Lord of the Flies to the solidarity in the aftermath of the Blitz, the hidden flaws in the Stanford prison experiment to the true story of twin brothers on opposite sides who helped Mandela end apartheid, Bregman shows us that believing in human generosity and collaboration isn\'t merely optimistic—it\'s realistic. Moreover, it has huge implications for how society functions. When we think the worst of people, it brings out the worst in our politics and economics. But if we believe in the reality of humanity\'s kindness and altruism, it will form the foundation for achieving true change in society, a case that Bregman makes convincingly with his signature wit, refreshing frankness, and memorable storytelling.',
    },
    city: {
        name: 'Who\'s Your City?',
        author: 'Author',
        progress: '23%',
    },
    asian: {
        name: 'The Asian 21st Century',
        author: 'Kishore Mahbubani',
        progress: '35%',
    },
}


// key: {
//     name: 'Title',
//     author: 'Author',
//     progress: 'New',
// },


for (const key in bookDict) {
    const book = bookDict[key]
    book.id = key
    book.link = googleSearch(book.name)
}