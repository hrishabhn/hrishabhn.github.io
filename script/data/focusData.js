let focusData = [
    {
        'default': {
            name: 'Default',
            desc: 'No focus selected',
            thumb: thumbData['user'],
            style: 'secondary',
            apps: appData['main'],
            work: false,
            distract: false,
            // trays: function () {
            //     return [
            //         focusTray(),
            //         defaultDash(focusApps(),'Focus Modes','cyan'),
            //         searchAppsRow(searchApps('', appData['notion']), 'Notion'),
            //     ]
            // },
        },
        'watch': {
            name: 'Watch',
            desc: 'TV & Movies',
            thumb: thumbData['tv'],
            style: 'secondary',
            apps: appData['video'],
            work: false,
            distract: true,
            trays: function () {
                return [
                    // searchMoviesRow(searchMovies(''),'TV & Movies'),
                    searchMoviesRowBig(rowMovies(0), 'Up next'),
                    searchMoviesRow(rowMovies(1), 'My list'),
                    searchMoviesRow(rowMovies(2), 'Recent'),
                    searchMoviesRowBig(rowMovies(3), 'Movies'),
                    searchMoviesRow(rowMovies(4), 'New'),
                    searchMoviesRow(rowMovies(5), 'Paused'),
                    searchMoviesRow(rowMovies(6), 'Coming Soon'),
                    searchMoviesRow(rowMovies(7), 'Up to Date'),
                    searchMoviesRow(rowMovies(8), 'Finished'),
                    searchMoviesRowBig(rowMovies(9), 'Classic Movies'),
                    searchMoviesRowBig(rowMovies(10), 'Recent Movies'),
                ]
            },
        },
        'read': {
            name: 'Read',
            desc: 'Books & News',
            thumb: thumbData['book'],
            style: 'secondary',
            apps: appData['read'],
            work: false,
            distract: false,
            trays: function () {
                return [
                    searchBookPodRow(rowBooks(0), 'Reading Now', 'book'),
                    searchBookPodRow(rowBooks(1), 'Paused', 'book'),
                    searchBookPodRow(rowBooks(2), 'To Read', 'book'),
                    searchBookPodRow(rowBooks(3), 'Finished', 'book'),
                ]
            },
        },
        'listen': {
            name: 'Listen',
            desc: 'Books & Audiobooks',
            thumb: thumbData['pod'],
            style: 'secondary',
            apps: appData['listen'],
            work: false,
            distract: false,
            trays: function () {
                return [
                    searchBookPodRow(rowPods(0), 'Top', 'pod'),
                    searchBookPodRow(rowPods(1), 'Business & Economics', 'pod'),
                    searchBookPodRow(rowPods(2), 'Technology', 'pod'),
                    searchBookPodRow(rowPods(3), 'Stories', 'pod'),
                    searchBookPodRow(rowPods(4), 'Other', 'pod'),
                ]
            },
        },
    },
    {
        'sail': {
            name: 'SAIL',
            desc: 'Study Abroad Course',
            thumb: thumbData['globe'],
            style: 'secondary',
            apps: appData['sail'],
            work: true,
            distract: false,
        },
        'indorg': {
            name: 'Industrial Organisation',
            desc: '13186',
            thumb: thumbData['finance'],
            style: 'secondary',
            apps: appData['indorg'],
            work: true,
            distract: false,
        },
        'finecon': {
            name: 'Financial Economics',
            desc: '13648',
            thumb: thumbData['money'],
            style: 'secondary',
            apps: appData['finecon'],
            work: true,
            distract: false,
        },
        'manage': {
            name: 'Engineering Management',
            desc: '14197',
            thumb: thumbData['work'],
            style: 'secondary',
            apps: appData['manage'],
            work: true,
            distract: false,
        },
        'controls': {
            name: 'Control Engineering',
            desc: '15514',
            thumb: thumbData['calculus'],
            style: 'secondary',
            apps: appData['controls'],
            work: true,
            distract: false,
        },


        // 'mse': {
        //     name: 'Materials Science',
        //     thumb: thumbData['atom'],
        //     apps: appData['mse'],
        // },
        // 'mattech': {
        //     name: 'Materials Technology',
        //     thumb: thumbData['diamond'],
        // },
    },
    {
        'travel': {
            name: 'Travel',
            desc: 'Flights & Hotels',
            thumb: thumbData['plane'],
            style: 'secondary',
            apps: appData['travel'],
            work: false,
            distract: false,
            // trays: function () {
            //     return [
            //         flightDetailCard('mad-lhr'),
            //         flightDetailCard('lhr-mad'),
            //     ]
            // },
        },
        'workout': {
            name: 'Workout',
            desc: 'Routines & Apps',
            thumb: thumbData['gym'],
            style: 'secondary',
            apps: appData['main'],
            work: false,
            distract: false,
            trays: function () {
                return [
                    workoutCard(),
                    spacerElement(40),
                ]
            },
        },
    },
]

// add trigger function to focusData
for (let i = 0; i < focusData.length; i++) {
    for (const focus in focusData[i]) {
        focusData[i][focus].trigger = function () { setFocus(`${i}-${focus}`) }
    }
}





// const focusElem = document.getElementById('focus')
// focusElem.onclick = function () { removeCookie('focus') }

function focusLoad() {
    if (!getCookie('focus')) {
        setCookie('focus', '0-default', 1)
    }
}

function setFocus(name) {
    setCookie('focus', name, 1)
    location.reload()
}

function getFocus() {
    let index = getCookie('focus').split('-')[0]
    let name = getCookie('focus').split('-')[1]

    return focusData[index][name]
}


function focusApps() {
    let apps = []

    for (let i = 0; i < focusData.length; i++) {
        for (const focus in focusData[i]) {
            let focusItemData = focusData[i][focus]

            let data = {
                name: focusItemData.name,
                trigger: function () { setFocus(`${i}-${focus}`) },
                desc: focusItemData.desc,
                thumb: focusItemData.thumb,
                style: focusItemData.style,
                distract: focusItemData.distract,
            }

            apps.push(data)
        }

    }

    return apps
}

function focusTray() {
    return searchAppsRow(searchApps('', focusApps()), null)
}
