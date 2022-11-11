import {error} from '@sveltejs/kit';
import type {LayoutServerLoad} from './$types';
import {apiPath} from "$lib/interfaces/path";
import type {Content, Page, SiteData, Section} from '$lib/interfaces/site';

const getSiteData = async (): Promise<SiteData> => {
    const res = await fetch(apiPath.home.site_data);
    if (res.ok) {
        return res.json();
    }
    throw error(404, `Failed to fetch site data from ${apiPath.home.site_data}`);
}

export const load: LayoutServerLoad = async ({locals}) => {
    const siteData = await Promise.resolve(getSiteData());
    return {
        siteData: siteData,
        user: locals.user,
    };
}
