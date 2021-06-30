import { writable } from 'svelte-local-storage-store'
// import * as slss from 'svelte-local-storage-store'
// const { writable } = slss
// console.log('slss', slss)
// console.log('writable', writable)

export const alert = writable('alertBlogExample', {
  title: 'One Of My Favorite Quotes:',
  content: `<blockquote>
  <b>Time</b> is the <b>fire</b> in which we burn.
  <br>
  <br>
  <cite>
    - Dr. Tolian Soran (Delmore Schwartz)
  </cite>
<blockquote>`,
  id: ''
})