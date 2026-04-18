const crypto = require("crypto");
const files = [
  "RWS_Tarot_00_Fool.jpg",
  "RWS_Tarot_01_Magician.jpg",
  "RWS_Tarot_02_High_Priestess.jpg",
  "RWS_Tarot_03_Empress.jpg",
  "RWS_Tarot_04_Emperor.jpg",
  "RWS_Tarot_05_Hierophant.jpg",
  "RWS_Tarot_06_Lovers.jpg",
  "RWS_Tarot_07_Chariot.jpg",
  "RWS_Tarot_08_Strength.jpg",
  "RWS_Tarot_09_Hermit.jpg",
  "RWS_Tarot_10_Wheel_of_Fortune.jpg",
  "RWS_Tarot_11_Justice.jpg",
  "RWS_Tarot_12_Hanged_Man.jpg",
  "RWS_Tarot_13_Death.jpg",
  "RWS_Tarot_14_Temperance.jpg",
  "RWS_Tarot_15_Devil.jpg",
  "RWS_Tarot_16_Tower.jpg",
  "RWS_Tarot_17_Star.jpg",
  "RWS_Tarot_18_Moon.jpg",
  "RWS_Tarot_19_Sun.jpg",
  "RWS_Tarot_20_Judgement.jpg",
  "RWS_Tarot_21_World.jpg"
];
files.forEach(f => {
  const hash = crypto.createHash("md5").update(f).digest("hex");
  console.log(`https://upload.wikimedia.org/wikipedia/commons/${hash.substring(0,1)}/${hash.substring(0,2)}/${f}`);
});
