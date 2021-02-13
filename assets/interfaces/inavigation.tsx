export interface iNavigations {
    logo: Logoitems[]
    navbar: Navbaritems[]
}

export interface Logoitems {
    label: string
    title: string
    url: string
}

export interface Navbaritems {
    label: string
    url: string
}