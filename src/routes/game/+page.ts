// import type { PageLoad } from '$types';
// export const load: PageLoad = async ({ fetch }) => {
// 	const res = await fetch('/category.json');

// 	if (res.ok) {
// 		const words = await res.json();
// 		return { words };
// 	}
// };
import supabase from '$lib/db';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { data, error } = await supabase.from('words').select();
	if (error) throw new Error(error.message);
	console.log(data);
	return { data };
}