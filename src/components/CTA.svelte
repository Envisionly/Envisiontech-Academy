<script lang="ts">
	const {
		imageSRC,
		headingText,
		paragraphText
	}: { imageSRC: string; headingText: string; paragraphText: string } = $props();

	//Have to use this approach as directly adding in the class of the section doesn't work
	const backgroundImageStyle = `background-image: url('${imageSRC}');`;
</script>

<section class="overflow-hidden bg-cover bg-top bg-no-repeat" style={backgroundImageStyle}>
	<div class="bg-black/60 p-8 md:p-12 lg:px-16 lg:py-24">
		<div class="text-center">
			<h1 class="mb-[5%] text-3xl font-bold uppercase text-white sm:text-4xl">
				{headingText}
			</h1>
			<p class="text-xl text-gray-100">
				{paragraphText}
			</p>
		</div>
	</div>
</section>
