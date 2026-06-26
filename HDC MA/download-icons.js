import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const icons = {
  nextjs: 'nextdotjs',
  mysql: 'mysql',
  postgresql: 'postgresql',
  firebase: 'firebase',
  git: 'git',
  linux: 'linux'
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base = path.join(__dirname, 'src', 'assets', 'images');

const promises = Object.entries(icons).map(([file, icon]) => {
  const url = `https://cdn.simpleicons.org/${icon}`;
  const dest = path.join(base, `${file}.svg`);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed ${url}: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        fs.writeFileSync(dest, Buffer.concat(chunks));
        resolve(`${file}.svg saved`);
      });
    }).on('error', reject);
  });
});

Promise.all(promises)
  .then(results => {
    console.log(results.join('\n'));
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
