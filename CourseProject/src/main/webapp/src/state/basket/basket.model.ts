export interface Product {
    id: number;
    name: string;
    rating: number;
    popularity: number;
    config: string;
    price: string;
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
