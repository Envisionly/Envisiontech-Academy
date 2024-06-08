import { type categoryType } from '$utils/lessons';

export const javaScriptLessons: categoryType = {
	subCategory: 'JavaScript',
	subCategorySlug: 'languages/javascript',
	image: 'JavaScriptLogo.png',
	lessons: [
		{
			section: 'Getting Started',
			sectionSlug: 'getting-started',
			lessons: [
				{ title: 'What is JavaScript', slug: 'what-is-javascript' },
				{ title: 'JavaScript Syntax', slug: 'javascript-syntax' }
			]
		},
		{
			section: 'Basic JavaScript',
			sectionSlug: 'basic-javascript',
			lessons: [
				{ title: 'JavaScript Variables', slug: 'javascript-variables' },
				{ title: 'JavaScript Data Types', slug: 'javascript-data-types' }
			]
		},
		{
			section: 'Intermediate JavaScript',
			sectionSlug: 'intermediate-javascript',
			lessons: [
				{ title: 'JavaScript Functions', slug: 'javascript-functions' },
				{ title: 'JavaScript Loops', slug: 'javascript-loops' }
			]
		},
		{
			section: 'Advanced JavaScript',
			sectionSlug: 'advanced-javascript',
			lessons: [
				{ title: 'JavaScript Objects', slug: 'javascript-objects' },
				{ title: 'JavaScript Classes', slug: 'javascript-classes' }
			]
		}
	]
};
