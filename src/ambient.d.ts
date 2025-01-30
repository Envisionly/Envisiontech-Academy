export type sectionType = {
	id: string;
	name: string;
	slug: string;
	courses?: courseType[];
	createdAt: Date;
	updatedAt: Date;
};

export type courseType = {
	id: string;
	name: string;
	slug: string;
	featured: boolean;
	image: string;
	description: string;
	sectionId: string;
	section?: sectionType;
	modules?: moduleType[];
	createdAt: Date;
	updatedAt: Date;
};

export type moduleType = {
	id: string;
	name: string;
	slug: string;
	courseId: string;
	course?: courseType;
	lessons?: lessonType[];
	createdAt: Date;
	updatedAt: Date;
};

export type lessonType = {
	id: string;
	title: string;
	slug: string;
	moduleId: string;
	module?: moduleType;
	content: any[];
	createdAt: Date;
	updatedAt: Date;
};
