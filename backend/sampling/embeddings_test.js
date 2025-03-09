import fetch from "node-fetch";

const getEmbedding = async (text) => {
  const response = await fetch("https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2", {
    method: "POST",
    headers: { "Authorization": `Bearer ${process.env.HF_API_KEY}` },
    body: JSON.stringify({ inputs: text })
  });

  const data = await response.json();
  //const e = await data[0].embedding;
  return data;
};

const embeds = await getEmbedding("tell me a fun fact about paris");
console.log(embeds);