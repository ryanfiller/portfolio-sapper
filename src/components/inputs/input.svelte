<script>
  export let field = {}
  export let value = ''
  export let onInput = () => {}
  const attributes = {
    id: field.name,
    name: field.name,
    placeholder: field.placeholder ? field.placeholder : field.name,
    required: !!field.required,
  }
</script>

<style>
  label {
    --rowColor: var(--colorHighlight);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: currentColor;
    border: var(--borderWidth) solid var(--rowColor);
    flex: 0;
    overflow: hidden;
    
    &:focus-within {
      --rowColor: var(--colorActive);
    }
  }

  input,
  textarea {
    font-family: sans-serif;
    font-size: 1em;
    background: transparent;
    color: var(--colorText);
    font-size: 1em;
    padding: calc(.25 * var(--padding));
    border: var(--borderWidth) solid transparent;
    flex: 1;
    order: 1;
    box-shadow: none;
    resize: none;

    &:not([value=""]):invalid {
      color: var(--colorHighlight);
    }

    &::placeholder {
      text-transform: capitalize;
      color: var(--colorDisabled);
      opacity: 1;
    }

    &:focus,
    &:not(:placeholder-shown) {
      outline: none;
      margin: 0;
      & + span {
        margin-bottom: 0;
      }
    }
  }

  span {
    text-transform: uppercase;
    color: var(--colorWhite);
    background: var(--rowColor);
    order: 2;
    display: flex;
    align-items: center;
    line-height: 1;
    font-size: 1em;
    padding-left: 1rem;
    transition: margin var(--transitionSpeed);
    height: var(--labelHeight);
    margin-bottom: calc(-1 * var(--labelHeight) - var(--borderWidth));
    border-top: var(--borderWidth) solid var(--rowColor);
  }

  @supports (writing-mode: sideways-lr) {
    label {
      flex-direction: row;
      flex-wrap: nowrap;
    }

    input, 
    textarea {
      &:focus,
      &:not(:placeholder-shown) {
        outline: none;
        margin: 0;

        & + span {
          margin-left: 0;
        }
      }
    }
    
    span {
      font-size: .75em;
      order: -1;
      writing-mode: sideways-lr;
      height: auto;
      padding: .25em;
      justify-content: center;
      margin-bottom: unset !important;
      margin-left: calc(-1 * var(--labelHeight) - var(--borderWidth));
    }
  }
</style>

<label for={field.name}>
  {#if field.type === 'textarea'}
    <textarea
      {...attributes}
      value={value}
      on:input={onInput}
    />
  {:else}
      <input
        type={field.type}
        {...attributes}
        value={value}
        on:input={onInput}
      />
  {/if}
  <span>{field.name}</span>
</label>