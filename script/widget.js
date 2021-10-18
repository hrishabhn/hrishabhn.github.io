
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