# 🎯 ADmyBRAND AI Suite - Landing Page

A modern, responsive SaaS landing page for ADmyBRAND AI Suite - Your Virtual Marketing Assistant. Built with Next.js 14, TypeScript, and Tailwind CSS featuring glassmorphism design and smooth animations.

![ADmyBRAND AI Suite](./public/ADmyBRAND%20Logo.jpeg)

## 🌟 Features

- **Modern Design**: Glassmorphism UI with gradient backgrounds and glass card effects
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Framer Motion powered scroll-triggered animations and micro-interactions
- **Interactive Components**: 
  - Auto-rotating testimonial carousel
  - Accordion-style FAQ section
  - Monthly/yearly pricing toggle
  - Email subscription with validation
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **TypeScript**: Full type safety throughout the application
- **Accessible**: WCAG compliant with proper semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/admybrand-landing-page.git
cd admybrand-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── layout/
│   │   └── navbar.tsx       # Navigation component
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── features.tsx     # Features showcase
│   │   ├── pricing.tsx      # Pricing plans
│   │   ├── testimonials.tsx # Customer testimonials
│   │   ├── faq.tsx          # FAQ accordion
│   │   └── footer.tsx       # Footer with newsletter
│   └── ui/                  # Reusable UI components
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── ADmyBRAND Logo.jpeg  # Company logo
```

## 🎨 Design System

### Colors
- **Background**: Slate 900 (`#0F172A`)
- **Primary**: Blue 500 to Purple 600 gradient
- **Secondary**: Slate 600-700
- **Accent**: Purple 500 to Pink 500 gradient
- **Success**: Green 400
- **Text**: White/Slate 50 for primary, Slate 300-400 for secondary

### Typography
- **Font Family**: Inter
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Line Heights**: 1.5 for body, 1.2 for headings

### Spacing
- **Grid System**: 8px base unit
- **Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+

## 🧩 Key Components

### Hero Section
- Animated background elements
- Gradient text effects
- Call-to-action buttons with hover animations
- Floating icon animations

### Features Grid
- 6 feature cards with icons
- Scroll-triggered animations
- Hover effects with scaling and gradients

### Pricing Section
- 3-tier pricing structure
- Monthly/yearly toggle
- Popular plan highlighting
- Animated pricing cards

### Testimonials Carousel
- Auto-rotating testimonials (5s intervals)
- Manual navigation controls
- Smooth fade transitions
- Customer avatars and ratings

### FAQ Accordion
- Expandable question/answer pairs
- Smooth height animations
- Plus/minus icon transitions

### Footer
- Newsletter subscription with validation
- Social media links
- Company information and links

## 🎯 Sections Overview

1. **Hero**: Main value proposition with CTAs
2. **Features**: 6 key platform capabilities
3. **Pricing**: 3-tier pricing structure (Starter, Growth, Enterprise)
4. **Testimonials**: Customer success stories
5. **FAQ**: Common questions and answers
6. **Footer**: Contact info and newsletter signup

## 🔧 Customization

### Updating Content
- Edit section content in respective component files under `components/sections/`
- Update company information in `components/layout/navbar.tsx` and `components/sections/footer.tsx`
- Modify pricing plans in `components/sections/pricing.tsx`

### Styling Changes
- Global styles: `app/globals.css`
- Component-specific styles: Tailwind classes in component files
- Color scheme: CSS variables in `app/globals.css`

### Adding New Sections
1. Create new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation links if needed

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

All components adapt gracefully across screen sizes with optimized layouts and typography scaling.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project exports as static files and can be deployed to any static hosting service.

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

For support, email hello@admybrand.ai or create an issue in this repository.

---

**Built with ❤️ for modern SaaS marketing**