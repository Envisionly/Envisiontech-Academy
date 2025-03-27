import { type SiteMapItem } from './sitemap';

export type sectionType = SiteMapItem & {
	name: string;
	type: 'section' | 'link';
	subSection?: Array<
		SiteMapItem & {
			text: string;
		}
	>;
};

export const sections: Array<sectionType> = [
	{
		name: 'Home',
		type: 'link',
		href: '/',
		priority: 0.9,
		changeFrequency: 'weekly'
	},
	{
		name: 'About',
		type: 'link',
		href: '/about',

	},
	{
		name: 'Learning',
		type: 'section',
		href: '/learning',

	},
    {
        name: 'Sign In',
		type: 'link',
		href: '/signin',
    },
];
