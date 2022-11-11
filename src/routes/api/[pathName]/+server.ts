import type {RequestHandler} from './$types';
import {apiPath} from '$lib/interfaces/path';
import {error, json} from "@sveltejs/kit";

export const GET: RequestHandler = async ({params, cookies, url, request}) => {
    const {pathName} = params;
    const access = cookies.get('access');
    const [first, second] = pathName.split('.');
    const {search} = url;
    try {
        const parentAPIObject = apiPath[first as keyof typeof apiPath];
        let apiUrl: string = parentAPIObject[second as keyof typeof parentAPIObject];

        // attach / to the end of the url if it doesn't exist
        apiUrl = apiUrl.endsWith('/') ? apiUrl : apiUrl + '/';
        // attach search params to the url if it exists
        apiUrl = search ? apiUrl + search : apiUrl;

        let response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            }
        });

        const data = await response.json();
        return json(data, {status: response.status});
    } catch (err) {
        console.log(err);
        throw error(500, "Internal Server Error");
    }
}

export const POST: RequestHandler = async ({params, request, cookies}) => {
    const {pathName} = params;
    const access = cookies.get('access');
    let [first, second] = pathName.split('.');

    try {
        let parentAPIObject = apiPath[first as keyof typeof apiPath];
        let apiUrl = parentAPIObject[second as keyof typeof parentAPIObject];

        let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            },
            body: JSON.stringify(await request.json())
        });

        const data = await response.json();
        return json(data, {status: response.status});
    } catch (err) {
        console.log(err);
        throw error(500, "Internal Server Error");
    }
}

export const PUT: RequestHandler = async ({params, request, cookies, fetch}) => {
    const {pathName} = params;
    const access = cookies.get('access');
    let [first, second] = pathName.split('.');

    try {
        let parentAPIObject = apiPath[first as keyof typeof apiPath];
        let apiUrl = parentAPIObject[second as keyof typeof parentAPIObject];

        let response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            },
            body: JSON.stringify(await request.json())
        });

        const data = await response.json();
        return json(data, {status: response.status});
    } catch (err) {
        console.log(err);
        throw error(500, "Internal Server Error");
    }
}

export const DELETE: RequestHandler = async ({params, request, cookies, fetch}) => {
    const {pathName} = params;
    const access = cookies.get('access');
    let [first, second] = pathName.split('.');

    try {
        let parentAPIObject = apiPath[first as keyof typeof apiPath];
        let apiUrl = parentAPIObject[second as keyof typeof parentAPIObject];

        let body = await request.json();

        let response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            },
            body: JSON.stringify(body)
        });
        let text = await response.text();
        return new Response(String(text), {status: 200});
    } catch (err) {
        console.log(err);
        throw error(500, "Internal Server Error");
    }
}
