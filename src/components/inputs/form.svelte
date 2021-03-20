<script>
  export let name = ''
  export let location = ''
  export let fields = []
  import Input from './input.svelte'
  const setDefaultValues = () => fields.map(field => formValues[field.name] = '')
  let state = 'form'
  let formValues = {}
  setDefaultValues()
  const encode = data => Object.keys(data).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
  }).join('&')
  const handleInputChange = event => {
    const { name, value } = event.target
    formValues[name] = value
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': name,
        ...formValues,
        'location': location
      })
    })
    .then(() => state = 'sent')
    .catch(error => {
      console.error(error)
      state = 'error'
    })
  }
</script>

<style>
  .form {
    --labelHeight: 1.25em;
    --rowHeight: 4em;
    @supports (writing-mode: sideways-lr) {
      --rowHeight: 3em;
    }
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    & > *:not(:last-child) {
      margin-bottom: calc(.5 * var(--padding));
    }
  }
  form {
    width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  
  .error,
  .success {
    width: 100%;
    text-align: center;

    button {
      margin: var(--padding) auto 0 auto;
    }
  }
  .row,
  button {
    width: 100%;
    min-height: var(--rowHeight);
  }
  .textarea {
    flex: 1;
  }
</style>

<div class={`form ${name} ${state}`} >
  {#if state === 'sent'}

    <div class='success'>
      <header>
        Sent!
      </header>
      <button 
        type='reset'
        on:click={() => {
          setDefaultValues()
          state = 'form'
        }} 
      >
        Send Another?
      </button>
    </div>

  {:else if state === 'error'}
    <div class='error'>
      <header>
        Error!
      </header>
      <button 
        type='reset'
        on:click={() => {
          state = 'form'
        }} 
      >
        Try again?
      </button>
    </div>

  {:else} 

    <form
      id={name}
      class='form readable container'
      name={name}
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      method='post'
      on:submit={handleFormSubmit}
    >
      <input type='hidden' name='bot-field' />
      <input type='hidden' name='form-name' value={name} />
      {#if location}<input type='hidden' name='page' value={location} />{/if}

      {#each fields as field}
        <div class={`row ${field.type}`}>
          <Input
            {field}
            value={formValues[field.name]}
            onInput={event => handleInputChange(event, field.name)}
          />
        </div>
      {/each}
      <button type='submit'>
        Submit
      </button>
    </form>

  {/if}
</div> 