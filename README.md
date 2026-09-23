# picktok_web

PickTok website: landing page (`/`) and the in-app tutorial pages, built with SvelteKit and prerendered to static HTML for a Render Static Site.

## Routes

| URL | What |
| --- | --- |
| `/` | Landing page (English). Redirects to the visitor's language on first visit |
| `/{locale}/` | Landing page in another language (e.g. `/ko/`, `/zh-Hant/`) |
| `/tutorial/` | Redirects to the browser's language |
| `/tutorial/{locale}/` | List of guides in a language |
| `/tutorial/{locale}/{page}/` | A guide — `organize`, `folders`, `subfolders`, `video-controls` |

Locales: `en es pt fr de it ru zh-Hant zh-Hans ja th vi id ko`

The app loads guide URLs from Firebase Realtime Database (`picktok-e365b`):

| RTDB key | Page slug |
| --- | --- |
| `organize` | `organize` |
| `folder_list` | `folders` |
| `subfolder` | `subfolders` |
| `video_controls` | `video-controls` |

Live at https://www.picktok.love (`picktok.love` redirects to `www`).

Language choice: a saved pick from the language menu (`localStorage` key `picktok-lang`) wins, otherwise the browser's languages are used, otherwise English. Scripts are in `src/lib/landing/scripts.ts`.

## Editing landing text

All landing copy lives in `src/lib/landing/i18n.ts`, one object per locale.

## Editing guides

Guide text lives in `src/lib/tutorials/content.json` (`locale → page → blocks`). Block types: `title`, `text`, `note`, `image`, `divider`. Images/GIFs are in `static/tutorial-media/`.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in ./build
npm run preview
```

Pushing to `main` redeploys on Render (`render.yaml`).
