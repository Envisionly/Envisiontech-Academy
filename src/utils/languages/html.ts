import { type categoryType } from '$utils/lessons';

export const htmlLessons: categoryType = {
	subCategory: 'HTML',
	subCategorySlug: 'languages/html',
	featured: true,
	image: 'HTMLLogo.png',
	description: 'Master the building blocks of the web: Learn HTML and build your own web pages.',
	lessons: [
		{
			section: 'Getting Started',
			sectionSlug: 'getting-started',
			lessons: [
				{ title: 'What is HTML', slug: 'what-is-html' },
				{ title: 'Writing HTML', slug: 'writing-html' },
				{ title: 'HTML Tags', slug: 'html-tags' },
				{ title: 'Review', slug: 'review' }
			]
		},
		{
			section: 'Basic HTML',
			sectionSlug: 'basic-html',
			lessons: [
				{ title: 'Headings', slug: 'headings' },
				{ title: 'Paragraphs', slug: 'paragraphs' },
				{ title: 'Structure (page layout)', slug: 'structure' },
				{ title: 'Attributes', slug: 'attributes' },
				{ title: 'Links', slug: 'links' },
				{ title: 'Images', slug: 'images' },
				{ title: 'Comments', slug: 'comments' },
				{ title: 'Basic HTML Review', slug: 'review' },
				{ title: 'Project 1: personal portfolio', slug: 'project' }
			]
		},
		{
			section: 'Intermediate HTML',
			sectionSlug: 'intermediate-html',
			lessons: [
				{ title: 'Lists', slug: 'lists' },
				{ title: 'Tables', slug: 'tables' },
				{ title: 'Forms', slug: 'forms' },
				{ title: 'Input Fields', slug: 'input-fields' },
				{ title: 'Buttons', slug: 'buttons' },
				{ title: 'Divs and Spans', slug: 'divs-and-spans' },
				{ title: 'Intermediate HTML Review', slug: 'review' },
				{ title: 'Project 2: building a functional website', slug: 'project' }
			]
		},
		{
			section: 'Advanced HTML',
			sectionSlug: 'advanced-html',
			lessons: [
				{ title: 'Semantics', slug: 'semantics' },
				{ title: 'Best Practices', slug: 'best-practices' },
				{ title: 'Search Engine Optimization (SEO)', slug: 'seo' },
				{ title: 'Accessibility', slug: 'accessibility' },
				{ title: 'Advanced HTML Review', slug: 'review' },
				{ title: 'Project 3: a real website', slug: 'project' },
				{ title: 'Conclusion', slug: 'conclusion' },
				{ title: 'Resources', slug: 'resources' },
				{ title: 'Next Steps', slug: 'next-steps' }
			]
		}
	]
};
