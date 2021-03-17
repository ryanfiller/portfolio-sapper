import attr from 'remark-attr'
import remarkCustomBlocks from 'remark-custom-blocks'
// TODO remark-abbr
// TODO https://github.com/JS-DevTools/rehype-toc

import blockquote from './blockquote'
import headings from './headings'
import images from './images'
import links from './links'
// import video from './video' // only called from image component for now...

export default [
  [attr, { scope: 'every' }],
  [remarkCustomBlocks, {
    details: {
      classes: 'details',
      title: 'required',
      details: true
    },
    clearfix: {
      classes: 'clearfix'
    }
  }],
  blockquote,
  headings,
  images,
  links,
  // video
]