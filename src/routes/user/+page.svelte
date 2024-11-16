<script lang="ts">
	import { enhance } from '$app/forms';

	const { data } = $props();
</script>

<h1>User page</h1>
<p>Welcome, {data.user?.username}!</p>

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
