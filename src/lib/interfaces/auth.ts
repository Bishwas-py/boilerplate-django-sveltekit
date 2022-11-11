export interface User {
    id: number
    first_name?: string
    last_name?: string
    email: string
    username: string
    is_staff?: string
    is_superuser?: string
}

export interface AuthError {
    email: string[]
    username: string[]
    password: string[]
    password_confirmation: string[]
    detail: string[]
    invalid: string[]
}
