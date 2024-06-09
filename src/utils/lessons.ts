import { languages } from './languages/languages';
import { tools } from './tools/tools';

export type lessonType = { title: string; slug: string };

export type lessonsListType = Array<{
	section: string;
	sectionSlug: string;
	lessons: Array<lessonType>;
}>;

export type categoryType = {
	subCategory: string;
	subCategorySlug: string;
	image: string;
	description: string;
	lessons: lessonsListType;
};

export type lessonsType = {
	[Key: string]: Array<categoryType>;
};

export const lessons: lessonsType = {
	languages: languages,
	tools: tools
};
