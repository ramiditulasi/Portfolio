# Tulasi Reddy Ramidi - Professional Developer Portfolio & Resume

A sleek, modern, high-performance portfolio website and printable ATS-friendly resume tailored for **Tulasi Reddy Ramidi**, B.Tech Information Technology Fresher (2026 Batch) seeking **Software Engineer** and **Data Analyst** roles.

---

## 🌟 Highlights & Key Features

- **"Open to Work" Fresher Branding**: Prominently highlights availability for immediate full-time / graduate roles, B.Tech 2026 batch, and willingness to relocate across tech hubs (Hyderabad, Bengaluru, Pune, NCR, etc.).
- **Modern Glassmorphic UI**: Built with responsive layouts, CSS variables, gradient accents, and subtle ambient glows.
- **Dark / Light Mode**: Integrated theme toggle with persistence in `localStorage`.
- **Dynamic Hero Typing Animation**: Automatically cycles through key engineering capabilities.
- **Interactive Project Filtering**: Filter projects seamlessly by *Machine Learning & AI*, *Data Analytics & BI*, or *Web & Mobile Apps*.
- **Detailed Case Study Modals**: Deep dives into problem statements, quantitative metrics (540K+ records, 170K+ ML samples, 100% API test passes), and architecture stacks for all 4 core projects:
  1. *Credit Card Fraud Detection using ML Classification & FastAPI*
  2. *Online Retail Business Analytics & RFM Segmentation*
  3. *Surplus Food Donation Android App (Firebase & Google Maps API)*
  4. *Medical Image Detection & Conversational NLP Chatbot (Flask)*
- **Interactive Skills Grid**: Categorized by Programming Languages, Core CS Concepts, Web & Databases, Data & Machine Learning, and Cloud & Tools.
- **Industry Certifications Showcase**: Verified credentials for AWS Cloud Foundations, UiPath Automation Developer Associate, and eBox tracks.
- **Printable ATS Resume (`resume.html`)**: Includes a single-click "Print / Save as PDF" button with print media CSS that formats directly onto a clean standard page.
- **Contact & Fast Actions**: Click-to-call, click-to-email, one-click copy buttons with toast notifications, and a responsive message form.

---

## 📁 File Structure

```text
├── index.html       # Main interactive portfolio page
├── styles.css       # Complete design system, glassmorphism, responsive styles & theme tokens
├── script.js        # Dynamic animations, modal logic, theme switching, clipboard & filters
├── resume.html      # ATS-friendly printable resume sheet (with Print / Save to PDF)
└── README.md        # Documentation and deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Open
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Safari, Mozilla Firefox).

### Option 2: Local Python Web Server
Open your terminal inside this folder and run:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit:
```
http://localhost:8000
```

---

## ✏️ How to Personalize & Update Links

1. **LinkedIn & GitHub Links**:
   - In `index.html` and `resume.html`, search for `https://linkedin.com` and `https://github.com` and replace them with your exact profile URLs:
     - `https://linkedin.com/in/your-profile-slug`
     - `https://github.com/your-username`
2. **Project Repositories**:
   - Search for `Repository` or `Source Code` in `index.html` and link directly to your GitHub repository URLs.

---

## 🌐 Free Hosting Guide (Get a Live URL in 2 Minutes)

### Method 1: GitHub Pages (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on GitHub (e.g., `portfolio` or `tulasireddy.github.io`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages** > Set Branch to `main` and Folder to `/ (root)` > Click **Save**.
5. Your portfolio is live at `https://<your-username>.github.io/<repo-name>/`!

### Method 2: Vercel / Netlify
- Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop) for instant deployment with free HTTPS and custom domain support.

---

© 2026 Tulasi Reddy Ramidi. Designed & Developed for Professional Fresher Opportunities.
