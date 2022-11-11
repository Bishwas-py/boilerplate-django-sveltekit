import type {Content, Page, SiteData} from "./site"

export interface MainContext {
    siteData: SiteData
    pages: Page[]
    contents: Content[]
}
