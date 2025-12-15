import { Figma, Component, Database } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const roles = ['UI/UX Designer', 'Frontend Developer', 'Product-Focused Creator'];

export const projects = [
  {
    title: 'Rent Hub - Vehicle Rental App',
    description: 'A sleek mobile app for vehicle rentals, focused on a seamless user experience.',
    tech: ['Figma', 'React Native', 'MongoDB'],
    image: 'projectVehicleRental',
    caseStudyUrl: '/work/rent-hub',
    liveUrl: '#',
  },
  {
    title: 'TeacherArena Marketplace',
    description: 'An independent, commission-free e-commerce platform for educators to buy and sell digital resources.',
    tech: ['WordPress', 'WooCommerce', 'Stripe'],
    image: 'projectTeacherArena',
    caseStudyUrl: '/work/teacher-arena-community',
    liveUrl: 'https://teacherarena.com/',
  },
  {
    title: 'New Game Cards E-commerce',
    description: 'An e-commerce site for trading cards with a unique, engaging card-based UI.',
    tech: ['React', 'Framer Motion', 'Stripe'],
    image: 'projectGameCards',
    caseStudyUrl: '/work/new-game-cards-ecommerce',
    liveUrl: '#',
  },
];

export const skills = [
  {
    category: 'UI/UX Design',
    icon: Figma,
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    category: 'Frontend Development',
    icon: Component,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'CMS & Platforms',
    icon: Database,
    items: ['WordPress', 'Firebase', 'Supabase', 'Vercel', 'Shopify'],
  },
];

export const socialLinks = [
    { name: 'LinkedIn', url: 'https://lk.linkedin.com/in/kasun-harsha-gamage-062721248' },
    { name: 'GitHub', url: '#' },
];
