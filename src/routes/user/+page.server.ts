import { redirect } from '@sveltejs/kit';
import { type ServerLoad } from '@sveltejs/kit';
import { getUserById } from '$lib/server/prisma';

export const load: ServerLoad = async (event) => {
	if (!event.locals.user) throw redirect(302, '/login');

	//Gets user info from the db
	const user = await getUserById(event.locals.user.id);

	return {
		user: user
	};
};
