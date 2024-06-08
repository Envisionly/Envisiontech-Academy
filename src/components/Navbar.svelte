<script lang="ts">
	import { page } from '$app/stores';

	let links = [
		{ name: 'Home', href: '/', icon: 'fa-house' },
		{ name: 'Learning', href: '/learning', icon: 'fa-laptop-code' },
		{ name: 'About', href: '/about', icon: 'fa-book-user' }
	];
</script>

<nav class="m-auto">
	<ul class="space-y-7 text-center">
		{#each links as link}
			<li>
				<a
					class="group flex items-center justify-between gap-4 rounded-lg border border-gray-300 bg-gray-300 px-5 py-3 aria-current:bg-gray-100 hover:bg-gray-100 focus:bg-gray-100"
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					href={link.href}
				>
					<span class="font-medium text-envisionlyBlue">{link.name}</span>
					<span
						class="shrink-0 rounded-full border border-current bg-gray-100 p-2 text-envisionlyGold fa-light {link.icon}"
					/>
				</a>
			</li>
		{/each}
	</ul>
</nav>
