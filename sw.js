/* ============================================================
   Service worker: học offline sau lần mở đầu tiên
   Chiến lược: ưu tiên mạng, dự phòng bản đã lưu
   ============================================================ */

var CACHE = "be-vui-hoc-v1";
var CORE = [
  "./",
  "./index.html",
  "./bai-hoc-cho-be.html",
  "./tieng-viet.html",
  "./toan.html",
  "./tieng-anh.html",
  "./tro-choi-cho-be.html",
  "./goc-bo-me.html",
  "./about.html",
  "./assets/css/base.css",
  "./assets/css/home.css",
  "./assets/css/games.css",
  "./assets/js/lang.js",
  "./assets/js/progress.js",
  "./assets/js/games.js",
  "./assets/js/site.js",
  "./assets/img/logo-mark.svg",
  "./assets/img/icon-192.png",
  "./assets/img/icon-512.png",
  "./assets/img/scene.svg",
  "./assets/img/welcome-sun-3d.webp",
  "./assets/img/welcome-characters-3d.png",
  "./assets/img/input-latin-letters.webp",
  "./assets/img/input-numbers.webp",
  "./assets/img/video-game.webp",
  "./assets/img/open-book.webp",
  "./assets/img/trophy.webp",
  "./assets/img/red-heart.webp",
  "./assets/fonts/baloo2-latin.woff2",
  "./assets/fonts/baloo2-vietnamese.woff2"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(function (cache) {
        return cache.addAll(CORE);
      })
      .then(function () {
        return self.skipWaiting();
      })
      .catch(function () {
        /* thiếu tệp nào đó vẫn cho cài đặt */
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys.map(function (key) {
            if (key !== CACHE) return caches.delete(key);
            return null;
          })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  var request = event.request;
  if (request.method !== "GET") return;

  var url;
  try {
    url = new URL(request.url);
  } catch (e) {
    return;
  }
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(function (response) {
        if (response && response.ok) {
          var copy = response.clone();
          caches.open(CACHE).then(function (cache) {
            cache.put(request, copy);
          });
        }
        return response;
      })
      .catch(function () {
        return caches.match(request).then(function (hit) {
          if (hit) return hit;
          if (request.mode === "navigate") return caches.match("./index.html");
          return new Response("", { status: 504, statusText: "Offline" });
        });
      })
  );
});
