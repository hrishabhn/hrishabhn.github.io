document.addEventListener('keydown', keyPress)

function keyPress(e) {
    // console.log(e)

    if (e.key == '/') {

        if (!(document.activeElement == spotlightElem())) {
            e.preventDefault()
            spotlightElem().focus()
        }
    } else if (e.key == 'Tab') {
        if (document.activeElement == spotlightElem()) {
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