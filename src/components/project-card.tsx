"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  caseStudyUrl: string;
  liveUrl?: string;
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const projectImage = PlaceHolderImages.find(p => p.id === project.image) as ImagePlaceholder;

  return (
    <motion.div variants={itemVariants} className="h-full group">
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 rounded-2xl">
        <CardHeader className="p-0">
          {projectImage && (
            <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={projectImage.imageUrl}
                  alt={project.title}
                  width={600}
                  height={450}
                  data-ai-hint={projectImage.imageHint}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
          <CardDescription className="text-foreground/70 mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex items-center gap-6">
           <Link href={project.caseStudyUrl} className="group/link inline-flex items-center text-primary font-medium">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
           </Link>
           {project.liveUrl && project.liveUrl !== '#' && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center text-primary font-medium">
              View Live Site
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
           )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
