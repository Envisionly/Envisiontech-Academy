import { getSectionsWithCoursesModulesAndLessons } from '$lib/server/learning';

export const load = async () => {
	const sections = await getSectionsWithCoursesModulesAndLessons();
	return {
		sections
	};
};
