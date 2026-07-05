# Animated Horizontal Scroll (React + GSAP + Vite)

---

## Overview

Animated Horizontal Scroll is a smooth scroll-based horizontal gallery built with React, GSAP, ScrollTrigger, and Vite.

---

## Features

- Horizontal scroll animation via ScrollTrigger
- Pinned scroll section
- GSAP-based horizontal translation

---

## Tech Stack

- React
- Vite
- GSAP
- ScrollTrigger
- @gsap/react
- Tailwind CSS

---

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    └── HorizontalScroll.jsx
```

---

## Core Logic

### Scroll Animation

Horizontal movement is controlled by GSAP ScrollTrigger:

- Section is pinned during scroll
- Images move along the X-axis
- Translation distance is calculated from `scrollWidth`

---

## Performance Optimizations

- Hardware-accelerated transforms using `translate3d()`
- Optimized scroll animations with GSAP ScrollTrigger
- Minimal DOM updates for smooth rendering

---

## UI / UX

- Smooth scroll-driven user experience
- Responsive layout for different screen sizes
- Interactive hover effects with clean visual hierarchy

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Future Improvements

- Dynamic content integration from a CMS or REST API
- Reusable and configurable gallery component
- Image optimization and lazy loading
- Accessibility improvements (WCAG compliance)
- Cross-browser compatibility enhancements
- Automated testing for UI components

---

## Author

**Dmytro**

Frontend Developer (React / GSAP)

---

## Notes

This project demonstrates scroll-driven animation architecture using GSAP ScrollTrigger, focusing on performance, smooth user interactions, and modern frontend development practices.
