import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";

dotenv.config();

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const indexName = "agentic-workflow"; // Name for your vector DB

// Create index (Only run once)
const createIndex = async () => {
  await pinecone.createIndex({
    name: indexName,
    dimension: 384, // MiniLM L6-v2 output size
    metric: "cosine",
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-east-1",
      },
    },
  });
};

// Get index
const index = pinecone.Index(indexName);

export { createIndex, index };
