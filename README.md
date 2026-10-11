# Satvik Kale Portfolio

A responsive personal portfolio for Satvik Kale, built with React, JavaScript, Lucide React, and the existing Create React App build pipeline.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000.

## Customize

- Add or update project entries in `src/data/projects.js`.
- Add real `liveDemo` and `github` URLs there. Empty URLs automatically hide the action buttons.
- Update service copy and pricing in `src/data/services.js`.
- Update the skill groups in `src/data/skills.js`.
- Set `socialLinks.linkedin` and `socialLinks.github` in `src/App.js`.
- Add a resume PDF as `public/Satvik-Kale-Resume.pdf`, then add a download link where needed.
- Replace the CSS project visuals with real screenshots by adding image URLs or assets in each project entry and updating the project card markup.

The contact form uses a validated `mailto:` fallback. It does not claim to store or submit data to a backend.

## Production build

```bash
npm run build
```

## Deploy on Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep the framework preset as Create React App.
4. Use `npm run build` as the build command and `build` as the output directory.
5. Deploy.

The project can also be deployed with any static host that serves the generated `build` directory.
