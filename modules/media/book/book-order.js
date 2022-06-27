const bookShelves = [
    {
        name: 'Currently Reading',
        data: [
            bookDict.asian,
            bookDict.city,
            bookDict.humankind,
            bookDict.gweilo,
        ],
    },
    {
        name: 'To Read',
        data: [
            bookDict.four,
            bookDict.future,
            bookDict.raging,
            bookDict.expats,
            bookDict.cultureCode,
        ]
    },
    {
        name: 'Finished',
        data: [
            bookDict.lost,
            bookDict.project,
            bookDict.goingSolo,
            bookDict.noRules,
            bookDict.homodeus,
            bookDict.west,
            bookDict.sapiens,
            bookDict.animalFarm,
            bookDict.hitchhiker,
            bookDict.surveillance,
            bookDict.nineteen,
            bookDict.boy,
        ]
    },
    {
        name: 'Paused',
        data: [
            bookDict.ender1,
            bookDict.hitchhiker2,
            bookDict.ready,
            bookDict.focus,
            bookDict.jordan,
            bookDict.short,
            bookDict.faster,
            bookDict.cultureMap,
            bookDict.braveNewWorld,
            bookDict.ride,
            bookDict.martian,
            bookDict.split,
        ]
    },
]

const bookPage = function () {
    let trays = []
    for (const shelf of bookShelves) trays.push(bookElem.shelf(shelf))
    return trays
}