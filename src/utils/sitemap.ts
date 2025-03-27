export type SiteMapItem = {
	href?: string;
	priority?: number;
	changeFrequency?: frequencyType;
	lastModified?: string;
};

type frequencyType = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
