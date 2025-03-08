from pinecone import Pinecone
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
import pymupdf
import os
from pathlib import Path

root_dir = Path(__file__).resolve().parents[2]  
env_path = root_dir / ".env"

load_dotenv(dotenv_path=env_path)

pinecone_api_key = os.getenv("PINCONE_API_KEY")

pc = Pinecone(api_key=pinecone_api_key)
index = pc.Index("edai-v1")

def insert_data(text: str, embeddings, id: str) -> None:
    """
    Inserts text and its corresponding embeddings into pinecone

    Args: 
        text (str) : corpus text
        embeddings (list): corresponding embeddings

    Returns:
        Nothing
    """
    index.upsert(
        vectors=[
            {
                "id" : id,
                "values": embeddings,
                "metadata": {
                    "text": text
                }
            }
            
        ],
        namespace = "ns1"
    )

def query_index(embeddings):
    response = index.query(
        namespace="ns1",
        vector=embeddings,
        top_k=2,
        include_values=True,
        include_metadata=True,
    )

    return response

def generate_embeddings(text: str):
    model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
    embeddings = model.encode(text)
    return embeddings

def extract_text_from_pdf(pdf_path):
    doc = pymupdf.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text() + "\n"
    
    return text.strip()

'''
text = "hello everyone"
embeddings = generate_embeddings(text)
insert_data(text, embeddings)
'''

__all__ = ["insert_data", "query_index", "generate_embeddings", "extract_text_from_pdf"]


