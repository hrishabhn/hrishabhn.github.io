const Elems = {
    // reusable
    vstack: function (spacing) {
        let v = document.createElement('div')
        v.classList = 'vstack'
        if (spacing) v.style.setProperty('gap', `${spacing}px`)
        return v
    },
    hstack: function (spacing) {
        let h = document.createElement('div')
        h.classList = 'hstack'
        if (spacing) h.style.setProperty('gap', `${spacing}px`)
        return h
    },











    // tags
    div: function (c) {
        const d = document.createElement('div')
        d.classList = c
        return d
    },
    p: function (t) {
        const p = document.createElement('div')
        p.textContent = t
        return p
    },
}