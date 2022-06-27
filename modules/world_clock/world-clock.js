const worldClock = {
    offset: +5.5,
    data: [
        {
            city: 'Spain',
            thumb: thumbData.spain,
            offset: +2,
            color: Colors.yellow,
            tags: ['madrid', 'barcelona'],
        },
        {
            city: 'Hong Kong',
            thumb: thumbData.hk,
            offset: +8,
            color: Colors.red,
            tags: [],
        },
        {
            city: 'India',
            thumb: thumbData.india,
            offset: +5.5,
            color: Colors.orange,
            tags: ['goa'],
        },
        {
            city: 'USA (East)',
            thumb: thumbData.usa,
            offset: -4,
            color: Colors.blue,
            tags: ['west lafayette', 'new york'],
        },
        {
            city: 'Canada (East)',
            thumb: thumbData.canada,
            offset: -4,
            color: Colors.red,
            tags: ['toronto'],
        },
        {
            city: 'South Africa',
            thumb: thumbData.sa,
            offset: +2,
            color: Colors.green,
            tags: ['johannesburg', 'joburg'],
        },
        {
            city: 'Zimbabwe',
            thumb: thumbData.zim,
            offset: +2,
            color: Colors.orange,
            tags: ['harare'],
        },
        {
            city: 'USA (West)',
            thumb: thumbData.usa,
            offset: -7,
            color: Colors.blue,
            tags: ['california', 'los angeles', 'san diego', 'san francisco'],
        },
        {
            city: 'Sydney',
            thumb: thumbData.australia,
            offset: +10,
            color: Colors.indigo,
            tags: ['australia'],
        },
        {
            city: 'United Kingdom',
            thumb: thumbData.uk,
            offset: +1,
            color: Colors.blue,
            tags: ['uk', 'london'],
        },
    ],
    apps: function () {
        let data = []

        for (const city of worldClock.data)
            data.push({
                name: processTime.ampm(new Date().getTime() + ((1000 * 60 * 60 * parseFloat(city.offset - worldClock.offset)))),
                link: googleSearch(`${city.city} time now`),
                desc: `${city.city} Time`,
                thumb: city.thumb,
                color: city.color,
                distract: false,
                tags: city.tags,
            })
        return data
    }
}

for (const x of worldClock.data) {
    x.tags.push('world clock')
}