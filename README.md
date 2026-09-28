# miraforge-docs

Handbook for Miraforge Studio. The site title is Miraforge Studio. The first page is Welcome, at the root of the site.

Canonical host: [https://docs.miraforge.com](https://docs.miraforge.com)

The company site is separate: [https://miraforge.com](https://miraforge.com).

## Requirements

Node.js 24 and the npm that ships with it.

## Scripts

```bash
npm install
npm run dev         # http://localhost:4322
npm run build       # writes dist/
npm run preview     # serves dist/ on port 4322
npm run brand:sync  # copy tokens and logo from ../miraforge-www/brand/
```

`npm run build` needs no environment variables. The committed copies of the tokens and the logo are the build input. Day-to-day edits do not need `brand:sync`. Run it in the same session as a token or logo change in the marketing repo, then commit both repositories. If `../miraforge-www/brand/` is missing, the script stops with an error.

Search is built with the site. There is no search account and no other client behavior.

## Deploy

Upload the **contents** of `dist/` to the document root for `docs.miraforge.com`.

The current host is Namecheap shared hosting via cPanel. The document root is assigned by the host. Do not upload `node_modules`, this repository, or a nested `dist` folder.
