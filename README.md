# Crochet Arts Website

A beautiful portfolio website showcasing handcrafted crochet creations, built with Next.js and Tailwind CSS.

## Features

- 🎨 Gallery of crochet artworks
- 👩‍🎨 Artist information and bio
- 📱 Responsive design
- 🎠 Banner slider
- 📧 Contact information
- 🌐 About page

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `crochet-arts` (or your preferred name)
3. Make it public
4. Don't initialize with README (we already have one)

### Step 2: Connect Local Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/crochet-arts.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Configure** button

### Step 4: Push Changes

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

The GitHub Actions workflow will automatically:
- Build your Next.js app
- Deploy it to GitHub Pages
- Make it available at: `https://YOUR_USERNAME.github.io/crochet-arts`

## Project Structure

```
crochet-arts/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       └── BannerSlider.tsx  # Banner slider component
├── public/
│   └── images/               # Image assets
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
└── tailwind.config.js        # Tailwind configuration
```

## Customization

### Adding New Images

1. Place your images in `public/images/`
2. Use `.jpg` format
3. Update the `galleryWorks` array in `src/app/page.tsx`

### Modifying Content

- **Homepage**: Edit `src/app/page.tsx`
- **About page**: Edit `src/app/about/page.tsx`
- **Styling**: Modify `src/app/globals.css` or use Tailwind classes

## Support

For issues or questions, please check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

Made with ❤️ using Next.js and Tailwind CSS
