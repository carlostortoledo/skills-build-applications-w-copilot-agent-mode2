# Octofit Tracker Frontend

This presentation tier is a React 19 + Vite app that uses `react-router-dom` to navigate between the API-backed collections.

## Environment configuration

Define `VITE_CODESPACE_NAME` before starting the frontend so the app can call the backend through the public Codespaces URL on port 8000.

Example `.env.local`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is defined, collection requests are sent to:

```text
https://<VITE_CODESPACE_NAME>-8000.app.github.dev/api/<collection>/
```

If `VITE_CODESPACE_NAME` is unset, the UI avoids generating broken `https://undefined-8000...` URLs and shows a configuration warning instead.

## Scripts

```bash
npm run dev --prefix octofit-tracker/frontend
npm run build --prefix octofit-tracker/frontend
```


