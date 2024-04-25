import { error } from '@sveltejs/kit';
import { client } from '$js/pocketbase';

export async function load() {
    // @ts-ignore
    const records = await client.records.getFullList('events', 200 /* batch size */, {
        sort: '-created',
        expand: 'eventHoster'
    });
    return {
        data: records
    };
    throw error(404, 'Not found');
}