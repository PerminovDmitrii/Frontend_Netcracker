import { Product } from "src/product/product.models";

export interface User {
    username: string;
    email: string;
    password: string;
    basket: Product[];
    recentlyProducts: Product[];
}

const unauthorized = {
    username: 'Account',
    email: '',
    password: '',
    basket: [],
    recentlyProducts: []
}

export let users: User[] = [
    unauthorized
];