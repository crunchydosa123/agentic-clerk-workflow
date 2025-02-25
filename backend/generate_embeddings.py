from sentence_transformers import SentenceTransformer
import sys
import json

# Load model
model = SentenceTransformer("all-MiniLM-L6-v2")

def generate_embedding(text):
    embedding = model.encode(text).tolist()  # Convert to list for JSON
    return embedding

if __name__ == "__main__":
    text = sys.argv[1]  # Get text input from Node.js
    embedding = generate_embedding(text)
    print(json.dumps(embedding))  # Print as JSON string
