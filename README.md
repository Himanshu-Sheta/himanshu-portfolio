# Himanshu Sheta - Portfolio Website

> **Advanced Software Engineer & Data Engineer Portfolio**
> 
> Online Deployment Target: **Render**

---

## 🚀 Quick Overview

This project is a high-performance, modern developer portfolio built for **Himanshu Sheta**, showcasing:
- **Software Development & Full-Stack Engineering** (TypeScript, React, Next.js, Python REST APIs, PHP, SQL)
- **Data Engineering & AI/ML** (Automated ETL Processing, LLM Workflows, OpenCV Computer Vision, Scikit-learn)
- **Projects Portfolio** (AI Automation Platform, Solar Rooftop Capacity Prediction, Hotel Waiting Management System)
- **Experience Timeline** (TH Deggendorf Master's Thesis, TI4F GmbH Working Student, Dyrect Digital)
- **Interactive Live ETL Pipeline Demo**

---

## 🔄 Automatic CI/CD Pipeline (Render Auto-Deploy)

When connected to Render, **Auto-Deploy is enabled by default**. 

### Local development

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3000` with Next.js App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, and Turbopack. Next.js is configured for a static export, so it can be hosted on Render's Static Site service.

For a production check:

```bash
npm run build
npm run start
```

Whenever you push new changes to GitHub:
```bash
git add .
git commit -m "Updated portfolio content"
git push
```
Render will automatically run `npm ci && npm run build`, publish the `out` directory, and update your online site.
