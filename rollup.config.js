require('dotenv').config()
import svelte from 'rollup-plugin-svelte'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import copy from 'rollup-plugin-copy'
import svelteSVG from 'rollup-plugin-svelte-svg'

import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

import { mdsvex } from 'mdsvex'
import remarkPlugins from './plugins/remark/index.js'
import rehypePlugins from './plugins/rehype/index.js'
import sveltePreprocess from 'svelte-preprocess'
import { breakpoints } from './src/styles/config.js'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

// https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
let netlifyUrl = ''
if (process.env.CONTEXT !== 'production') {
	netlifyUrl = process.env.DEPLOY_URL
} else {
	netlifyUrl = process.env.URL
}

const setScssBreaks = () => {
	const breaks = {}
	 Object.entries(breakpoints).forEach(breakpoint => {
		const [ size, pixels ] = breakpoint
		breaks[`js-replace-${size}`] = `${pixels}px`
	}) 
	return breaks
}

const replaceVars = {
	'process.env.NODE_ENV': JSON.stringify(mode),
	'process.env.NETLIFY_URL': JSON.stringify(netlifyUrl),
	'process.env.CLOUDINARY_CLOUD': JSON.stringify(process.env.CLOUDINARY_CLOUD),
	'js-replace-small': `576px`,
	...setScssBreaks(),
	exclude: 'src/routes/**/*.md'
}

const dynamicImportVarsOptions = {
	include: `src/routes/**/*.svelte`
}

const preprocess = [
	mdsvex({
		extension: '.md',
		layout: {
			blog: 'src/layouts/blog.svelte',
			lab: 'src/layouts/lab.svelte',
			_: 'src/layouts/markdown.svelte',
		},
		remarkPlugins: [...remarkPlugins],
		rehypePlugins: [...rehypePlugins],
	}),
	sveltePreprocess({
		defaults: { style: 'scss' },
    scss: { prependData: `@import 'src/styles/functions.scss';` },
	})
]

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				...replaceVars
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				extensions: ['.svelte', '.md'],
				preprocess
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			dynamicImportVars(dynamicImportVarsOptions),
			svelteSVG({ dev }),
			copy({
				targets: [
					// dunno why, but this breaks the server.js process if its `_images`
					{ src: 'src/**/images/*.*', dest: 'static/images' }
				]
			}),
			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				...replaceVars
			}),
			svelte({
				dev,
				generate: 'ssr',
				hydratable: true,
				extensions: ['.svelte', '.md'],
				preprocess
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			dynamicImportVars(dynamicImportVarsOptions),
			svelteSVG({ generate: 'ssr', dev }),
			copy({
				targets: [
					{ src: 'src/**/_images/*.*', dest: 'static/images' }
				]
			})
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	// serviceworker: {
	// 	input: config.serviceworker.input(),
	// 	output: config.serviceworker.output(),
	// 	plugins: [
	// 		resolve(),
	// 		replace({
	// 			'process.browser': true,
	// 			...replaceVars
	// 		}),
	// 		commonjs(),
	// 		!dev && terser()
	// 	],

	// 	preserveEntrySignatures: false,
	// 	onwarn,
	// }
}
