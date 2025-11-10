import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
  const projectTitle = url.searchParams.get('q') ?? 'Untitled Project';
  return { projectTitle };
};