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
    image: 'https://picsum.photos/seed/fool/300/500'
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    arcana: 'major',
    meaning_upright: 'Action, power, manifestation',
    meaning_reversed: 'Manipulation, poor planning, untapped talents',
    description: 'The Magician signifies the ability to translate ideas into reality.',
    image: 'https://picsum.photos/seed/magician/300/500'
  },
  {
    id: 'the-high-priestess',
    name: 'The High Priestess',
    arcana: 'major',
    meaning_upright: 'Inaction, mystery, intuition',
    meaning_reversed: 'Gossip, hidden motives, superficiality',
    description: 'The High Priestess represents the subconscious mind and inner knowledge.',
    image: 'https://picsum.photos/seed/priestess/300/500'
  },
  {
    id: 'the-empress',
    name: 'The Empress',
    arcana: 'major',
    meaning_upright: 'Fertility, nature, abundance',
    meaning_reversed: 'Creative block, dependence on others',
    description: 'The Empress symbolizes beauty, nature, and the nurturing principle.',
    image: 'https://picsum.photos/seed/empress/300/500'
  },
  {
    id: 'the-emperor',
    name: 'The Emperor',
    arcana: 'major',
    meaning_upright: 'Structure, stability, authority',
    meaning_reversed: 'Tyranny, rigidity, coldness',
    description: 'The Emperor represents strong governance and paternal power.',
    image: 'https://picsum.photos/seed/emperor/300/500'
  },
  {
    id: 'the-hierophant',
    name: 'The Hierophant',
    arcana: 'major',
    meaning_upright: 'Tradition, conformity, morality',
    meaning_reversed: 'Rebellion, restriction, new methods',
    description: 'The Hierophant represents spiritual tradition and formal education.',
    image: 'https://picsum.photos/seed/hierophant/300/500'
  },
  {
    id: 'the-lovers',
    name: 'The Lovers',
    arcana: 'major',
    meaning_upright: 'Partnerships, duality, union',
    meaning_reversed: 'Disharmony, imbalance, misalignment of values',
    description: 'The Lovers card represents deep connection and important choices.',
    image: 'https://picsum.photos/seed/lovers/300/500'
  },
  {
    id: 'the-chariot',
    name: 'The Chariot',
    arcana: 'major',
    meaning_upright: 'Direction, control, willpower',
    meaning_reversed: 'Lack of control, aggression, self-discipline',
    description: 'The Chariot signifies overcoming obstacles through determination.',
    image: 'https://picsum.photos/seed/chariot/300/500'
  },
  {
    id: 'strength',
    name: 'Strength',
    arcana: 'major',
    meaning_upright: 'Inner strength, bravery, compassion',
    meaning_reversed: 'Self-doubt, weakness, insecurity',
    description: 'Strength represents the power of the human spirit over instinct.',
    image: 'https://picsum.photos/seed/strength/300/500'
  },
  {
    id: 'the-hermit',
    name: 'The Hermit',
    arcana: 'major',
    meaning_upright: 'Contemplation, search for truth, inner guidance',
    meaning_reversed: 'Loneliness, isolation, paranoia',
    description: 'The Hermit represents the need for introspection and withdrawal.',
    image: 'https://picsum.photos/seed/hermit/300/500'
  },
  {
    id: 'wheel-of-fortune',
    name: 'Wheel of Fortune',
    arcana: 'major',
    meaning_upright: 'Change, fate, cycles',
    meaning_reversed: 'Bad luck, resistance to change, breaking cycles',
    description: 'The Wheel of Fortune represents the ever-changing nature of life.',
    image: 'https://picsum.photos/seed/wheel/300/500'
  },
  {
    id: 'justice',
    name: 'Justice',
    arcana: 'major',
    meaning_upright: 'Cause and effect, clarity, truth',
    meaning_reversed: 'Dishonesty, unaccountability, unfairness',
    description: 'Justice signifies that the most fair outcome will occur.',
    image: 'https://picsum.photos/seed/justice/300/500'
  },
  {
    id: 'the-hanged-man',
    name: 'The Hanged Man',
    arcana: 'major',
    meaning_upright: 'Sacrifice, release, martyrdom',
    meaning_reversed: 'Stalling, needless sacrifice, fear of change',
    description: 'The Hanged Man represents a pause and a new perspective.',
    image: 'https://picsum.photos/seed/hanged/300/500'
  },
  {
    id: 'death',
    name: 'Death',
    arcana: 'major',
    meaning_upright: 'Endings, transition, metamorphosis',
    meaning_reversed: 'Resistance to change, inability to move on',
    description: 'Death signifies the end of a major phase and the start of another.',
    image: 'https://picsum.photos/seed/death/300/500'
  },
  {
    id: 'temperance',
    name: 'Temperance',
    arcana: 'major',
    meaning_upright: 'Middle path, patience, finding meaning',
    meaning_reversed: 'Extremes, excess, lack of balance',
    description: 'Temperance represents harmony and emotional stability.',
    image: 'https://picsum.photos/seed/temperance/300/500'
  },
  {
    id: 'the-devil',
    name: 'The Devil',
    arcana: 'major',
    meaning_upright: 'Addiction, enlightenment, powerlessness',
    meaning_reversed: 'Detachment, freedom, restoring control',
    description: 'The Devil represents the shadow self and material attachments.',
    image: 'https://picsum.photos/seed/devil/300/500'
  },
  {
    id: 'the-tower',
    name: 'The Tower',
    arcana: 'major',
    meaning_upright: 'Sudden change, upheaval, chaos',
    meaning_reversed: 'Leaking, avoiding disaster, fear of change',
    description: 'The Tower represents a sudden revelation that destroys illusions.',
    image: 'https://picsum.photos/seed/tower/300/500'
  },
  {
    id: 'the-star',
    name: 'The Star',
    arcana: 'major',
    meaning_upright: 'Hope, faith, rejuvenation',
    meaning_reversed: 'Lack of faith, despair, discouragement',
    description: 'The Star signifies hope and guidance for the future.',
    image: 'https://picsum.photos/seed/star/300/500'
  },
  {
    id: 'the-moon',
    name: 'The Moon',
    arcana: 'major',
    meaning_upright: 'Unconscious, illusions, intuition',
    meaning_reversed: 'Release of fear, repressed emotion, clarity',
    description: 'The Moon represents the realm of dreams and the hidden.',
    image: 'https://picsum.photos/seed/moon/300/500'
  },
  {
    id: 'the-sun',
    name: 'The Sun',
    arcana: 'major',
    meaning_upright: 'Joy, success, celebration',
    meaning_reversed: 'Negativity, depression, failure',
    description: 'The Sun signifies vitality, success, and positive energy.',
    image: 'https://picsum.photos/seed/sun/300/500'
  },
  {
    id: 'judgement',
    name: 'Judgement',
    arcana: 'major',
    meaning_upright: 'Reflection, reckoning, awakening',
    meaning_reversed: 'Self-doubt, refusal of self-examination',
    description: 'Judgement represents self-evaluation and rebirth.',
    image: 'https://picsum.photos/seed/judgement/300/500'
  },
  {
    id: 'the-world',
    name: 'The World',
    arcana: 'major',
    meaning_upright: 'Fulfillment, harmony, completion',
    meaning_reversed: 'Incompletion, no closure, lack of success',
    description: 'The World signifies the end of a long journey and total fulfillment.',
    image: 'https://picsum.photos/seed/world/300/500'
  }
];
