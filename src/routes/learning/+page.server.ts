import { getSectionsWithCourses } from '$lib/server/learning';

export const load = async () => {
	const sections = await getSectionsWithCourses();
	return {
		sections
	};
};
