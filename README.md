# Modern Portfolio Landing Page

A stunning, modern portfolio landing page built with **Next.js 14**, **React 18**, **TailwindCSS**, and **Framer Motion**. Features smooth animations, dark/light mode toggle, multilingual support, and a fully functional contact form.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- 🚀 **Next.js 14** with App Router
- ⚛️ **React 18** with TypeScript
- 🎨 **TailwindCSS** for modern styling
- 🎭 **Framer Motion** for smooth animations
- 🌓 **Dark/Light mode** toggle
- 🌍 **Multilingual support** (English, Arabic, German)
- 📱 **Fully responsive** design
- 📧 **Functional contact form** with email integration
- 🎯 **SEO optimized** with proper metadata
- ⚡ **Loading animation** and smooth transitions
- 🎪 **Interactive sections** with hover effects

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Internationalization:** react-i18next
- **Theme:** next-themes
- **Email:** Nodemailer
- **Font:** Geist (Next.js font optimization)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/contact/          # Contact form API route
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Main page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Navigation with theme toggle
│   │   └── footer.tsx       # Footer with social links
│   ├── providers/
│   │   ├── theme-provider.tsx    # Theme provider
│   │   └── client-provider.tsx   # Client-side provider
│   ├── sections/
│   │   ├── hero-section.tsx      # Hero with animated background
│   │   ├── about-section.tsx     # About with stats
│   │   ├── skills-section.tsx    # Skills with progress bars
│   │   ├── projects-section.tsx  # Projects grid with hover effects
│   │   ├── testimonials-section.tsx  # Testimonials carousel
│   │   ├── blog-section.tsx      # Blog preview cards
│   │   └── contact-section.tsx   # Contact form
│   └── ui/
│       └── loading-screen.tsx    # Loading animation
└── lib/
    └── i18n.ts              # Internationalization config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdelrhman/portfolio-landing-page.git
   cd portfolio-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your email configuration:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/lib/i18n.ts` - Update name, title, and content
- `src/components/sections/*` - Update personal details, projects, testimonials
- `src/app/layout.tsx` - Update metadata and SEO information

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update `src/app/globals.css` for global styles
- Customize component styles in individual section files

### Content
- **Projects:** Update `src/components/sections/projects-section.tsx`
- **Skills:** Update `src/components/sections/skills-section.tsx`
- **Testimonials:** Update `src/components/sections/testimonials-section.tsx`
- **Blog:** Update `src/components/sections/blog-section.tsx`

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. To set it up:

1. **Gmail Setup:**
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `SMTP_PASS`

2. **Other Email Providers:**
   - Update SMTP settings in `.env.local`
   - Modify `src/app/api/contact/route.ts` if needed

## 🌍 Internationalization

The site supports multiple languages:
- **English** (default)
- **Arabic** (RTL support included)
- **German**

To add more languages:
1. Add translations to `src/lib/i18n.ts`
2. Update the language selector in `src/components/layout/navbar.tsx`

## 🎭 Animations

Built with Framer Motion featuring:
- **Loading animation** on page load
- **Staggered animations** for section reveals
- **Hover effects** on interactive elements
- **Smooth transitions** between theme changes
- **Scroll-triggered animations** using `whileInView`

## 📱 Responsive Design

Fully responsive design with breakpoints:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'out' folder to Netlify
```

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized
- **Image Optimization:** Next.js Image component
- **Font Optimization:** Next.js font loading
- **Bundle Size:** Optimized with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdelrhman Muhamed**
- Portfolio: [abdelrhman.dev](https://abdelrhman.dev)
- GitHub: [@abdelrhman](https://github.com/abdelrhman)
- LinkedIn: [Abdelrhman Muhamed](https://linkedin.com/in/abdelrhman)
- Email: abdelrhman@example.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide React](https://lucide.dev/) for the icon set
- [Vercel](https://vercel.com/) for deployment platform

---

⭐ Don't forget to star this repository if you found it helpful!
