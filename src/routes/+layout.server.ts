import { type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async (event) => {
	return { isLoggedIn: !event.locals.user };
};
