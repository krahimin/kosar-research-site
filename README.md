# Kosar Rahimi — research website

A dependency-free, responsive personal academic website. Open `index.html` directly, or serve this folder with `python3 -m http.server 8000` and visit http://localhost:8000.

## Edit content

Edit **content.js**. Text is plain text, safely rendered; do not enter HTML. All supplied titles and dates are included. Unprovided content is empty or explicitly marked as a placeholder. No scientific descriptions, awards, publications, or qualifications have been inferred.

- Profile: add `bio` and social URLs. Email uses `mailto:your-address`. Google Scholar uses the supplied profile URL.
- Projects: add 1–4 strings to `bullets` (no fixed count). `ongoing: []` or `null` hides the subsection; add 1–3 strings to display it. Empty bullets are hidden.
- `paper`, `poster`, `conference`, `github`, and certificate `url` values are optional. Empty values hide buttons. Use full https:// URLs externally; use `assets/posters/filename.pdf` for local posters. Links open new tabs. Only set PDF paths once those files exist.
- Graduate Research Assistant overview: edit `work[0].overview` and `bullets`. The broad overview lives in Work Experience, separate from the individual Ph.D. projects. `groupUrl` links to GHZ Lab. `poster: 'assets/work/phd.pdf'` shows “View Research Poster”; an empty string hides it. The PDF is never embedded.
- Optional figures/photos: use `image: null` to omit them; provide a path to show them. Add descriptive `imageAlt` text. All five Ph.D. projects and the master’s project share a two-column figure layout, stacked on mobile. Missing or unconfigured project images are hidden, with text using the available width. Figures use a consistent frame with no cropping or distortion.
- Degrees: edit `dates`, optional descriptions, and `researchTitle` / `researchLabel`. An empty title hides the entire thesis/dissertation line, including its label. The Ph.D. uses 2021 – Present with no expected end date.
- Certificates, side projects, conferences and awards: replace blank template entries with your own facts. Copy objects to add entries; use `[]` to remove entries. Example training courses from the brief are not represented as earned credentials.
- Conferences: edit the three category arrays; entries support `year`, `name`, `location`, `title`, optional `note`, `poster`, and `url`. Photos are intentionally not attached to entries.
- Awards sort newest first by numeric year. Optional `institution`, `description`, and `linkedin` fields disappear when empty. Only supplied LinkedIn URLs are configured; the Welch award uses the supplied LinkedIn post.
- Independent galleries: `conferenceGallery` and `awardGallery` list `{ image, imageAlt }` objects. All configured conference and award images display. Galleries remain separate from individual list entries. Conference and award images support an optional `caption`, shown over the photo on hover/keyboard focus and always visible on touch/mobile. Current captions use the supplied filenames. Reorder or replace items to change the selection; `[]` removes the gallery and lets the list use the available width. Use browser-compatible JPG/PNG/WebP files, not HEIC.
- Work and leadership entries accept additional objects, optional dates and photos. Work entries independently support optional `image` (`null` omits it), `bullets` (`[]` omits the list without a placeholder), and `linkedin` (empty hides the button; a full URL shows “LinkedIn Post” opening in a new tab). Personal captions are optional.

## Assets

Directories are tracked with `.gitkeep` files. Missing images are removed completely; no broken-image placeholders are shown. Add your files at the paths already configured:

```
assets/images/profile/profile.jpeg
assets/images/projects/MM-OPES.png
assets/images/projects/RRM-RGG.png
assets/images/projects/FUS-RNA.png
assets/images/projects/multidomains.png
assets/images/projects/Myc.png
assets/images/projects/master.png
assets/work/BMS.png
assets/work/phd.pdf
assets/work/phd-preview.png
assets/images/personal/marathon.JPG
assets/images/personal/Daf.png
assets/images/personal/glacier_national_park.jpeg
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

Work assets: `assets/work/BMS.png` is the internship graphic; `assets/work/phd.pdf` is the research overview poster. These were copied from the supplied files in `assets/images/work/`; the originals are retained.

The research poster preview is a static PNG exported from `assets/work/phd.pdf`; update both files together if the poster changes. The preview and “View Research Poster” button open the PDF in a new tab; no PDF viewer is embedded. Both work entries use matching figure-left/text-right layouts and stack on mobile. Empty certificate template entries are hidden while the Certificates & Training heading remains.

Leadership & Outreach: edit the three arrays in `leadership`. Dates accept a string or an array of date ranges. Optional `institution`, `description`, and `linkedin` fields stay hidden when empty. `group` labels the Student Mentoring entries. `leadershipGallery` holds the independent outreach images and editable hover `caption` labels (initially based on the provided filenames); captions also appear on keyboard focus and remain visible on touch/mobile. Remove an image entry or clear its path to omit it.

Certificates & Training uses compact entries in `certificates`: `title`, `provider`, `description`, optional `date`, `url`, `linkLabel`, and `relatedLinks`. The micro-credential’s `courses` array contains plain-text titles, empty editable `url` fields for individual credentials, and optional `relatedLinks` objects (`label`, `url`). Empty URLs render no button; unlinked course titles remain plain text.

Certificate gallery: `certificateGallery` holds the independent certificate images and editable overlay captions. FEP+ supports separate `linkedin` / `linkedinLabel` and `url` / `linkLabel` fields.
