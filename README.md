# Portfolio Website

This repository contains a personal portfolio website (frontend + backend). The frontend is a Vite + React + TypeScript app styled with Tailwind CSS. The backend is a small Express + Mongoose API that serves portfolio data from MongoDB Atlas.

Live demo
- Frontend: (deployed to Cloudflare Pages) — your public site URL
- Backend: (deployed to Render) — e.g. `https://portfolio-website-k9t9.onrender.com`

Tech stack
- Frontend: React, Vite, TypeScript, Tailwind CSS
- Backend: Node.js (ES modules), Express, Mongoose (MongoDB Atlas)
- Deployment: Cloudflare Pages (frontend), Render (backend)

Repository layout
```
/
  README.md
  package.json          # frontend (root)
  src/                  # frontend source
  backend/
    index.js            # express + mongoose server
    package.json
    .env (local only)
```

Environment variables
- Backend (on Render or local):
  - `MONGO_URL` — MongoDB Atlas connection string (do NOT commit this to git)
  - `PORT` (optional) — port for Express (Render provides $PORT automatically)
- Frontend (at build time):
  - `VITE_API_URL` — the public base URL of the backend (e.g. `https://portfolio-website-k9t9.onrender.com`). This must be set in your static host's build environment (Cloudflare Pages / Vercel / Netlify) because Vite injects `import.meta.env.VITE_*` at build time.

Local development

1. Install dependencies

Frontend (repo root):
```bash
npm ci
```

Backend (backend folder):
```bash
cd backend
npm ci
```

2. Run locally

Start backend (uses `backend/.env` via dotenv on local runs):
```bash
cd backend
# either use your local .env with MONGO_URL set, or run inline:
MONGO_URL="mongodb+srv://<user>:<password>@.../yourdb?retryWrites=true&w=majority" PORT=5000 npm start
```

Start frontend (in repo root):
```bash
npm run dev
# open http://localhost:5173 (Vite default)
```

Building & deploying

Frontend (Cloudflare Pages / other static host):
- Ensure the environment variable `VITE_API_URL` is set in your host's build settings to your backend URL (e.g. `https://portfolio-website-k9t9.onrender.com`). Then trigger a build/deploy.

Backend (Render recommended for this project):
- Create a Web Service on Render and set Service Root Directory to `backend`.
- Start Command: `npm start`
- Environment variables on Render: set `MONGO_URL` to your Atlas connection string (do NOT include creds in repo). Optionally set `PORT`.

Important: Vite inlines `import.meta.env.VITE_*` during the build. Changing environment variables on the host without rebuilding will not change the values your app uses. Always rebuild the frontend after updating `VITE_API_URL`.

Troubleshooting

- Unexpected token '<' when fetching JSON
  - Cause: frontend requested an HTML page (the static host) instead of the backend API. Usually because `VITE_API_URL` was not set at build time or pointed to the wrong origin.
  - Fix: set `VITE_API_URL` in your host's build environment and rebuild the site.

- Double slash in request (e.g. `https://...//api/portfolio`)
  - Cause: `VITE_API_URL` ended with a trailing slash and the code added another slash before the `/api` path.
  - Fix: remove trailing slash from `VITE_API_URL` in the environment (use `https://example.com` not `https://example.com/`).

- MongoDB TLS / connection issues on hosts (e.g. SSL/TLS handshake errors)
  - Common causes: Atlas IP Access List blocking the host, SRV vs Standard connection string differences, DNS/IPv6 handshake issues.
  - Quick test: temporarily add `0.0.0.0/0` to Atlas Network Access (IP Access List) to verify connectivity from the host. If that fixes it, tighten the rule later.
  - Alternative: use Atlas “Standard connection string” (non-SRV) if SRV causes problems.

- Ensure `MONGO_URL` on the host includes a DB name and valid options, for example:
  `mongodb+srv://user:password@cluster0.oni88ky.mongodb.net/portfolio?retryWrites=true&w=majority`

Safety & secrets
- Never commit `MONGO_URL` or other secrets to your repository. Use the host's environment variables/secret store.
- Rotate credentials if a secret was accidentally committed.

Contact / Next steps
- If you want, I can:
  - Add more robust serverless handlers (Vercel/Cloudflare Workers) to serve the API.
  - Add automated CI (GitHub Actions) to build the frontend with secrets during deploy.

License
- This project is MIT licensed — adapt as needed.
# 🚀 React + Vite

Welcome to the ultimate starter template for React with Vite! Get ready for blazing-fast development with Hot Module Replacement (HMR) and some handy ESLint rules.

## 🔌 Plugins Galore

Choose your weapon for Fast Refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Powered by [Babel](https://babeljs.io/)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Supercharged by [SWC](https://swc.rs/)

## 🚀 Getting Started

Follow these simple steps to get your project up and running:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the development server:**
    ```sh
    npm run dev
    ```

4. **Build for production:**
    ```sh
    npm run build
    ```

5. **Preview the production build:**
    ```sh
    npm run serve
    ```

## 🏗️ Project Structure

Here's a quick overview of the project layout:

```plaintext
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```

## 📚 Learn More

Dive deeper into the world of Vite and React with these awesome resources:

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Vite Plugins](https://vitejs.dev/plugins/)
- [React Router](https://reactrouter.com/)
- [React Context](https://reactjs.org/docs/context.html)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Aceternity UI](https://ui.aceternity.com/)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy coding! 🎉