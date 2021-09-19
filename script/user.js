function checkUser() {
    let userID = getCookie('userID');
    if (userID != "") {
        return userID
    } else {
        userSelectOpen()
        return null
    }
}

function userLoad() {
    // clearCookies()

    userSelectPopulate()
    if (checkUser()) {
        userCurrent(checkUser())
    } else {
        userSelectOpen()
    }
    checkUser()
}

function userSelectOpen() {
    var userSelectModal = document.getElementById('user-select-modal')
    userSelectModal.classList = 'open'
    userSelectLoad(0)

}

function userSelectClose() {
    if (checkUser()) {
        var userSelectModal = document.getElementById('user-select-modal')
        userSelectModal.classList = 'closed'
        userSelectReset()
    } else {
        alert('pick a user bro')
    }

}

const userList = [
    {
       id: 001,
       name: {
        first: 'Hrishabh',
        last: 'Nadkarni',
       }
    },
    {
       id: 097,
       name: {
        first: 'Marques',
        last: 'Brownlee',
       }
    },
    {
       id: 098,
       name: {
        first: 'Cody',
        last: 'Ko',
       }
    },
    {
       id: 099,
       name: {
        first: 'Doug',
        last: 'DeMuro',
       }
    },
    {
       id: 099,
       name: {
        first: 'Doug',
        last: 'DeMuro',
       }
    },
    {
       id: 099,
       name: {
        first: 'Doug',
        last: 'DeMuro',
       }
    },
    {
       id: 099,
       name: {
        first: 'Doug',
        last: 'DeMuro',
       }
    },
    {
       id: 099,
       name: {
        first: 'Doug',
        last: 'DeMuro',
       }
    },
    {
       id: 099,
       name: {
        first: 'Doug',
        last: 'DeMuro',
       }
    },
]

function userSelectPopulate() {
    var userSelectAll = document.getElementById('user-select-all')
    var dataLength = userList.length
    var htmlString = ''
    
    htmlString = appendSpacer(htmlString,1000)

    for (i = 0; i < dataLength; i++) {
        var userCardHTML = `
        <div id="user-select-card-${i}" class="user-select-card preload" onClick="setUser(${i})">
            <div class="vstack flex-grow">
                <div class="user-select-icon user-image-${userList[i].id}"></div>
                <p class="user-select-name">${userList[i].name.first}</p>
            </div>
        </div>`

        if (i < dataLength - 1) {
            userCardHTML = appendSpacer(userCardHTML,15)
        }

        htmlString = `${htmlString}${userCardHTML}`
    }    
    htmlString = appendSpacer(htmlString,1000)
    htmlString = appendSpacer(htmlString,'n')
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString,1000)

    userSelectAll.innerHTML = htmlString

    // userSelectLoad(0)
}

function userSelectLoad(i) {
    const dataLength = userList.length
    var userCard = document.getElementById(`user-select-card-${i}`)
    setTimeout(function() {
        userCard.classList.remove('preload')
        i++
        if (i < dataLength) {
            userSelectLoad(i)
        }
    }, 100);
}

function userSelectReset() {
    const dataLength = userList.length

    for (i = 0; i < dataLength; i++) {
        var userCard = document.getElementById(`user-select-card-${i}`)
        userCard.classList.add('preload')
    }
}

function setUser(i) {
    setCookie('userID',i,2)
    userSelectClose()
    userCurrent(i)
}

function userCurrent(i) {
    var userCurrentIcon = document.getElementById('user-current-icon')
    var userName = document.getElementById('user-current-name')
    // console.log(userList[i])
    userCurrentIcon.classList = `user-image-${userList[i].id}`
    userCurrentIcon.classList.add('clickable')
    userName.innerHTML = `${userList[i].name.first}`

    // console.log(i)
    // document.getElementById('main-container').classList.remove('preload')
    // console.log(userCurrentIcon)
}