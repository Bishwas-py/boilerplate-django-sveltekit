import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
    throw redirect(302, '/')
}

export const actions: Actions = {
    default({ cookies }) {

        cookies.set('access', '', {
            path: '/',
            expires: new Date(0),
        })
        cookies.set('refresh', '', {
            path: '/',
            expires: new Date(0),
        })

        throw redirect(302, '/login')
    },
}
