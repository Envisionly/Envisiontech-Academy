<script lang="ts">
	import ContentBlock from '$components/ContentBlock.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Writing HTML</title>
	<meta name="description" content="Learn how to write HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2>Writing HTML</h2>
<p>
	To write HTML, you need a text editor. You can use any text editor you like, but some popular
	choices are:
</p>
<ul>
	<li><a href="https://code.visualstudio.com/">Visual Studio Code</a> (recommended)</li>
	<li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
	<li><a href="https://atom-editor.cc/">Atom</a></li>
	<li><a href="https://notepad-plus-plus.org/">Notepad++</a></li>
</ul>
<p>You can also use online editors like:</p>
<ul>
	<li><a href="https://codepen.io/">CodePen</a></li>
	<li><a href="https://jsfiddle.net/">JSFiddle</a></li>
	<li><a href="https://repl.it/">Repl.it</a></li>
</ul>
<p>
	If you're using a computer you can use the default text editor if you don't want to install
	anything:
</p>
<ul>
	<li>Windows: Notepad</li>
	<li>Mac: TextEdit</li>
	<li>Linux: Gedit</li>
</ul>

<h2>What is a text editor</h2>
<p>
	A text editor is a program that allows you to write and edit plain text. It's different from a
	word processor like Microsoft Word because it doesn't add formatting to the text. Text editors are
	used for writing code, configuration files, and other types of text-based documents.
</p>

<h2>Writing Basic HTML</h2>
<p>
	HTML documents are made up of elements, which are enclosed in tags. Tags are keywords surrounded
	by angle brackets (&lt; and &gt;). The opening tag marks the beginning of an element, and the
	closing tag marks the end.
</p>
<p>Here's an example of a simple HTML document:</p>

<!-- an example of some basic tags-->

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

<p>Let's break down the example above:</p>
<ul>
	<li>
		<code>&lt;h1&gt;</code> is an opening tag that defines a heading. The content between the tags is
		the heading text.
	</li>
	<li>
		<code>&lt;/h1&gt;</code> is a closing tag that marks the end of the heading element.
	</li>
	<li>
		<code>&lt;p&gt;</code> is an opening tag that defines a paragraph. The content between the tags is
		the paragraph text.
	</li>
	<li>
		<code>&lt;/p&gt;</code> is a closing tag that marks the end of the paragraph element.
	</li>
</ul>

<h2>Question</h2>

<MultipleChoice
	question="What is a text editor used for?"
	choices={[
		'Writing and editing plain text',
		'Adding formatting to text',
		'Creating images and videos'
	]}
	answer="Writing and editing plain text"
/>
