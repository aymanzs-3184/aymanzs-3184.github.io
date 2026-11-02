# Ayman Z.S Portfolio

The site is three files plus an optional folder:

| File | What it's for |
|---|---|
| `content.js` | **All text and links. This is the only file you need to edit.** |
| `index.html` | Layout and design. Leave it alone unless you want to change the look. |
| `resume.pdf` | The resume the "Download PDF" button opens. Replace it with your latest version (keep the name). |
| `thumbnails/` | Optional project images. |

## Adding or changing a project link

1. Open `content.js` in any text editor (VS Code is fine).
2. Find the project, for example `id: "latch"`.
3. Paste the URL between the quotes on the matching line inside its `links: { ... }` block:

```js
links: {
  github: "https://github.com/your-team/latch",   // GitHub button
  live: "",                                        // Live app button (empty = hidden)
  video: "https://youtu.be/AbCdEfGhIjK",           // Demo video button + play badge on the image
  slides: "https://docs.google.com/...",           // Slides button
  notebook: "",                                    // Notebook button
  extra: "https://example.com/report.pdf",         // any other link...
  extraLabel: "Report",                            // ...and the text on its button
},
```

- A link left as `""` hides its button, so you can never get a broken button.
- The first filled-in link gets the green (main) button. The order is live app, GitHub, demo video, slides, notebook, extra.
- Keep the quotes and the comma at the end of each line. If the page goes blank after an edit, a missing quote or comma is almost always why.

## Adding thumbnails and demo videos

- **Video:** set `links.video`. If it's a YouTube link and you haven't set a thumbnail, the YouTube preview image is used automatically, with a "Watch demo" badge. Clicking the image opens the video.
- **Image:** save a 16:9 screenshot in `thumbnails/` (e.g. `thumbnails/latch.png`), then set `thumbnail: "thumbnails/latch.png",` on that project.
- With neither, the card shows generated cover art.

## Other edits in `content.js`

- **Order:** projects appear in the order they're listed. Projects with `featured: true` always come first.
- **New project:** copy a whole `{ ... },` block, paste it below, and give it a new `id`.
- **Skills filter:** built automatically from each project's `tech` list, with project counts. Skills used in only one project sit behind "+ more skills".
- **Experience, certificates, strengths, interests:** plain lists near the bottom of the file.

## Putting it online for free (GitHub Pages)

1. On GitHub, create a new **public** repository named exactly `aymanzs-3184.github.io`.
2. Click **Add file → Upload files** and drag in `index.html`, `content.js`, `resume.pdf` and the `thumbnails` folder. Commit.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, then branch `main` and folder `/ (root)`. Save.
4. After a minute or two, the site is live at **https://aymanzs-3184.github.io**, which is the address already on your resume.

To update it later, edit `content.js` on GitHub (open the file → pencil icon → edit → Commit changes). The site refreshes within a minute or two.

To preview on your own computer, double-click `index.html`. Fonts need an internet connection; everything else works offline.
