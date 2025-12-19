
import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies.data';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://kasunharsha.com';

  const caseStudyUrls = caseStudies.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...caseStudyUrls,
  ]
}
