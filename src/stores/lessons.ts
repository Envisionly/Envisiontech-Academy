import { writable } from 'svelte/store';
import type { sectionType, courseType, moduleType, lessonType } from '../ambient';

const createSectionStore = () => {
	const { subscribe, update } = writable<sectionType | null>(null);

	return {
		subscribe,
		setSection: (section: sectionType) => {
			update(() => section);
		},
		clear: () => {
			update(() => null);
		},
		changeCourse: (course: courseType) => {
			update((section) => {
				if (!section) return null;
				return {
					...section,
					courses: [course]
				};
			});
		}
	};
};

export const currentSection = createSectionStore();
