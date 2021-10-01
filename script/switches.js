function switches() {
    courseSwitchApps()
    mediaSwitchApps()
    switchLoad()

    mediaPageApps()
}

function switchLoad() {
    const course = getCookie('course')
    // console.log(course)
    if (course) {
        courseSwitch(parseInt(course))
    }
    const media = getCookie('mediaSwitch')
    // console.log(media)
    if (media) {
        mediaSwitch(parseInt(media))
    }
}

const courseData = [
    {
        name: 'EBEC 101',
        color: 'pink',
        icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M116 296c0-30.328 24.672-55 55-55h170c13.785 0 25-11.215 25-25V75c0-41.355-33.645-75-75-75h-70c-41.355 0-75 33.645-75 75v41h110c8.285 0 15 6.715 15 15s-6.715 15-15 15H75c-41.355 0-75 33.645-75 75v70c0 41.355 33.645 75 75 75h41zM221 76c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"/><path d="M437 146h-41v70c0 30.328-24.672 55-55 55H171c-13.785 0-25 11.215-25 25v141c0 41.355 33.645 75 75 75h70c41.355 0 75-33.645 75-75v-41H256c-8.285 0-15-6.715-15-15s6.715-15 15-15h181c41.355 0 75-33.645 75-75v-70c0-41.355-33.645-75-75-75zM291 436c8.285 0 15 6.715 15 15s-6.715 15-15 15-15-6.715-15-15 6.715-15 15-15zm0 0"/></svg>',
        apps: ebecApps,
    },
    {
        name: 'ECE 20001',
        color: 'blue',
        icon: '<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path d="M155.109 74.028a4 4 0 00-3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 00-7.373-2.614L36.917 113.905A4 4 0 0040.324 120h51.617l-6.962 67.224a4.024 4.024 0 007.411 2.461l62.671-111.63a4 4 0 00.048-4.027z"/></svg>',
        apps: eceApps,
    },
    {
        name: 'ENGR 297',
        color: 'mint',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.535 14.465c-19.569-19.568-51.395-19.241-70.557.726L322.092 124.488 66.131 39.781 12.4 93.513l213.352 131.365-107.956 112.494-69.231-11.366L0 374.571l101.78 35.649L137.429 512l48.565-48.565-11.366-69.231 112.494-107.955L418.487 499.6l53.732-53.732-84.706-255.961L496.808 85.022c19.968-19.162 20.295-50.988.727-70.557z"/></svg>',
        apps: engrApps,
    },
    {
        name: 'IE 335',
        color: 'orange',
        icon: '<svg viewBox="0 0 510.641 510.641" xmlns="http://www.w3.org/2000/svg"><path d="m255.32 34.641 66.503 38.395 15-25.98L255.32 0l-81.502 47.056 15 25.98z"/><path d="m64.206 144.98 66.503-38.395-15-25.981-81.503 47.056v94.111h30z"/><path d="M64.206 288.87h-30v94.11l81.503 47.056 15-25.98-66.503-38.396z"/><path d="m255.32 476-66.502-38.396-15 25.981 81.502 47.056 81.503-47.056-15-25.981z"/><path d="m446.434 365.66-66.502 38.396 15 25.98 81.502-47.056v-94.11h-30z"/><path d="m394.932 80.604-15 25.981 66.502 38.395v76.791h30V127.66z"/><path d="M416.401 348.32V179.641L270.32 263.98v168.68z"/><path d="M109.239 153.66 255.32 238l146.081-84.34L255.32 69.32z"/><path d="m94.24 348.32 146.08 84.34V263.98L94.24 179.641z"/></svg>',
        apps: ie335Apps,
    },
    {
        name: 'IE 386',
        color: 'teal',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xml:space="preserve"><circle cx="21.732" cy="5.5" r="1.5"/><circle cx="17.732" cy="2.5" r="1.5"/><circle cx="13.732" cy="1.5" r="1.5"/><circle cx="9.732" cy="3.5" r="1.5"/><path d="M20.232 5.5V12a.5.5 0 0 1-1 0V2.5h-3V11a.5.5 0 0 1-1 0V1.5h-3V11a.5.5 0 0 1-1 0V3.5h-3V16l-2.025-2.771c-.6-.925-1.771-1.235-2.629-.705-.855.542-1.067 1.724-.475 2.646 0 0 3.266 4.943 4.658 7.059S11.408 26 15.625 26c6.982 0 7.607-5.392 7.607-7V5.5h-3z"/></svg>',
        apps: ie386Apps,
    },
    {
        name: 'NUCL 273',
        color: 'green',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.008 427.008"><path d="M212.992 179.392a46.98 46.98 0 00-47.104 47.104c0 26.112 20.992 47.104 47.104 47.104s47.104-20.992 47.104-47.104-20.992-47.104-47.104-47.104zM318.976 42.176c-66.048-37.376-146.944-37.376-212.48 0-3.584 2.048-6.144 6.144-6.144 10.752 0 2.048.512 4.096 1.536 5.632l59.392 102.4c2.048 3.584 6.144 5.632 10.24 5.632 2.048 0 4.096-.512 5.632-1.536 22.016-12.288 49.152-12.288 70.656 0 1.536 1.024 3.584 1.536 5.632 1.536 4.096 0 8.192-2.048 10.24-5.632l59.392-102.4c3.072-5.632 1.536-12.8-4.096-16.384zM414.208 214.72H295.936c-6.656 0-11.776 5.12-11.776 11.776 0 25.088-13.824 48.64-35.328 61.44-5.632 3.072-7.68 10.752-4.096 16.384l59.392 102.4c3.584 5.632 10.752 7.68 16.384 4.096 65.536-37.888 106.496-108.544 106.496-184.32-1.024-6.656-6.144-11.776-12.8-11.776zM177.664 287.936c-22.016-12.8-35.84-36.352-35.84-61.44 0-6.656-5.12-11.776-11.776-11.776H11.776C5.12 214.72 0 219.84 0 226.496c0 75.776 40.448 145.92 105.984 184.32 2.048 1.024 4.096 2.048 6.144 2.048 4.096 0 8.192-2.048 10.24-5.632l59.392-102.4c3.584-6.144 1.536-13.312-4.096-16.896z"/></svg>',
        apps: nuclApps,
    },
    {
        name: 'SPAN 202',
        color: 'red',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M138.71 137h-6.42l-11.997 60h30.414zM381.374 257c6.477 17.399 15.092 31.483 24.626 43.467 9.534-11.984 19.149-26.069 25.626-43.467h-50.252z"/><path d="M467 91H280.717l38.842 311.679c.687 12.748-2.798 24.75-11.118 34.146L242.663 512H467c24.814 0 45-20.186 45-45V137c0-24.814-20.186-46-45-46zm0 166h-4.006c-8.535 27.383-22.07 48.81-36.136 65.702 11.019 10.074 22.802 18.338 34.517 27.594 6.46 5.171 7.515 14.604 2.329 21.079-5.162 6.465-14.632 7.513-21.079 2.329-12.729-10.047-24.677-18.457-36.625-29.421-11.948 10.964-22.896 19.374-35.625 29.421-6.447 5.184-15.917 4.136-21.079-2.329-5.186-6.475-4.131-15.908 2.329-21.079 11.715-9.256 22.498-17.52 33.517-27.594-14.066-16.891-26.602-38.318-35.136-65.702H346c-8.291 0-15-6.709-15-15s6.709-15 15-15h45v-15c0-8.291 6.709-15 15-15s15 6.709 15 15v15h46c8.291 0 15 6.709 15 15s-6.709 15-15 15z"/><path d="M244.164 39.419C241.366 16.948 222.162 0 199.516 0H45C20.186 0 0 20.186 0 45v332c0 24.814 20.186 45 45 45h236.551c4.376-5.002 8.044-8.134 8.199-14.663.038-1.637-45.383-366.294-45.586-367.918zm-60.22 247.288c-7.954 1.637-16.011-3.527-17.651-11.763L156.706 227h-42.411l-9.587 47.944c-1.611 8.115-9.434 13.447-17.651 11.763-8.115-1.626-13.389-9.521-11.763-17.651l29.999-150C106.699 112.054 112.852 107 120 107h31c7.148 0 13.301 5.054 14.707 12.056l30 150c1.626 8.13-3.647 16.025-11.763 17.651zM175.261 452l2.574 20.581c1.716 13.783 10.874 27.838 25.938 34.856L254.132 452h-78.871z"/></svg>',
        apps: spanApps,
    },
    {
        name: 'IISE',
        color: 'indigo',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.64 372.64"><path d="M120.16 102.4a416.025 416.025 0 00-7.92 75.92h66.08v-72a525.053 525.053 0 01-58.16-3.92zM48.64 86.88a476.485 476.485 0 01-16-5.6A184.884 184.884 0 00.56 178.32h95.6a432.867 432.867 0 018-78.32 378.966 378.966 0 01-55.52-13.12zM43.2 68.24c5.28 1.92 10.88 3.76 16.64 5.44a381.958 381.958 0 0048 10.56 238.779 238.779 0 0122.48-57.92A128 128 0 01144.8 5.36 186.241 186.241 0 0043.2 68.24zM276.48 194.32a432.966 432.966 0 01-8 78.32A378.423 378.423 0 01324 285.76a476.485 476.485 0 0116 5.6 184.88 184.88 0 0032.08-97.04h-95.6zM112.24 194.32a416.01 416.01 0 007.92 76 525.102 525.102 0 0158.16-4v-72h-66.08zM96.32 194.32h-96a184.88 184.88 0 0032.4 97.04 476.485 476.485 0 0116-5.6 379.071 379.071 0 0155.6-13.12 432.867 432.867 0 01-8-78.32zM130.32 346.32a238.779 238.779 0 01-22.48-57.92 381.242 381.242 0 00-48 10.8c-5.76 1.68-11.28 3.52-16.64 5.44a186.241 186.241 0 00101.6 62.88 127.488 127.488 0 01-14.48-21.2zM124.08 286a189.196 189.196 0 0029.12 67.04 54.476 54.476 0 0024 19.04l1.44.56v-90.32a506.734 506.734 0 00-54.56 3.68zM312.8 298.96a381.176 381.176 0 00-48-10.56 238.722 238.722 0 01-22.48 57.92 127.564 127.564 0 01-14.48 20.96 186.241 186.241 0 00101.6-62.88c-5.28-1.92-10.88-3.76-16.64-5.44zM194.32 282.32v90.32l1.44-.56a54.476 54.476 0 0024-19.04 189.186 189.186 0 0029.44-66.96 505.801 505.801 0 00-54.88-3.76zM194.32 194.32v72a524.328 524.328 0 0158.16 3.92 416.025 416.025 0 007.92-75.92h-66.08zM252.48 102.32a524.118 524.118 0 01-58.16 4v72h66.08a416.01 416.01 0 00-7.92-76zM219.44 19.6a54.476 54.476 0 00-24-19.04L194.32 0v90.32a506.734 506.734 0 0054.56-3.68 189.2 189.2 0 00-29.44-67.04zM227.84 5.12a128.02 128.02 0 0114.48 21.2 238.722 238.722 0 0122.48 57.92 382.728 382.728 0 0048-10.8c5.76-1.68 11.28-3.52 16.64-5.44a186.241 186.241 0 00-101.6-62.88zM339.92 81.28a476.485 476.485 0 01-16 5.6 378.402 378.402 0 01-55.6 13.12 432.966 432.966 0 018 78.32h96a184.88 184.88 0 00-32.4-97.04zM176.88.56A54.485 54.485 0 00153.2 19.6a189.194 189.194 0 00-29.44 66.96 506.032 506.032 0 0054.56 3.76V0l-1.44.56z"/></svg>',
        apps: iiseApps,
    },
    {
        name: 'GEARE',
        color: 'brown',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25.001"><path d="M24.38 10.175l-2.231-.268a9.962 9.962 0 00-.992-2.401l1.387-1.763a.723.723 0 00-.057-.934l-2.299-2.3a.726.726 0 00-.934-.057l-1.766 1.389a9.825 9.825 0 00-2.396-.99L14.825.62a.724.724 0 00-.7-.62h-3.252a.723.723 0 00-.699.62l-.268 2.231a9.904 9.904 0 00-2.398.991L5.743 2.455a.724.724 0 00-.933.056l-2.3 2.301a.725.725 0 00-.054.934L3.842 7.51a9.879 9.879 0 00-.991 2.4l-2.23.267a.724.724 0 00-.621.7v3.252c0 .344.279.657.621.699l2.231.268a9.94 9.94 0 00.991 2.396l-1.386 1.766a.726.726 0 00.057.934l2.296 2.301a.726.726 0 00.933.057l1.766-1.39c.744.43 1.548.765 2.398.991l.268 2.23c.041.342.355.62.699.62h3.252a.721.721 0 00.699-.62l.268-2.23a9.928 9.928 0 002.398-.991l1.766 1.387c.271.212.69.187.933-.056l2.299-2.301a.724.724 0 00.056-.935l-1.388-1.764a9.893 9.893 0 00.992-2.397l2.23-.268a.722.722 0 00.621-.699v-3.252a.72.72 0 00-.62-.7zM12.501 18.75a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"/></svg>',
        apps: geareApps,
    },
    {
        name: 'ZBT',
        color: 'purple',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.625 511.625"><path d="M403.506 255.813l73.847-127.906H329.659L255.813 0l-73.847 127.906H34.272l73.847 127.906-73.847 127.907h147.694l73.847 127.906 73.847-127.906h147.694l-73.848-127.906zm21.885-97.907l-39.206 67.906-39.206-67.906h78.412zm-56.526 97.907l-56.526 97.906H199.286l-56.526-97.906 56.526-97.906h113.052l56.527 97.906zM255.813 60l39.206 67.906h-78.411L255.813 60zM86.234 157.906h78.411l-39.206 67.906-39.205-67.906zm0 195.813l39.206-67.906 39.206 67.906H86.234zm169.579 97.906l-39.206-67.906h78.411l-39.205 67.906zm130.373-165.812l39.206 67.906H346.98l39.206-67.906z"/></svg>',
        apps: zbtApps,
    },
]

function courseSwitchApps() {
    const dataLength = courseData.length
    var htmlString = "";

    for (let i = 0; i < dataLength; i++) {
        const courseId = `course-${i}`
        const courseColor = `${courseData[i].color}-fg`
        const courseTrigger = `courseSwitch(${i})`

        var courseHTML = switchHTML(courseId,courseColor,courseTrigger,courseData[i].name,courseData[i].icon)

        if (i < (dataLength - 1)) {
            courseHTML = appendSpacer(courseHTML,10)
        }

        htmlString = `${htmlString}${courseHTML}`
    }

    var hstack = document.createElement('div')
    hstack.classList = 'hstack spacer'
    hstack.innerHTML = htmlString

    var scrollWrapper = document.createElement('div')
    scrollWrapper.classList = 'scroll radius-10'
    scrollWrapper.append(hstack)

    var container = document.getElementById('course-switch-tray')
    container.append(scrollWrapper)
}

// function courseApps(locale) {
//     switch(locale) {
//         case "Forney Hall":
//             courseSwitch(4)
//             break
//         case "Stewart Center":
//             courseSwitch(2)
//             break
//     }
// }

function courseSwitch(n) {
    clearElement('course-switch-content-tray')
    // console.log(document.cookie)
    // console.log(n)
    const courseSwitcheElements = [];

    for (let i = 0; i < courseData.length; i++) {
        courseSwitcheElements[i] = document.getElementById(`course-${i}`)
        // console.log(courseSwitcheElements[i])
        courseSwitcheElements[i].classList.remove(courseData[i].color)
        courseSwitcheElements[i].classList.remove('current')
    }

    courseSwitcheElements[n].classList.add(courseData[n].color)
    courseSwitcheElements[n].classList.add('current')

    appType('link',courseData[n].apps,'course-switch-content-tray',courseData[n].name,null)

    document.cookie =`course=${n}`;
}

const mediaSwitchTray = 'media-switch-content-tray'

const mediaSwitchData = [
    {
        name: 'Books',
        color: 'orange',
        icon: '<svg viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0" /><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0" /><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0" /><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0" /></svg>',
        populate: function() {
            bookPopulate(bookData,mediaSwitchTray)
        },
    },
    {
        name: 'Podcasts',
        color: 'purple',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="23.878997802734375 25.78700065612793 464.2480163574219 486.2120361328125" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M298.719,508.446c-13.887,2.341-28.16,3.553-42.715,3.553c-13.354,0-26.467-1.024-39.267-2.988 c-8.61-37.073-25.14-134.74-17.032-164.174c7.262-26.331,48.88-29.957,57.96-29.957c9.08,0,50.698,3.626,57.961,29.957 C323.713,374.125,307.37,470.966,298.719,508.446z"></path><circle cx="256" cy="238.38" r="55.39"></circle><path d="M256.003,104.572c-84.553,0-153.339,68.786-153.339,153.339c0,53.655,27.711,100.968,69.58,128.376 c-0.846-14.838-0.773-28.4,0.69-39.111c-23.949-22.277-38.943-54.053-38.943-89.266c0-67.281,54.732-122.013,122.013-122.013 c67.271,0,122.013,54.732,122.013,122.013c0,33.761-13.803,64.366-36.039,86.476c1.787,10.553,2.017,24.325,1.243,39.549 c39.926-27.679,66.121-73.853,66.121-126.025C409.342,173.358,340.546,104.572,256.003,104.572z"></path><path d="M256.003,25.787c-128,0-232.124,104.124-232.124,232.124c0,102.985,67.427,190.527,160.455,220.808 c-1.975-10.836-4.033-22.977-5.893-35.589C106.123,412.734,55.195,341.148,55.195,257.911 c0-110.728,90.081-200.798,200.808-200.798c110.717,0,200.798,90.07,200.798,200.798c0,81.857-49.246,152.451-119.672,183.683 c-1.849,12.706-3.918,24.973-5.914,35.934c91.199-31.326,156.912-117.938,156.912-219.617 C488.127,129.911,383.993,25.787,256.003,25.787z"></path></g></svg>',
        populate: function() {
            podPopulate(podData,mediaSwitchTray)
        },
    },
    {
        name: 'Up next',
        color: 'red',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M494.601 67.065H17.399C7.79 67.065 0 74.855 0 84.464v259.371c0 9.609 7.79 17.399 17.399 17.399h477.202c9.609 0 17.399-7.79 17.399-17.399V84.464c0-9.609-7.79-17.399-17.399-17.399zM355.423 414.75h-59.069v-23.331h-80.708v23.331h-59.07c-8.335 0-15.093 6.757-15.093 15.093 0 8.335 6.757 15.093 15.093 15.093h198.847c8.335 0 15.093-6.757 15.093-15.093 0-8.335-6.757-15.093-15.093-15.093z"/></svg>',
        populate: function() {
            movieHTML(0,mediaSwitchTray)
        },
    },
    {
        name: 'My list',
        color: 'blue',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M257 0C116.39 0 0 114.39 0 255s116.39 257 257 257 255-116.39 255-257S397.61 0 257 0zm135 285H287v107c0 16.54-13.47 30-30 30-16.54 0-30-13.46-30-30V285H120c-16.54 0-30-13.46-30-30s13.46-30 30-30h107V120c0-16.54 13.46-30 30-30 16.53 0 30 13.46 30 30v105h105c16.53 0 30 13.46 30 30s-13.47 30-30 30z"/></svg>',
        populate: function() {
            movieHTML(1,mediaSwitchTray)
        },
    },
    {
        name: 'Apps',
        color: 'green',
        icon: '<svg x="0px" y="0px" viewBox="0 0 469.333 469.333"><g><path d="M170.667,0h-128C19.135,0,0,19.135,0,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,19.135,194.198,0,170.667,0z"/><path d="M426.667,0h-128C275.135,0,256,19.135,256,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C469.333,19.135,450.198,0,426.667,0z"/><path d="M170.667,256h-128C19.135,256,0,275.135,0,298.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,275.135,194.198,256,170.667,256z"/><path d="M416,341.333h-32v-32c0-5.896-4.771-10.667-10.667-10.667H352c-5.896,0-10.667,4.771-10.667,10.667v32h-32 c-5.896,0-10.667,4.771-10.667,10.667v21.333c0,5.896,4.771,10.667,10.667,10.667h32v32c0,5.896,4.771,10.667,10.667,10.667 h21.333c5.896,0,10.667-4.771,10.667-10.667v-32h32c5.896,0,10.667-4.771,10.667-10.667V352 C426.667,346.104,421.896,341.333,416,341.333z"/></g></svg>',
        populate: function() {
            appType('link',videoApps,mediaSwitchTray,'TV & Video',null)
        },
    },
]

function mediaSwitchApps() {
    const dataLength = mediaSwitchData.length
    var htmlString = "";

    for (let i = 0; i < dataLength; i++) {
        const mediaId = `media-switch-${i}`
        const mediaColor = `${mediaSwitchData[i].color}-fg`
        const mediaTrigger = `mediaSwitch(${i})`

        var mediaHTML = switchHTML(mediaId,mediaColor,mediaTrigger,mediaSwitchData[i].name,mediaSwitchData[i].icon)

        if (i < (dataLength - 1)) {
            mediaHTML = appendSpacer(mediaHTML,10)
        }

        htmlString = `${htmlString}${mediaHTML}`
    }

    var hstack = document.createElement('div')
    hstack.classList = 'hstack spacer'
    hstack.innerHTML = htmlString

    var scrollWrapper = document.createElement('div')
    scrollWrapper.classList = 'scroll radius-10'
    scrollWrapper.append(hstack)

    var container = document.getElementById('media-switch-tray')
    container.append(scrollWrapper)
}

function mediaSwitch(n) {
    clearElement('media-switch-content-tray')
    const mediaSwitcheElements = [];

    for (let i = 0; i < mediaSwitchData.length; i++) {
        mediaSwitcheElements[i] = document.getElementById(`media-switch-${i}`)
        mediaSwitcheElements[i].classList.remove(mediaSwitchData[i].color)
        mediaSwitcheElements[i].classList.remove('current')
    }

    mediaSwitcheElements[n].classList.add(mediaSwitchData[n].color)
    mediaSwitcheElements[n].classList.add('current')

    mediaSwitchData[n].populate()
    setCookie('mediaSwitch',n,2)
    // document.cookie =`mediaSwitch=${n}`;
}

const mediaPageData = [
    {
        name: 'TV & Movies',
        style: {
            color: 'e50914',
        },
    },
    {
        name: 'Books',
        style: {
            color: 'FC880F',
        },
    },
    {
        name: 'Podcasts',
        style: {
            color: '842BC1',
        },
    },
    {
        name: 'News',
        style: {
            color: 'FC880F',
        },
    },
    {
        name: 'YouTube',
        style: {
            color: 'f00',
        },
    },
]

function mediaPageApps() {
    const dataLength = mediaPageData.length
    var htmlString = '';

    htmlString = appendSpacer(htmlString,15)

    for (let i = 0; i < dataLength; i++) {
        var mediaHTML = `<div id="media-page-switch-${i}" class="media-page-switch clickable" onclick="mediaPageSwitch(${i});movieBig(0,0)">${mediaPageData[i].name}</div>`

        if (i < (dataLength - 1)) {
            mediaHTML = appendSpacer(mediaHTML,10)
        }

        htmlString = `${htmlString}${mediaHTML}`
    }

    htmlString = appendSpacer(htmlString,15)

    var hstack = document.createElement('div')
    hstack.classList = 'hstack'
    hstack.innerHTML = htmlString

    var scrollWrapper = document.createElement('div')
    scrollWrapper.classList = 'scroll'
    scrollWrapper.append(hstack)

    var container = document.getElementById('media-page-switch-tray')
    container.append(scrollWrapper)
}

function mediaPageSwitch(n) {
    for (let i = 0; i < mediaPageData.length; i++) {
        document.getElementById(`main-8-${i}`).classList.add('hidden-always')
        document.getElementById(`media-page-switch-${i}`).classList.remove('selected')
    }

    const headerElement = document.getElementById('media-page-header')
    const headerText = document.getElementById('media-page-header-text')
    const body = document.getElementById('body')

    
    if (mediaPageData[n].style) {
        headerElement.style.setProperty('--color',`#${mediaPageData[n].style.color}`)
        body.classList = ''
        body.style.setProperty('--color',`#${mediaPageData[n].style.color}`)
    }
    headerText.innerHTML = mediaPageData[n].name

    


    document.getElementById(`main-8-${n}`).classList.remove('hidden-always')
    document.getElementById(`media-page-switch-${n}`).classList.add('selected')
}