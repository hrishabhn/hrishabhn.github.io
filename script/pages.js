function menuLoad() {
  menuSwitchApps()
  menuSwitch(1)
}

const menuData = [
  {
    type: 'title',
    name: 'MENU',
  },
  {
    type: 'page',
    name: 'Home',
    icon: '<svg class="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" /></svg>',
    color: 'blue',
  },
  {
    type: 'page',
    name: 'Bookmarks',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.936 423.936"><path d="M327.68 0H96.256c-22.528 0-40.96 18.432-40.96 40.96v357.376c0 9.728 5.632 18.944 14.336 23.04 9.216 4.096 19.456 3.072 27.136-3.072l.512-.512 114.688-96.768 114.688 96.768.512.512c4.608 3.584 10.24 5.632 15.872 5.632 3.584 0 7.68-1.024 11.264-3.072 8.704-4.096 14.336-13.312 14.336-23.04V40.96C368.64 18.432 350.208 0 327.68 0z"/></svg>',
    color: 'orange',
  },
  {
    type: 'page',
    name: 'Apps',
    icon: '<svg class="icon" x="0px" y="0px" viewBox="0 0 469.333 469.333"><g><path d="M170.667,0h-128C19.135,0,0,19.135,0,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,19.135,194.198,0,170.667,0z"/><path d="M426.667,0h-128C275.135,0,256,19.135,256,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C469.333,19.135,450.198,0,426.667,0z"/><path d="M170.667,256h-128C19.135,256,0,275.135,0,298.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,275.135,194.198,256,170.667,256z"/><path d="M416,341.333h-32v-32c0-5.896-4.771-10.667-10.667-10.667H352c-5.896,0-10.667,4.771-10.667,10.667v32h-32 c-5.896,0-10.667,4.771-10.667,10.667v21.333c0,5.896,4.771,10.667,10.667,10.667h32v32c0,5.896,4.771,10.667,10.667,10.667 h21.333c5.896,0,10.667-4.771,10.667-10.667v-32h32c5.896,0,10.667-4.771,10.667-10.667V352 C426.667,346.104,421.896,341.333,416,341.333z"/></g></svg>',
    color: 'green',
  },
  {
    type: 'page',
    name: 'School',
    icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361 8.787V100h91.213zM149.565 250.713h53.077l-26.417-69.999z"/><path d="M346 130c-8.284 0-15-6.716-15-15V0H66c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h380c8.284 0 15-6.716 15-15V130zm-80 40h15v-15c0-8.284 6.716-15 15-15s15 6.716 15 15v15h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v15c0 8.284-6.716 15-15 15s-15-6.716-15-15v-15h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-21.542 149.034c-1.744.658-3.534.97-5.294.97-6.062 0-11.77-3.701-14.036-9.708l-11.164-29.583H138.14l-11.283 29.626c-2.949 7.742-11.615 11.627-19.356 8.679-7.742-2.948-11.627-11.615-8.679-19.356l60.08-157.747c.043-.114.088-.227.134-.339 2.873-7.024 9.633-11.568 17.222-11.575h.019c7.582 0 14.341 4.528 17.226 11.541.056.136.109.272.161.409l59.534 157.753c2.923 7.751-.99 16.405-8.74 19.33zM386 450H266c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60H266c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/></svg>',
    color: 'blue',
  },
  {
    type: 'page',
    name: 'Media',
    icon: '<svg class="icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg" /></g></svg>',
    color: 'red',
  },
  {
    type: 'title',
    name: 'MEDIA',
  },
  {
    type: 'page',
    name: 'Books',
    icon: '<svg class="icon" viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0" /><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0" /><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0" /><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0" /></svg>',
    color: 'books',
  },
  {
    type: 'page',
    name: 'TV & Movies',
    icon: '<svg class="icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg" /></g></svg>',
    color: 'netflix',
  },
]

function menuSwitchApps() {
  const dataLength = menuData.length
  var htmlString = ''

  for (i = 0; i < dataLength; i++) {


    if (i > 5) {
      var device = 'hidden-mobile'
    } else {
      var device = ''
    }

    if (menuData[i].type == 'page') {
      var menuItemHTML = `<a id="menu-${i}" class="menu-item ${device}" target="_self"  onclick="mainRefresh();menuSwitch(${i})">
          <div class="menu-item-bg ${menuData[i].color}"></div>
          <span class="menu-item-icon ${menuData[i].color}">
              ${menuData[i].icon}
          </span><span class="menu-item-text">
              ${menuData[i].name}
          </span>
      </a>`
    } else if (menuData[i].type == 'title') {
      var menuItemHTML = `<div class="navbar-title hidden-mobile">${menuData[i].name}</div>`
    }

    htmlString = `${htmlString}${menuItemHTML}`
  }
  var container = document.getElementById('navbar-menu')
  container.innerHTML = htmlString
}

var mainCurrent = 1;

function menuSwitch(n) {
  // const menuSwitchElements = []

  // for (i = 0; i < menuData.length; i++) {
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

  title.innerHTML = menuData[n].name
  headerText.innerHTML = menuData[n].name
}



// function pageReset(n) {
//   switch (n) {
//     case 5:
//       showWidgets()
//       // console.log("nice")
//       // tvLoadReset()
//       break
//   }
// }

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