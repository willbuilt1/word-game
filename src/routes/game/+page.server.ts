import supabase from '$lib/db'

/** @type {import('./$types').GetWords} */
async function getWords() {
    const { data, error } = await supabase.from('words').select();
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
}