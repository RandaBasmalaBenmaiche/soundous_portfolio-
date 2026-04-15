# Soundous Chemam - Portfolio Website

A personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean, minimal design with smooth animations and project case study pages.

## Features:

- Single-page portfolio with smooth scroll navigation
- Individual case study pages for each project
- Responsive design (mobile-first)
- Subtle entrance animations using Framer Motion
- Clean, minimal aesthetic with muted cool tones

## Tech Stack

- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

## Running Locally

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd soundous_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deploying to GitHub Pages

### Option 1: Using gh-pages npm package (Recommended)

1. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add the repository URL to `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/<your-repo-name>/'
})
```

4. Deploy:
```bash
npm run deploy
```

5. Go to your GitHub repository → Settings → Pages and ensure the source is set to the `gh-pages` branch.

6. Your site will be live at: `https://<your-username>.github.io/<your-repo-name>/`

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create a new orphan branch:
```bash
git checkout --orphan gh-pages
git reset --hard
```

3. Move the build contents to root:
```bash
mkdir temp
mv dist/* temp/
git clean -fd
mv temp/* .
rm -rf temp
```

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages
```

5. In GitHub Settings → Pages, set the source to `gh-pages` branch.

## Project Structure

```
soundous_portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ResearchExperience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Awards.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectPage.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

To update your portfolio content, edit `src/data/portfolioData.js`:

- `personalInfo` - Your name, title, email, bio
- `researchExperience` - Research positions and projects
- `projects` - Project case studies
- `skills` - Skill categories and items
- `awards` - Awards and distinctions

## License

MIT
"# soundous_portfolio-" 
