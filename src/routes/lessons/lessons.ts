import { languages } from './languages/languages';

export type lessonType = { title: string; slug: string };

export type lessonsListType = Array<{
	section: string;
	sectionSlug: string;
	lessons: Array<lessonType>;
}>;

export type categoryType = {
	subCategory: string;
	subCategorySlug: string;
	lessons: lessonsListType;
};

export type lessonsType = {
	[Key: string]: Array<categoryType>;
};

export const lessons: lessonsType = {
	languages: languages
};
