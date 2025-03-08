import { Pinecone } from '@pinecone-database/pinecone'
import dotenv from "dotenv"; 
import { resolve } from "path";

dotenv.config({ path: resolve("../.env") });

const pc = new Pinecone({
    apiKey: process.env.PINCONE_API_KEY
  });

const index = pc.index('quickstart');


await index.namespace('ns1').upsert([
    {
       id: 'vec1', 
       chunk_text: "AAPL reported a year-over-year revenue increase, expecting stronger Q3 demand for its flagship phones.", 
       metadata: { genre: 'drama' }
    },
    {
       id: 'vec2', 
       chunk_text: "Analysts suggest that AAPL'\''s upcoming Q4 product launch event might solidify its position in the premium smartphone market.", 
       metadata: { genre: 'action' }
    },
    {
       id: 'vec3', 
       chunk_text: "AAPL'\''s strategic Q3 partnerships with semiconductor suppliers could mitigate component risks and stabilize iPhone production.",
       metadata: { genre: 'drama' }
    },
    {
       id: 'vec4', 
       chunk_text: "AAPL may consider healthcare integrations in Q4 to compete with tech rivals entering the consumer wellness space.", 
       metadata: { genre: 'action' }
    }
  ]);