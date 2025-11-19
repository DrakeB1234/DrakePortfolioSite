<script lang="ts">
  import SendIcon from "../icons/SendIcon.svelte";

  const email: string = "dbuentello211607@gmail.com";
  let subject: string = $state(
    "Inquiry Regarding Your Web Development Experience",
  );
  let message: string = $state("");
</script>

<section id="contact">
  <div class="wrapper">
    <p class="heading-secondary">
      Interested? Don't Hesistate to Get in Contact With Me!
    </p>
    <form class="contact-form">
      <label for="subject">Subject</label>
      <input name="subject" placeholder="Subject" bind:value={subject} />

      <label for="message">Message</label>
      <textarea
        name="message"
        placeholder="Hello Drake! I am interested in getting in contact with you regarding your web development."
        bind:value={message}
      ></textarea>
      <a
        href="mailto:{email}?subject={subject}&body={message}"
        class="button-link"
      >
        <SendIcon size={20} />
        Send
      </a>
    </form>
  </div>
</section>

<style>
  section {
    background-color: var(--color-primary-3xdark);

    & > div.wrapper {
      padding: var(--spacing-2xlarge) var(--spacing-large);
    }

    & .heading-secondary {
      text-align: center;
      color: var(--color-white);
      margin-bottom: var(--spacing-2xlarge);
    }
  }

  .contact-form {
    width: 100%;
    max-width: 30em;
    margin-inline: auto;

    & > input,
    > textarea {
      width: 100%;
      padding: var(--spacing-small) var(--spacing-base);
      border-radius: var(--radius-base);
      border: 2px solid var(--color-neutral-xdark);
      background-color: var(--color-neutral-light);
    }

    & > textarea {
      min-height: 8em;
    }

    & > a {
      width: 100%;
      margin-top: var(--spacing-large);
    }
  }
</style>
