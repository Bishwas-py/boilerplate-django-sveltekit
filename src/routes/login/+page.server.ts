import type {Actions, PageServerLoad} from './$types';
import {invalid, redirect} from '@sveltejs/kit'
import {apiPath} from "$lib/interfaces/path";


export const load: PageServerLoad = async ({locals}) => {
    if (locals.user) {
        throw redirect(302, '/panel');
    }
    return {
        user: locals.user,
    };
}

export const actions: Actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        if (typeof username !== 'string' || typeof password !== 'string') {
            return invalid(400, {
                invalid: 'Something went wrong with data types!'
            })
        }

        const response = await fetch(apiPath.auth.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const login_data = await response.json();

        if (response.ok) {
            if (login_data.refresh && login_data.access) {
                cookies.set('refresh', login_data.refresh);
                cookies.set('access', login_data.access);

                throw redirect(302, '/panel');
            }
        } else {
            return invalid(400, login_data);
        }
        return invalid(400, {invalid: 'Something went wrong'});
    }
};
