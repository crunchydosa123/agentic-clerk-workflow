import { index } from "./pinecone_functions.js";
import { getEmbedding } from "./embeddingService.js";

const storeDocument = async(id, text) =>{
    const embedding = await getEmbedding(text);

    await index.upsert([
        {
            id: id, 
            values: embedding,
            metadata: {text},
        },
    ]);
}

export {storeDocument};