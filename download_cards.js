import fs from 'fs';

const files = [
  '00_Fool.jpg', '01_Magician.jpg', '02_High_Priestess.jpg', '03_Empress.jpg', '04_Emperor.jpg',
  '05_Hierophant.jpg', '06_Lovers.jpg', '07_Chariot.jpg', '08_Strength.jpg', '09_Hermit.jpg',
  '10_Wheel_of_Fortune.jpg', '11_Justice.jpg', '12_Hanged_Man.jpg', '13_Death.jpg', '14_Temperance.jpg',
  '15_Devil.jpg', '16_Tower.jpg', '17_Star.jpg', '18_Moon.jpg', '19_Sun.jpg', '20_Judgement.jpg', '21_World.jpg'
];

const dir = './public/cards';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function downloadAll() {
  for (const f of files) {
    const res = await fetch("https://raw.githubusercontent.com/mixvlad/TarotCards/main/tarot/rider-waite/720px/" + f);
    if (!res.ok) {
        console.error("Failed to download", f, res.status);
        continue;
    }
    const buf = await res.arrayBuffer();
    fs.writeFileSync(`${dir}/${f}`, Buffer.from(buf));
    console.log(`Downloaded ${f}`);
  }
}

downloadAll();
