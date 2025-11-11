<script>
  import SendIcon from "../icons/SendIcon.svelte";
</script>

<section id="contact">
  <div class="contact-header">
    <div class="wrapper">
      <p class="heading-secondary">
        Interested? Don't Hesistate to Get in Contact With Me!
      </p>
    </div>
  </div>
  <div class="contact-form-container">
    <form class="contact-form">
      <input placeholder="youremail@gmail.com" />
      <textarea
        placeholder="Hello Drake! I am interested in getting in contact with you regarding your web development."
      ></textarea>
      <button
        on:click|preventDefault={() => console.log("Sent")}
        class="primary"
      >
        <SendIcon size={20} />
        Send
      </button>
    </form>
  </div>
</section>

<style>
  .contact-header {
    background-color: var(--color-primary-2xdark);

    & > div.wrapper {
      padding: var(--spacing-2xlarge) var(--spacing-large);
    }

    & .heading-secondary {
      color: var(--color-white);
    }
  }

  .contact-form-container {
    padding: var(--spacing-xlarge);
    background-color: var(--color-primary-3xdark);
    box-shadow: 0 10px 20px #00000020;
  }

  .contact-form {
    width: 100%;
    max-width: 26em;
    margin-inline: auto;

    & > input,
    > textarea {
      width: 100%;
      padding: var(--spacing-small) var(--spacing-base);
      border-radius: var(--radius-base);
      border: 2px solid var(--color-neutral-xdark);
    }

    & > textarea {
      min-height: 8em;
      margin-top: var(--spacing-small);
    }

    & > button {
      width: 100%;
      margin-top: var(--spacing-large);
    }
  }
</style>
