interface PostErrors {
    title?: string[]
    content?: string[]
    keyword?: string[]
    excerpt?: string[]
    image?: string[]
    slug?: string[]
}

export interface Post {
    id: number
    slug?: string[]

    title?: string
    content: string
    keyword: string
    excerpt: string
    image: string

    visits?: number
    last_visited?: string

    user?: number
    errors?: PostErrors
}
