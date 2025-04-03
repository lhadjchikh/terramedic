<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Contact Us | Terramedic</title>
  <meta
    name="description"
    content="Reach out to the Terramedic team with questions, feedback, or collaboration opportunities."
  />
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50">
  <NavBar />

  <main class="flex-grow">
    <div class="container-narrow py-12">
      <h1 class="text-terra-dark-blue mb-8 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Contact Us
      </h1>

      <div class="mb-8 rounded-lg bg-white p-6 text-center shadow-sm">
        <p class="mb-4">
          Have questions, feedback, or want to collaborate? We'd love to hear from you. Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
        <p class="text-sm text-gray-600">
          For general inquiries, you can also email us directly at <a
            href="mailto:info@terramedic.org"
            class="text-terra-blue hover:underline">info@terramedic.org</a
          >
        </p>
      </div>

      <ContactForm />
    </div>
  </main>

  <Footer />
</div>
