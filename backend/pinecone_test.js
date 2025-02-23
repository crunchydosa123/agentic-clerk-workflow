import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv"; 
import { resolve } from "path";

dotenv.config({ path: resolve("../.env") });

const pc = new Pinecone({
  apiKey: process.env.PINCONE_API_KEY
});

const indexName = 'quickstart';

await pc.createIndex({
  name: indexName,
  dimension: 2, 
  metric: 'cosine', 
  spec: { 
    serverless: { 
      cloud: 'aws', 
      region: 'us-east-1' 
    }
  } 
});