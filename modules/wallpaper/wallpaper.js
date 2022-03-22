function setWallpaper() {
    const elem = document.getElementById('wallpaper')
    elem.style.setProperty('--wp-light', 'url(../modules/wallpaper/images/tropical.jpg)')
    // elem.style.setProperty('--wp-dark', 'url(../modules/wallpaper/images/dark-mountain.jpg)')
    elem.style.setProperty('--wp-dark', 'url(./images/icons.png)')
    // elem.style.setProperty('--wp-dark', 'url(./images/space.jpg)')
}