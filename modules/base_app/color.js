const ColorFG = {
    dark: '1c1c1e',
    light: 'ffffff',
}

const Colors = {
    secondary: {
        dark: 'ffffff',
        light: '1c1c1e',
        fg: {
            dark: ColorFG.dark,
            light: ColorFG.light,
        },
    },
    blue: {
        dark: '0a84ff',
        light: '007aff',
    },
    brown: {
        dark: 'ac8e68',
        light: 'a2845e',
    },
    cyan: {
        dark: '64d2ff',
        light: '32ade6',
    },
    green: {
        dark: '30d158',
        light: '34c759',
    },
    indigo: {
        dark: '5e5ce6',
        light: '5856d6',
    },
    mint: {
        dark: '66d4cf',
        light: '00c7be',
    },
    orange: {
        dark: 'ff9f0a',
        light: 'ff9500',
    },
    pink: {
        dark: 'ff375f',
        light: 'ff2d55',
    },
    purple: {
        dark: 'bf5af2',
        light: 'af52de',
    },
    red: {
        dark: 'ff453a',
        light: 'ff3b30',
    },
    teal: {
        dark: '40c8e0',
        light: '30b0c7',
    },
    yellow: {
        dark: 'ffd60a',
        light: 'ffcc00',
        fg: ColorFG.dark,
    },
    gray: {
        dark: '8e8e93',
        light: '8e8e93',
    },
}

const colorTesting = {
    resultCard: function (q) {
        let card = resultCard.base({
            name: 'System Colours',
            buttons: [{ icon: SFSymbols.paintpalette.fill }],
            type: 'single',
            gap: 0,
        })
        if ('IOS SYSTEM COLORS COLOURS'.includes(q)) {
            let chart = document.createElement('div')
            chart.classList = 'color-chart'

            // sides
            let left = document.createElement('div')
            left.classList = 'side'
            left.style.setProperty('left', 0)
            left.style.setProperty('background-color', '#1c1c1e')

            let right = document.createElement('div')
            right.classList = 'side'
            right.style.setProperty('right', 0)
            right.style.setProperty('background-color', '#fff')

            chart.append(left)
            chart.append(right)

            // colors
            for (const key in Colors) {
                let item = elems.item()
                item = cardCol(item, { color: Colors[key] })

                let itemLeft = document.createElement('div')
                itemLeft.classList = 'block left'
                itemLeft.textContent = key

                let itemRight = document.createElement('div')
                itemRight.classList = 'block right'
                itemRight.textContent = key


                item.append(itemLeft)
                item.append(itemRight)
                chart.append(item)

            }

            card.lastChild.appendChild(chart)
        }

        return card
    },
}


const BrandColor = {
    google: {
        red: 'ea4335',
        green: '34a853',
        blue: '4285f4'
    },
    fluent: {
        blue10: '4f6bed',
        cyan10: '00b7c3',
        cyan30: '005b70',
        cyanBlue20: '004e8c',
        gray20: '69797e',
        green20: '0b6a0b',
        magenta20: '881798',
        pinkRed10: '750b1c',
        red: 'd13438',
    },
    onedrive: '094AB2',
    ibooks: 'FC880F',
    purdue: 'D7C688',
    twitter: '1da1f2',
    reddit: 'ff4500',
    kmb: 'ED1F28',
}

const FluentColor = {
    blue10: '4f6bed',
    cyan10: '00b7c3',
    cyan30: '005b70',
    cyanBlue20: '004e8c',
    gray20: '69797e',
    green20: '0b6a0b',
    magenta20: '881798',
    pinkRed10: '750b1c',
    red: 'd13438',
}

// https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/share