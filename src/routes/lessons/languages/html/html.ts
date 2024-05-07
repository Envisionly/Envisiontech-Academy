import { type categoryType } from '../../lessons';

export const htmlLessons: categoryType = {
	subCategory: 'HTML',
	subCategorySlug: 'languages/html',
	lessons: [
		{
			section: 'Getting Started',
			sectionSlug: 'getting-started',
			lessons: [
				{ title: 'What is HTML', slug: 'what-is-html' },
				{ title: 'HTML Tags', slug: 'html-tags' }
			]
		},
		{
			section: 'Basic HTML',
			sectionSlug: 'basic-html',
			lessons: [
				{ title: 'HTML Structure', slug: 'html-structure' },
				{ title: 'HTML Elements', slug: 'html-elements' },
				{ title: 'HTML Attributes', slug: 'html-attributes' }
			]
		},
		{
			section: 'Intermediate HTML',
			sectionSlug: 'intermediate-html',
			lessons: [
				{ title: 'HTML Forms', slug: 'html-forms' },
				{ title: 'HTML Tables', slug: 'html-tables' },
				{ title: 'HTML Lists', slug: 'html-lists' }
			]
		},
		{
			section: 'Advanced HTML',
			sectionSlug: 'advanced-html',
			lessons: [
				{ title: 'HTML Semantics', slug: 'html-semantics' },
				{ title: 'HTML Accessibility', slug: 'html-accessibility' },
				{ title: 'HTML Best Practices', slug: 'html-best-practices' }
			]
		}
	]
};
