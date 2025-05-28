const CACHE_NAME = 'menu-digital-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://cdn.tailwindcss.com'
];

// Instalar SW y cachear recursos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar requests y servir desde cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Retornar del cache si existe, sino hacer fetch
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});
