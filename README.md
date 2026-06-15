# 🌾 Smart Crop Advisory System

A full-stack precision agriculture platform that combines deep learning-based soil classification 
with real-time weather data to deliver crop recommendations tailored to Tamil Nadu's 38 districts.

---

## 📌 Overview

Smart Crop Advisory System helps farmers and agronomists make data-driven decisions by analyzing 
soil images using a ResNet18 model and cross-referencing results with live weather conditions and 
historical IMD crop data to recommend the most suitable crops.

---

## 🧱 Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Backend     | Node.js, Express.js                 |
| ML Model    | Python, PyTorch, ResNet18           |
| Database    | MySQL                               |
| Weather API | OpenWeatherMap API                  |
| Frontend    | Flutter (collaborator-built)        |
| Dataset     | IMD Historical CSV (38 districts)   |

---

## 🔍 Features

- 📷 Soil image classification using fine-tuned ResNet18 (7 soil classes)
- 🌦️ Real-time weather integration via OpenWeatherMap API
- 🗄️ District-wise crop condition lookup from IMD historical data
- 🌱 Crop recommendation engine based on soil type + weather parameters
- 📍 Covers all 38 districts of Tamil Nadu

---

## 🧠 ML Pipeline

1. User uploads a soil image
2. ResNet18 classifies it into one of 7 soil types:
   - Alluvial, Black, Clay, Red, Laterite, Sandy, Loamy
3. Soil label is mapped to DB-compatible value via mapSoilType()
4. Query runs against crop_conditions table filtered by soil_type + district
5. Weather data layered on top for final recommendation scoring

---

## 🗄️ Database Schema (core table)

```sql
CREATE TABLE crop_conditions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  district VARCHAR(100),
  soil_type VARCHAR(50),
  crop_name VARCHAR(100),
  min_temp FLOAT,
  max_temp FLOAT,
  min_rainfall FLOAT,
  max_rainfall FLOAT,
  season VARCHAR(50)
);
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js >= 16
- Python >= 3.8
- MySQL
- PyTorch

### Backend Setup
```bash
git clone https://github.com/AmirthaSr/smart-crop
cd smart-crop
npm install
```

### ML Model Setup
```bash
cd ml/
pip install -r requirements.txt
python inference.py
```

### Environment Variables
Create a `.env` file:
DB_HOST=localhost

DB_USER=root

DB_PASS=yourpassword

DB_NAME=smartcrop

WEATHER_API_KEY=your_openweather_key

PORT=3000

### Run
```bash
npm start
```

---

## 🐛 Known Issues Fixed

- `soilType` from ResNet18 was not being passed into SQL query — fixed with `mapSoilType()` 
  and `AND soil_type = ?` added to recommendation query
- Training augmentations removed from inference pipeline; ImageNet normalization added
- Inference transform corrected to match ResNet18 expected input format

---

## 🌍 SDG Alignment

| SDG | Goal                          |
|-----|-------------------------------|
| SDG 1  | No Poverty — better yields = better income  |
| SDG 2  | Zero Hunger — precision farming support     |
| SDG 13 | Climate Action — weather-aware decisions    |

---

## 🆚 Competitive Landscape

| Platform   | Smart Crop Advantage                        |
|------------|---------------------------------------------|
| Fasal      | No soil image input; sensor-based only      |
| AgroStar   | Advisory only, no ML soil classification    |
| Plantix    | Disease detection only, no crop planning    |

---

## 👩‍💻 Author

**Amirtha S R**  
B.E. Computer Science & Engineering  
Rajalakshmi Engineering College, Chennai  
GitHub: [AmirthaSr](https://github.com/AmirthaSr)  
LinkedIn: [amirtha-s-r-68321a318](https://linkedin.com/in/amirtha-s-r-68321a318)

---

## 📄 License

MIT License
