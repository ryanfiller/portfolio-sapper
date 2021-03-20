<script>
  export let segment

  import { secondaryNav } from '../../config.js'
  import Nav from './nav.svelte'
  import SocialLinks from './social-links.svelte'
</script>

<style>
  .footer {
    font-size: 1em;
    color: var(--colorWhite);
    background: var(--colorPrimary);
    
    padding: 1rem var(--padding);
    padding-bottom: 0;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > :global(*) {
      margin-bottom: 1rem !important;
    }
  
    a {
      text-decoration: none;
      color: currentColor;
      margin: 0 .25em;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>



<footer
  id='site-footer'
  class='footer'
>
  <span>
    Built with
    <a href='https://sapper.svelte.dev/' target='_blank' rel='noopener noreferrer'>
      Sapper
    </a>
      and hosted on
    <a href='https://www.netlify.com/' target='_blank' rel='noopener noreferrer'>
      Netlify
    </a>
  </span>

  <SocialLinks />

  <Nav
    segment={segment}
    links={secondaryNav}
    label='utility navigation'
  />
</footer>