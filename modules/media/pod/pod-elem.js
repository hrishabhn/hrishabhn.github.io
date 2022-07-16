const podElem = {
    recent: {
        tray: function () {
            let tray = document.createElement('div')
            tray.classList = 'pod-recent'

            for (const x of podRecent) {
                tray.append(this.item(x))
                tray.append(elems.hline())
            }
            tray.lastChild.remove()

            return tray
        },
        item: function (pod) {
            let item = document.createElement('a')
            item.classList = 'item clickable-o'

            item.append(elems.thumb(`./media-image/podcasts/${pod.id}.${pod.coverType}`))
            item.append(mediaAll.commonElems.detailTextbox(processDay.long[pod.episode.date.getDay()], pod.episode.name, pod.episode.desc))
            item.href = pod.link
            item.target = '_blank'

            return item
        },
    },
    search: function (q) {
        let results = []
        for (const pod of podRecent) if (results.length < len) {
            const name = pod.name.toUpperCase().includes(q)
            const author = pod.author.toUpperCase().includes(q)
            if (name || author) results.push(pod.id)
        }
        return results
    },
    // searchRow: function (q) { return searchBookPodRow(this.search(q), 'Podcasts', 'pod') },
    resultCard: function (data) {
        let card = resultCard.base({
            name: 'Podcasts',
            buttons: [{ icon: SFSymbols.headphones },],
            type: 'hstack',
            gap: 10,
        })
        for (const x of data) card.lastChild.append(podElem.resultCardItem(podDict[x]))
        return card
    },
    resultCardItem: function (pod) {
        let card = document.createElement('a')
        card.classList = 'result-pod result-media clickable-o'
        card.append(elems.thumb(`./media-image/podcasts/${pod.id}.${pod.coverType}`))
        card.append(elems.textbox(pod.name, pod.author))
        // card.onclick = function () { movie.detail() }
        return card
    },
}