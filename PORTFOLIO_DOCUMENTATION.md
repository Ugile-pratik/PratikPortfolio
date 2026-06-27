# Pratik Ugile - Portfolio Website

A modern, cinematic-tech style portfolio website built with React, TypeScript, and Tailwind CSS featuring glassmorphism effects, smooth animations, and an AI chatbot.

## 🌟 Features

### 1. **Responsive Navigation Bar**
- Sticky navigation with smooth scrolling
- Active section highlighting
- Mobile hamburger menu
- Glassmorphism effects with backdrop blur

### 2. **Hero Section (Movie-Style Intro)**
- Animated typing effect cycling through titles
- Animated gradient background with floating orbs
- Call-to-action buttons
- Smooth scroll indicator

### 3. **About Me Section**
- Two-column layout with profile image
- Professional description
- Statistics cards showing achievements
- Glassmorphism card design

### 4. **Education Timeline**
- Vertical timeline with alternating layout
- Animated scroll effects
- Icon-based milestone markers
- Gradient connecting line
- Timeline includes:
  - 10th Grade
  - 12th Grade (Science Stream)
  - BCA (Bachelor of Computer Applications)
  - MCA (Master of Computer Applications - Current)

### 5. **Skills Section**
- Grid layout with animated progress bars
- Icon-based skill cards
- Percentage display
- Shimmer animation on progress bars
- Skills include:
  - Python (90%)
  - Java (85%)
  - JavaScript (88%)
  - SQL (85%)
  - MongoDB (80%)
  - Neo4j (75%)
  - PHP (82%)
  - Git (88%)
  - GitHub (90%)
  - Web Development (92%)

### 6. **Projects Showcase**
- Grid layout with hover effects
- Project cards with images
- Tech stack badges
- GitHub and external links
- Projects featured:
  1. **Promptpal** - AI Chatbot using KNN algorithm
  2. **Blood Bank Donation Management System** - Web-based donation platform
  3. **Mini Clinic ERP** - Enterprise resource planning for clinics
  4. **E-commerce Android App** - Full-featured shopping application

### 7. **Social Media / GitHub Section**
- Animated social media cards
- Glowing hover effects
- Rotating border animations
- Links to:
  - GitHub
  - LinkedIn
  - Instagram
  - Email

### 8. **Contact Form**
- Fully validated contact form
- Real-time form validation
- Success message display
- Contact information cards
- Fields: Name, Email, Message

### 9. **AI Chatbot (Floating Assistant)**
- Floating chat button with pulse animation
- Modern chat interface
- Predefined intelligent responses about:
  - Pratik's background
  - Skills and technologies
  - Projects and portfolio
  - Education
  - Contact information
  - AI/ML interests
- Typing indicator animation
- Timestamp on messages
- Smooth open/close animations

### 10. **Footer**
- Copyright information
- Quick navigation links
- Back to top button
- Gradient decorative elements
- Social links

## 🎨 Design Features

### Color Scheme
- **Primary Colors:**
  - Neon Blue: `#00d4ff`
  - Neon Purple: `#9d4eff`
  - Neon Pink: `#ff006e`
  - Deep Navy: `#0a0e27`
  - Dark Background: `#1a1f3a`

### Visual Effects
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Gradient Animations**: Smooth color transitions
- **Hover Effects**: Glow, scale, and transform effects
- **Scroll Animations**: Elements fade in on scroll
- **Custom Scrollbar**: Gradient-styled scrollbar
- **Particle Effects**: Animated gradient orbs in hero section

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🛠️ Technologies Used

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Vite** - Build tool and dev server

### Libraries & Packages
- **motion (Motion)** - Advanced animations
- **lucide-react** - Icon library
- **@radix-ui** - Accessible UI components

## 📁 Project Structure

```
/src
  /app
    /components
      - Navigation.tsx        # Sticky navigation bar
      - Hero.tsx             # Hero section with typing animation
      - About.tsx            # About section with profile
      - Education.tsx        # Educational timeline
      - Skills.tsx           # Skills with progress bars
      - Projects.tsx         # Project showcase
      - Social.tsx           # Social media links
      - Contact.tsx          # Contact form
      - Chatbot.tsx          # AI chatbot assistant
      - Footer.tsx           # Footer section
      - useInView.tsx        # Custom hook for scroll animations
    - App.tsx               # Main application component
  /styles
    - fonts.css            # Font imports (Poppins)
    - theme.css            # CSS custom properties
    - tailwind.css         # Tailwind directives
    - index.css            # Global styles and animations
```

## 🚀 Key Features Explained

### Smooth Scrolling
All navigation links use smooth scrolling with offset to account for the fixed navigation bar.

### Intersection Observer
The `useInView` custom hook uses the Intersection Observer API to trigger animations when sections come into view.

### Animated Typing Effect
The hero section features a typing animation that cycles through different titles with realistic typing and deleting effects.

### AI Chatbot Logic
The chatbot uses keyword matching to provide intelligent responses about Pratik's:
- Professional background
- Technical skills
- Projects
- Education
- Contact information

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Collapsible mobile menu
- Adaptive grid layouts

## 🎯 Performance Optimizations

- **Lazy Loading**: Images loaded with fallback support
- **Animation Performance**: Hardware-accelerated transforms
- **Code Splitting**: Component-based architecture
- **Optimized Re-renders**: React hooks with proper dependencies

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Animation Details

### Hero Section
- Gradient orbs with scale and opacity animations
- Typing cursor blink effect
- Scroll indicator bounce animation

### Navigation
- Active section indicator with spring animation
- Smooth mobile menu slide-in/out

### Skills
- Progress bars animate on scroll
- Shimmer effect on bars
- Staggered entrance animations

### Projects
- Hover scale and glow effects
- Image zoom on hover
- Gradient overlays

### Chatbot
- Pulse animation on floating button
- Message slide-in animations
- Typing indicator with bouncing dots

## 🔧 Customization Guide

### Changing Colors
Edit the CSS custom properties in `/src/styles/theme.css`:
```css
--neon-blue: #00d4ff;
--neon-purple: #9d4eff;
--neon-pink: #ff006e;
```

### Adding New Projects
Edit the `projects` array in `/src/app/components/Projects.tsx`

### Modifying Skills
Edit the `skills` array in `/src/app/components/Skills.tsx`

### Updating Education
Edit the `timeline` array in `/src/app/components/Education.tsx`

### Chatbot Responses
Edit the `getBotResponse` function in `/src/app/components/Chatbot.tsx`

## 📝 Content Sections

1. **Home/Hero** - Introduction and CTA buttons
2. **About Me** - Professional summary with stats
3. **Education** - Academic journey timeline
4. **Skills** - Technical proficiency showcase
5. **Projects** - Portfolio of work
6. **GitHub/Social** - Social media connections
7. **Contact** - Contact form and information
8. **Footer** - Copyright and quick links

## ✨ Special Effects

- Custom gradient scrollbar
- Text selection with neon blue highlight
- Glassmorphism on cards and navigation
- Rotating gradient borders on social cards
- Animated gradient backgrounds
- Smooth page transitions

## 🎭 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact Integration

The contact form is currently set up with frontend validation. To connect to a real email service:
- Use EmailJS
- Integrate with backend API
- Connect to form services like Formspree

## 🤖 Chatbot Enhancement Options

Current chatbot uses pattern matching. Can be enhanced with:
- Natural Language Processing (NLP)
- API integration to ChatGPT
- Machine learning model
- Context-aware conversations

## 🎓 Educational Purpose

This portfolio demonstrates:
- Modern React patterns
- TypeScript usage
- Animation techniques
- Responsive design
- Component architecture
- State management
- Custom hooks
- Intersection Observer API
- Form handling
- Accessibility considerations

## 📄 License

Personal portfolio project for Pratik Ugile.

## 🙏 Credits

- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins)
- **Images**: Unsplash
- **Animations**: Motion (formerly Framer Motion)
- **Design**: Custom cinematic tech theme

---

**Designed & Developed by Pratik Ugile with ❤️**
