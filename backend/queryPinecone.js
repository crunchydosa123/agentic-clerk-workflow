import { index } from "./pinecone_functions";
import { getEmbedding } from "./embeddingService";

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