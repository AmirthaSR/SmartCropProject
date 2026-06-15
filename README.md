# SmartCropProject
Smart Crop Advisory System

An AI-powered Smart Crop Advisory System that helps farmers make better agricultural decisions using machine learning-based soil type detection, weather-aware recommendations, and a cross-platform mobile interface.

The system combines a ResNet18 deep learning model, a Node.js backend, and a Flutter frontend to deliver intelligent, real-time crop guidance.

🚀 Features
🌱 Soil Type Detection using ML
Image-based soil classification using a fine-tuned ResNet18 CNN model
Predicts soil type from uploaded images
🌦️ Crop Recommendation Engine
Suggests suitable crops based on soil type, weather, and conditions
Backend-driven decision logic using Node.js
📱 Flutter Mobile App
Cross-platform UI (Android & iOS)
User-friendly farmer dashboard
Crop prediction & advisory interface
🔗 REST API Backend
Built with Node.js + Express
Handles authentication, predictions, and database operations
🗄️ Database Integration
Stores user data, soil predictions, crop recommendations, and history
🧠 Machine Learning Model
Architecture: ResNet18 (Transfer Learning)
Framework: PyTorch
Task: Multi-class soil classification
Input: Soil images
Output: Soil type label (e.g., Sandy, Clay, Loamy, etc.)
Model File: soil_model.pth
🏗️ System Architecture
Flutter App  →  Node.js API  →  ML Model (ResNet18)
                     ↓
                 Database (MySQL)
                     ↓
            Crop Recommendation Engine
🛠️ Tech Stack
Frontend
Flutter
Dart
HTTP package (API calls)
Backend
Node.js
Express.js
Axios
MySQL / PostgreSQL (as configured)
Machine Learning
Python
PyTorch
torchvision (ResNet18)
OpenCV / PIL
📂 Project Structure
SmartCropProject/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── server.js
│   └── ml_integration/
│
├── ml_model/
│   ├── soil_model.pth
│   ├── train.py
│   └── predict.py
│
├── frontend_flutter/
│   ├── lib/
│   ├── screens/
│   └── main.dart
│
└── README.md
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/smart-crop-advisory.git
cd smart-crop-advisory
2. Backend Setup (Node.js)
cd backend
npm install
node server.js

Create .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=smartcrop_db
3. ML Model Setup (Python)
cd ml_model
pip install -r requirements.txt
python predict.py
4. Flutter App Setup
cd frontend_flutter
flutter pub get
flutter run
🔌 API Endpoints
Authentication
POST /user/register
POST /user/login
Crop Recommendation
POST /crop/recommend
Soil Prediction (ML)
POST /soil/predict
Donations (if included)
POST /donation/add
GET /donation/total
🧪 Example Workflow
User uploads soil image from Flutter app
Backend sends image to ML model
ResNet18 predicts soil type
Node.js processes prediction + weather data
Crop recommendation returned to Flutter UI
📈 Future Improvements
🌦️ Live weather API integration (IMD/OpenWeather)
🧑‍🌾 Multi-language support (Tamil, English)
📊 Crop yield prediction module
🤖 AI chatbot for farmer assistance
☁️ Cloud deployment (Azure / AWS)
