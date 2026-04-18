import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function interpretTarot(
  type: 'daily' | 'deep',
  cards: { name: string; position: 'upright' | 'reversed' }[],
  topic?: string
): Promise<string> {
  const modelStr = "gemini-3-flash-preview";

  const cardsStr = cards.map(c => `${c.name} (${c.position})`).join(', ');

  const prompt = type === 'daily'
    ? `You are an expert Tarot reader and subconscious analyzer.
       The user just pulled this card for their daily insight: ${cardsStr}.
       Provide a deep, poetic, and insightful interpretation from a "subconscious" perspective.
       Keep it concise (2-3 paragraphs) and mystical. Focus on how this card relates to their inner guidance and the "handle" of their life today.
       Use a sophisticated and encouraging tone. (Language: Korean requested by name, but respond in Korean as it's for 'Handle Tarot')`
    : `You are an expert Tarot reader.
       The user has a question/topic: "${topic}".
       They pulled 3 cards in a spread: ${cardsStr}.
       Provide a deep, continuous thematic reading for these 3 cards as a cohesive narrative.
       Analyze how each card interacts with the next in the context of "${topic}".
       Use a sophisticated, cosmic, and mysterious yet professional tone. (Respond in Korean)`;

  try {
    const response = await ai.models.generateContent({
      model: modelStr,
      contents: prompt,
      config: {
        systemInstruction: "You are 'Handle Tarot AI Master'. You help users discover their subconscious direction. You are mystical, wise, and empathetic. You provide readings in professional, high-end Korean language (Honorific).",
        temperature: 0.8,
      }
    });

    return response.text || "별의 소리를 듣는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  } catch (error) {
    console.error('Error generating interpretation:', error);
    return "별의 움직임이 흐릿합니다. 잠시 후 다시 시도해주세요.";
  }
}
