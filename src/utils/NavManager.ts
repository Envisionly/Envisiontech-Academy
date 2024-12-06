export type navItem = {
	type: 'link' | 'button' | 'dropdown';
	href?: string;
	icon?: string;
	text?: string;
	subItems?: navItem[];
};

export const navItems: navItem[] = [
	{ type: 'link', href: '/', text: 'Home', icon: 'fa-house' },
	{ type: 'link', href: '/learning', text: 'Learning', icon: 'fa-laptop-code' },
	{ type: 'link', href: '/about', text: 'About', icon: 'fa-book-user' }
];
