import { error } from '@sveltejs/kit';
// @ts-ignore
import { client } from '$js/pocketbase';

/** @type {import('./$types').PageLoad} */
export async function load() {
    // @ts-ignore
    const records = await client.records.getFullList('news', 200 /* batch size */, {
        sort: '-created',
        expand: 'author'
    });
    return {
        data: records
    };
    throw error(404, 'Not found');
}