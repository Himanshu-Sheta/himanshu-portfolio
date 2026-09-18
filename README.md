# Himanshu Sheta - Portfolio Website

> **Advanced Software Engineer & Data Engineer Portfolio**
> 
> Prepared for online deployment on **Render** (Account Email: `professorrrr31@gmail.com`).

---

## 🚀 Quick Overview

This project is a high-performance, modern developer portfolio built for **Himanshu Sheta**, showcasing:
- **Software Development & Full-Stack Engineering** (TypeScript, React, Next.js, Python REST APIs, PHP, SQL)
- **Data Engineering & AI/ML** (Automated ETL Processing, LLM Workflows, OpenCV Computer Vision, Scikit-learn)
- **Projects Portfolio** (AI Automation Platform, Solar Rooftop Capacity Prediction, Hotel Waiting Management System)
- **Experience Timeline** (TH Deggendorf Master's Thesis, TI4F GmbH Working Student, Dyrect Digital)
- **Interactive Live ETL Pipeline Demo**

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Glassmorphism UI
- **Icons**: Lucide React
- **Animations**: Framer Motion & Canvas-Confetti
- **Deployment Spec**: Render Blueprint (`render.yaml`)

---

## 📁 Local Setup Instructions

```bash
# 1. Navigate to project folder
cd "/Users/mr./Library/Mrr../website/portfolio"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build
```

---

## 🌐 Deploying to Render (`professorrrr31@gmail.com`)

This repository includes a pre-configured `render.yaml` blueprint file.

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [https://dashboard.render.com](https://dashboard.render.com) and log in with `professorrrr31@gmail.com`.
2. Click **New +** -> **Blueprint**.
3. Connect your GitHub repository.
4. Render will automatically detect `render.yaml` and configure the static site build (`npm run build`, publish dir: `./dist`).
5. Click **Apply**! Your site will be live online with a custom Render domain URL (e.g. `himanshu-sheta-portfolio.onrender.com`) to add to your CV!
