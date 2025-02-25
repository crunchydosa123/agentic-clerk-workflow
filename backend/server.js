import express from "express";
import { storeDocument } from "./storeEmbedding.js";
import { queryDocument } from "./queryPinecone.js";
import { extractText } from "./extractText.js";



const upload = multer({ dest: "uploads/" });
const app = express();
app.use(express.json());

app.post("/store", upload.single("file"), async (req, res) => {
    const file = req.file;

    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const fileType = file.mimetype.includes("pdf") ? "pdf" : file.mimetype.includes("word") ? "docx" : text;

    const text = await extractText(file.path, fileType);
    await storeDocument(id, text);

    res.json({message: "Document stored"});
});

app.post("/query", async (req, res) => {
    const { query } = req.body;
    const results = await queryDocument(query);
    res.json({ results });
});

app.listen(3000, ()=> console.log("API running on port 3000"));