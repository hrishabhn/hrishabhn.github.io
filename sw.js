const staticDashboard = "dashboard-v2"
const assets = [
  "/",
  "/index.html",
  "/bookmarks.html",
  "/media.html",
  "/app.js",
  "/date.js",
  "/TV/fargo.jpeg",
  "/TV/twin peaks.webp",
  "/TV/always sunny.jpg",
  "/TV/atlanta.webp",
  "/TV/kims convenience.webp",
  "/TV/legion.webp",
  "/TV/snowfall.jpeg",
  "/TV/mythic quest.webp",
  "/TV/spy.webp",
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