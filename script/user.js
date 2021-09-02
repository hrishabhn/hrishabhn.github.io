function checkUser() {
    let userID = getCookie('userID');
    if (userID != "") {
        userCurrent(userID)
    } else {
        userSelectOpen()
    }
}

function userLoad() {
    // userSelectOpen()
    // clearCookies()
    checkUser()
    userSelectPopulate()
}

function userSelectOpen() {
    var userSelectModal = document.getElementById('user-select-modal')
    userSelectModal.classList = 'open'
}

function userSelectClose() {
    var userSelectModal = document.getElementById('user-select-modal')
    userSelectModal.classList = 'closed'
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
]

function userSelectPopulate() {
    var userSelectAll = document.getElementById('user-select-all')
    var dataLength = userList.length
    var htmlString = ''
    
    htmlString = appendSpacer(htmlString,1000)

    for (i = 0; i < dataLength; i++) {
        var userCardHTML = `
        <div class="user-select-card clickable" onClick="setUser(${i})">
            <div class="vstack">
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

    htmlString = scrollEmbed(htmlString,1000)

    userSelectAll.innerHTML = htmlString
}

function setUser(i) {
    setCookie('userID',i,2)
    userSelectClose()
    userCurrent(i)
}

function userCurrent(i) {
    var userCurrentIcon = document.getElementById('user-current-icon')
    // console.log(userList[i])
    userCurrentIcon.classList = `user-image-${userList[i].id}`
    userCurrentIcon.classList.add('clickable')
    // console.log(userCurrentIcon)
}