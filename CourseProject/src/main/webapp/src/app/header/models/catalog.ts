export const catalog: DropDownMenuItem[] = [
    {
        id: 1,
        text: 'Phones',
        path: 'products/phones'
    },

    {
        id: 2,
        text: 'Tablets',
        path: 'products/tablets'
    },

    {
        id: 3,
        text: 'Accessories',
        path: 'products/accessories'
    },
];

export interface DropDownMenuItem {
        id: number;
        text: string;
        path: string;
}
