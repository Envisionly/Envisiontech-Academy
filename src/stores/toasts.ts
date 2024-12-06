import { writable, type Writable } from 'svelte/store';

export interface Toast {
	id: number;
	message: string;
	type?: 'info' | 'success' | 'error';
	duration?: number; // Duration in milliseconds
}

const createToastStore = () => {
	const { subscribe, update } = writable<Toast[]>([]);

	return {
		subscribe,
		add: (toast: Omit<Toast, 'id'>) => {
			update((toasts) => {
				const id = toasts.length > 0 ? Math.max(...toasts.map((t) => t.id)) + 1 : 1;
				const defaultType = 'info';
				const defaultDuration = 3000;
				const defaultDismissible = true;
				const newToast = {
					...toast,
					id,
					type: toast.type ?? defaultType,
					duration: toast.duration ?? defaultDuration
				};
				// If the toast has a duration, set a timeout to automatically remove it
				if (newToast.duration) {
					setTimeout(() => {
						update((currentToasts) => currentToasts.filter((t) => t.id !== newToast.id));
					}, newToast.duration);
				}
				return [...toasts, newToast];
			});
		},
		clear: () => {
			update(() => []);
		},
		remove: (id: number) => {
			update((toasts) => toasts.filter((t) => t.id !== id));
		}
	};
};

export const toasts = createToastStore();
