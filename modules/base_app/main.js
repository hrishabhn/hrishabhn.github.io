

function mainScroll() {
    if (document.getElementById('main').scrollTop > 0) topbar.elem().classList.add('border')
    else topbar.elem().classList.remove('border')
}
