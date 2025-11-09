from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import os
from datetime import datetime

from config import Config
from models import format_form_data

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Setup MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["TravelFormDB"]
collection = db["responses"]

# Ensure uploads folder exists
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

@app.route("/api/submit", methods=["POST"])
def submit_form():
    try:
        form_data = request.form.to_dict()
        files = request.files.getlist("files")

        saved_files = []
        for file in files:
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
            saved_files.append(filename)

        form_data["files"] = saved_files
        form_data["timestamp"] = datetime.utcnow()

        formatted_data = format_form_data(form_data)
        collection.insert_one(formatted_data)

        return jsonify({"message": "Form submitted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/draft", methods=["POST"])
def save_draft():
    try:
        draft_data = request.get_json()
        draft_data["isDraft"] = True
        draft_data["timestamp"] = datetime.utcnow()

        collection.insert_one(draft_data)

        return jsonify({"message": "Draft saved"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/drafts", methods=["GET"])
def get_drafts():
    drafts = list(collection.find({"isDraft": True}))
    for d in drafts:
        d["_id"] = str(d["_id"])
    return jsonify(drafts), 200


if __name__ == "__main__":
    app.run(debug=True)
