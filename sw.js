let casheName = "Restaurant-Reviews";
// install sw & cashe files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(casheName).then(function(cache) {
            return cache.addAll(
            [
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/dbhelper.js',
                '/js/indexController.js'
            ]
            );
        })
    );
});

// delete old cache
self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then(function(casheNames) {
            return Promise.all(
                casheNames.filter(function(casheName) {
                    return (true);
                }).map(function(casheName) {
                    return caches.delete(casheName);
                })
            );
        })
    );
});



self.addEventListener('fetch', function(event) {
    let requestUrl = new URL(event.request.url);
    event.respondWith(
       caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
       })
    );
 });