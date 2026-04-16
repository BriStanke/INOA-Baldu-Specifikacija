# 🚀 Deploy to GitHub - Step by Step

## Your Repository
https://github.com/BriStanke/INOA-Baldu-Specifikacija

## What You Have Here

This folder contains ALL the files ready to upload to GitHub:

```
github-deploy/
├── index.html          ← Main file
├── css/
│   ├── styles.css
│   ├── styles-extended.css
│   └── mobile.css
└── js/
    ├── config.js
    ├── i18n.js
    ├── storage.js
    ├── history.js
    ├── utils.js
    ├── templates.js
    ├── imageUtils.js
    ├── data.js
    ├── render.js
    ├── ui.js
    └── app.js
```

## 📋 Deployment Steps

### Method 1: GitHub Web Interface (Easiest)

1. **Go to your repository:**
   https://github.com/BriStanke/INOA-Baldu-Specifikacija

2. **Delete old files** (if any):
   - Click on each file
   - Click trash icon
   - Commit deletion

3. **Upload this entire folder:**
   - Click "Add file" → "Upload files"
   - Drag the ENTIRE `github-deploy` folder contents
   - Make sure you see:
     - index.html
     - css folder
     - js folder
   - Commit changes

4. **Enable GitHub Pages:**
   - Go to Settings
   - Click "Pages" in sidebar
   - Source: "Deploy from a branch"
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click Save

5. **Wait 1-2 minutes** for deployment

6. **Visit your site:**
   https://bristanke.github.io/INOA-Baldu-Specifikacija/

### Method 2: Git Command Line

```bash
# Clone your repo
git clone https://github.com/BriStanke/INOA-Baldu-Specifikacija.git
cd INOA-Baldu-Specifikacija

# Delete old files
rm -rf *

# Copy new files (from this github-deploy folder)
cp -r /path/to/github-deploy/* .

# Commit and push
git add .
git commit -m "Deploy INOA Furniture Spec Pro v2.0"
git push origin main
```

### Method 3: GitHub Desktop (Easiest for Windows/Mac)

1. Open GitHub Desktop
2. Clone your repository
3. Delete all old files in the folder
4. Copy all files from `github-deploy` folder
5. Commit changes
6. Push to origin

## ✅ Verification

After deployment, check:

1. **Visit your site** - Should load immediately
2. **Open browser console** (F12) - Should be no errors
3. **Test features:**
   - ✅ Theme switcher works (☀️ 🌅 🎨 🌙)
   - ✅ Language switch works (LT/EN)
   - ✅ Save/Load buttons work
   - ✅ Undo/Redo works (Ctrl+Z/Y)
   - ✅ Page looks styled (not plain text)

## 🐛 If Something's Wrong

### Check 1: Browser Console
Press F12, look for errors like:
```
404 (Not Found) css/styles.css
```
This means files aren't uploaded correctly.

### Check 2: File Structure on GitHub
Go to your repo and verify you see:
```
INOA-Baldu-Specifikacija/
├── index.html
├── css/
│   ├── styles.css
│   ├── styles-extended.css
│   └── mobile.css
└── js/
    └── (11 files)
```

### Check 3: GitHub Pages Settings
- Should be enabled
- Source: main branch
- Folder: / (root)

## 📞 Still Issues?

The most common problems:

1. **Files not uploaded** → Upload ALL files
2. **Wrong folder structure** → Must have css/ and js/ folders
3. **GitHub Pages not enabled** → Check Settings → Pages
4. **Browser cache** → Hard refresh (Ctrl+Shift+R)

## 🎉 Success!

Once deployed, your site will be live at:
**https://bristanke.github.io/INOA-Baldu-Specifikacija/**

All features will work:
- ✅ Auto-save
- ✅ Undo/Redo
- ✅ Themes
- ✅ Multi-language
- ✅ Mobile responsive
- ✅ Export/Import
- ✅ Print/PDF

---

**This is the modular version** - professional, organized, and exactly what you wanted! 🚀
