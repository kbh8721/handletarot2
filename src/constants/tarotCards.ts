export interface TarotCard {
  id: string;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'cups' | 'pentacles' | 'swords' | 'wands';
  value?: string;
  meaning_upright: string;
  meaning_reversed: string;
  description: string;
  image: string;
}

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 'the-fool',
    name: 'The Fool',
    arcana: 'major',
    meaning_upright: 'New beginnings, optimism, trust in life',
    meaning_reversed: 'Recklessness, risk-taking, inconsiderateness',
    description: 'The Fool is the first card of the Major Arcana, representing a journey into the unknown.',
    image: '/cards/00_Fool.jpg'
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    arcana: 'major',
    meaning_upright: 'Action, power, manifestation',
    meaning_reversed: 'Manipulation, poor planning, untapped talents',
    description: 'The Magician signifies the ability to translate ideas into reality.',
    image: '/cards/01_Magician.jpg'
  },
  {
    id: 'the-high-priestess',
    name: 'The High Priestess',
    arcana: 'major',
    meaning_upright: 'Inaction, mystery, intuition',
    meaning_reversed: 'Gossip, hidden motives, superficiality',
    description: 'The High Priestess represents the subconscious mind and inner knowledge.',
    image: '/cards/02_High_Priestess.jpg'
  },
  {
    id: 'the-empress',
    name: 'The Empress',
    arcana: 'major',
    meaning_upright: 'Fertility, nature, abundance',
    meaning_reversed: 'Creative block, dependence on others',
    description: 'The Empress symbolizes beauty, nature, and the nurturing principle.',
    image: '/cards/03_Empress.jpg'
  },
  {
    id: 'the-emperor',
    name: 'The Emperor',
    arcana: 'major',
    meaning_upright: 'Structure, stability, authority',
    meaning_reversed: 'Tyranny, rigidity, coldness',
    description: 'The Emperor represents strong governance and paternal power.',
    image: '/cards/04_Emperor.jpg'
  },
  {
    id: 'the-hierophant',
    name: 'The Hierophant',
    arcana: 'major',
    meaning_upright: 'Tradition, conformity, morality',
    meaning_reversed: 'Rebellion, restriction, new methods',
    description: 'The Hierophant represents spiritual tradition and formal education.',
    image: '/cards/05_Hierophant.jpg'
  },
  {
    id: 'the-lovers',
    name: 'The Lovers',
    arcana: 'major',
    meaning_upright: 'Partnerships, duality, union',
    meaning_reversed: 'Disharmony, imbalance, misalignment of values',
    description: 'The Lovers card represents deep connection and important choices.',
    image: '/cards/06_Lovers.jpg'
  },
  {
    id: 'the-chariot',
    name: 'The Chariot',
    arcana: 'major',
    meaning_upright: 'Direction, control, willpower',
    meaning_reversed: 'Lack of control, aggression, self-discipline',
    description: 'The Chariot signifies overcoming obstacles through determination.',
    image: '/cards/07_Chariot.jpg'
  },
  {
    id: 'strength',
    name: 'Strength',
    arcana: 'major',
    meaning_upright: 'Inner strength, bravery, compassion',
    meaning_reversed: 'Self-doubt, weakness, insecurity',
    description: 'Strength represents the power of the human spirit over instinct.',
    image: '/cards/08_Strength.jpg'
  },
  {
    id: 'the-hermit',
    name: 'The Hermit',
    arcana: 'major',
    meaning_upright: 'Contemplation, search for truth, inner guidance',
    meaning_reversed: 'Loneliness, isolation, paranoia',
    description: 'The Hermit represents the need for introspection and withdrawal.',
    image: '/cards/09_Hermit.jpg'
  },
  {
    id: 'wheel-of-fortune',
    name: 'Wheel of Fortune',
    arcana: 'major',
    meaning_upright: 'Change, fate, cycles',
    meaning_reversed: 'Bad luck, resistance to change, breaking cycles',
    description: 'The Wheel of Fortune represents the ever-changing nature of life.',
    image: '/cards/10_Wheel_of_Fortune.jpg'
  },
  {
    id: 'justice',
    name: 'Justice',
    arcana: 'major',
    meaning_upright: 'Cause and effect, clarity, truth',
    meaning_reversed: 'Dishonesty, unaccountability, unfairness',
    description: 'Justice signifies that the most fair outcome will occur.',
    image: '/cards/11_Justice.jpg'
  },
  {
    id: 'the-hanged-man',
    name: 'The Hanged Man',
    arcana: 'major',
    meaning_upright: 'Sacrifice, release, martyrdom',
    meaning_reversed: 'Stalling, needless sacrifice, fear of change',
    description: 'The Hanged Man represents a pause and a new perspective.',
    image: '/cards/12_Hanged_Man.jpg'
  },
  {
    id: 'death',
    name: 'Death',
    arcana: 'major',
    meaning_upright: 'Endings, transition, metamorphosis',
    meaning_reversed: 'Resistance to change, inability to move on',
    description: 'Death signifies the end of a major phase and the start of another.',
    image: '/cards/13_Death.jpg'
  },
  {
    id: 'temperance',
    name: 'Temperance',
    arcana: 'major',
    meaning_upright: 'Middle path, patience, finding meaning',
    meaning_reversed: 'Extremes, excess, lack of balance',
    description: 'Temperance represents harmony and emotional stability.',
    image: '/cards/14_Temperance.jpg'
  },
  {
    id: 'the-devil',
    name: 'The Devil',
    arcana: 'major',
    meaning_upright: 'Addiction, enlightenment, powerlessness',
    meaning_reversed: 'Detachment, freedom, restoring control',
    description: 'The Devil represents the shadow self and material attachments.',
    image: '/cards/15_Devil.jpg'
  },
  {
    id: 'the-tower',
    name: 'The Tower',
    arcana: 'major',
    meaning_upright: 'Sudden change, upheaval, chaos',
    meaning_reversed: 'Leaking, avoiding disaster, fear of change',
    description: 'The Tower represents a sudden revelation that destroys illusions.',
    image: '/cards/16_Tower.jpg'
  },
  {
    id: 'the-star',
    name: 'The Star',
    arcana: 'major',
    meaning_upright: 'Hope, faith, rejuvenation',
    meaning_reversed: 'Lack of faith, despair, discouragement',
    description: 'The Star signifies hope and guidance for the future.',
    image: '/cards/17_Star.jpg'
  },
  {
    id: 'the-moon',
    name: 'The Moon',
    arcana: 'major',
    meaning_upright: 'Unconscious, illusions, intuition',
    meaning_reversed: 'Release of fear, repressed emotion, clarity',
    description: 'The Moon represents the realm of dreams and the hidden.',
    image: '/cards/18_Moon.jpg'
  },
  {
    id: 'the-sun',
    name: 'The Sun',
    arcana: 'major',
    meaning_upright: 'Joy, success, celebration',
    meaning_reversed: 'Negativity, depression, failure',
    description: 'The Sun signifies vitality, success, and positive energy.',
    image: '/cards/19_Sun.jpg'
  },
  {
    id: 'judgement',
    name: 'Judgement',
    arcana: 'major',
    meaning_upright: 'Reflection, reckoning, awakening',
    meaning_reversed: 'Self-doubt, refusal of self-examination',
    description: 'Judgement represents self-evaluation and rebirth.',
    image: '/cards/20_Judgement.jpg'
  },
  {
    id: 'the-world',
    name: 'The World',
    arcana: 'major',
    meaning_upright: 'Fulfillment, harmony, completion',
    meaning_reversed: 'Incompletion, no closure, lack of success',
    description: 'The World signifies the end of a long journey and total fulfillment.',
    image: '/cards/21_World.jpg'
  }
  ,
  {
  "id": "ace-of-cups",
  "name": "Ace of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ace of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups01.jpg"
},
  {
  "id": "two-of-cups",
  "name": "Two of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Two of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups02.jpg"
},
  {
  "id": "three-of-cups",
  "name": "Three of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Three of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups03.jpg"
},
  {
  "id": "four-of-cups",
  "name": "Four of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Four of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups04.jpg"
},
  {
  "id": "five-of-cups",
  "name": "Five of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Five of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups05.jpg"
},
  {
  "id": "six-of-cups",
  "name": "Six of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Six of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups06.jpg"
},
  {
  "id": "seven-of-cups",
  "name": "Seven of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Seven of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups07.jpg"
},
  {
  "id": "eight-of-cups",
  "name": "Eight of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Eight of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups08.jpg"
},
  {
  "id": "nine-of-cups",
  "name": "Nine of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Nine of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups09.jpg"
},
  {
  "id": "ten-of-cups",
  "name": "Ten of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ten of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups10.jpg"
},
  {
  "id": "page-of-cups",
  "name": "Page of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Page of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups11.jpg"
},
  {
  "id": "knight-of-cups",
  "name": "Knight of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Knight of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups12.jpg"
},
  {
  "id": "queen-of-cups",
  "name": "Queen of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Queen of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups13.jpg"
},
  {
  "id": "king-of-cups",
  "name": "King of Cups",
  "arcana": "minor",
  "suit": "cups",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The King of Cups describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Cups14.jpg"
},
  {
  "id": "ace-of-pentacles",
  "name": "Ace of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ace of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents01.jpg"
},
  {
  "id": "two-of-pentacles",
  "name": "Two of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Two of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents02.jpg"
},
  {
  "id": "three-of-pentacles",
  "name": "Three of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Three of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents03.jpg"
},
  {
  "id": "four-of-pentacles",
  "name": "Four of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Four of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents04.jpg"
},
  {
  "id": "five-of-pentacles",
  "name": "Five of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Five of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents05.jpg"
},
  {
  "id": "six-of-pentacles",
  "name": "Six of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Six of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents06.jpg"
},
  {
  "id": "seven-of-pentacles",
  "name": "Seven of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Seven of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents07.jpg"
},
  {
  "id": "eight-of-pentacles",
  "name": "Eight of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Eight of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents08.jpg"
},
  {
  "id": "nine-of-pentacles",
  "name": "Nine of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Nine of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents09.jpg"
},
  {
  "id": "ten-of-pentacles",
  "name": "Ten of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ten of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents10.jpg"
},
  {
  "id": "page-of-pentacles",
  "name": "Page of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Page of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents11.jpg"
},
  {
  "id": "knight-of-pentacles",
  "name": "Knight of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Knight of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents12.jpg"
},
  {
  "id": "queen-of-pentacles",
  "name": "Queen of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Queen of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents13.jpg"
},
  {
  "id": "king-of-pentacles",
  "name": "King of Pentacles",
  "arcana": "minor",
  "suit": "pentacles",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The King of Pentacles describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Pents14.jpg"
},
  {
  "id": "ace-of-swords",
  "name": "Ace of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ace of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords01.jpg"
},
  {
  "id": "two-of-swords",
  "name": "Two of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Two of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords02.jpg"
},
  {
  "id": "three-of-swords",
  "name": "Three of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Three of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords03.jpg"
},
  {
  "id": "four-of-swords",
  "name": "Four of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Four of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords04.jpg"
},
  {
  "id": "five-of-swords",
  "name": "Five of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Five of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords05.jpg"
},
  {
  "id": "six-of-swords",
  "name": "Six of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Six of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords06.jpg"
},
  {
  "id": "seven-of-swords",
  "name": "Seven of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Seven of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords07.jpg"
},
  {
  "id": "eight-of-swords",
  "name": "Eight of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Eight of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords08.jpg"
},
  {
  "id": "nine-of-swords",
  "name": "Nine of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Nine of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords09.jpg"
},
  {
  "id": "ten-of-swords",
  "name": "Ten of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ten of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords10.jpg"
},
  {
  "id": "page-of-swords",
  "name": "Page of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Page of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords11.jpg"
},
  {
  "id": "knight-of-swords",
  "name": "Knight of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Knight of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords12.jpg"
},
  {
  "id": "queen-of-swords",
  "name": "Queen of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Queen of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords13.jpg"
},
  {
  "id": "king-of-swords",
  "name": "King of Swords",
  "arcana": "minor",
  "suit": "swords",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The King of Swords describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Swords14.jpg"
},
  {
  "id": "ace-of-wands",
  "name": "Ace of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ace of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands01.jpg"
},
  {
  "id": "two-of-wands",
  "name": "Two of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Two of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands02.jpg"
},
  {
  "id": "three-of-wands",
  "name": "Three of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Three of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands03.jpg"
},
  {
  "id": "four-of-wands",
  "name": "Four of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Four of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands04.jpg"
},
  {
  "id": "five-of-wands",
  "name": "Five of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Five of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands05.jpg"
},
  {
  "id": "six-of-wands",
  "name": "Six of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Six of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands06.jpg"
},
  {
  "id": "seven-of-wands",
  "name": "Seven of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Seven of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands07.jpg"
},
  {
  "id": "eight-of-wands",
  "name": "Eight of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Eight of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands08.jpg"
},
  {
  "id": "nine-of-wands",
  "name": "Nine of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Nine of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands09.jpg"
},
  {
  "id": "ten-of-wands",
  "name": "Ten of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Ten of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands10.jpg"
},
  {
  "id": "page-of-wands",
  "name": "Page of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Page of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands11.jpg"
},
  {
  "id": "knight-of-wands",
  "name": "Knight of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Knight of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands12.jpg"
},
  {
  "id": "queen-of-wands",
  "name": "Queen of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The Queen of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands13.jpg"
},
  {
  "id": "king-of-wands",
  "name": "King of Wands",
  "arcana": "minor",
  "suit": "wands",
  "meaning_upright": "General positive aspects or focus for this minor arcana card.",
  "meaning_reversed": "General inverted aspects, delays, or internal focus for this minor arcana card.",
  "description": "The King of Wands describes themes associated with the suit (e.g. emotion, material, intellect, action).",
  "image": "/cards/Wands14.jpg"
}
];
