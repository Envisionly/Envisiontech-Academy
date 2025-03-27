import { type SiteMapItem } from '../../utils/sitemap';
import { sections, type sectionType } from '../../utils/navigationManager';

const BASE_URL = 'https://academy.envisionly.tech';

function generateRoutes(service: SiteMapItem): string {
	return `
    <url>
      <loc>${BASE_URL + service.href}</loc>
      ${service.priority ? `<priority>${service.priority}</priority>` : ''}
      ${service.changeFrequency ? `<changefreq>${service.changeFrequency}</changefreq>` : ''}
      ${service.lastModified ? `<lastmod>${service.lastModified}</lastmod>` : ''}
  </url>
`;
}

function generateNavigationRoutes(section: sectionType): string {
	let routes = '';

	if (section.type === 'link') {
		routes += `
      <url>
        <loc>${BASE_URL + section.href}</loc>
        ${section.priority ? `<priority>${section.priority}</priority>` : ''}
        ${section.changeFrequency ? `<changefreq>${section.changeFrequency}</changefreq>` : ''}
${section.lastModified ? `<lastmod>${section.lastModified}</lastmod>` : ''}
      </url>`;
	} else if (section.subSection) {
		section.subSection.forEach((subSection) => {
			routes += `
        <url>
          <loc>${BASE_URL + section.href + subSection.href}</loc>
${subSection.priority ? `<priority>${subSection.priority}</priority>` : ''}
${subSection.changeFrequency ? `<changefreq>${subSection.changeFrequency}</changefreq>` : ''}
${section.lastModified ? `<lastmod>${section.lastModified}</lastmod>` : ''}
        </url>`;
		});
	}

	return routes;
}

export async function GET() {
	const siteMapInfo = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    ${sections.map((section: sectionType) => generateNavigationRoutes(section)).join('')}

    </urlset>`;

	return new Response(siteMapInfo.trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
