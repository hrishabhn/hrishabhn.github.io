function trayWithKids(nodes, spacing) {
    let tray = trayBase()
    tray.classList.add('unpad')

    if (nodes[0]) {
        tray.append(spacerElement(20))
        for (const node of nodes) {
            tray.append(node)
            tray.append(spacerElement(spacing ?? 12))
        }
        tray.lastChild.remove()
        tray.append(spacerElement(20))
    }

    return tray
}