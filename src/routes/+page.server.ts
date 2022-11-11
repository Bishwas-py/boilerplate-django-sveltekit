import type {PageServerLoad} from './$types';

// import {error, invalid, redirect} from '@sveltejs/kit';
// import type {Content, Page, Section} from "$lib/interfaces/site";
// import {apiPath} from "$lib/interfaces/path";

// // remove this function if you don't need it
// const getContents = async (): Promise<Content[]> => {
//     const res = await fetch(apiPath.home.get_content);
//     if (res.ok) {
//         return res.json();
//     }
//     throw error(404, `Failed to fetch contents from ${apiPath.home.get_content}`);
// }
//
// // remove this function if you don't need it
// const getSections = async (): Promise<Section[]> => {
//     const res = await fetch(apiPath.home.get_section);
//     if (res.ok) {
//         return res.json();
//     }
//     throw error(404, `Failed to fetch sections from ${apiPath.home.get_section}`);
// }

export const load: PageServerLoad = async ({locals}) => {
    // if (locals.user) {
    //     throw redirect(302, '/dashboard');
    // }
    // // remove these if you don't need them
    // const contents = await Promise.resolve(getContents());
    // const sections = await Promise.resolve(getSections());
    // return {
    //     contents: contents,
    //     sections: sections
    // }
};
