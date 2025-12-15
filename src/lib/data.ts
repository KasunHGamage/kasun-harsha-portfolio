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
    title: 'Vehicle Rental Mobile App',
    description: 'A sleek and modern mobile application for vehicle rentals, focusing on a seamless user experience.',
    tech: ['Figma', 'React Native', 'Firebase'],
    image: 'projectVehicleRental',
    caseStudyUrl: '#',
  },
  {
    title: 'TeacherArena – Online Teacher Community',
    description: 'An online platform for teachers to connect, share resources, and grow professionally.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
    image: 'projectTeacherArena',
    caseStudyUrl: '#',
  },
  {
    title: 'New Game Cards – E-commerce Website',
    description: 'An e-commerce site specializing in trading cards, with a unique and engaging card-based UI.',
    tech: ['React', 'Framer Motion', 'Stripe'],
    image: 'projectGameCards',
    caseStudyUrl: '#',
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
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
];
