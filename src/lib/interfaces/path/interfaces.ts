export interface Home {
    site_data: string,

    section: string,
    get_section: string

    content: string,
    get_content: string,
}

export interface ExampleParentPath {
    get_action: string
    sort_action: string
    example_action: string
}


export interface Auth {
    login: string,
    refresh: string,
    verify: string,

    register: string,
    user: string
}

export interface Path {
    parent: ExampleParentPath,
    home: Home,
    auth: Auth
}
