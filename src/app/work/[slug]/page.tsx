import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/case-studies.data';
import CaseStudyTemplate from '@/components/case-study-template';
import Header from '@/components/header';
import Footer from '@/components/footer';

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const project = caseStudies.find((p) => p.slug === slug);
  const currentIndex = caseStudies.findIndex((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  const prevProject = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CaseStudyTemplate project={project} nextProject={nextProject} prevProject={prevProject} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
    const project = caseStudies.find(p => p.slug === params.slug);
  
    if (!project) {
      return {
        title: 'Project Not Found',
      };
    }
  
    return {
      title: `${project.title} | Case Study`,
      description: project.shortDescription,
    };
  }
  