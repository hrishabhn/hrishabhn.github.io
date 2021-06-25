const cacheName = "dashboard"
const assets = [
  "/",
  "/index.html",
  "/bookmarks.html",
  "/school.html",
  "/media.html",
  "/app.js",

  "/images/wp-mob-light.png",
  "/images/wp-mob0-dark.png",

  "/style/style.css",
  "/style/brand.css",
  "/style/home.css",
  "/style/media.css",
  "/style/tv-data.css",

  "/script/apps.js",
  "/script/media.js",
  "/script/date.js",

  "/images/launch-12mini.png",
  
  "/TV/background/always.jpg",
  "/TV/background/kim.webp",
  "/TV/background/ldr.webp",
  "/TV/background/mythic.webp",
  "/TV/background/loki.webp",
  "/TV/background/blind.jpg",

  "/TV/title/always.png",
  "/TV/background/kim.svg",
  "/TV/background/ldr.png",
  "/TV/background/mythic.png",
  "/TV/background/loki.png",
  "/TV/background/blind.png",

  // "/TV/background/atlanta.webp",
  // "/TV/background/chernobyl.jpg",
  // "/TV/background/drive.webp",
  // "/TV/background/grandTour.webp",
  // "/TV/background/legion.webp",
  // "/TV/background/mankind.webp",
  // "/TV/background/mindhunter.webp",
  // "/TV/background/mythic quest.webp",
  // "/TV/background/schulz.webp",
  // "/TV/background/snowfall.jpeg",
  // "/TV/background/spy.jpg",
  // "/TV/background/twinpeaks.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })