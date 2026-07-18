# Today TV PWA

A zero-database, mobile-first viewer app for Today TV.

## Included

- Live HLS television player
- Recent programs from the public WordPress REST API
- English/Persian interface with RTL support
- Business and contact pathways
- Installable PWA manifest and offline app shell
- Responsive mobile, tablet, and desktop layouts

## Test locally

Serve this folder over HTTP (service workers do not run from a `file://` URL):

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Free deployment

Upload the contents of this folder to any static host, including GitHub Pages. The repository must be public on GitHub Free. Set the published folder to the repository root.

For `app.ontodaytv.com`, configure the host first, then add the DNS record requested by that host. Keep `ontodaytv.com` and the live streaming server unchanged.

## Data and privacy

The app has no database, registration, tracking, or form storage. Program content is requested from `ontodaytv.com`; business actions open existing Today TV pages.

## Important

Do not cache or proxy the HLS stream. The service worker intentionally excludes live video segments and playlists.
