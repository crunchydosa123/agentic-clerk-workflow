import { index } from "./pinecone_functions.js";
import { getEmbedding } from "./embeddingService.js";

const queryDocument = async(query) =>{
    const embedding = await getEmbedding(text);

    const response = await index.query({
        vector: embedding,
        topK: 3,
        includeMetadata: true,
    });

    return response.matches.map((match) => match.metadata.text);
};

export { queryDocument };