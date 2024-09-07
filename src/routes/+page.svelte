<script lang="ts">
	import CTA from '$components/CTA.svelte';
	import { lessons } from '$utils/lessons';
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
	imageSRC="homepage.jpg"
	headingText="Master Tech Skills. Build Your Future."
	paragraphText="Welcome to your gateway to mastering the digital world! From web development to data analysis, our courses cater to beginners and pros alike. Explore, learn, and unlock your potential to create and innovate in today’s tech-driven landscape."
/>

<div class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<section>
		<h2
			class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl"
		>
			Why Us?
		</h2>

		<p>
			We empower individuals to thrive in the digital age with accessible, high-quality tech
			education. Our engaging courses focus on real-world applications, making learning fun,
			practical, and rewarding. Let us help you build the skills for a successful tech career.
		</p>

		<ul
			class="grid grid-cols-1 gap-2 p-8 md:grid-cols-2 md:gap-x-12 md:gap-y-4 xl:gap-x-16 xl:gap-y-6"
		>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Self-Guided Learning at Your Pace
				</h3>
				<p class="pl-2 text-gray-500">
					Learn on your own schedule with our flexible, self-paced courses. Whether you have a
					full-time job, family commitments, or a busy lifestyle, our platform allows you to start,
					pause, and continue learning whenever it suits you.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">Expertly Curated Content</h3>
				<p class="pl-2 text-gray-500">
					Our courses are crafted by industry professionals with years of experience, ensuring you
					receive top-notch, relevant content. Each course is designed to provide clear, concise,
					and practical knowledge without the fluff, focusing on what you need to know.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">Hands-On, Practical Learning</h3>
				<p class="pl-2 text-gray-500">
					Apply what you learn immediately with practical exercises, quizzes, and real-world
					projects. Our approach ensures you gain hands-on experience, helping you build a portfolio
					of work that demonstrates your skills.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Interactive and Engaging Materials
				</h3>
				<p class="pl-2 text-gray-500">
					We use engaging content, including videos, animations, and interactive quizzes, to keep
					you motivated and ensure that complex concepts are easy to understand and remember.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Structured Learning Paths for All Levels
				</h3>
				<p class="pl-2 text-gray-500">
					No matter where you start—whether as a beginner or with some experience—you’ll find
					structured paths that guide you from basic concepts to advanced techniques, providing a
					clear roadmap for your learning journey.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Lifetime Access to Course Materials
				</h3>
				<p class="pl-2 text-gray-500">
					Once enrolled, you’ll have lifetime access to your courses, allowing you to revisit
					lessons and stay up-to-date with any content updates as technology evolves.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">Certificate of Completion</h3>
				<p class="pl-2 text-gray-500">
					Earn a certificate upon finishing each course to showcase your achievements. These
					certificates help validate your skills to employers and can be added to your resume or
					LinkedIn profile.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Affordable, High-Quality Education
				</h3>
				<p class="pl-2 text-gray-500">
					We offer high-quality courses at a fraction of the cost of traditional education, making
					tech skills accessible without the hefty price tag. Learn from the best without breaking
					the bank.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Continuous Learning and Resource Updates
				</h3>
				<p class="pl-2 text-gray-500">
					The tech world evolves quickly, and so do our courses. Benefit from regular updates to
					course content, ensuring you’re always learning the latest tools, techniques, and industry
					standards.
				</p>
			</li>
			<li>
				<h3 class="text-lg font-semibold uppercase text-gray-700">
					Access to a Supportive Community
				</h3>
				<p class="pl-2 text-gray-500">
					Even in self-guided learning, you’re never alone. Join our community forums to connect
					with fellow learners, share insights, ask questions, and find support as you progress
					through your learning journey.
				</p>
			</li>
		</ul>
	</section>

	<section>
		<h2
			class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl"
		>
			Our Courses
		</h2>

		<p>
			Our courses span web development, programming, design, data analysis, and more. From HTML
			basics to advanced JavaScript, Svelte, and data science, we offer flexible, self-paced
			learning for all levels. Enjoy video tutorials, interactive exercises, quizzes, and hands-on
			projects to enhance your skills.
		</p>

		<div class="p-8">
			<h3 class="text-center text-lg font-semibold uppercase text-gray-700">Featured</h3>
			<div class="grid grid-cols-3 gap-2 md:gap-x-12 md:gap-y-4 xl:gap-x-16 xl:gap-y-6">
				{#each Object.keys(lessons) as section}
					{#each lessons[section] as lesson}
						{#if lesson.featured}
							<a
								href={`/learning/${lesson.subCategorySlug}/${lesson.lessons[0].sectionSlug}/${lesson.lessons[0].lessons[0].slug}`}
								aria-label={`${lesson.subCategory}`}
							>
								<img
									data-src={`https://envisiontech-academy.gumlet.io/courseImages/${lesson.image}`}
									alt=""
								/>
							</a>
						{/if}
					{/each}
				{/each}
			</div>
		</div>
	</section>

	<section>
		<h2
			class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl"
		>
			Get Started
		</h2>

		<p>
			Ready to level up your skills? Sign up for a free account and explore our courses. Whether
			learning a new skill, advancing your career, or starting a venture, we’ve got the resources to
			help you succeed. Join our community and transform your future with Envisiontech Academy.
		</p>
	</section>
</div>
