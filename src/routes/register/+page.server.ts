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
        const email = data.get('email');
        const password = data.get('password');
        const password_confirmation = data.get('password_confirmation');

        if (typeof username !== 'string' || typeof password !== 'string' || typeof email !== 'string' || typeof password_confirmation !== 'string') {
            return invalid(400, {invalid: 'Something went wrong with data types!'});
        }

        const response = await fetch(apiPath.auth.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                password_confirmation
            })
        });

        const registration_data = await response.json();
        if (response.ok) {
            if (registration_data.refresh && registration_data.access) {
                cookies.set('refresh', registration_data.refresh);
                cookies.set('access', registration_data.access);
                throw redirect(302, '/');
            }
        } else {
            return invalid(400, registration_data);
        }
        return invalid(400, {invalid: 'Something went wrong'});
    }
};
