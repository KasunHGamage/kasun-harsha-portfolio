"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  caseStudyUrl: string;
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
    <motion.div variants={itemVariants} className="h-full">
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          {projectImage && (
            <div className="aspect-video relative overflow-hidden">
                <Image
                  src={projectImage.imageUrl}
                  alt={project.title}
                  data-ai-hint={projectImage.imageHint}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
          <CardDescription className="text-foreground/70 mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" className="w-full">
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
