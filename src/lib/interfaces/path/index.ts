import type {Path} from "./interfaces";
import {PUBLIC_BASE_URL} from '$env/static/public';

export function makeAPIPath(path: string): string {
    return PUBLIC_BASE_URL + path;
}

export const apiPath: Path = {
    parent: {
        get_action: makeAPIPath('/handle/short/'),
        sort_action: makeAPIPath('/handle/short/action/'),
        example_action: makeAPIPath('/handle/create-anon/')
    },
    home: {
        content: makeAPIPath('/c/'),
        section: makeAPIPath('/s/'),
        site_data: makeAPIPath('/site-data/'),
        get_content: makeAPIPath('/c/'),
        get_section: makeAPIPath('/s/')
    },
    auth: {
        login: makeAPIPath('/auth/login/'),
        refresh: makeAPIPath('/auth/refresh/'),
        verify: makeAPIPath('/auth/verify/'),

        register: makeAPIPath('/auth/register/'),
        user: makeAPIPath('/auth/user/')
    }

}
