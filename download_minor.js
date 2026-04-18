import fs from 'fs';

const suits = [
  { prefix: 'Cups', name: 'Cups' },
  { prefix: 'Pents', name: 'Pentacles' },
  { prefix: 'Swords', name: 'Swords' },
  { prefix: 'Wands', name: 'Wands' }
];

const values = [
  { num: '01', name: 'Ace' },
  { num: '02', name: 'Two' },
  { num: '03', name: 'Three' },
  { num: '04', name: 'Four' },
  { num: '05', name: 'Five' },
  { num: '06', name: 'Six' },
  { num: '07', name: 'Seven' },
  { num: '08', name: 'Eight' },
  { num: '09', name: 'Nine' },
  { num: '10', name: 'Ten' },
  { num: '11', name: 'Page' },
  { num: '12', name: 'Knight' },
  { num: '13', name: 'Queen' },
  { num: '14', name: 'King' }
];

const dir = './public/cards';

const minorCards = [];

async function main() {
  for (const suit of suits) {
    for (const val of values) {
      const filename = `${suit.prefix}${val.num}.jpg`;
      const url = `https://raw.githubusercontent.com/mixvlad/TarotCards/main/tarot/rider-waite/720px/${filename}`;
      
      const res = await fetch(url);
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(`${dir}/${filename}`, Buffer.from(buf));
        console.log(`Downloaded ${filename}`);
      } else {
        console.error(`Failed to download ${filename}`, res.status);
      }
      
      const cardId = `${val.name.toLowerCase()}-of-${suit.name.toLowerCase()}`;
      minorCards.push({
        id: cardId,
        name: `${val.name} of ${suit.name}`,
        arcana: 'minor',
        suit: suit.name.toLowerCase(),
        meaning_upright: 'General positive aspects or focus for this minor arcana card.',
        meaning_reversed: 'General inverted aspects, delays, or internal focus for this minor arcana card.',
        description: `The ${val.name} of ${suit.name} describes themes associated with the suit (e.g. emotion, material, intellect, action).`,
        image: `/cards/${filename}`
      });
    }
  }
  
  fs.writeFileSync('minorCards.json', JSON.stringify(minorCards, null, 2));
  console.log("Done generating minorCards.json");
}

main();
