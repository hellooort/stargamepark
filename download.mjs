import fs from 'fs';
import path from 'path';
import http from 'http';

const download = (url, dest) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(dest);
  http.get(url, response => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      return download(response.headers.location, dest).then(resolve).catch(reject);
    }
    if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close(resolve);
    });
  }).on('error', err => {
    fs.unlink(dest, () => {});
    reject(err);
  });
});

const content = fs.readFileSync('./lib/siteData.ts', 'utf-8');
const regex = /\/bin\/minihome\/upload\/[^`'"]+/g;
const paths = [...new Set([...content.matchAll(regex)].map(m => m[0]))];

fs.mkdirSync('./public/images/crawled', { recursive: true });

async function run() {
  let updatedContent = content;
  for (let i=0; i<paths.length; i++) {
    const p = paths[i];
    const url = `http://stargamepark.com${p}`;
    const originalName = path.basename(p).replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `img_${i}_${originalName}`;
    const dest = `./public/images/crawled/${filename}`;

    console.log(`Downloading ${url} ...`);
    try {
        await download(url, dest);
        const searchStr = `\${BASE}${p}`;
        updatedContent = updatedContent.split(searchStr).join(`/images/crawled/${filename}`);
    } catch (e) {
        console.error(e);
    }
  }

  fs.writeFileSync('./lib/siteData.ts', updatedContent);
  console.log('Done!');
}
run();
