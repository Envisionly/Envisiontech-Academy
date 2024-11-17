import { fail, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import type { Actions, ServerLoad } from '@sveltejs/kit';
import { getUserById } from '$lib/server/prisma';

export const load: ServerLoad = async (event) => {
	if (!event.locals.user) throw redirect(302, '/login');

	//Gets user info from the db
	const user = await getUserById(event.locals.user.id);

	return {
		user: user
	};
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/login');
	}
};
