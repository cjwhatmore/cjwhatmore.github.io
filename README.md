# Cooper's engineering portfolio

Simple static HTML/CSS/JavaScript site, deployable with the supplied GitHub Pages workflow. No build step or dependencies.

## File structure

- `index.html` — homepage and sections
- `style.css` — all typography, colors, layout, and responsive styles
- `script.js` — updates footer year
- `projects/` — three editable project pages
- `assets/` — put images and your resume here
- `.github/workflows/deploy.yml` — copied from the supplied workflow, unchanged

## Publish

1. Add **the contents of this folder** to the root of your GitHub repository. Keep `.github/workflows/deploy.yml` in that exact location (the `.github` folder may be hidden by some file browsers).
2. The supplied workflow runs on pushes to **`master`**. If the repo uses `main` instead, edit `deploy.yml` and change `- master` to `- main`.
3. Go to repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Commit/push changes to the selected branch. Open **Actions** to see the deployment job, then follow the Pages URL shown there or under Settings → Pages.
5. For a project repository, the site address is usually `https://YOUR-USERNAME.github.io/REPOSITORY/`. For a repository named `YOUR-USERNAME.github.io`, it is usually `https://YOUR-USERNAME.github.io/`.

## Personalize before sharing

- Search `index.html` for `your.email@example.com` and replace both occurrences.
- Add your PDF as `assets/resume.pdf`. In `index.html`, find the `resume` section and follow the adjacent HTML comment to activate the download link.
- Update biographies, project status, and any details to match your actual work.
- Add pictures in `assets/` and replace the CSS illustrations as desired.
- Update the LinkedIn URL if it changes.

## Local preview

Double-click `index.html` to open it in a browser. All paths are relative so the same files work on GitHub Pages, including project pages.
