# picktok_web

PickTok website: landing page (`/`) and the in-app tutorial pages, built with SvelteKit and prerendered to static HTML for a Render Static Site.

## Routes

| URL | What |
| --- | --- |
| `/` | Landing page |
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
