import dotenv from "dotenv"; 
import { resolve } from "path";

dotenv.config({ path: resolve("../.env") });

const apiKey = process.env.OPENROUTER_API_KEY;

console.log("API Key:", apiKey); 


const getResponseFromMistral = async (message) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // Replace with actual key
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "cognitivecomputations/dolphin3.0-mistral-24b:free",
        "messages": [
          {
            "role": "user",
            "content": `${message}`
          }
        ]
      })
    });

    const d = await response.json();
    console.log(JSON.stringify(d.choices[0].message.content, null, 2));

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching response:", error);
  }
};

// Call the function
//getResponseFromMistral();

export {getResponseFromMistral}
