
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CaseStudy } from '@/lib/case-studies.data';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type CaseStudyTemplateProps = {
  project: CaseStudy;
  nextProject: CaseStudy | null;
  prevProject: CaseStudy | null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

const CaseStudyImage = ({ imageId, alt }: { imageId?: string; alt: string }) => {
  if (!imageId) return null;

  const image = PlaceHolderImages.find(p => p.id === imageId) as ImagePlaceholder;
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg shadow-black/5 mt-8"
    >
      <Image
        src={image.imageUrl}
        alt={alt}
        width={1200}
        height={750}
        data-ai-hint={image.imageHint}
        className="object-cover"
      />
    </motion.div>
  );
};

const CaseStudySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
  >
    <div className="md:col-span-1">
      <h3 className="text-xl font-semibold text-foreground/50 sticky top-24">{title}</h3>
    </div>
    <div className="md:col-span-2 space-y-6 text-lg text-foreground/80 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export default function CaseStudyTemplate({ project, nextProject, prevProject }: CaseStudyTemplateProps) {
  const heroImage = PlaceHolderImages.find(p => p.id === project.heroImage) as ImagePlaceholder;

  return (
    <div className="bg-background text-foreground py-16 sm:py-24">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">{project.title}</motion.h1>
        <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-xl sm:text-2xl text-foreground/70 leading-relaxed mb-8">{project.shortDescription}</motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
          {project.techStack.map(tech => <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>)}
        </motion.div>
        <motion.div variants={itemVariants} className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 mb-24">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={project.title}
              width={1200}
              height={750}
              data-ai-hint={heroImage.imageHint}
              className="object-cover"
              priority
            />
          )}
        </motion.div>
      </motion.div>

      {/* Content Sections */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">
        <CaseStudySection title="Overview">
          <div>
            <h4 className="font-semibold text-foreground/90 mb-2 text-lg">The Problem</h4>
            <p>{project.overview.problem}</p>
            <CaseStudyImage imageId={project.overview.problemImage} alt="The problem" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Project Goals</h4>
            <ul className="space-y-2 list-disc pl-5">
              {project.overview.goals.map((goal, i) => <li key={i}>{goal}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground/90 mb-2 text-lg">My Role</h4>
            <p>{project.overview.role}</p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Process">
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Research & Discovery</h4>
                <p>{project.process.research}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">UX Strategy</h4>
                <p>{project.process.uxStrategy}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Design Decisions</h4>
                <p>{project.process.designDecisions}</p>
                <CaseStudyImage imageId={project.process.comparisonImage} alt="Comparison" />
            </div>
        </CaseStudySection>
        
        <CaseStudySection title="Design & Development">
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">UI Approach</h4>
                <p>{project.designAndDevelopment.uiApproach}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Development Highlights</h4>
                <p>{project.designAndDevelopment.developmentHighlights}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Performance & Responsiveness</h4>
                <p>{project.designAndDevelopment.responsiveness}</p>
            </div>
        </CaseStudySection>

        <CaseStudySection title="Outcome">
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Results</h4>
                <p>{project.outcome.results}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Key Learnings</h4>
                <p>{project.outcome.learnings}</p>
            </div>
             <div>
                <h4 className="font-semibold text-foreground/90 mb-2 text-lg">Final Thoughts</h4>
                <p>{project.outcome.finalThoughts}</p>
                 <CaseStudyImage imageId={project.outcome.finalImage} alt="Final result" />
            </div>
        </CaseStudySection>

      </div>

      {/* Navigation */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-24">
        <Separator className="my-12" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="text-center sm:text-left">
                <Link href="/#work">
                    <Button variant="outline" className="group">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"/>
                        Back to All Projects
                    </Button>
                </Link>
            </div>
            <div className="flex gap-4">
                {prevProject ? (
                    <Link href={`/work/${prevProject.slug}`} className="text-right">
                        <Button variant="ghost" className="h-auto p-0 text-base text-right group">
                            <div className="flex flex-col items-end">
                                <span className="text-sm text-foreground/60">Previous Project</span>
                                <span className="font-semibold transition-colors group-hover:text-primary">{prevProject.title}</span>
                            </div>
                            <ArrowLeft className="ml-3 h-5 w-5 text-foreground/60 transition-transform duration-300 group-hover:-translate-x-1"/>
                        </Button>
                    </Link>
                ) : <div className="w-48"></div>}

                {nextProject && (
                     <Link href={`/work/${nextProject.slug}`}>
                        <Button variant="ghost" className="h-auto p-0 text-base text-left group">
                            <ArrowRight className="mr-3 h-5 w-5 text-foreground/60 transition-transform duration-300 group-hover:translate-x-1"/>
                            <div className="flex flex-col items-start">
                                <span className="text-sm text-foreground/60">Next Project</span>
                                <span className="font-semibold transition-colors group-hover:text-primary">{nextProject.title}</span>
                            </div>
                        </Button>
                    </Link>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
