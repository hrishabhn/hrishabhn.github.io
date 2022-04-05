document.addEventListener('keydown', keyPress)

function keyPress(e) {
    // console.log(e)

    if (e.key == '/') {

        if (!(document.activeElement == spotlight.elem())) {
            e.preventDefault()
            spotlight.elem().focus()
        }
    } else if (e.key == 'Tab') {
        if (document.activeElement == spotlight.elem()) {
            e.preventDefault()
        }
    } else if (e.key == 'Escape') {
        e.preventDefault()
    } else if (e.key == 'Enter') {
        if (tvModal.hasChildNodes()) for (const node of tvModal.childNodes[1].childNodes)
            // info node
            if (node.classList.contains('info')) for (subnode of node.childNodes) if (subnode.classList.contains('play'))
                if (subnode.href) window.open(subnode.href, '_blank ')
    }
}