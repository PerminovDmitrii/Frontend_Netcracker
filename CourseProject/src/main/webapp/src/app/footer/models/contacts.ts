export const contacts: Item[] = [
    {
        id: 1,
        href: 'tel:88121234567',
        imgSrc: 'assets/phone.png',
        text: '8 (812) 123-45-67'
    },
    {
        id: 2,
        href: 'mailto:email@mail.com',
        imgSrc: 'assets/email.png',
        text: 'email@mail.com'
    },
];

export interface Item {
    id: number;
    href: string;
    imgSrc: string;
    text: string;
}


