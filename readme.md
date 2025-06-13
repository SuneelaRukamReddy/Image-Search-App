# 📷 Image Search App

A simple, responsive web application that allows users to search for beautiful, high-quality images via the Unsplash API.

---

## 🔍 Overview

Build with **HTML**, **CSS** (Bootstrap & Tailwind), and **Vanilla JavaScript**, this app lets users search Unsplash based on keywords, view results in a neat grid, and load additional images with pagination.:contentReference[oaicite:1]{index=1}

---

## 🛠️ Features

- **Keyword search** – type a query and fetch related images  
- **Dynamic image grid** – displays 12 images per page, auto-clearing old results  
- **“See More” pagination** – load extra batches of results until available ones run out  
- **Fetch error handling** – alerts users for empty input or failed requests  

---

## 🚀 Tech Stack

- **HTML** for markup  
- **Bootstrap 4** & **Tailwind CSS** for responsive layouts and styling  
- **Vanilla JavaScript** for DOM manipulation & API calls  
- **Unsplash API** (via `/search/photos`) to fetch free, high-quality images:contentReference[oaicite:2]{index=2}

---

## 🧩 How It Works

1. User enters a keyword and clicks **Search**  
2. App sends a request to Unsplash API with `query`, `page`, and `per_page` parameters  
3. Displays results in a responsive grid with captions  
4. User can press **See More** to load the next page of results  
5. If no more images are available, the button disables with a “No more results” label

---

## ⚙️ Getting Started

 Project Structure

/ (root)
├── index.html         # Main UI with search box and image grid
├── index.css          # Custom styles + Bootstrap/Tailwind
├── script.js          # Core app logic and Unsplash fetch calls
└── README.md          # You're reading it!

🧭 Future Improvements

🌐 Infinite scroll instead of "See More" button

👁️ Larger image previews or lightbox view on click

⬇️ Download options or direct linking to Unsplash

🌑 Advanced filters: orientation, color, size, etc.


