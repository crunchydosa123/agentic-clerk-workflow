import express from "express";
import { storeDocument } from "./storeEmbedding.js";
import { queryDocument } from "./queryPinecone.js";
import { extractText } from "./extractText.js";


const app = express();
app.use(express.json());

app.post("/store", async (req, res) => {
    try{
        const {id, embeddings } = req.body;
        const storeResponse = await storeDocument(id, embeddings);

        if(storeResponse){
            res.json({message: "Document stored"});
        }else{
            return res.status(500).json({error: "Failed to store document"});
        }
    }catch(error){
        res.status(500).json({error: error});
    }
    
});

app.post("/query", async (req, res) => {
    const { query } = req.body;
    const results = await queryDocument(query);
    res.json({ results });
});

app.listen(3000, ()=> console.log("API running on port 3000"));