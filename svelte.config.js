import adapter from '@sveltejs/adapter-static';

// Static build for GitHub Pages. BASE_PATH is the repository path the site
// is served under, e.g. "/weblc3" for https://<user>.github.io/weblc3/.
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
