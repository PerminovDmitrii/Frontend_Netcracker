export class Catalog {
    public items: DropDownMenuItem[] = [
        {
            text: 'Phones',
            path: 'products/phones'
        },

        {
            text: 'Tablets',
            path: 'products/tablets'
        },

        {
            text: 'Accessories',
            path: 'products/accessories'
        },
    ];
}

export interface DropDownMenuItem {
        text: string;
        path: string;
}
