import supabase from '$lib/db';
import type { PageServerLoad } from './$types';

// /** @type {import('./$types').PageLoad} */
export const load: PageServerLoad = async () => {
	const { data, error } = await supabase.from('words').select();

	if (error) throw new Error(error.message);
	const wordArray: string[] = data.map((d) => d.word);

	return { words: wordArray };
};
