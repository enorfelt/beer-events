import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;

// Transport is used by SvelteKit for client-side navigation
export const transport = ({ request }: { request: Request }) => {
  return { request };
};
