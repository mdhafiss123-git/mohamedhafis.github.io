# Mohamed Hafis Portfolio

A modern, responsive portfolio website showcasing my skills as a Frontend Developer.

## Features

- **Dark & Light Theme**: Toggle between dark and light themes with persistent user preference.
- **Responsive Design**: Fully responsive layout for all device sizes.
- **Smooth Animations**: 
  - Rotating glow ring around profile image
  - Floating star animation (moves up in dark mode, down in light mode)
  - Smooth scroll behavior and fade-in animations
- **Modern UI**: Gradient effects, glowing elements, and interactive components.
- **Projects Showcase**: Display your projects with descriptions and links to live demos and GitHub repos.
- **Skills Section**: Visual skill progress indicators with animated circular progress bars.
- **Contact Section**: Easy way for visitors to find your contact information.

## Project Structure

```
Portfolio 2/
├── index.html           # Main HTML file
├── css/
│   └── style.css        # All styles and animations
├── js/
│   └── script.js        # Interactive features and theme toggle
├── assets/
│   └── images/
│       └── myphoto.jpg  # Your profile photo
└── README.md            # This file
```

## Setup & Local Testing

1. Open `index.html` in your browser to view the portfolio locally.
2. Or use a local server:
   ```bash
   cd "m:\Portfolio 2"
   npx serve
   ```
   Then visit `http://localhost:3000` in your browser.

## Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub account (if you don't have one).
2. Create a new repository:
   - If you want the site at `https://<yourusername>.github.io/`, name it `<yourusername>.github.io`
   - Otherwise, name it anything (e.g., `portfolio`) and the site will be at `https://<yourusername>.github.io/portfolio/`

3. In your terminal, navigate to this folder and run:
   ```bash
   cd "m:\Portfolio 2"
git init
git config user.email "mdhafiss123@gmail.com"
git config user.name "Mohamed Hafis"
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/mdhafiss123-git/mohamedhafis.github.io.gitcd "m:\Portfolio 2"
git push -u origin maincd "m:\Portfolio 2"
git status

4. Go to your repository settings on GitHub → **Pages** → Select `main` branch as source → Save.
5. Your site will be live at `https://<mohamedhafis>.github.io` (or with repo name).

### Option 2: Netlify

1. Visit [netlify.com](https://netlify.com) and sign up.
2. Drag and drop this folder or connect your GitHub repo.
3. Your site will be live instantly with a free URL.

## Custom Domain

- Buy a domain from Namecheap, GoDaddy, or another registrar.
- For GitHub Pages: Add a `CNAME` file in the repo root with your domain name, then update your registrar's DNS records.
- For Netlify: Add your domain in the Netlify dashboard under Domain settings.

## Customization

### Update Profile Photo
Replace `assets/images/myphoto.jpg` with your own photo.

### Update Content
Edit sections in `index.html`:
- Hero section: Update name, title, description
- About section: Update about text
- Projects section: Add/remove project cards
- Skills section: Modify skill circles and percentages

### Change Colors
Edit CSS variables and color values in `css/style.css` or inline styles in `index.html`.

## Features Explained

### Theme Toggle
- Click the moon/sun icon in the top-right navbar to switch between dark and light themes.
- Choice is saved in browser's localStorage.

### Star Animation
- In dark mode: Stars float upward.
- In light mode: Stars float downward.

### Responsive Design
The portfolio adapts to all screen sizes. Media queries ensure optimal viewing on mobile, tablet, and desktop.

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, animations, gradients
- **JavaScript (Vanilla)**: Interactive features, localStorage, smooth scroll effects

## License

This portfolio is open source and available for personal use.

## Contact

- Email: mdhafiss123@gmail.com
- Instagram: @_hafis_h_

---

**Last Updated**: February 2026
