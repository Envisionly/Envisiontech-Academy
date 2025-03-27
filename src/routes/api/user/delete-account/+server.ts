import { lucia } from '$lib/server/auth';
import { deleteUserById } from '$lib/server/user.js';

export async function DELETE(event) {
	if (!event.locals.session) {
		return new Response(null, { status: 401, statusText: 'Unauthorized' });
	}
	const user = await deleteUserById(event.locals.session.userId);
	if (!user) {
		return new Response(null, { status: 404, statusText: 'Not Found' });
	}
	await lucia.invalidateSession(event.locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	event.cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});
	return new Response(null, { status: 204 });
}
