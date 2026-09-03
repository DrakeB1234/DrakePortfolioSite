import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import { PROJECT_CARD_DATA } from '$lib/data/projectCardData';
import { normalizeQuery } from '$lib/utils/format';

export function entries() {
  return PROJECT_CARD_DATA.map(project => ({ projectName: normalizeQuery(project.projectTitle ?? "") }));
}

export const load: PageLoad = ({ params }) => {
  // Find the project that matches the URL slug
  const project = PROJECT_CARD_DATA.find(project => normalizeQuery(project.projectTitle ?? "") === params.projectName);

  if (!project) {
    // If no project matches the slug, throw a 404
    error(404, 'Project not found');
  }

  // Whatever is returned here is mapped to the 'data' prop in your +page.svelte
  return {
    projectObj: project
  };
};