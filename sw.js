const CACHE='english90-v3';
const CACHE_PREFIX='english90-';
const ASSETS=['./','./index.html','./styles.css','./translations.js','./app.js','./manifest.json'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const cacheNames=await caches.keys();
    const oldCaches=cacheNames.filter(name=>name.startsWith(CACHE_PREFIX)&&name!==CACHE);
    await Promise.all(oldCaches.map(name=>caches.delete(name)));
    await self.clients.claim();

    if(oldCaches.length){
      const clients=await self.clients.matchAll({type:'window'});
      await Promise.all(clients.map(client=>client.navigate(client.url)));
    }
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;

  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response.ok&&new URL(event.request.url).origin===self.location.origin){
        const cache=await caches.open(CACHE);
        cache.put(event.request,response.clone());
      }
      return response;
    }catch(error){
      const cached=await caches.match(event.request);
      if(cached) return cached;
      throw error;
    }
  })());
});
