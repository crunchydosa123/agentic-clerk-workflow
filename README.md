# 🚀 FlowAI [SaaS] | Enabling Agentic AI Workflows

## 📜 Description
FlowAI is an AI-powered SaaS platform designed for **Document Processing & Workflow Automation** in corporate environments. It integrates **OCR, NLP, and ML** to optimize document handling, automate compliance checks, and enable intelligent decision-making.

### ✨ Key Features:
- 🧠 **AI-driven Document Processing**: Extract, validate, and classify documents seamlessly.
- ⚡ **Workflow Automation**: Automate approvals and compliance checks using ML models.
- ☁️ **Scalable Microservices**: Deployed on AWS for robust performance and scalability.
- 🔍 **Vector Database & Embeddings**: Uses **Pinecone** for efficient document search and retrieval.

## 🛠 Tech Stack
### 🎨 Frontend:
- ⚛️ **React (Vite)**
- 🎨 **Tailwind CSS**
- 🏗 **TypeScript (if applicable)**

### 🔧 Backend:
- 🟢 **Node.js (Express.js)** - `./backend/server.js`
- 🐍 **Python (FastAPI/Flask)** - `./backend/python-server/server.py`
- 🌲 **Pinecone** - Vector database for document embeddings
- ☁️ **AWS** - Cloud deployment and microservices management

## 📂 Project Structure
```
FlowAI/
├── frontend/            # ⚛️ React frontend (Vite + Tailwind CSS)
├── backend/
│   ├── server.js        # 🟢 Node.js backend (Express.js)
│   ├── python-server/
│   │   ├── server.py    # 🐍 Python ML services (FastAPI/Flask)
│   ├── models/          # 🤖 AI models for document processing
│   ├── utils/           # 🔧 Helper functions and services
├── docs/                # 📄 Documentation and API specs
├── config/              # ⚙️ Configuration files
└── README.md
```

## ⚡ Installation & Setup

### 📌 Prerequisites
Ensure you have the following installed:
- 🟢 **Node.js** (v16+ recommended)
- 🐍 **Python** (3.8+ recommended)
- 🐳 **Docker** (optional for containerized deployment)
- ☁️ **AWS CLI** (if deploying to AWS)

### 🔧 Backend Setup
#### 🟢 Node.js Server:
```sh
cd backend
npm install
npm start
```

#### 🐍 Python Server:
```sh
cd backend/python-server
pip install -r requirements.txt
python server.py
```

### 🎨 Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## 🚀 Deployment
### 🐳 Using Docker (Recommended for Production)
```sh
docker-compose up --build
```

### ☁️ AWS Deployment
1. **Set up AWS Lambda, API Gateway, and S3 for storage**
2. Deploy backend using `serverless` or `EC2`.
3. Configure environment variables for database connections.

## 🔗 API Endpoints
### 📄 Document Processing (Python Server)
- `POST /upload`: 📤 Upload a document for processing
- `GET /status/:id`: 🔄 Check document processing status

### 🔄 Workflow Automation (Node.js Server)
- `POST /workflow/start`: 🏁 Start an automation workflow
- `GET /workflow/status/:id`: 📊 Retrieve workflow progress

## 🤝 Contributing
We welcome contributions! Please open an issue or a pull request in the GitHub repository.

## 📜 License
This project is licensed under the MIT License.

---
**FlowAI** - Empowering AI-driven Document Automation 🚀
