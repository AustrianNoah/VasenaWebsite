import { error } from '@sveltejs/kit';
import { client } from '$js/pocketbase'

/** @type {import('./$types').PageLoad} */
export async function load() {
    // @ts-ignore
    const records = await client.records.getFullList('rules', 200 /* batch size */, {
        sort: '-created'
    });
    return {
        data: records
    };
    throw error(404, 'Not found');
}