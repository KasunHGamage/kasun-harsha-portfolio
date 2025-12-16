"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Linkedin } from 'lucide-react';
import { navLinks, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navLinks.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      // Trigger animation after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      {navLinks.map((link) => (
        <li key={link.name} className="relative">
          <Link href={link.href} passHref>
            <Button
              variant="ghost"
              className={cn(
                "text-foreground/60 hover:text-foreground transition-colors",
                activeSection === link.id && "text-foreground"
              )}
            >
              {link.name}
            </Button>
          </Link>
          {activeSection === link.id && (
            <motion.div
              layoutId="active-section-indicator"
              className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </li>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled
            ? "max-w-4xl liquid-glass"
            : "max-w-5xl"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Kasun Harsha
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <nav className="hidden md:block">
              <ul className="flex items-baseline space-x-2">
                {navItems}
              </ul>
            </nav>
            <div className="hidden md:flex items-center space-x-2">
              <Separator orientation="vertical" className="h-6" />
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    {link.name === 'LinkedIn' ? <Linkedin className="h-5 w-5 text-foreground/60 hover:text-foreground transition-colors" /> : null}
                    <span className="sr-only">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-bold">Menu</span>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex-1 p-4">
                    <ul className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                          <SheetClose asChild>
                            <Link href={link.href} passHref>
                              <Button variant="ghost" className="w-full justify-start text-lg">{link.name}</Button>
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-4 border-t">
                    <div className="flex justify-start space-x-2">
                      {socialLinks.map((link) => (
                        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon">
                            {link.name === 'LinkedIn' ? <Linkedin className="h-5 w-5" /> : null}
                            <span className="sr-only">{link.name}</span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
