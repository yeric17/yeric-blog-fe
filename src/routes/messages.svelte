<script context="module">
  export const load = async ({ fetch, session }) => {
    let response = await fetch(`api/contact`);
    let user = session.user;
    let json = await response.json();
    let contacts = [];

    if (json.data) {
      contacts = json.data.map(contact => {
        contact.created_at = Intl.DateTimeFormat("es-ES", {
          timeZone: "America/Bogota",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          day: "numeric",
          month: "numeric",
          year: "numeric"
        }).format(new Date(contact.created_at));
        return contact;
      });
    }

    if (user.role_id !== 1) {
      return {
        status: 302,
        redirect: "/"
      };
    }
    return {
      props: {
        contacts,
        user
      }
    };
  };
</script>

<script>
  import { fly } from "svelte/transition";
  import Container from "$components/Container.svelte";
  import Button from "$components/Button.svelte";

  export let contacts = [];

  async function handleDelete(id) {
    const response = await fetch(`/api/contact?id=${id}`, {
      method: "DELETE"
    });
    if (response.status === 200) {
      const json = await response.json();
      contacts = contacts.filter(contact => contact.id !== id);
    }
  }
</script>

<style>
  .messages_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
  }

  .message_item {
    background-color: white;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  .message_from {
    padding: 1rem;
    position: relative;
  }
  .message_author {
    display: flex;
    justify-content: space-between;
  }
  .author_email {
    font-size: 0.8rem;
    color: #999;
  }
  .name_letter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--name_height);
    height: var(--name_height);
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: var(--name_height);
    background-color: var(--color-secondary);
    font-weight: 400;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    font-size: 1.1rem;
    color: white;
  }
  .author_name {
    --name_height: 1.7rem;
    background-color: var(--color-secondary-light);
    height: var(--name_height);
    padding-left: 2.5rem;
    padding-right: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--name_height);
    position: relative;
    color: white;
    white-space: nowrap;
    overflow: hidden;

    text-overflow: ellipsis;
  }
  .message_content {
    padding: 1rem;
    border-top: 1px solid var(--color-secondary-light);
    color: var(--color-secondary-dark);
  }
  .button_delete_container {
    position: absolute;
    right: .25rem;
    bottom: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .icon-trash {
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: white;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    padding: 0.3rem;
  }
  .message_createdat {
    font-size: 0.8rem;
    color: #999;
    padding-top: 0.5rem;
  }
</style>

<div class="messages">
  <Container>
    <ul class="messages_list">
      {#each contacts as contact}
        <div class="message_item" in:fly={{ y: -2000, duration: 300 }}>
          <div class="message_from">
            <span class="message_author">
              <span class="author_name">
                <span class="name_letter">{contact.name[0].toUpperCase()}</span>
                <span class="name_text">{contact.name}</span>
              </span>
              <span class="author_email">{contact.email}</span>
            </span>
            <span class="message_createdat">{contact.created_at}</span>
            <div class="button_delete_container">
              <span class="icon-trash" on:click={handleDelete(contact.id)} />
            </div>
          </div>
          <span class="message_content">{contact.message}</span>
        </div>
      {/each}
    </ul>
  </Container>

</div>
