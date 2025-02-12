import { getLessonBySlug } from '$lib/server/learning';

export const load = async ({ params }) => {
	const { section, course, module, lesson } = params;
	const lessonData = await getLessonBySlug(section, course, module, lesson);
	return { sectionData: lessonData };
};
