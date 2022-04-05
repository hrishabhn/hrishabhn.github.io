let podData = []

for (let tray of podRaw) {
    let results = []
    for (const pod of tray.data) results.push(pod.id)
    tray.results = results
    tray.elem = mediaElems.bookPod.row(results, tray.name, 'pod')
    podData.push(tray)
}


const pods = {
    data: podData,
    search: function (q) {
        let results = []
        for (const tray of this.data) for (const pod of tray.data) if (results.length < len) {
            const name = pod.name.toUpperCase().includes(q)
            const author = pod.author.toUpperCase().includes(q)
            if (name || author) results.push(pod.id)
        }
        return results
    },
    // searchRow: function (q) { return searchBookPodRow(this.search(q), 'Podcasts', 'pod') },
    searchRow: function (q) { return mediaElems.bookPod.row(this.search(q), 'Podcasts', 'pod') },
}