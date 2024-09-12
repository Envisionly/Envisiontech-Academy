<script>
	import ContentBlock from '$components/ContentBlock.svelte';
</script>

<svelte:head>
	<title>HTML Attributes</title>
	<meta name="description" content="Learn how attributes work in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 class ="text-xl font-bold">HTML Attributes</h2>
<p>
    Attributes in HTML are used to provide additional information about an element. They are essentially
    an add-on to a tag that can be used to change the behaviour or appearance of an element. 
</p><br>
<p>
    There are many attributes in HTML, some of the most common ones include:
</p>
<ul>
    <li><span class="font-bold">href</span> - used in anchor tags to specify the URL of the page the link goes to</li>
    <li><span class="font-bold">src</span> - used in image tags to specify the URL of the image</li>
    <li><span class="font-bold">alt</span> - used in image tags to provide a text description of the image</li>
    <li><span class="font-bold">class</span> - used to apply a class to an element</li>
    <li><span class="font-bold">lang</span> - used to state the language of a webpage</li>
</ul><br>
<h3 class="text-md font-semibold">Here is an example of how an attribute would be coded:</h3>
<p>
    <code>&lt;a <span class="font-bold">href="https://envisionly.com"&gt;</span>Envisionly&lt;/a&gt;</code>
</p>
<p>
    What has happened here is we have added an attribute to the anchor tag that tells the browser where to go when the link is clicked.
</p>
<br>
<h3 class="text-md font-bold">Attributes and accessilibity</h3>
<p>Attributes play a vital role in accessilibity design. They can provide alternate text to an image
    which would highlight to screen-reader users what the image is representing on the current page.
</p>
<br>
<h3 class="text-md font-bold">Attributes in action</h3>
<ContentBlock
    name="HTML Attributes"
    contentList={[ 
        {language: 'HTML', content: 
        `<!DOCTYPE HTML>
    <body>
        <a href="https://www.envisionlytechacademy.com">Envisiontech Academy</a>
        <br>
        <img src="https://envisiontech-academy.gumlet.io/resources/logo-short-nb.png" 
        width="150" height="150" alt="Envisionly Tech Academy Logo">
    </body>`},
    ]}>

</ContentBlock>