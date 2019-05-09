export interface Headquarters {
    address: string;
    city: string;
    state: string;
}

export interface Links {
    website: string;
    flickr: string;
    twitter: string;
    elon_twitter: string;
}

export interface About {
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    headquarters: Headquarters;
    links: Links;
    summary: string;
}