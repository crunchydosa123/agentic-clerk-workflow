import { index } from "./pinecone_functions";
import { getEmbedding } from "./embeddingService";

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