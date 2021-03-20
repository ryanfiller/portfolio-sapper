<script>
  export let segment
  export let label = ''
  export let links = []
</script>

<style>
  :global(#site-header) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include small {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0;
        margin-right: 1em;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    a {
      color: currentColor;

      &.active {
        position: relative;

        /* &::after {
          TODO
          content: '';
          display: block;
          @include arrow(up);
          position: absolute;
          top: calc(100% + .125em);
          left: 50%;
          transform: translateX(-50%);
        } */
      }
    }
  }
</style>

<nav aria-label={label}>
  <ul>
    {#each links as link}
      <li>
        {#if link.external}
          <a 
            href={link.url}
            target='_blank' rel='noopener noreferrer'
          >
            {link.name}
          </a>
        {:else}
          <a 
            href={`/${link.url}`}
            class:active={link.url === segment}
            sapper:prefetch
          >
            {link.name}
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
