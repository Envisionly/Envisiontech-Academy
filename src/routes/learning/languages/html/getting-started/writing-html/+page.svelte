<script lang="ts">
	import CourseDivider from '$components/CourseDivider.svelte';
	import CourseContent from '$components/CourseContent.svelte';
	import ContentBlock from '$components/ContentBlock.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Writing HTML</title>
	<meta name="description" content="Learn how to write HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'Writing HTML' },
			{
				type: 'description',
				text: `To write HTML, you need a text editor. You can use any text editor you like, but some popular choices are:`
			},
			{
				type: 'list',
				text: [
					{
						item: 'Visual Studio Code (recommended)',
						href: 'https://code.visualstudio.com/',
						icon: 'code',
						iconDescription: 'Code'
					},
					{
						item: 'Sublime Text',
						href: 'https://www.sublimetext.com/',
						icon: 'code',
						iconDescription: 'Code'
					},
					{ item: 'Atom', href: 'https://atom-editor.cc/', icon: 'code', iconDescription: 'Code' },
					{
						item: 'Notepad++',
						href: 'https://notepad-plus-plus.org/',
						icon: 'code',
						iconDescription: 'Code'
					}
				]
			},
			{ type: 'paragraph', text: 'You can also use online editors like:' },
			{
				type: 'list',
				text: [
					{
						item: 'CodePen',
						href: 'https://codepen.io/',
						icon: 'laptop-code',
						iconDescription: 'Code on a laptop'
					},
					{
						item: 'JSFiddle',
						href: 'https://jsfiddle.net/',
						icon: 'laptop-code',
						iconDescription: 'Code on a laptop'
					},
					{
						item: 'Repl.it',
						href: 'https://repl.it/',
						icon: 'laptop-code',
						iconDescription: 'Code on a laptop'
					}
				]
			},
			{
				type: 'paragraph',
				text: `If you're using a computer you can use the default text editor if you don't want to install anything:`
			},
			{
				type: 'list',
				text: [
					{
						item: 'Windows: Notepad',
						icon: 'windows',
						iconFamily: 'brands',
						iconDescription: 'Windows Logo'
					},
					{
						item: 'Mac: TextEdit',
						icon: 'apple',
						iconFamily: 'brands',
						iconDescription: 'Apple Logo'
					},
					{
						item: 'Linux: Gedit',
						icon: 'linux',
						iconFamily: 'brands',
						iconDescription: 'Linux Logo'
					}
				]
			}
		]}
	/>

	<CourseDivider />

	<h2 class="text-xl font-bold">What is a text editor?</h2>
	<p>
		A text editor is a program that allows you to write and edit plain text. It's different from a
		word processor like Microsoft Word because it doesn't add formatting to the text. Text editors
		are used for writing code, configuration files, and other types of text-based documents.
	</p>
	<br />
	<h2 class="text-xl font-bold">Writing Basic HTML</h2>
	<p>
		HTML documents are made up of elements, which are enclosed in tags. Tags are keywords surrounded
		by angle brackets (&lt; and &gt;). The opening tag marks the beginning of an element, and the
		closing tag marks the end.
	</p>
	<p>Here's an example of a simple HTML document:</p>

	<!-- an example of some basic tags-->
	<br />
	<ContentBlock
		name="Basic HTML Tags"
		contentList={[
			{
				language: 'HTML',
				content: `
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
`
			}
		]}
	/>
	<br />
	<p>Let's break down the example above:</p>
	<ul>
		<li>
			<code class="font-bold">&lt;h1&gt;</code> is an opening tag that defines a heading. The content
			between the tags is the heading text.
		</li>
		<li>
			<code class="font-bold">&lt;/h1&gt;</code> is a closing tag that marks the end of the heading element.
		</li>
		<li>
			<code class="font-bold">&lt;p&gt;</code> is an opening tag that defines a paragraph. The content
			between the tags is the paragraph text.
		</li>
		<li>
			<code class="font-bold">&lt;/p&gt;</code> is a closing tag that marks the end of the paragraph
			element.
		</li>
	</ul>
	<br />
	<h2 class="text-xl font-bold underline">Exercise</h2>

	<MultipleChoice
		question="What is a text editor used for?"
		choices={[
			'Writing and editing plain text',
			'Adding formatting to text',
			'Creating images and videos'
		]}
		answer="Writing and editing plain text"
	/>
</article>
