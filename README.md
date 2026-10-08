# Abhijit R Portfolio

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## Edit content

All visible copy, links, skills, projects, leadership, education and certifications live in [`src/data/content.js`](./src/data/content.js). Edit that file to update the site without changing component markup. Empty link fields are intentionally not rendered.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the framework preset as Vite, with `npm run build` as the build command and `dist` as the output directory.
4. Deploy. Vercel will use the root `/` base configured in `vite.config.js`.

## Deploy to GitHub Pages

1. Update the repository name and owner in `.github/workflows/deploy.yml` only if your setup requires it.
2. Push to `main`; the workflow builds `dist` and publishes it to GitHub Pages.
3. In repository Settings → Pages, select GitHub Actions as the source.

# Portfolio
