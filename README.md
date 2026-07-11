# ⚡ Prathamesh Mane — Portfolio

A Marvel Infinity Gauntlet–themed personal portfolio. Instead of a static one-pager, the site is built around a small interaction system: six Infinity Stones are hidden across the sections, a custom cursor renders as the Gauntlet itself, and collecting all six triggers a full Thanos-snap disintegration effect complete with sound.

**🔗 Live site:** [prathamesh0901.github.io/Prathamesh-Portfolio](https://prathamesh0901.github.io/Prathamesh-Portfolio/)

---

## ✨ Features

- **Infinity Stone collection mechanic** — six collectible stones (Space, Mind, Reality, Power, Time, Soul) placed throughout the page; state persists as you scroll and interact
- **Custom Gauntlet cursor** — replaces the default cursor with an animated Gauntlet that reacts to stone collection progress
- **Snap disintegration effect** — custom `DisintegrateText` component and particle system that "dusts away" content, Thanos-snap style, once the Gauntlet is complete
- **Starfield & particle backgrounds** — built with `tsparticles` for ambient motion without hurting performance
- **Interactive sections** — About, Skills, Projects, Experience, Education, Achievements, and a working Contact form (via EmailJS) — no dead links or placeholder text
- **Sound design** — distinct audio cues for an empty vs. completed Gauntlet snap, triggered only on genuine interaction events (no autoplay)
- **Fully responsive**, smooth-scrolling, animated with `framer-motion`

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Framework | React 19, Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion, tsparticles |
| Forms/Email | EmailJS |
| Fonts | Fontsource (Anton, Space Grotesk) |
| Deployment | GitHub Pages (`gh-pages`) |
| Linting | ESLint |

## 📁 Project Structure

```
src/
├── components/       # Section components (AboutMe, Skills, Projects, etc.)
│                      # + interaction components (CursorGauntlet, SnapManager,
│                      #   DisIntegrateText, StarField, SnapParticles)
├── hooks/             # useCollectedStones, useSnapGesture, useEmptySnapSound
├── utils/             # infinityStones data, soundController
└── App.jsx            # Section composition & layout
public/
├── stones/            # Infinity Stone images
├── projects/          # Project screenshots
├── logos/              # Company logos for Experience section
└── audio/             # Snap sound effects
```

## 🚀 Running Locally

```bash
git clone https://github.com/Prathamesh0901/Prathamesh-Portfolio.git
cd Prathamesh-Portfolio
npm install
npm run dev
```

Then open `http://localhost:5173`.

### Build & Deploy

```bash
npm run build     # production build to /dist
npm run deploy     # deploy to GitHub Pages
```

## 📬 Contact

- **Email:** prathameshmane3622@gmail.com
- **LinkedIn:** [prathameshmane09](https://www.linkedin.com/in/prathameshmane09/)
- **GitHub:** [Prathamesh0901](https://github.com/Prathamesh0901/)
- **LeetCode:** [Prathamesh0901](https://leetcode.com/u/Prathamesh0901/)

---

*Built to be a little more memorable than a template. Feel free to fork it, break the Gauntlet, or just say hi through the contact form.*
