import { Product } from '../product.model';

export interface User {
    username: string;
    email: string;
    basket: Product[];
    recentlyProduct: Product[];
}
