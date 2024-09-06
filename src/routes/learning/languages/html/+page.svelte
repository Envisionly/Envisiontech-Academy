<script lang="ts">
	import { htmlLessons } from '$utils/languages/html';
	import TableOfContents from '$components/TableOfContents.svelte';
	import Breadcrumb from '$components/Breadcrumb.svelte';
</script>

<svelte:head>
	<title>HTML Course Overview</title>
	<meta name="description" content="Learn HTML with our free course" />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>
<Breadcrumb />
<h1>Welcome to the HTML course</h1>
<p>Master the building blocks of the web: Learn HTML and build your own web pages.</p>
<p>
	This course is designed for beginners with no prior coding experience who want to learn how to
	create web pages using HTML.
</p>
<h2>Learning Objectives:</h2>
<ul>
	<li>Understand the fundamentals of HTML and its role in web development.</li>
	<li>Write basic HTML code to structure and format web pages.</li>
	<li>Utilize common HTML elements like headings, paragraphs, links, and images.</li>
	<li>Implement essential functionalities using forms and user input.</li>
	<li>Apply best practices for semantic HTML and accessibility.</li>
</ul>
<TableOfContents category={htmlLessons} />
