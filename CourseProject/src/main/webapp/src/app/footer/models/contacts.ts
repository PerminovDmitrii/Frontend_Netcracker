export const contacts: Item[] = [
    {
        id: 1,
        href: 'tel:88121234567',
        imgSrc: '/src/assets/phone.png'
    },
    {
        id: 2,
        href: 'mailto:email@mail.com',
        imgSrc: '/src/assets/email.png',
    },
];

export interface Item {
    id: number;
    href: string;
    imgSrc: string;
}


