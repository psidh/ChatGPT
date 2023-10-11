import openai from './chatgpt';

const query = async (
  prompt: string,
  chatId: string,
  model: string,

) => {
  const res = await openai
    .completions.create({
      model,
      prompt,
      maxTokens: 1000,
      temperature: 0.9,
      topP: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
    })
    .then((res: { data: { choices: { text: any; }[]; }; }) => res.choices[0].text)
    .catch((err: { message: any; }) => `ChatGPT was unable to answer | Erro ${err.message}`);

    return res;
};

export default query;