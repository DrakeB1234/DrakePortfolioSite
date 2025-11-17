<script lang="ts">
  import SendIcon from "../icons/SendIcon.svelte";
  const email: string = "dbuentello211607@gmail.com";

  function handleSubmitEmail(e: SubmitEvent) {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = data.get("email");
    const message = data.get("message");

    console.log(name, message);
  }
</script>

<section id="contact">
  <div class="wrapper">
    <div class="contact-form-container">
      <p class="heading-secondary">
        Interested? Don't Hesistate to Get in Contact With Me!
      </p>
      <form class="contact-form" onsubmit={handleSubmitEmail}>
        <label for="email">Email</label>
        <input name="email" placeholder="youremail@gmail.com" />
        <label for="message">Message</label>
        <textarea
          name="message"
          placeholder="Hello Drake! I am interested in getting in contact with you regarding your web development."
        ></textarea>
        <button type="submit" class="primary">
          <SendIcon size={20} />
          Send
        </button>
      </form>
    </div>
  </div>
  `
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

  .contact-form-container {
    padding: var(--spacing-large);
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
