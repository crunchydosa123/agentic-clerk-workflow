import pymupdf
from sentence_transformers import SentenceTransformer
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

UPLOAD_FOLDER = "/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/get_embeddings", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error" : "No file uploaded"}), 400
    
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "no selected file"}), 400
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    text = extract_text_from_pdf(file_path)
    embeddings = generate_embeddings(text)

    return jsonify({"filename": file.filename, "embeddings": embeddings.tolist()})


def extract_text_from_pdf(pdf_path):
    doc = pymupdf.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text() + "\n"
    
    return text.strip()

def generate_embeddings(text):
    model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
    embeddings = model.encode(text)
    return embeddings

if __name__ == "__main__":
    app.run(debug=True)

    
