import fs from 'fs';

const existingPath = '/app/applet/src/constants/tarotCards.ts';
let content = fs.readFileSync(existingPath, 'utf8');

const minorCards = JSON.parse(fs.readFileSync('minorCards.json', 'utf8'));
const minorString = minorCards.map(c => JSON.stringify(c, null, 2)).join(',\n  ');

content = content.replace(/\];\n?$/, `  ,\n  ${minorString}\n];\n`);
fs.writeFileSync(existingPath, content);
console.log("Updated tarotCards.ts with Minor Arcana.");
