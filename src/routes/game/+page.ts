import supabase from '$lib/db';
import type { PageLoad } from './$types';

// /** @type {import('./$types').PageLoad} */
export async function load(): Promise<{ data: any[] }> {
	const { data, error } = await supabase.from('words').select();
	if (error) throw new Error(error.message);
	console.log(data);
	return { data };
}