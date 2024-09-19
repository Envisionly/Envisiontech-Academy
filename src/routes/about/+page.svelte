<script lang="ts">
    import CTA from '$components/CTA.svelte';
  </script>
  
  <svelte:head>
    <title>About Us - Envisiontech Academy</title>
    <meta name="description" content="Learn more about Envisiontech Academy, our mission, team, and history." />
  </svelte:head>
  
  <CTA
    imageSRC=""
    headingText="About Envisiontech Academy"
    paragraphText="Discover our mission, meet our team, and learn about our journey. We are dedicated to providing high-quality tech education to help you succeed in the digital world."
  />
  
  <div class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
    <section>
      <h2 class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl">
        Our Mission
      </h2>
      <p>
        At Envisiontech Academy, our mission is to empower individuals with the knowledge and skills they need to thrive in the ever-evolving world of technology. We believe in accessible, high-quality education that focuses on real-world applications.
      </p>
    </section>
  
    <section>
      <h2 class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl">
        Our Team
      </h2>
      <p>
        Our team is composed of experienced professionals who are passionate about teaching and helping others achieve their goals. We are dedicated to providing the best learning experience possible.
      </p>
      <ul class="grid grid-cols-1 gap-2 p-8 md:grid-cols-2 md:gap-x-12 md:gap-y-4 xl:gap-x-16 xl:gap-y-6">
        <li>
          <h3 class="text-lg font-semibold uppercase text-gray-700">Paul Geoghegan</h3>
          <p class="pl-2 text-gray-500">Founder</p>
        </li>
        <li>
          <h3 class="text-lg font-semibold uppercase text-gray-700">Melissa Geogehan</h3>
          <p class="pl-2 text-gray-500">Managing Director</p>
        </li>
        <li>
          <h3 class="text-lg font-semibold uppercase text-gray-700">Jessie The Cat</h3>
          <p class="pl-2 text-gray-500">Lead Instructor</p>
        </li>
        <li>
          <h3 class="text-lg font-semibold uppercase text-gray-700">Michael Christie</h3>
          <p class="pl-2 text-gray-500">Developer</p>
        </li>
      </ul>
    </section>
  
    <section>
      <h2 class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl">
        Our History
      </h2>
      <p>
        Envisiontech Academy was founded with the goal of making tech education accessible to everyone.
      </p>
    </section>
  
    <section>
      <h2 class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl">
        Contact Us
      </h2>
      <p>
        If you have any questions or would like to learn more about us, please feel free to <a
        class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
        href="mailto:contact@envisionly.tech">contact us</a>.
      </p>
    </section>
  </div>