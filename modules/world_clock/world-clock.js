const worldClock = {
    offset: +5.5,
    data: [
        {
            city: 'Spain',
            thumb: thumbData.spain,
            offset: +2,
            style: 'yellow',
            tags: ['madrid', 'barcelona'],
        },
        {
            city: 'Hong Kong',
            thumb: thumbData.hk,
            offset: +8,
            style: 'red',
            tags: [],
        },
        {
            city: 'India',
            thumb: thumbData.india,
            offset: +5.5,
            style: 'orange',
            tags: ['goa'],
        },
        {
            city: 'USA (East)',
            thumb: thumbData.usa,
            offset: -4,
            style: 'blue',
            tags: ['west lafayette', 'new york'],
        },
        {
            city: 'Canada (East)',
            thumb: thumbData.canada,
            offset: -4,
            style: 'red',
            tags: ['toronto'],
        },
        // {
        //     city: 'Johannesburg',
        //     thumb: thumbData.sa,
        //     offset: '0',
        //     style: 'green',
        // },
        // {
        //     city: 'Harare',
        //     thumb: thumbData.zim,
        //     offset: '0',
        //     style: 'orange',
        // },
        {
            city: 'USA (West)',
            thumb: thumbData.usa,
            offset: -7,
            style: 'blue',
            tags: ['california', 'los angeles', 'san diego', 'san francisco'],
        },
        {
            city: 'Sydney',
            thumb: thumbData.australia,
            offset: +10,
            style: 'indigo',
            tags: ['australia'],
        },
        {
            city: 'United Kingdom',
            thumb: thumbData.uk,
            offset: +1,
            style: 'blue',
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
                style: city.style,
                distract: false,
                tags: city.tags,
            })
            return data
    }
}

for (const x of worldClock.data) {
    x.tags.push('world clock')
}