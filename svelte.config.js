import adapter from '@sveltejs/adapter-node';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			resolve: {
				alias: {
					$stores: path.resolve('src/stores'),
					$components: path.resolve('src/components'),
					$css: path.resolve('src/css'),
				}
			},
			optimizeDeps: {
				include: ["highlight.js/lib/core"],
			},
		},
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
