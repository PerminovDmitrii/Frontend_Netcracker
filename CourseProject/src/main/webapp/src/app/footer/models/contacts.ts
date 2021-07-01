export class Contacts {
    public items: Item[] = [
        {
            href: 'tel:88121234567',
            imgSrc: '/src/assets/phone.png'
        },
        {
            href: 'mailto:email@mail.com',
            imgSrc: '/src/assets/email.png',
        },
    ];
}

export interface Item {
    href: string;
    imgSrc: string;
}
