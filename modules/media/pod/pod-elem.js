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
    searchRow: function (q) { return mediaElems.bookPod.row(this.search(q), 'Podcasts', 'pod') },
}