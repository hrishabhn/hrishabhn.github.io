const SF = {
    test: {
        modal: function () {
            let card = document.createElement('div')
            card.classList = 'icon-modal layer-1'
            // header
            card.append(elems.textbox('SF Symbols', 'All available icons from the SF Symbols library'))

            // app icons
            for (const x of SF.test.allIcons()) card.append(appObject.bw({
                name: x.name,
                icon: x.icon,
                trigger: function () {
                    navigator.clipboard.writeText(x.name)
                    alert('Copied!')
                }
            }))

            // url to add more

            modal.add(card)

        },
        allIcons: function () {
            let rawIcons = []
            // format for functions
            for (const [key, val] of Object.entries(JSON.parse(JSON.stringify(SFSymbols)))) rawIcons.push({
                key: key,
                val: val,
                name: '',
            })

            let tryAgainIcons = []
            let processedIcons = []

            // loop through remainig raw icons
            while (rawIcons.length) {
                for (const item of rawIcons) {
                    // if it's ready
                    if (typeof item.val === 'string') {
                        processedIcons.push({
                            name: item.name ? `${item.name}.${item.key}` : item.key, //defaults to key for first loop
                            icon: item.val,
                        })
                    } else {
                        // level up and iterate over all results to add to try again
                        for (const result of SF.test.levelDown(item)) tryAgainIcons.push(result)
                    }
                }

                // finalise loop
                rawIcons = tryAgainIcons
                tryAgainIcons = []
            }
            return processedIcons
        },
        levelDown: function ({ key, val, name }) {
            let result = []
            // bump key up to name and keyValue up to value
            for (const key2 in val) result.push({
                key: key2,
                val: val[key2],
                name: name ? `${name}.${key}` : key
            })
            return result

        }
    }
}
