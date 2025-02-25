import { spawn } from "child_process";

const getEmbedding = async (text) => {
  return new Promise((resolve, reject) => {
    const process = spawn("python", ["generate_embedding.py", text]);

    let result = "";
    process.stdout.on("data", (data) => (result += data));
    process.stderr.on("data", (data) => reject(data.toString()));

    process.on("close", () => resolve(JSON.parse(result)));
  });
};

export { getEmbedding };
