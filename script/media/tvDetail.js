const tvModal = document.getElementById('tv-modal')

// function showTVDetail(key) {
//     removeAllChildNodes(tvModal)

//     let close = document.createElement('a')
//     close.classList = 'close'
//     close.onclick = function () { hideTVDetail() }
//     tvModal.append(close)

//     tvModal.append(tvDetail(key))
//     tvModal.classList.add('open')
// }

function hideTVDetail() {
    tvModal.classList.remove('open')
}


function tvDetail(key) {
    let movie = allMovies[key]
    let card = document.createElement('div')
    card.classList = 'tv-detail-card'

    card.append(bgElement(movie.style.color))

    let wide = document.createElement('div')
    wide.classList = 'fill-width wide-thumb'

    wide.append(thumbBase(`./media-image/TV/background/${movie.id}.${movie.style.posterType}`))
    wide.append(gradElement())
    card.append(wide)

    if (movie.style.mobileType) {

        let tall = document.createElement('div')
        tall.classList = 'fill-width tall-thumb only-mobile'

        let thumb = thumbBase(`./media-image/TV/mobile/${movie.id}.${movie.style.mobileType}`)
        thumb.style.setProperty('aspect-ratio', movie.style.mobileSize)

        let grad = gradElement()
        grad.style.setProperty('background-image', `linear-gradient(#00000000,#${movie.style.color})`)
        thumb.append(grad)

        let title = movieCardTitle(key)
        title.classList.add('only-mobile')

        tall.append(thumb)
        card.append(tall)
        card.append(title)

        wide.classList.add('hidden-mobile')
    } else {
        card.style.setProperty('margin', '0 50px')
    }

    let info = textboxBase(movie.name, processDesc(movie))
    info.firstChild.classList.add('hidden-mobile')
    info.classList = 'info'

    let play = aElement(iconData.play, `Watch on ${movie.info.location}`)
    play.classList = 'play clickable'
    if (movie.link) play.href=`${processLink(movie.link)}`


    info.firstChild.after(play)

    if (movie.info.summary) {
        let sum = pElement(movie.info.summary)
        sum.classList = 'summary'
        info.append(sum)
    }


    let tray = document.createElement('div')
    tray.classList = 'tray'


    let goog = document.createElement('a')
    goog.classList = 'app clickable card-shadow'
    goog.href = googleSearch(movie.name)
    goog.target = '_blank'
    goog.innerHTML = `
    <div class="icon" style="--size: 0px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="2.762 3 24 24"><path d="M15 13h10v4H15z"></path><path d="M22.733 13c.166.641.267 1.307.267 2a8 8 0 1 1-8-8 7.96 7.96 0 0 1 5.245 1.969l2.841-2.84A11.962 11.962 0 0 0 15.003 3C8.374 3 3 8.373 3 15s5.374 12 12.003 12c10.01 0 12.266-9.293 11.327-14h-3.597z"></path></svg></div>
    <div class="spacer-x" style="--size: 5px;"></div>
    <div class="text">Google</div>`
    tray.append(goog)
    tray.append(spacerElement(8))

    if (movie.apps.tvTimeID) {
        let tvti = document.createElement('a')
        tvti.classList = 'app clickable card-shadow'
        tvti.href = `https://www.tvtime.com/en/show/${movie.apps.tvTimeID}`
        tvti.target = '_blank'
        tvti.innerHTML = `
        <div class="icon" style="--size: -3px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 875"><rect class="cls-2" x="175.34" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-3" x="350.26" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-4" x="525.17" y="174.74" width="174.91" height="174.91"></rect><rect class="cls-5" x="350.26" y="349.66" width="174.91" height="174.91"></rect><rect class="cls-6" x="350.26" y="524.57" width="174.91" height="174.91"></rect></svg></div>
        <div class="spacer-x" style="--size: 8px;"></div>
        <div class="text">TV Time</div>`
        tray.append(tvti)
        tray.append(spacerElement(8))
    }

    // reelgood
    let reel = document.createElement('a')
    reel.classList = 'app clickable card-shadow'
    if (movie.apps.reelgoodLink) {
        reel.href = movie.apps.reelgoodLink
    } else {
        reel.href = `https://reelgood.com/search?q=${movie.name}`
    }
    reel.target = '_blank'
    reel.innerHTML = `
    <div class="icon" style="--size: -2px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m14.21 11.477 2.475 4.441h-3.803l-2.014-4.047h-1.4v4.047H6.151v-6.85l3.317-1.791v1.755h2.333c.686 0 1.38-.423 1.38-1.231 0-.809-.694-1.232-1.38-1.232h-.915V3.75h1.382c2.563 0 4.284 1.642 4.284 4.087 0 2.005-1.187 3.183-2.342 3.641zM0 0l8.75 5.032L0 10.064V0zm1.189 4.637h.8v1.997l3.536-2.09L1.189 2.05v2.587z"></path></svg></div>
    <div class="spacer-x" style="--size: 8px;"></div>
    <div class="text">Reelgood</div>`
    tray.append(reel)
    tray.append(spacerElement(8))

    // imdb
    let imdb = document.createElement('a')
    imdb.classList = 'app clickable card-shadow'
    if (movie.apps.imdbID) {
        imdb.href = `https://www.imdb.com/title/${movie.apps.imdbID}`
    } else {
        imdb.href = `https://www.imdb.com/find?q=${movie.name}`
    }
    imdb.target = '_blank'
    imdb.innerHTML = `
    <div class="icon" style="--size: -2px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="69.3499984741211 -75.6249885559082 440.6999816894531 440.6999816894531"><path d="M69.35 58.24h45.63v175.65H69.35V58.24Z"></path><path d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61l-10.57 82.06Z"></path><path d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93Zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79Z"></path><path d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11Zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95c-2.33-3.39-5.72-6.02-10.16-7.9-4.44-1.88-9.68-2.82-15.72-2.82-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96v175.65Z"></path></svg></div>
    <div class="spacer-x" style="--size: 8px;"></div>
    <div class="text">IMDb</div>`
    tray.append(imdb)
    tray.append(spacerElement(8))

    if (movie.apps.subReddit) {
        let redd = document.createElement('a')
        redd.classList = 'app clickable card-shadow'
        redd.href = `https://www.reddit.com/r/${movie.apps.subReddit}`
        redd.target = '_blank'
        redd.innerHTML = `
        <div class="icon" style="--size: -1px;"><svg data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z"></path></svg></div>
        <div class="spacer-x" style="--size: 8px;"></div>
        <div class="text">Reddit</div>`
        tray.append(redd)
        tray.append(spacerElement(8))
    }

    let just = document.createElement('a')
    just.classList = 'app clickable card-shadow'
    just.href = `https://www.justwatch.com/es/buscar?q=${movie.name}`
    just.target = '_blank'
    just.innerHTML = `
    <div class="icon" style="--size: 0px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.0565948 27.12038612 27.12038612"><path d="M0 19.7015845c.00056683-.0736745.0072152-.1234928.0072152-.1234928s.0486242-4.0927864.00721521-5.1262119c-.0417227-1.0328056.88150975-.5424399.88150975-.5424399l5.17926192 2.6467967s1.01263824.4804467-.01756746 1.0033588c-.7604198.3865272-4.1553303 2.1421726-5.17643857 2.6278888C.09769406 20.5607587.00215925 20.0012268 0 19.7215301v-.0199457 1e-7Zm21.2500314-8.8949003s-.0705836-.84310659.6525054-.4764172c.72403.3669993 4.3319457 2.1964167 4.3319457 2.1964167s1.9964156.9810413-.0047055 1.9905995c-1.4151211.7138509-3.5743494 1.8046201-4.3184565 2.1784387-.7444208.3738186-.6669358-.4317822-.6669358-.4317822l.0056467-5.4572555Zm-6.2110368 9.5159455c-1.0207944.4860261-.8742944-.6090825-.8742944-.6090825s.0489379-4.0927863.0075289-5.1265217c-.0420364-1.0334255.8815097-.5421299.8815097-.5421299l5.1786341 2.6464866s1.0132656.4801368-.0175675 1.0036688c-.7594786.3859072-4.1547026 2.1418626-5.1758108 2.6275787Zm-7.07027199 3.5171807c-1.02110824.4860262-.87429452-.6100124-.87429452-.6100124s.04862421-4.0927866.00721521-5.1259022c-.0417227-1.0337355.88119602-.5424399.88119602-.5424399l5.17957548 2.6467968s1.0126382.4801368-.0178812 1.0036688c-.760106.3855973-4.15501645 2.1415528-5.17581099 2.6278889Zm.00784224-7.1642369c-1.02079455.4857162-.87398082-.6093925-.87398082-.6093925s.0486242-4.0927866.0069015-5.1262121c-.041409-1.03342554.88150973-.5424399.88150973-.5424399l5.17957554 2.6467968s1.0129519.4801368-.0178812 1.0033588c-.7597923.3859073-4.15501649 2.1418627-5.17612475 2.6278889Zm7.06399885-3.7003698c-1.0207944.4860261-.8739807-.6090825-.8739807-.6090825s.0486242-4.09309643.0069015-5.12652191c-.0417227-1.03311551.8815097-.54243989.8815097-.54243989l5.1792615 2.64710667s1.0129518.47982682-.0178812 1.00304883c-.760106.3859072-4.15533 2.1418627-5.1758108 2.6278888ZM.88841118 13.115618c-1.02079448.4860261-.87398077-.6097025-.87398077-.6097025s.0486242-4.09278638.0069015-5.12621184c-.0417227-1.03311551.88150968-.54243989.88150968-.54243989l5.1792615 2.64710663s1.01295187.47982682-.01788116 1.0033588c-.75979233.3862172-4.15501627 2.1415527-5.17581075 2.6278888Zm7.08093875-3.67247306c-1.02048082.48602615-.87429451-.60908252-.87429451-.60908252s.0489379-4.09278653.0069015-5.12652199c-.0410953-1.03311554.88182342-.54212994.88182342-.54212994l5.17926176 2.64679675s1.0129519.47982683-.0175675 1.00304886c-.7601061.38621721-4.15533014 2.14217265-5.17612467 2.62788884ZM.01254473 21.2509757c-.00156507-.5272516.53236005-.3112055.53236005-.3112055s5.27745143 2.6874023 5.87380376 2.9961281c.59697973.3090358.00125482.6512379.00125482.6512379S4.28834102 25.645359 2.2191459 26.7032718C.15026447 27.7618045.0210182 25.7154112.0210182 25.7154112l-.00847347-4.4644355ZM.03513477 5.75734324l.0047057-4.4647452S.16751823-.75348521 2.2373407.30287772c2.06982247 1.05605296 4.20269955 2.11179596 4.20269955 2.11179596s.5957249.34220208-.00062741.6515478C5.84274682 3.3755672.5684326 6.06761886.5684326 6.06761886s-.5336114.21635602-.53329783-.31027562Z"/></svg></div>
    <div class="spacer-x" style="--size: 5px;"></div>
    <div class="text">JustWatch</div>`
    tray.append(just)
    tray.append(spacerElement(8))








    info.append(tray)
    card.append(info)
    card.append(growElement())

    if (movie.cast) {
        let cast = document.createElement('div')
        cast.classList = 'cast layer-0 primary-fg'

        cast.append(titleElement('Cast'))
        let tray = document.createElement('div')
        tray.classList = 'cast-tray'


        for (const data of movie.cast) {
            let card = document.createElement('div')
            card.classList = 'actor'

            let image = document.createElement('a')
            image.classList = 'image layer-1 clickable'
            image.href = googleSearch(data.actor)
            image.target = '_blank'

            if (actors.data[data.actor]) {
                image.style.setProperty('background-image', `url(${actors.data[data.actor]})`)
            } else {
                let str = ''
                for (const word of data.actor.split(' ')) {
                    str = str.concat(word[0])
                }
                image.innerHTML = str
            }


            card.append(image)
            card.append(textboxBase(data.actor, data.char))

            tray.append(spacerElement(20))
            tray.append(card)
        }

        cast.append(tray)
        cast.append(growElement())

        card.append(cast)
    }

    let close = aElement(iconData.close, null)
    close.classList = 'close-tv-modal clickable-o'
    close.onclick = function() {
        hideTVDetail()
    }
    card.append(close)

    return card
}