<script>
  import { onMount } from 'svelte'
  import { colorScheme } from '../../stores'
  import { capitalize, getCustomProperty, setCustomProperty } from '../../helpers'

  const LS_KEY = 'user-color-scheme'
  const DOM_ATTR = `data-${LS_KEY}`
  const CSS_PROP = LS_KEY

  const getOpposite = (mode = 'dark') => mode === 'dark' ? 'light' : 'dark'

  // need to explicitly pass quite a few things here so that SSR will understand this function correctly
  const setPreference = (window, setCustomProperty, LS_KEY, DOM_ATTR, CSS_PROP, newPreference) => {
    if (window) {
      const preference = newPreference || window.localStorage.getItem(LS_KEY)
      if (preference) {
        document.documentElement.setAttribute(DOM_ATTR, preference)
        setCustomProperty(CSS_PROP, preference)
        window.localStorage.setItem(LS_KEY, preference)
      }
    }
  }

  let currentColorScheme
  let toggleColorScheme
  let toggleText
  onMount(() => {
    currentColorScheme = getCustomProperty(CSS_PROP)
    $colorScheme = currentColorScheme
    toggleText = getOpposite(currentColorScheme)
    
    toggleColorScheme = event => {
      event.preventDefault()

      let existingUserPrefernece = window.localStorage.getItem(LS_KEY);
      if (existingUserPrefernece === null) {
        existingUserPrefernece = getOpposite(currentColorScheme)
      } else {
        existingUserPrefernece = getOpposite(existingUserPrefernece)
      }

      setPreference(window, setCustomProperty, LS_KEY, DOM_ATTR, CSS_PROP, existingUserPrefernece)
      $colorScheme = existingUserPrefernece
      toggleText = getOpposite(existingUserPrefernece)
    }
  })
</script>

<svelte:head>
  {@html `
    <script>
      const existingUserPrefernece = window.localStorage.getItem('${LS_KEY}')
      const setPreference = ${setPreference.toString()}
      const setCustomProperty = ${setCustomProperty.toString()}
      setPreference(window, setCustomProperty, '${LS_KEY}', '${DOM_ATTR}', '${CSS_PROP}', existingUserPrefernece)
    </script>
  `}
</svelte:head>

<style>
  @media (prefers-color-scheme: dark) {
    :root {
      --user-color-scheme: 'dark';
    }
  }

  .color-scheme-toggle-button {
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    color: currentColor;

    &:hover {
      background-color: transparent;
    }

    svg {
      /* height: var(--tapableSize); */
      height: 25px;
      /* width: var(--tapableSize); */
      width: 25px;
      transform: rotate(-90deg);

      * {
        transform-origin: center center;
        transition: var(--transitionSpeed);
      }

      #main-shape,
      #sun-rays {
        fill: currentColor;
        stroke-width: 0;
      }

      #sun-rays {
        transform: scale(0);

        line {
          stroke: currentColor;
          stroke-width: 0;
        }
      }

      &.light {
        #main-shape {
          transform: scale(1.25);
        }

        #moon-mask {
          transform: translate(-35%, 35%);
        }
      }

      &.dark {
        #main-shape {
          transform: scale(.75);
        }

        #sun-rays {
          transform: scale(1);

          line {
            stroke-width: 10;
          }
        }
      }
    }
  }

</style>

<button
  class='needs-js color-scheme-toggle-button'
  on:click={toggleColorScheme}
  title={`toggle ${toggleText} mode`}
>
  <svg
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="30" height="30"
    viewBox="0 0 150 150"
    class={toggleText}
  >
    <defs> 
      <clipPath id="moon-mask" clipPathUnits="userSpaceOnUse">
        <path d="M160,32.9c-23.7,0-42.9-19.2-42.9-42.9s19.2-42.9,42.9-42.9H0V150h202.9V-10C202.9,13.7,183.7,32.9,160,32.9z" />
      </clipPath>
    </defs>

    <circle id="main-shape" clip-path="url(#moon-mask)" cx="75" cy="75" r="42.87" />

    <g id="sun-rays">
        <line x1="124.51" y1="25.49" x2="112.38" y2="37.62" stroke-linecap="round" />
        <line x1="37.61" y1="112.39" x2="25.49" y2="124.51" stroke-linecap="round" />
        <line x1="124.51" y1="124.51" x2="112.38" y2="112.38" stroke-linecap="round" />
        <line x1="37.61" y1="37.61" x2="25.49" y2="25.49" stroke-linecap="round" />
        <line x1="145" y1="75" x2="127.9" y2="75" stroke-linecap="round" />
        <line x1="22.1" y1="75" x2="5" y2="75" stroke-linecap="round" />
        <line x1="75" y1="145" x2="75" y2="127.9" stroke-linecap="round" />
        <line x1="75" y1="22.1" x2="75" y2="5" stroke-linecap="round" />
    </g>
  </svg>
</button>
