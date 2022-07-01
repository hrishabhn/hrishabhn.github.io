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
                    SF.render.notion(x.icon, x.name)
                    // navigator.clipboard.writeText(x.name)
                    // alert('Copied!')
                }
            }))

            // process input
            let cont = document.createElement('div')
            cont.classList = 'cont'

            let i = document.createElement('input')
            i.placeholder = 'Paste SVG'

            let a = elems.a(null, 'Copy')
            a.classList = 'clickable'
            a = cardCol(a, { color: Colors.green })
            a.onclick = function () {
                navigator.clipboard.writeText(SF.process(i.value))
                a.classList.add('copied')
                a.textContent = 'Copied!'
            }

            cont.append(i)
            cont.append(a)

            card.append(cont)


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
    },
    process: function (str) {
        let x = document.createElement('div')
        x.innerHTML = str

        let svgElem = x.firstChild
        svgElem.removeAttribute('height')
        svgElem.removeAttribute('width')
        svgElem.removeAttribute('fill')
        svgElem.firstChild.removeAttribute('fill')

        return svgElem.outerHTML
    },
    render: {
        notion: function (str, name) {
            let x = document.createElement('div')
            x.innerHTML = str
            let icon = x.firstChild

            // viewbox
            icon.setAttribute('viewBox', '2 2 24 24')
            // path color
            icon.firstChild.setAttribute('fill', `#${Colors.blue.light}`)

            saveSvg(icon, null)
        },
        ios: function (str) {
            let x = document.createElement('div')
            x.innerHTML = str
            let icon = x.firstChild

            // path color
            icon.firstChild.setAttribute('fill', '#2c2c2e')

            // bg color
            let bg = document.createElement('rect')
            bg.setAttribute('height', '100%')
            bg.setAttribute('width', '100%')
            bg.setAttribute('fill', '#1c1c1e')

            icon.prepend(bg)
            icon.setAttribute('height', '512px')
            icon.setAttribute('width', '512px')

            // alert(icon.outerHTML)
            saveSvg(icon, 'test')
        }

    },
}
