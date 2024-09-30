<script>
	import ContentBlock from '$components/ContentBlock.svelte';
</script>

<svelte:head>
	<title>Images</title>
	<meta name="description" content="Learn how to utilise in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h1>HTML Images</h1>
<p>
    Images are a great way to make your website more visually appealing. They can be used to break up text, illustrate a point, or simply to make your website look more interesting.
</p>
<p>
    To add an image to your website, you need to use the <code>&lt;img&gt;</code> tag. This tag is an empty tag, which means it does not have a closing tag. Instead, you add attributes to the tag to specify the image you want to display.
</p>
<br>
<h2 class="underline">Example:</h2>
<ContentBlock
    name="Image Example"
    contentList={[
        {language: 'HTML', content: 
        `<img data-src="https://envisiontech-academy.gumlet.io/resources/logo-short-nb.png"
alt="Envisiontech Academy Logo"
width="150" height="150">`
}]}>
</ContentBlock>
<p>
    In this example, we have added an image to the page. The <code>data-src</code> attribute specifies the URL of the image, while the <code>alt</code> attribute provides a text description of the image. The <code>width</code> and <code>height</code> attributes specify the dimensions of the image.
</p>