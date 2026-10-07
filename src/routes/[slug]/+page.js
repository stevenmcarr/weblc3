/*
 * [slug]/+page.js
 * 
 *  Returns route name
 */

// Documentation pages are served by the 404.html fallback on GitHub Pages.
export const prerender = false;

export const load = ({ params }) => {
    return {
        slug: params.slug
    }
}
