export interface SiteData {
    id: number
    title: string
    subtitle: string
    description: string
    thumbnail: string
    keywords: string
    ads_on: boolean
}

export interface Page {
    id: number
    title: string
    content: string
    slug: string
}

export interface Content {
    id: number
    title: string
    description: string
}

export interface Section {
    id: number
    title: string
    description: string
    call_to_action: string
    link: string
    image: string
    order: number
}
