# Kosar Rahimi — research website

A dependency-free, responsive personal academic website. Open `index.html` directly, or serve this folder with `python3 -m http.server 8000` and visit http://localhost:8000.

## Edit content

Edit **content.js**. Text is plain text, safely rendered; do not enter HTML. All supplied titles and dates are included. Unprovided content is empty or explicitly marked as a placeholder. No scientific descriptions, awards, publications, or qualifications have been inferred.

- Profile: add `bio` and social URLs. Email uses `mailto:your-address`. Unconfigured social names are noninteractive placeholders.
- Projects: add 1–4 strings to `bullets` (no fixed count). `ongoing: []` shows an editable-content placeholder; add 1–3 strings, or set `ongoing: null` to remove the subsection completely.
- `paper`, `poster`, `conference`, `github`, and certificate `url` values are optional. Empty values hide buttons. Use full https:// URLs externally; use `assets/posters/filename.pdf` for local posters. Links open new tabs. Only set PDF paths once those files exist.
- Overview: add the text and image; `poster: ''` hides its optional button.
- Optional figures/photos: use `image: null` to omit them; provide a path to show them. Add descriptive `imageAlt` text. Project 4 and the master’s project automatically become two-column layouts when a figure is added.
- Degrees: add dates, optional descriptions, and optional `researchTitle` for Ph.D./M.Sc.
- Certificates, side projects, conferences and awards: replace blank template entries with your own facts. Copy objects to add entries; use `[]` to remove entries. Example training courses from the brief are not represented as earned credentials.
- Conferences: `photo` and `thumbnail` are independently optional. Use `poster` for the PDF and `url` for a conference link.
- Awards sort in reverse chronological order by numeric year; unknown years appear last.
- Work and leadership entries accept additional objects, optional dates and photos. Personal captions are optional.

## Assets

Directories are tracked with `.gitkeep` files. Missing images show a neutral CSS placeholder, never a broken-image icon. These placeholders are deliberately not fabricated portraits or scientific figures. Add your files at the paths already configured:

```
assets/images/profile/kosar-profile.jpg
assets/images/projects/phd-overview.jpg
assets/images/projects/rna-folding.jpg
assets/images/projects/protein-rna.jpg
assets/images/projects/multidomain-protein.jpg
assets/images/work/bms.jpg
assets/images/personal/marathon.jpg
assets/images/personal/daf.jpg
assets/images/personal/hiking.jpg
```

Additional folders: `education`, `conferences`, `awards`, and `outreach` under `assets/images/`.

PDFs go in `assets/posters/`, for example `phd-overview.pdf`, `rna-folding-poster.pdf`, `protein-rna-poster.pdf`, and `multidomain-protein-poster.pdf`. No dummy PDFs are linked. Image proportions are preserved with `object-fit: contain`; scientific figures retain their natural aspect ratio.

## Styling and implementation

- `index.html`: metadata, navigation, script loading, footer.
- `content.js`: editable content only.
- `site.js`: reusable renderers, missing-image fallbacks, mobile menu, active section tracking.
- `styles.css`: typography, colors, spacing, desktop/mobile layout.

No build step, tracking, external fonts, framework, CV download, or separate publications page. Content rendering requires JavaScript. All assets and scripts use relative paths, compatible with GitHub Pages repository subpaths.

## Repository visibility and publishing

This repository is private during development and review. Do not make it public, enable GitHub Pages, or configure a deployment until Kosar explicitly requests it.

### Future GitHub Pages setup (only when explicitly requested)

Upload the contents of this folder to a GitHub repository. In Settings → Pages, choose deployment from a branch, select your branch and `/ (root)`, and save. For a personal root-domain site, use your `USERNAME.github.io` repository; this site also works in a regular project repository. No deployment has been performed by this build.

Design reference supplied by the owner: https://mehradans92.github.io/ . No text or images copied from that site.
