const menuItems = {
  data: [
    {
      type: 'title',
      name: 'MENU',
    },
    page0.info,
    page1.info,
    page2.info,
    page3.info,
    page4.info,
    {
      type: 'title',
      name: 'MEDIA',
    },
    {
      type: 'page',
      name: 'TV & Movies',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.001 453.001" xml:space="preserve"><path d="M420.135 110.203H280.091l49.728-81.594c4.312-7.074 2.072-16.304-5.002-20.615-7.073-4.313-16.304-2.072-20.615 5.002l-59.243 97.207h-36.916L148.8 12.996c-4.311-7.072-13.541-9.312-20.615-5.002-7.074 4.312-9.314 13.541-5.002 20.615l49.728 81.594H32.865C14.743 110.203 0 124.946 0 143.067v271.271c0 18.121 14.743 32.864 32.865 32.864h387.271c18.122 0 32.865-14.743 32.865-32.864V143.067c-.001-18.121-14.744-32.864-32.866-32.864zM317.677 374.912c0 9.866-7.998 17.865-17.865 17.865H71.188c-9.866-.001-17.864-7.999-17.864-17.865V182.494c0-9.866 7.998-17.865 17.865-17.865h228.623c9.866 0 17.865 7.999 17.865 17.865v192.418zm66.115-5.709c-17.093 0-31-13.907-31-31 0-17.094 13.907-31 31-31s31 13.906 31 31-13.907 31-31 31zm0-119c-17.093 0-31-13.906-31-31s13.907-31 31-31 31 13.906 31 31-13.907 31-31 31z"/></svg>',
      style: 'netflix',
      trigger: 'menuSwitch(5);mediaPageSwitch(0)',
    },
    {
      type: 'page',
      name: 'Books',
      icon: '<svg class="icon" viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0" /><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0" /><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0" /><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0" /></svg>',
      style: 'books',
      trigger: 'menuSwitch(5);mediaPageSwitch(1)',
    },
    {
      type: 'page',
      name: 'Podcasts',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="23.878997802734375 25.78700065612793 464.2480163574219 486.2120361328125" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M298.719,508.446c-13.887,2.341-28.16,3.553-42.715,3.553c-13.354,0-26.467-1.024-39.267-2.988 c-8.61-37.073-25.14-134.74-17.032-164.174c7.262-26.331,48.88-29.957,57.96-29.957c9.08,0,50.698,3.626,57.961,29.957 C323.713,374.125,307.37,470.966,298.719,508.446z"></path><circle cx="256" cy="238.38" r="55.39"></circle><path d="M256.003,104.572c-84.553,0-153.339,68.786-153.339,153.339c0,53.655,27.711,100.968,69.58,128.376 c-0.846-14.838-0.773-28.4,0.69-39.111c-23.949-22.277-38.943-54.053-38.943-89.266c0-67.281,54.732-122.013,122.013-122.013 c67.271,0,122.013,54.732,122.013,122.013c0,33.761-13.803,64.366-36.039,86.476c1.787,10.553,2.017,24.325,1.243,39.549 c39.926-27.679,66.121-73.853,66.121-126.025C409.342,173.358,340.546,104.572,256.003,104.572z"></path><path d="M256.003,25.787c-128,0-232.124,104.124-232.124,232.124c0,102.985,67.427,190.527,160.455,220.808 c-1.975-10.836-4.033-22.977-5.893-35.589C106.123,412.734,55.195,341.148,55.195,257.911 c0-110.728,90.081-200.798,200.808-200.798c110.717,0,200.798,90.07,200.798,200.798c0,81.857-49.246,152.451-119.672,183.683 c-1.849,12.706-3.918,24.973-5.914,35.934c91.199-31.326,156.912-117.938,156.912-219.617 C488.127,129.911,383.993,25.787,256.003,25.787z"></path></g></svg>',
      style: 'podcasts',
      trigger: 'menuSwitch(5);mediaPageSwitch(2)',
    },
    // {
    //   type: 'spacer',
    // },
    {
      type: 'title',
      name: 'Manage',
    },
    {
      type: 'page',
      name: 'Suggest',
      icon: '<svg class="icon" viewBox="0 0 405.272 405.272" xml:space="preserve"><g><path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"></path></g></svg>',
      style: 'red',
      link: 'clickup://8450846/v/l/81wry-660',
    },
    {
      type: 'page',
      name: 'Edit',
      icon: '<svg class="icon" viewBox="0 0 512 511" xmlns="http://www.w3.org/2000/svg"><path d="M405.332 256.484c-11.797 0-21.332 9.559-21.332 21.332v170.668c0 11.754-9.559 21.332-21.332 21.332H64c-11.777 0-21.332-9.578-21.332-21.332V149.816c0-11.754 9.555-21.332 21.332-21.332h170.668c11.797 0 21.332-9.558 21.332-21.332 0-11.777-9.535-21.336-21.332-21.336H64c-35.285 0-64 28.715-64 64v298.668c0 35.286 28.715 64 64 64h298.668c35.285 0 64-28.714 64-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0 0"/><path d="M200.02 237.05a10.793 10.793 0 00-2.922 5.438l-15.082 75.438c-.703 3.496.406 7.101 2.922 9.64a10.673 10.673 0 007.554 3.114c.68 0 1.387-.063 2.09-.211l75.414-15.082c2.09-.43 3.988-1.43 5.461-2.926l168.79-168.79-75.415-75.41zm0 0M496.383 16.102c-20.797-20.801-54.633-20.801-75.414 0l-29.524 29.523 75.414 75.414 29.524-29.527C506.453 81.465 512 68.066 512 53.816s-5.547-27.648-15.617-37.714zm0 0"/></svg>',
      style: 'mint',
      link: 'vscode://',
    },
    {
      type: 'page',
      name: 'Settings',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.667 448H21.333C9.557 448 0 438.464 0 426.667c0-11.797 9.557-21.333 21.333-21.333h469.333c11.797 0 21.333 9.536 21.333 21.333C512 438.464 502.464 448 490.667 448z"/><circle cx="362.667" cy="426.667" r="53.333"/><path d="M362.667 501.333c-41.173 0-74.667-33.493-74.667-74.667S321.493 352 362.667 352s74.667 33.493 74.667 74.667-33.494 74.666-74.667 74.666zm0-106.666c-17.643 0-32 14.357-32 32s14.357 32 32 32 32-14.357 32-32-14.358-32-32-32zM490.667 106.667H21.333C9.557 106.667 0 97.109 0 85.333S9.557 64 21.333 64h469.333C502.464 64 512 73.557 512 85.333s-9.536 21.334-21.333 21.334z"/><circle cx="362.667" cy="85.333" r="53.333"/><path d="M362.667 160C321.493 160 288 126.507 288 85.333s33.493-74.667 74.667-74.667 74.667 33.493 74.667 74.667S403.84 160 362.667 160zm0-106.667c-17.643 0-32 14.357-32 32s14.357 32 32 32 32-14.357 32-32-14.358-32-32-32zM490.667 277.333H21.333C9.557 277.333 0 267.797 0 256c0-11.776 9.557-21.333 21.333-21.333h469.333c11.797 0 21.333 9.557 21.333 21.333.001 11.797-9.535 21.333-21.332 21.333z"/><circle cx="149.333" cy="256" r="53.333"/><path d="M149.333 330.667c-41.173 0-74.667-33.493-74.667-74.667s33.493-74.667 74.667-74.667S224 214.827 224 256s-33.493 74.667-74.667 74.667zm0-106.667c-17.643 0-32 14.357-32 32s14.357 32 32 32 32-14.357 32-32-14.357-32-32-32z"/></svg>',
      style: 'indigo',
      link: 'github-mac://',
    },
    {
      type: 'page',
      name: 'Clear Cookies',
      icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002"><path d="M501.791 236.285c-32.933-11.827-53.189-45.342-50.644-71.807 0-4.351-2.607-8.394-5.903-11.25-3.296-2.842-8.408-4.072-12.686-3.384-50.186 7.363-96.14-29.352-100.693-80.962a14.978 14.978 0 00-6.914-11.353c-3.94-2.49-8.848-3.032-13.198-1.406C271.074 71.02 232.637 44.084 217.3 8.986c-2.871-6.563-9.99-10.181-17.007-8.628C84.82 26.125.001 137.657.001 256.002c0 140.61 115.39 256 256 256s256-115.39 256-256c-.417-8.934-.479-16.231-10.21-19.717zm-396.54 35.846c-8.284 0-15-6.716-15-15 0-8.286 6.716-15 15-15s15 6.714 15 15c0 8.284-6.717 15-15 15zm60.75 118.871c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.185 45-45 45zm15-180c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm120 210c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm15-120c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.185 45-45 45zm89.25 31.129c-8.284 0-15-6.716-15-15 0-8.286 6.716-15 15-15s15 6.714 15 15c0 8.284-6.717 15-15 15z"/></svg>',
      style: 'brown',
      trigger: 'clearCookies()',
    },
  ],
  render: function() {
    const dataLength = this.data.length
    var htmlString = ''
    var j = 0

    for (i = 0; i < dataLength; i++) {


      if (i > 5) {
        var device = 'hidden-mobile'
      } else {
        var device = ''
      }





      if (this.data[i].type == 'page') {
        if (this.data[i].trigger) {
          var action = `onclick="${this.data[i].trigger}"`
        } else if (this.data[i].link) {
          var action = `href="${this.data[i].link}"`
        }

        var menuItemHTML = `<a id="menu-${j}" class="menu-item ${device}" target="_self" ${action}>
            <div class="menu-item-bg ${this.data[i].style}"></div>
            <span class="menu-item-icon ${this.data[i].style}-fg">
                ${this.data[i].icon}
            </span><span class="menu-item-text primary-fg">
                ${this.data[i].name}
            </span>
        </a>`

        j++
      } else if (this.data[i].type == 'title') {
        var menuItemHTML = `<div class="navbar-title hidden-mobile">${this.data[i].name}</div>`
      } else if (this.data[i].type == 'spacer') {
        var menuItemHTML = appendSpacer('','scroll')
        // menuItemHTML = `<div class = "hidden-mobile">${menuItemHTML}</div>`
      }

      htmlString = `${htmlString}${menuItemHTML}`
    }
    var container = document.getElementById('navbar-menu')
    container.innerHTML = htmlString

    menuSwitch(0)
  },
}

var mainCurrent = 1;

function menuSwitch(n) {
  // const menuSwitchElements = []

  // for (i = 0; i < menuItems.data.length; i++) {
  //   // menuSwitchElements[i] = document.getElementById(`menu-${i}`)
  //   // menuSwitchElements[i].classList.re
  // }
  // console.log(menuSwitchElements)

  var oldMain = document.getElementById("main-" + mainCurrent)
  var oldMenu = document.getElementById("menu-" + mainCurrent)
  oldMain.classList.add("hidden")
  oldMenu.classList.remove("selected")
  // var mainOld = mainCurrent

  // console.log(n)
  var newMain = document.getElementById("main-" + n)
  var newMenu = document.getElementById("menu-" + n)
  newMain.classList.remove("hidden")
  newMenu.classList.add("selected")

  mainCurrent = n;

  var title = document.getElementById("title-page")
  var headerText = document.getElementById("header-text")
  // var headerBox = document.getElementById('header')
  var body = document.getElementById('body')

  if (pages.items[n]) {
    title.innerHTML = pages.items[n].info.name
    headerText.innerHTML = pages.items[n].info.name
    // headerBox.classList = pages.items[n].style
    body.classList = pages.items[n].info.style

  }

}

var widgetState = 2

function widgetBarState() {
  if (widgetState == 1) {
    document.getElementById('widgetbar').classList.remove('state1')
    document.getElementById('widgetbar').classList.add('state2')

    document.getElementById('main-container').classList.remove('state1')
    document.getElementById('main-container').classList.add('state2')
    widgetState = 2
  } else if (widgetState == 2) {
    document.getElementById('widgetbar').classList.add('state1')
    document.getElementById('widgetbar').classList.remove('state2')

    document.getElementById('main-container').classList.add('state1')
    document.getElementById('main-container').classList.remove('state2')
    widgetState = 1
  }
}
