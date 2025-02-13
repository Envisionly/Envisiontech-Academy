import { getCourseModulesAndLessonsBySlug } from '$lib/server/learning';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { section, course } = params;
	const data = await getCourseModulesAndLessonsBySlug(section, course);
	if (data?.courses[0].accessLevel === 'PUBLIC') {
		return {
			section: data
		};
	} else {
		return redirect(307, '/login');
	}
};
