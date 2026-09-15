'use strict';
const CACHE='de-mentor-standalone-1.2';
const SHELL=['./','index.html','styles.css?v=1.2','app.js?v=1.2','curriculum.json?v=1.2','icon.svg','manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('de-mentor-2026-')||k.startsWith('de-mentor-standalone-'))&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 // Large downloads use the network; visited lessons/PDFs can be reused offline.
 if(url.pathname.endsWith('.zip'))return;
 event.respondWith(fetch(event.request).then(async response=>{if(response.ok){try{const cache=await caches.open(CACHE);await cache.put(event.request,response.clone());}catch{}}return response;}).catch(async()=>{const cache=await caches.open(CACHE);const saved=await cache.match(event.request);if(saved)return saved;if(event.request.mode==='navigate'){const home=await cache.match('index.html');if(home)return home;}return new Response('This item is not saved offline. Reconnect and open it once.',{status:503,headers:{'Content-Type':'text/plain'}});}));
});
