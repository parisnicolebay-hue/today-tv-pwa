const CACHE='today-tv-shell-v2';
const SHELL=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icons/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(url.hostname==='live.ontodaytv.com'||url.pathname.endsWith('.m3u8')||url.pathname.endsWith('.ts')) return;
  if(url.hostname==='ontodaytv.com'&&url.pathname.includes('/wp-json/')){
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); return;
  }
  if(e.request.method==='GET'&&url.origin===self.location.origin){
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;})));
  }
});
