function addFloatEffect(card, fg) {
    let shine = elems.bg()

    card.onmousemove = function (e) {
        const rect = card.getBoundingClientRect()

        // x and y coord within rect in px
        const absX = e.clientX - rect.left
        const absY = e.clientY - rect.top

        // x and y coord within rect in fraction
        const fracX = absX / rect.width
        const fracY = absY / rect.height

        // x and y coord wihtin rect in px with centre origin
        const absXcent = absX - (rect.width / 2)
        const absYcent = absY - (rect.height / 2)

        // x and y coord wihtin rect in fraction with centre origin
        const fracXcent = fracX - 0.5
        const fracYcent = fracY - 0.5

        // angle from centre
        let angle = Math.atan2(0 - absYcent, 0 - absXcent)
        angle = (angle * 180 / Math.PI) + 90

        // distance from centre in px
        let distance = Math.sqrt((absXcent * absXcent) + (absYcent * absYcent))

        fg.style.setProperty('translate', `${-8 * fracXcent}% ${-15 * fracYcent}%`)
        card.style.setProperty('transform', `perspective(500px) rotateY(${0.06 * fracXcent}turn) rotateX(${-0.04 * fracYcent}turn)`)
        shine.style.setProperty('background-image', `linear-gradient(${angle}deg, rgba(255, 255, 255, 0.1) 0%, transparent ${100 - (100 * (distance / rect.height))}%)`)
    }
    card.onmouseout = function () {
        fg.style.setProperty('translate', '0')
        card.style.setProperty('transform', 'none')
        shine.style.setProperty('background-image', 'none')
    }

    card.append(shine)
    return card
}