import { type categoryType } from '$utils/lessons';

export const VSCodeLessons: categoryType = {
	subCategory: 'VSCode',
	subCategorySlug: 'tools/vscode',
	featured: true,
	image: 'VSCodeLogo.png',
	description: 'Learn how to use Visual Studio Code to write code.',
	lessons: [
		{
			section: 'Getting Started',
			sectionSlug: 'getting-started',
			lessons: [
				{ title: 'What is Visual Studio Code', slug: 'what-is-vscode' },
				{ title: 'Installing Visual Studio Code', slug: 'installing-vscode' },
				{ title: 'VSCode Interface', slug: 'vscode-interface' },
				{ title: 'Review', slug: 'review' }
			]
		},
		{
			section: 'Basic VSCode',
			sectionSlug: 'basic-vscode',
			lessons: [
				{ title: 'Opening a file', slug: 'opening-a-file' },
				{ title: 'Creating a new file', slug: 'creating-a-new-file' },
				{ title: 'Saving a file', slug: 'saving-a-file' },
				{ title: 'Closing a file', slug: 'closing-a-file' },
				{ title: 'Basic VSCode Review', slug: 'review' },
				{ title: 'Project 1: creating a basic website', slug: 'project' }
			]
		},
		{
			section: 'Intermediate VSCode',
			sectionSlug: 'intermediate-vscode',
			lessons: [
				{ title: 'Using the terminal', slug: 'using-the-terminal' },
				{ title: 'Using extensions', slug: 'using-extensions' },
				{ title: 'Using snippets', slug: 'using-snippets' },
				{ title: 'Using themes', slug: 'using-themes' },
				{ title: 'Intermediate VSCode Review', slug: 'review' },
				{ title: 'Project 2: creating a blog', slug: 'project' }
			]
		},
		{
			section: 'Advanced VSCode',
			sectionSlug: 'advanced-vscode',
			lessons: [
				{ title: 'Customizing settings', slug: 'customizing-settings' },
				{ title: 'Debugging', slug: 'debugging' },
				{ title: 'Version control', slug: 'version-control' },
				{ title: 'Advanced VSCode Review', slug: 'review' },
				{ title: 'Project 3: creating a portfolio', slug: 'project' }
			]
		}
	]
};
