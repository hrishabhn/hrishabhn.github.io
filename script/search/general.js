function trayWithKids(nodes, spacing, sides) {
    let tray = trayBase()
    tray.classList.add('unpad')

    if (nodes[0]) {
        tray.append(elems.spacer(sides ?? 20))
        for (const node of nodes) {
            tray.append(node)
            tray.append(elems.spacer(spacing ?? 12))
        }
        tray.lastChild.remove()
        tray.append(elems.spacer(sides ?? 20))
    }

    return tray
}