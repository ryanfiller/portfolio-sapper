<script>
	export let segment
	// export let title
	import { stores } from '@sapper/app'
	const { page } = stores()

	import Header from '../components/layout/header.svelte'
	import Footer from '../components/layout/footer.svelte'

	import SEO from '../components/layout/seo.svelte'

	import { markdown } from '../stores.js'

	// temporary fix for broken #hash links - https://github.com/sveltejs/sapper/issues/904#issuecomment-540536561
	import { onMount } from 'svelte'
	onMount(() => {
		document.querySelectorAll('a').forEach(a => {
			if (!a.hash || !document.querySelectorAll(a.hash).length) return
			a.addEventListener('click', event => {
				event.preventDefault()
				window.location.hash = event.target.getAttribute('href')
			})
		})
	})
</script>

<style global type="text/scss">
	@import '../styles/globals.scss';
	@import '../styles/functions.scss';

	html {
		font-size: 12px;

		body {
			margin: 0;
			font-size: 1.5rem;
			line-height: 1;
			background-color: var(--colorLight);
			color: var(--colorDark);
		}
	}

	* {
		box-sizing: border-box;
		
		@include animate {
			scroll-behavior: smooth;
		}
	}

	/* TODO remove this */
	.temp-bio,
	form#contact {
		@include readable();
		margin-bottom: var(--padding);
	}

	// #site {
	// 	min-height: 100vh;
	// 	width: 100%;
	// 	display: grid;
	// 	grid-template-columns: 100%;
	// 	justify-content: stretch;
	// 	grid-template-rows: auto 1fr auto;
	// 	align-items: center;
	// 	grid-template-areas:
	// 		"header"
	// 		"content"
	// 		"footer";

	// 	#site-header {
	// 		grid-area: header;
	// 		width: 100%;
	// 		height: 100%;
	// 	}

	// 	#content {
	// 		grid-area: content;
	// 		width: 100%;
	// 		max-height: 100%;
	// 	}

	// 	#site-footer {
	// 		grid-area: footer;
	// 		width: 100%;
	// 		height: 100%;
	// 	}
	// }

	html {
		overflow-x: hidden;
		overflow-y: scroll; // MUST have scroll always on

		#site {
			overflow: hidden;

			--drawerWidth: 25vw;
			--scrollWidth: 15px;
			--drawerWidthAndScroll: calc(var(--drawerWidth) + var(--scrollWidth));
			--contentWidth: calc(100vw - var(--scrollWidth));
			--negativeMargin: calc(-1 * var(--drawerWidthAndScroll));
			--doubleDrawerWidth: calc(2 * var(--drawerWidthAndScroll));
			--offset: calc(-1 * ((2 * var(--drawerWidthAndScroll) + (1 * var(--drawerWidth))))); // two bumpers, plus one drawer

			display: grid;
			grid-template-columns: auto auto var(--drawerWidth) var(--contentWidth) var(--drawerWidth);
			grid-template-rows: auto 1fr auto;
			gap: 0;
			min-height: 100vh;
			grid-template-areas: "bumper-l bumper-r skip header nav"
													 "bumper-l bumper-r skip body   nav"
													 "bumper-l bumper-r skip footer nav";
			margin-left: var(--offset); 

			.bumper {
				transition: width .25s;
				height: 100%;
				width: var(--drawerWidthAndScroll);
			}

			.skip {
				grid-area: skip;
				&:focus,
				&:focus-within {
					~ div.bumper-l {
						width: var(--doubleDrawerWidth) !important;
					}
				}
			}

			.bumper-l {
				grid-area: bumper-l;
			}

			#navicon {
				transform: scale(200%, 200%);
				// temporary
				position: fixed;
				top: 500px;
				left: 500px;

				&:checked {
					~ .bumper-r {
						width: 0 !important;
					}
				}
			}

			header {
				grid-area: header; // turned off by display-contents
			}

			header,
			header .content {
				display: contents;
			}

			#main-nav {
				grid-area: nav;

				&:focus,
				&:focus-within {
					background: skyblue;

					~ div.bumper-r {
						width: 0 !important;
					}
				}
			}

			.bumper-r {
				grid-area: bumper-r;
			}

			main#content {
				grid-area: body;
			}

			footer {
				grid-area: footer;
			}
		}
	}
</style>

<svelte:head>
	<script 
		async
		src='//gc.zgo.at/count.js'
		data-goatcounter='https://ryanfiller.goatcounter.com/count'
	></script>
	<link rel='stylesheet' href='/slowly-delete-these-styles.css'>
</svelte:head>

<SEO segment={segment} />

<!-- {#if segment === 'generate-image'}
	<slot />
{:else}
	<SEO {segment} />
	<div
		id='site'
		className={segment}
	>
		<Header {segment} />
		<main id='content'>
			<slot />
		</main> 
		<Footer {segment} />
	</div>
{/if} -->

<div id='site' className={segment}>
	<nav class='skip'>
		<div>skip link:</div>
		<ul>
			<li>
				<a href='#content'>skip to content</a>
			</li>
		</ul>
	</nav>
	<div class='bumper bumper-l' />

	<header>
		<div class='content'>
			<img src='http://placekitten.com/100/100' alt='test'>

			<input id='navicon' type='checkbox' />

			<nav id='main-nav'>
				<ul>
					<li>
						<a href='/about'>about</a>
					</li>
					<li>
						<a href='/blog'>blog</a>
					</li>
				</ul>
			</nav>
			<div class='bumper bumper-r' />
		</div>
	</header>

	<main id='content'>
		this is the main content
	</main>

	<footer>
		this is the footer
	</footer>
</div>
