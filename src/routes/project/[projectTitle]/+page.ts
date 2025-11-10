import { PROJECT_CARD_DATA } from '$lib/data/projectCardData';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import { normalizeQuery } from '$lib/utils/format';

export const load = (({ params }) => {
  const projectTitle = params.projectTitle;
  const res = PROJECT_CARD_DATA.find(e => normalizeQuery(e.projectTitle) === projectTitle);
  if (!res) throw error(404, "No Project Found");
  return { ...res };
}) satisfies PageLoad;
