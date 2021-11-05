function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function removeCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime());
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + '' + ";" + expires;
}


function googleSearch(query) {
  if ('ontouchstart' in document.documentElement) {
    return `google://search?q=${query}`
  } else {
    return `http://www.google.com/search?q=${query}`
  }
}