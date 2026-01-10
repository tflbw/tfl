# TFL Logistics Website

An informational website for TFL Logistics, built with Next.js and Tailwind CSS.

## Project Overview

This website serves as the digital presence for TFL Logistics, showcasing their end-to-end business services, company background, and project portfolio.

### Features
- **Responsive Design**: optimized for mobile, tablet, and desktop.
- **Hero Carousel**: Dynamic homepage slider highlighting core values.
- **Service Catalog**: Detailed listing of logistics services.
- **Project Showcase**: Gallery of past projects with statistics.
- **Contact Integration**: Functional layouts for contact forms and details.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## Branding

### Colors
- **Navy Blue**: `#172838` (Primary)
- **Red**: `#e82128` (Accent)
- **Grey**: `#8A8A8A` (Neutral)

### Typography
- **Primary Font**: Outfit (Sans-serif)

## Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable React components
│   ├── ui/           # Generic UI components (Button, Section)
│   ├── Navbar.tsx    # Responsive navigation
│   ├── Footer.tsx    # Site footer
│   └── HeroCarousel.tsx # Homepage slider
└── ...
public/               # Static assets (images, logos)
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Next.js config and deploy.
