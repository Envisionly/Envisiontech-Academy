import { lucia } from '$lib/server/auth';

export async function GET(event) {
	if (!event.locals.session) {
		return new Response(null, { status: 401, statusText: 'Unauthorized' });
	}
	await lucia.invalidateSession(event.locals.session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	event.cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes
	});
	return new Response(null, { status: 204 });
}
