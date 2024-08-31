<script lang="ts">
	import CTA from '$components/CTA.svelte';
</script>

<svelte:head>
	<title>Envisiontech Academy: Master Tech Skills, Build Your Future</title>
	<meta
		name="description"
		content="Master the skills that power the digital world. Envisiontech Academy offers free comprehensive courses in web development, programming, design, and more. Start building your digital future today!"
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<CTA
	imageSRC="/homepage.jpg"
	headingText="Master Tech Skills. Build Your Future."
	paragraphText="Welcome to your gateway to mastering the digital world! From web development to data analysis, our courses cater to beginners and pros alike. Explore, learn, and unlock your potential to create and innovate in today’s tech-driven landscape."
/>

<div class="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
	<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
		<section class="block rounded-xl border border-gray-300 p-8 shadow-xl">
			<h2
				class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl"
			>
				Why Us?
			</h2>

			<p class="text-sm">
				We empower individuals to thrive in the digital age with accessible, high-quality tech
				education. Our engaging courses focus on real-world applications, making learning fun,
				practical, and rewarding. Let us help you build the skills for a successful tech career.
			</p>
		</section>
		<section class="block rounded-xl border border-gray-300 p-8 shadow-xl">
			<h2 class="mb-2 border-b border-gray-500 pb-2 text-xl font-semibold uppercase sm:text-2xl">
				Our Courses
			</h2>

			<p class="mt-1 text-sm">
				Our courses span web development, programming, design, data analysis, and more. From HTML
				basics to advanced JavaScript, Svelte, and data science, we offer flexible, self-paced
				learning for all levels. Enjoy video tutorials, interactive exercises, quizzes, and hands-on
				projects to enhance your skills.
			</p>
		</section>
		<section class="block rounded-xl border border-gray-300 p-8 shadow-xl">
			<h2 class="mb-2 border-b border-gray-500 pb-2 text-xl font-semibold uppercase sm:text-2xl">
				Get Started
			</h2>

			<p class="text-sm">
				Ready to level up your skills? Sign up for a free account and explore our courses. Whether
				learning a new skill, advancing your career, or starting a venture, we’ve got the resources
				to help you succeed. Join our community and transform your future with Envisiontech Academy.
			</p>
		</section>
	</div>
</div>
