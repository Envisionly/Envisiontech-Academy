<script>
	import ContentBlock from '$components/ContentBlock.svelte';
</script>

<svelte:head>
	<title>HTML Page Structure</title>
	<meta name="description" content="Learn how to create headings in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 class ="text-xl font-bold">Structuring a HTML Page</h2>
<p>
    It is good practice to structure your HTML documents in a way that makes them easy to read and understand.
    Whether it's other users or your future self, you'll thank yourself for following these guidelines.
</p><br>
<p>
    Here's an example of a well-structured HTML document:
</p>

<ContentBlock
    name="HTML Page Structure"
    contentList={[
        {language: 'HTML', content: 
        `<!DOCTYPE HTML>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h2>Page content</h2>
        <p>More content</p>
    </body>
</html>`	}
	]}
/><br>
<h4>Here is a breakdown of what each tag means:</h4>
<p><span class="font-bold">!DOCTYPE HTML</span> declares that the page created is a HTML document</p>
<p><span class="font-bold">&lt;html&gt;</span> demonstrates where all HTML code should be (this will be more useful later!)</p>
<p><span class="font-bold">&lt;head&gt;</span> is where all metadata is placed (the data, about the data!)</p>
<p><span class="font-bold">&lt;title&gt;</span> defines the title of the current page</p>
<p><span class="font-bold">&lt;body&gt;</span> contains all  the content on the page the user will be interacting and browsing.</p>
<p class="italic text-gray-700">Note: indentation does not really matter with HTML, but it is good practice!</p>
