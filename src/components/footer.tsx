import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Kasun Harsha. All rights reserved.
          </p>
          <div className="flex space-x-2">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  {link.name === 'GitHub' ? <Github className="h-5 w-5" /> : <Linkedin className="h-5 w-5" />}
                  <span className="sr-only">{link.name}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
