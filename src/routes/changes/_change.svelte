<!-- TODO make this a generic 'collapse' or something component-->

<style global>
  .change {
    padding: var(--padding);
    background: var(--pixelBorder);
    margin-bottom: var(--padding);

    p {
      margin-bottom: 0;
  
      &:first-of-type,
      &:last-of-type {
        margin-bottom: 1em;
      }
    }

    details {
      summary {
        font-size: 1.125em;
        font-weight: bold;
        cursor: pointer;

        /* hide default arrow */
        list-style: none;
        &::-webkit-details-marker { display:none; }

        &::before {
          content: '';
          /* @include arrow; */
          transition: var(--transitionSpeed);
          margin-right: .25em;
        }
      }

      &[open] {
        summary:before {
          transform: rotate(90deg);
        }
      }

      div > ul { /* remark-custom-block inserts a div */
        list-style: none;
        padding: 1em 0;
        margin: 0;
        font-weight: bold;

        ul {
          margin: .5em 0;
          padding-left: 1.5em;
          border-left: var(--borderWidth) solid currentColor;
        }

        p {
          margin-bottom: 0;
        }
      }
    }
  }
</style>

<section class='change'>
  <slot />
</section>