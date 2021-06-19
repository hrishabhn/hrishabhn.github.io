const cacheName = "dashboard"
const assets = [
  "/",
  "/index.html",
  "/bookmarks.html",
  "/school.html",
  "/media.html",
  "/app.js",

  "/script/apps.js",
  "/script/media.js",

  // "/images/launch.png",
  
  // "/TV/background/always sunny.jpg",
  // "/TV/background/atlanta.webp",
  // "/TV/background/chernobyl.jpg",
  // "/TV/background/drive.webp",
  // "/TV/background/grandTour.webp",
  // "/TV/background/kims convenience.webp",
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