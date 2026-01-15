# Sanjay Kumar - Network Engineer Portfolio

A professional, modern portfolio website showcasing network engineering skills, hands-on projects, and technical expertise. Built with React, TypeScript, and Vite for optimal performance and maintainability.

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Components & State Management |
| **TypeScript** | Type Safety & Developer Experience |
| **Vite** | Build Tool & Dev Server |
| **Canvas API** | Network Particle Animation |
| **CSS3** | Styling with CSS Variables |

## ✨ Features

- **Responsive Design** - Optimized for Desktop, Tablet, and Mobile
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Network Particle Background** - Canvas-based animated background in Hero section
- **Interactive Navigation** - Pill-style navbar with active section detection
- **Project Showcase** - Expandable project cards with detailed information
- **Professional Design** - Dark theme with blue accents, suitable for tech industry

## 📁 Project Structure

```
sanjay-kumar-portfolio/
│
├── 📄 index.html                 # Standalone deployable version
├── 📄 package.json               # Dependencies & scripts
├── 📄 vite.config.ts             # Vite configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tsconfig.node.json         # TypeScript Node config
├── 📄 .gitignore                 # Git ignore rules
├── 📄 README.md                  # This file
│
├── 📁 src/                       # Source code
│   ├── 📄 index.html             # Vite HTML template
│   ├── 📄 main.tsx               # React entry point
│   ├── 📄 App.tsx                # Main App component
│   │
│   ├── 📁 components/            # React components
│   │   ├── 📄 Navbar.tsx         # Navigation bar
│   │   ├── 📄 Hero.tsx           # Hero section with video
│   │   ├── 📄 SectionDivider.tsx # Blue gradient divider
│   │   ├── 📄 WhatIDo.tsx        # Services section
│   │   ├── 📄 About.tsx          # About me section
│   │   ├── 📄 Skills.tsx         # Skills grid
│   │   ├── 📄 Projects.tsx       # Projects showcase
│   │   ├── 📄 Labs.tsx           # Labs & practice
│   │   ├── 📄 Contact.tsx        # Contact section
│   │   └── 📄 Footer.tsx         # Footer component
│   │
│   └── 📁 styles/                # Stylesheets
│       └── 📄 main.css           # Global styles
│
└── 📁 projects/                  # Project detail pages
    ├── 📄 packet-analysis.html   # Wireshark packet analysis
    ├── 📄 dhcp-implementation.html # DHCP configuration
    ├── 📄 static-routing.html    # Static routing project
    ├── 📄 ospf-routing.html      # OSPF dynamic routing
    └── 📄 vlan-stp.html          # VLAN & STP project
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/sanjaykumar/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Server runs at http://localhost:3000
```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment Options

### Option 1: Static Hosting (Recommended)

The root `index.html` is a standalone file that works without any build process:

1. Upload all files to your hosting provider
2. Point your domain to the root directory
3. Done!

**Supported Platforms:**
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting

### Option 2: Vite Build Deployment

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting provider
```

### GitHub Pages Deployment

```bash
# Install gh-pages package
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

## 📱 Responsive Breakpoints

| Breakpoint | Device |
|------------|--------|
| > 1024px | Desktop |
| 768px - 1024px | Tablet |
| 480px - 768px | Mobile |
| < 480px | Small Mobile |

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Background | `#020617` | Main background |
| Card Background | `#0f172a` | Cards & containers |
| Border Color | `#1e293b` | Borders & dividers |
| Accent Blue | `#3b82f6` | Links, buttons, highlights |
| Accent Cyan | `#06b6d4` | Tags & badges |
| Text Primary | `#ffffff` | Headings |
| Text Secondary | `#94a3b8` | Body text |
| Text Muted | `#64748b` | Subtle text |

## 📄 Sections

1. **Hero** - Video background with particle animation, name, and role
2. **What I Do** - 4 service cards showcasing expertise
3. **About** - Professional background and goals
4. **Skills** - 5 skill category cards with tags
5. **Projects** - 5 detailed project cards with expand/collapse
6. **Labs** - Home lab environment and tools
7. **Contact** - Email, LinkedIn, and Resume download

## 🔧 Customization

### Updating Personal Information

1. **Contact Details**: Edit `src/components/Contact.tsx`
2. **About Text**: Edit `src/components/About.tsx`
3. **Skills**: Edit `src/components/Skills.tsx`
4. **Projects**: Edit `src/components/Projects.tsx`

### Changing Colors

Edit CSS variables in `src/styles/main.css`:

```css
:root {
    --bg-primary: #020617;
    --bg-secondary: #0f172a;
    --accent-blue: #3b82f6;
    /* ... other variables */
}
```

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Sanjay Kumar**
- LinkedIn: [linkedin.com/in/sanjaykumar](https://linkedin.com/in/sanjaykumar)
- Email: sanjaykumar@example.com

---

⭐ If you found this helpful, please give it a star!
