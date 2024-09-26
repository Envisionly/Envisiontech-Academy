<script>
	import ContentBlock from '$components/ContentBlock.svelte';
</script>

<svelte:head>
	<title>HTML Links</title>
	<meta name="description" content="Learn how links work in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 id="header" class="text-xl font-bold">HTML Links</h2>
<p>
    Links are a fundamental part of the web. They are what allow us to navigate from one page to another. In HTML, links are created using the <span class ="font-bold">&lt;a&gt; anchor </span> tag.
</p><br>
<h3 class="font-semibold text-md underline">Example</h3>
<ContentBlock name="HTML Links"
    contentList={[ 
        {language: 'HTML', content:
        `
<a href="https://www.google.com">This way to Google!</a>`
},]}></ContentBlock>
<br>
<p>You can even use a link to navigate to a different part of the same page by using the <span class="font-bold">id</span> attribute.
</p>
<ContentBlock name="Internal Links"
contentList={[ 
    {language: 'HTML', content:
    `
<a href="#header">Jump to the header</a>`
},]}>
</ContentBlock>