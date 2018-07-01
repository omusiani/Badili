//install service worker
self.addListener('install', function(event)){
  event.waitUntil(
    caches.open('v1').then(function(cache){
      return cache.addAll([
        '/badili/',
        '/badili/templates/index.html',
        '/badili/main.js',
      ])
    })
  )
}
// activate the service worker and match cacheNames and caches

self.addEventlistener('activate', function(event){
  event.waitUntil(
    caches.keys().then(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWidth('badili')&&
          ! allCaches.includes(cacheName);
        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      )
    }
  )
})

//get servic weorker to obtain the stored json
