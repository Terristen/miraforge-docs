import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const brandRoot = resolve(docsRoot, '../miraforge-www/brand');
const tokens = resolve(brandRoot, 'tokens.css');
const logo = resolve(brandRoot, 'logo/miraforge-studio-splash.jpg');

if (!existsSync(tokens) || !existsSync(logo)) {
  console.error(`brand:sync: sibling brand directory not found at ${brandRoot}`);
  console.error(
    'Expected ../miraforge-www/brand/tokens.css and ../miraforge-www/brand/logo/miraforge-studio-splash.jpg.',
  );
  process.exit(1);
}

const stylesDir = resolve(docsRoot, 'src/styles');
const logoDir = resolve(docsRoot, 'src/assets/brand');
const publicDir = resolve(docsRoot, 'public');
mkdirSync(stylesDir, { recursive: true });
mkdirSync(logoDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

cpSync(tokens, resolve(stylesDir, 'brand.css'));
cpSync(logo, resolve(logoDir, 'miraforge-studio-splash.jpg'));
cpSync(logo, resolve(publicDir, 'favicon.jpg'));

console.log('brand:sync: copied tokens and logo from ../miraforge-www/brand/');
