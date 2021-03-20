<script>
  export let show = true
  export let close = null
  export let title = 'Hey!'
</script>

<style>
  aside,
  aside > header,
  aside > header > button {
    color: var(--colorHighlight);
  }

  aside {
    padding: var(--padding);
    background: var(--pixelBorder);
    margin-top: var(--verticalSpacing);
    margin-bottom: var(--verticalSpacing);
  }

  header {
    margin: calc(-1 * var(--padding));
    margin-bottom: var(--padding);
    background: var(--pixelBorderFill);
    box-shadow: inset 0 calc(-2 * var(--pixelSize)) currentColor;
  }

  header button {
    background: var(--pixelBorderFill);
  }

  header button:hover {
    color: var(--colorHighlight);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header strong,
  header span {
    color: var(--colorWhite);
  }

  .title {
    font-size: 1.5em;
    padding-left: var(--padding);
  }

  .content {
    color: var(--colorText);
  }

</style>

{#if show}
  <aside
    class='alert'
    role='note'
  >
    <header>
      <strong class='title'>
        <!-- TODO this really ought to be a slot... -->
        {title}
      </strong>
      {#if close}
        <button on:click={close} title='close'>
          <span class='x' />
        </button>
      {/if}
    </header>

    <div class='content'>
      <slot />
    </div>
  </aside>
{/if}
