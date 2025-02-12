import { getCourseModulesAndLessonsBySlug } from '$lib/server/learning';

export const load = async ({ params }) => {
	const { section, course } = params;
	const data = await getCourseModulesAndLessonsBySlug(section, course);
	return {
		section: data
	};
};
