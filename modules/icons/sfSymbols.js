const SF = {
    test: {
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

            saveSvg(icon, 'icon')
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
        },
        ios2: function (str, col) {
            let icon = strToElem(str)

            let pad = 4

            icon.setAttribute('viewBox', `-${pad} -${pad} ${28 + 2 * pad} ${28 + 2 * pad}`)

            // path color and size
            icon.firstChild.setAttribute('fill', '#fff')
            // icon.firstChild.setAttribute('transform', 'scale(0.8)')
            // icon.firstChild.setAttribute('transform-origin', 'center center')


            // mg
            let grad = document.createElement('rect')
            grad.setAttribute('x', `-${pad}`)
            grad.setAttribute('y', `-${pad}`)
            grad.setAttribute('height', '100%')
            grad.setAttribute('width', '100%')
            grad.setAttribute('opacity', '0.2')
            grad.setAttribute('fill', "url('#grad')")

            // bg color
            let bg = document.createElement('rect')
            bg.setAttribute('x', `-${pad}`)
            bg.setAttribute('y', `-${pad}`)
            bg.setAttribute('height', '100%')
            bg.setAttribute('width', '100%')
            bg.setAttribute('fill', `#${col}`)

            // add gradient
            icon.innerHTML = `<linearGradient id="grad" gradientTransform="rotate(90)"><stop offset="5%" stop-color="#fff"></stop><stop offset="95%" stop-color="#000"></stop></linearGradient>${icon.innerHTML}`
            icon.prepend(grad)
            icon.prepend(bg)
            icon.setAttribute('height', '512px')
            icon.setAttribute('width', '512px')

            console.log(icon)
            saveSvg(icon, 'test')
        },

    },
    search: function (q) {
        if ('SF SYMBOLS'.includes(q)) return SF.test.allIcons()
        let results = []
        for (const x of SF.test.allIcons()) if (x.name.toUpperCase().includes(q)) results.push(x)
        return results
    },
    resultCard: function (data) {
        let card = resultCard.base({
            name: 'SF Symbols',
            buttons: [{ icon: SFSymbols.squareAndPencil }],
            type: 'vstack',
            gap: 0,
        })

        if (data.length) {
            let g = document.createElement('div')
            g.classList = 'sf-grid'

            for (const x of data) g.append(appObject.bw({
                name: x.name,
                icon: x.icon,
                // trigger: function () {
                //     // SF.render.notion(x.icon, x.name)
                // }
            }))

            // process input
            let cont = document.createElement('div')
            cont.classList = 'sf-input'

            let i = document.createElement('input')
            i.placeholder = 'Paste SVG'

            let a = elems.a(null, 'Copy')
            a.classList = 'layer-hover'
            a = cardCol(a, { color: Colors.green })
            a.onclick = function () {
                navigator.clipboard.writeText(SF.process(i.value))
                a.classList = 'brand-bg'
                a.textContent = 'Copied!'
            }

            cont.append(i)
            cont.append(a)

            card.lastChild.append(g)
            card.lastChild.append(cont)
        }
        return card
    },
}
