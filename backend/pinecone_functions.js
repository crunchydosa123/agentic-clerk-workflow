import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve("../.env")})

const pinceone = new Pinecone({
    apiKey: process.env.PINCONE_API_KEY
});

const indexName = "edai-v1";
const index = pinceone.Index(indexName);

export { index }