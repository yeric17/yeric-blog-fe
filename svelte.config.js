import adapter from '@sveltejs/adapter-auto';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			resolve: {
				alias: {
					$stores: path.resolve('src/stores'),
					$components: path.resolve('src/components'),
				}
			}
		},
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
