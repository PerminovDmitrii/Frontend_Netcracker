export interface Product {
    id: number;
    name: string;
    rating: number;
    popularity: number;
    config: string;
    price: number;
    img: string;
    description: string;
    brand: string;
    category: string;
    images: Image[];
    techSpec: TechSpec[];
}

export interface Image {
    id: number;
    imageLink: string;
}

export interface TechSpec {
    id: number;
    name: string;
    value: string;
}

export enum PRODUCTS_TYPES {
    phones = 'phones',
    tablets = 'tablets',
    accessories = 'accessories'
}

export enum SortTypes {
    byLowRate,
    byHighRate,
    byLowPopular,
    byHighPopular,
    byLowPrice,
    byHighPrice,
    byLowAlphabet,
    byHighAlphabet,
    byDefault
}

