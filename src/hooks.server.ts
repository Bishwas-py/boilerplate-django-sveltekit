import type {Handle} from '@sveltejs/kit'
import {apiPath} from "$lib/interfaces/path";
import type {User} from "$lib/interfaces/auth";


function verifyToken(access: string): Promise<any> {
    return fetch(apiPath.auth.verify, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'token': access
        })
    });
}

async function getUser(access: string): Promise<User | null> {
    const response = await fetch(apiPath.auth.user, {
        headers: {
            Authorization: `Bearer ${access}`
        },
    });
    if (response.ok) {
        return await response.json();
    }
    return null;
}

async function getAccessToken(refresh: string): Promise<string | null> {
    const response = await fetch(apiPath.auth.refresh, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh: refresh
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.access;
    }
    return null;
}

export const handle: Handle = async ({event, resolve}) => {
    const access = event.cookies.get('access');
    const refresh = event.cookies.get('refresh');

    if (access) {
        const isAccessVerified = await verifyToken(access);

        if (isAccessVerified.ok) {
            const user = await getUser(access);
            if (user) {
                event.locals.user = user;
                return resolve(event);
            }
        }
    }

    if (refresh) {
        const newAccess = await getAccessToken(refresh);
        if (newAccess) {
            event.cookies.set('access', newAccess);
            const user = await getUser(newAccess);
            if (user) {
                event.locals.user = user;
                return resolve(event);
            }
        }
    }
    return resolve(event);
}
