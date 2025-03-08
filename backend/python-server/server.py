from flask import Flask, request, jsonify
import os
import uuid

from helper_functions import insert_data, query_index, generate_embeddings, extract_text_from_pdf


app = Flask(__name__)

UPLOAD_FOLDER = "/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/hello", methods=["GET"])
def hello_api():
    return jsonify({"message": "hello world!"})
    

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

@app.route("/store_text", methods=["POST"])
def extract_and_store_text():
    data = request.get_json()
    text  = data.get("text", "")

    if not text.strip():
        return jsonify({"error": "text required"}), 400

    embeddings = generate_embeddings(text.strip())
    
    random_uuid = uuid.uuid4()
    random_uuid = str(random_uuid)
    insert_data(text.strip(), embeddings, random_uuid)

    return jsonify({"message": "stored successfully", "id": random_uuid, "text": text.strip()}), 200


if __name__ == "__main__":
    app.run(debug=True)

    
