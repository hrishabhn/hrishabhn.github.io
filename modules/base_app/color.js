const Colors = {
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
    },

}

const colorModal = function () {
    let card = document.createElement('div')
    card.classList = 'color-modal layer-1'
    // header
    card.append(elems.textbox('iOS System Colors', 'All available colors in iOS'))

    // sides
    let left = document.createElement('div')
    left.classList = 'side'
    left.style.setProperty('background-color', '#1c1c1e')

    let right = document.createElement('div')
    right.classList = 'side'
    right.style.setProperty('background-color', '#fff')

    // colors
    for (const key in Colors) {
        let itemLeft = elems.item()
        itemLeft.style.setProperty('background-color', `#${Colors[key].dark}`)
        itemLeft.textContent = key
        left.append(itemLeft)

        let itemRight = elems.item()
        itemRight.style.setProperty('background-color', `#${Colors[key].light}`)
        itemRight.textContent = key
        right.append(itemRight)
    }

    card.append(left)
    card.append(right)

    modal.add(card)
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