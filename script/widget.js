
function googleLoad() {
    if ('ontouchstart' in document.documentElement) {
        link = 'google://search'
    } else {
        link = 'https://www.google.com'
    }

    return link
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function headerScroll(page) {
    var header = document.getElementById('header')
    var pageElement = document.getElementById(`page-${page}`)

    if (pageElement.scrollTop > 20) {
        header.classList.add('small')
    } else {
        header.classList.remove('small')
    }

    // console.log(pageElement.scrollTop)
    // console.log(header)
}