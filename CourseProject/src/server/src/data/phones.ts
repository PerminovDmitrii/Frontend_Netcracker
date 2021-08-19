import { Product } from "src/product/product.models"; 

export const phones: Product[] = [
    {
        'id': 1001,
        'name': 'Samsung Galaxy S21',
        'rating': 4.40,
        'popularity': 3,
        'config': '128 GB Gray',
        'price': 60000,
        'img': 'https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-galaxy-s21-5g-g991-sm-g991bzagser-368806301?$684_547_PNG$',
        'description': 'The lineup comprises three devices, with the Galaxy S21 being the least expensive with a smaller screen size. In contrast to the Galaxy S20+, the S21+ is very similar to the S21 spec-wise, with the exception of a larger display, higher battery capacity.',
        'brand': 'Samsung',
        'category': 'phones',
        'images': [
            {
                'id': 10002,
                'imageLink': 'https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-galaxy-s21-5g-g991-sm-g991bzadser-368806270?$684_547_PNG$'
            },
            {
                'id': 10001,
                'imageLink': 'https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-galaxy-s21-5g-g991-sm-g991bzadser-368806266?$684_547_PNG$'
            },
        ],
        'techSpec': [
            {
                'id': 1002,
                'name': 'Display',
                'value': '6.2, Super AMOLED 2X'
            },
            {
                'id': 1001,
                'name': 'Operating system',
                'value': 'Android 11'
            },
            {
                'id': 1006,
                'name': 'Weight',
                'value': '171 g'
            },
            {
                'id': 1003,
                'name': 'Display resolution',
                'value': '2400x1080'
            },
            {
                'id': 1005,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 1004,
                'name': 'Processor',
                'value': 'Samsung Exynos 2100'
            },
        ]
    },
    {
        'id': 1002,
        'name': 'Apple iPhone 12',
        'rating': 4.90,
        'popularity': 5,
        'config': '128 GB Blue',
        'price': 70000,
        'img': 'https://1click.ru/upload/resized/500/500/75/upload/iblock/343/x343751fba0fee3c215c23a21edf95b83.png,q1605099576.pagespeed.ic.H7MHgemQwv.webp',
        'description': '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        'brand': 'Apple',
        'category': 'phones',
        'images': [
            {
                'id': 10005,
                'imageLink': 'http://www.pngall.com/wp-content/uploads/5/Apple-iPhone-12-PNG-Free-Download.png'
            },
            {
                'id': 10004,
                'imageLink': 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-blue-select-2020.png'
            },
        ],
        'techSpec': [
            {
                'id': 10010,
                'name': 'Processor',
                'value': 'Apple A14 Bionic'
            },
            {
                'id': 1008,
                'name': 'Display',
                'value': '6.1, OLED'
            },
            {
                'id': 1009,
                'name': 'Display resolution',
                'value': '2532x1170'
            },
            {
                'id': 10011,
                'name': 'Internal memory',
                'value': '128GB'
            },
            {
                'id': 10012,
                'name': 'Weight',
                'value': '162 g'
            },
            {
                'id': 1007,
                'name': 'Operating system',
                'value': 'iOS 14'
            },
        ]
    },
    {
        'id': 1003,
        'name': 'Honor 20',
        'rating': 4.20,
        'popularity': 3,
        'config': '128 GB White',
        'price': 20000,
        'img': 'https://www.hihonor.com/content/dam/honor/by/product-list/smartphone/honor-20/honor20-listimage-icelandic-white-v.png',
        'description': 'The Honor 20 sports an eye-catching design and has a very compact form factor, which makes it very easy to hold the phone in palms, but the glossy rear panel is a fingerprint magnet. The side-mounted fingerprint sensor is extremely fast. ',
        'brand': 'Honor',
        'category': 'phones',
        'images': [
            {
                'id': 10007,
                'imageLink': 'https://www.hihonor.com/content/dam/honor/by/product-list/smartphone/honor-20/honor20-listimage-icelandic-white-v.png'
            },
            {
                'id': 10008,
                'imageLink': 'https://pricefon.ru/media/cards/honor/20s/belyj-128gb/white-4.png'
            },
        ],
        'techSpec': [
            {
                'id': 10016,
                'name': 'Processor',
                'value': 'HiSilicon Kirin 980'
            },
            {
                'id': 10013,
                'name': 'Operating system',
                'value': 'Android 9'
            },
            {
                'id': 10017,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 10014,
                'name': 'Display',
                'value': '6.26, IPS'
            },
            {
                'id': 10018,
                'name': 'Weight',
                'value': '174 g'
            },
            {
                'id': 10015,
                'name': 'Display resolution',
                'value': '2340x1080'
            },
        ]
    },
    {
        'id': 1004,
        'name': 'Xiaomi Redmi 9',
        'rating': 4.00,
        'popularity': 2,
        'config': '64 GB Gray',
        'price': 20000,
        'img': 'https://i01.appmifile.com/webfile/globalimg/gaoruijia/800/redmi-9-Grey.png',
        'description': 'Redmi 9 smartphone was launched on 27th August 2020. The phone comes with a 6.53-inch touchscreen display with a resolution of 720x1600 pixels and an aspect ratio of 20:9. Redmi 9 is powered by an octa-core MediaTek Helio G35 processor.',
        'brand': 'Xiaomi',
        'category': 'phones',
        'images': [
            {
                'id': 100011,
                'imageLink': 'https://moscow.shop.megafon.ru/images/goods/1342/134236_p_23.png'
            },
            {
                'id': 100010,
                'imageLink': 'https://moscow.shop.megafon.ru/images/goods/1342/134236_p_21.png'
            },
        ],
        'techSpec': [
            {
                'id': 10019,
                'name': 'Operating system',
                'value': 'Android 10'
            },
            {
                'id': 10022,
                'name': 'Processor',
                'value': 'Mediatek Helio G80'
            },
            {
                'id': 10023,
                'name': 'Internal memory',
                'value': '64 GB'
            },
            {
                'id': 10020,
                'name': 'Display',
                'value': '6.53, IPS'
            },
            {
                'id': 10021,
                'name': 'Display resolution',
                'value': '2340x1080'
            },
            {
                'id': 10024,
                'name': 'Weight',
                'value': '198 g'
            },
        ]
    },
    {
        'id': 1005,
        'name': 'Huawei P40',
        'rating': 4.50,
        'popularity': 3,
        'config': '128 GB Black',
        'price': 40000,
        'img': 'https://smart-lite.ru/image/cache/catalog/products/huawei/p40pro/huawei-p40-pro-black-1-800x800.png',
        'description': 'The cutting-edge Kirin 990 5G chipset changes your experience of speed. The Ultra Vision Leica Triple Camera with upgraded AI capability revolutionizes the way of photography. Embrace the power of images and videos and let them speak for you.',
        'brand': 'Huawei',
        'category': 'phones',
        'images': [
            {
                'id': 100012,
                'imageLink': 'https://img01.huaweifile.com/sg/ms/sa/pms/product/6901443376742/428_428_51F553D1893591F454283142A4D157C0E1882B0FC231A795mp.png'
            },
            {
                'id': 100013,
                'imageLink': 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40/images/design/colors/1-left-a.png'
            },
        ],
        'techSpec': [
            {
                'id': 10030,
                'name': 'Weight',
                'value': '175 g'
            },
            {
                'id': 10025,
                'name': 'Operating system',
                'value': 'Android 10 HMS'
            },
            {
                'id': 10028,
                'name': 'Processor',
                'value': 'Kirin 990 5G'
            },
            {
                'id': 10027,
                'name': 'Display resolution',
                'value': '2340x1080'
            },
            {
                'id': 10026,
                'name': 'Display',
                'value': '6.1, OLED'
            },
            {
                'id': 10029,
                'name': 'Internal memory',
                'value': '128 GB'
            },
        ]
    },
    {
        'id': 1006,
        'name': 'Apple iPhone 11',
        'rating': 4.40,
        'popularity': 4,
        'config': '64 GB Black',
        'price': 50000,
        'img': 'https://best-magazin.com/image/cache/catalog/product/Apple%20iPhone%2011%202019/smartfon-iphone11-black-800x800.png',
        'description': 'The iPhone 11 is available in six colors. A notch is at the front for the TrueDepth camera system and speaker, similar to its predecessor, the iPhone XR. The Apple logo is now centered on the back of the device with no text, a change from previous models.',
        'brand': 'Apple',
        'category': 'phones',
        'images': [
            {
                'id': 100014,
                'imageLink': 'http://pngimg.com/uploads/iphone_11/iphone_11_PNG1.png'
            },
            {
                'id': 100015,
                'imageLink': 'https://static-sl.insales.ru/images/products/1/7939/246177539/Apple-iPhone-11-Black-3.png'
            },
        ],
        'techSpec': [
            {
                'id': 10034,
                'name': 'Processor',
                'value': 'Apple A13 Bionic'
            },
            {
                'id': 10033,
                'name': 'Display resolution',
                'value': '1792x828'
            },
            {
                'id': 10031,
                'name': 'Operating system',
                'value': 'iOS 13'
            },
            {
                'id': 10032,
                'name': 'Display',
                'value': '6.1, IPS'
            },
            {
                'id': 10036,
                'name': 'Weight',
                'value': '194 g'
            },
            {
                'id': 10035,
                'name': 'Internal memory',
                'value': '64 GB'
            },
        ]
    },
    {
        'id': 1007,
        'name': 'HUAWEI P40 lite',
        'rating': 3.90,
        'popularity': 3,
        'config': '128 GB Green',
        'price': 20000,
        'img': 'https://m.onlinetrade.ru/img/items/m/smartfon_huawei_p40_lite_crush_green_1315359_1.png',
        'description': 'Huawei P40 Lite smartphone runs on Android v10 (Q) operating system. The phone is powered by Octa core processor. The smartphone has a IPS LCD display, it has a resolution of 1080 x 2340 pixels and 403 ppi pixel density.',
        'brand': 'Huawei',
        'category': 'phones',
        'images': [
            {
                'id': 100017,
                'imageLink': 'https://gagadget.com/media/cache/5b/6d/5b6db1c249aa1014f07dcd8e4ebd711f.png'
            },
            {
                'id': 100018,
                'imageLink': 'https://mordovia.shop.megafon.ru/images/goods/1307/130755_p_23.png'
            },
        ],
        'techSpec': [
            {
                'id': 10041,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 10042,
                'name': 'Weight',
                'value': '183 g'
            },
            {
                'id': 10038,
                'name': 'Display',
                'value': '6.4, LCD'
            },
            {
                'id': 10037,
                'name': 'Operating system',
                'value': 'Android 10 HMS'
            },
            {
                'id': 10040,
                'name': 'Processor',
                'value': 'Kirin 810'
            },
            {
                'id': 10039,
                'name': 'Display resolution',
                'value': '2310x1080'
            },
        ]
    },
    {
        'id': 1008,
        'name': 'Samsung Galaxy S21 Ultra',
        'rating': 4.60,
        'popularity': 3,
        'config': '12/256 GB Black',
        'price': 100000,
        'img': 'https://dvsota.ru/uploads/media/product/0001/60/thumb_59225_product_big.png',
        'description': 'Designed with a unique contour-cut camera to create a revolution in photography — letting you capture 8K video and snap epic stills. And with Galaxy\'s fastest chipset, strongest glass, 5G and an all-day battery, Ultra easily lives up to its name.',
        'brand': 'Samsung',
        'category': 'phones',
        'images': [
            {
                'id': 100020,
                'imageLink': 'https://1click.ru/upload/resized/500/500/75/upload/iblock/96d/96df8d60254286aef8a368c005c8f1b0.png?1612187750'
            },
            {
                'id': 100019,
                'imageLink': 'https://images.samsung.com/is/image/samsung/p6pim/ru/galaxy-s21/gallery/ru-galaxy-s21-ultra-5g-g988-sm-g998bzkdser-368838143?$720_576_PNG$'
            },
        ],
        'techSpec': [
            {
                'id': 10047,
                'name': 'Internal memory',
                'value': '256 GB'
            },
            {
                'id': 10048,
                'name': 'Weight',
                'value': '228 g'
            },
            {
                'id': 10045,
                'name': 'Display resolution',
                'value': '3200x1440'
            },
            {
                'id': 10046,
                'name': 'Processor',
                'value': 'Exynos 2100'
            },
            {
                'id': 10043,
                'name': 'Operating system',
                'value': 'Android 11'
            },
            {
                'id': 10044,
                'name': 'Display',
                'value': '6.9, Dynamic AMOLED 2X'
            },
        ]
    },
    {
        'id': 1009,
        'name': 'Xiaomi Mi 10T',
        'rating': 4.60,
        'popularity': 3,
        'config': '128 GB Silver',
        'price': 40000,
        'img': 'https://i01.appmifile.com/webfile/globalimg/Cindy/J3SSilvery.png',
        'description': '108MP/64MP AI triple camera. 144Hz AdaptiveSync display with TrueColor. 144Hz ultra-high refresh rate can show up to 144 frames per second. Qualcomm® Snapdragon™ 865 with 5G. 5000 mAh (typ) battery with 33W fast charging.',
        'brand': 'Xiaomi',
        'category': 'phones',
        'images': [
            {
                'id': 100021,
                'imageLink': 'https://img.tehnomaks.ru/img/prod/full/16015232121.png'
            },
            {
                'id': 100022,
                'imageLink': 'https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1602578097/stiweqxdzszirhayrzdb.png'
            },
        ],
        'techSpec': [
            {
                'id': 10050,
                'name': 'Display',
                'value': '6.67, IPS'
            },
            {
                'id': 10051,
                'name': 'Display resolution',
                'value': '2400x1080'
            },
            {
                'id': 10052,
                'name': 'Processor',
                'value': 'Qualcomm Snapdragon 865'
            },
            {
                'id': 10049,
                'name': 'Operating system',
                'value': 'Android 10'
            },
            {
                'id': 10053,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 10054,
                'name': 'Weight',
                'value': '216 g'
            },
        ]
    },
    {
        'id': 10010,
        'name': 'Apple iPhone 12 Pro Max',
        'rating': 5.00,
        'popularity': 4,
        'config': '512 GB Graphite',
        'price': 120000,
        'img': 'https://spb-mobil.ru/wp-content/uploads/2019/09/11-black-720x720.png',
        'description': '5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. ',
        'brand': 'Apple',
        'category': 'phones',
        'images': [
            {
                'id': 100024,
                'imageLink': 'https://1click.ru/upload/resized/500/500/75/upload/iblock/68d/x68dbfcd3b9318b27adbed456a0b4dc10.png,q1608277604.pagespeed.ic.L38NYHv3BG.png'
            },
            {
                'id': 100023,
                'imageLink': 'https://1click.ru/upload/resized/500/500/75/upload/iblock/c6d/c6df4c2b254e470ab0ec0c2295da3144.png?1608277604'
            },
        ],
        'techSpec': [
            {
                'id': 10059,
                'name': 'Internal memory',
                'value': '512 GB'
            },
            {
                'id': 10056,
                'name': 'Display',
                'value': '6.7, OLED'
            },
            {
                'id': 10058,
                'name': 'Processor',
                'value': 'Apple A14 Bionic'
            },
            {
                'id': 10057,
                'name': 'Display resolution',
                'value': '2778x1284'
            },
            {
                'id': 10055,
                'name': 'Operating system',
                'value': 'iOS 14'
            },
            {
                'id': 10060,
                'name': 'Weight',
                'value': '226 g'
            },
        ]
    },
    {
        'id': 10011,
        'name': 'Honor 30',
        'rating': 4.30,
        'popularity': 4,
        'config': '128 Green',
        'price': 30000,
        'img': 'https://smart-lite.ru/image/cache/catalog/products/huawei/honor30/green/honor-30-green-1-800x800.png',
        'description': 'Honor 30 is all set to introduce the HiSilicon Kirin 985 5G processor which is an upgraded version that was released last year. The smartphone comes with a 6.53 inches OLED capacitive touchscreen and 1080 x 2400 pixels resolution.',
        'brand': 'Honor',
        'category': 'phones',
        'images': [
            {
                'id': 100025,
                'imageLink': 'https://smart-lite.ru/image/cache/catalog/products/huawei/honor30/green/honor-30-green-1-800x800.png'
            },
            {
                'id': 100026,
                'imageLink': 'https://sim-centre.ru/pictures/product/big/24535_big.png'
            },
        ],
        'techSpec': [
            {
                'id': 10062,
                'name': 'Display',
                'value': '6.53, OLED'
            },
            {
                'id': 10065,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 10066,
                'name': 'Weight',
                'value': '185 g'
            },
            {
                'id': 10061,
                'name': 'Operating system',
                'value': 'Android 10 HMS'
            },
            {
                'id': 10063,
                'name': 'Display resolution',
                'value': '2400x1080'
            },
            {
                'id': 10064,
                'name': 'Processor',
                'value': 'HiSilicon Kirin 985 5G'
            },
        ]
    },
    {
        'id': 10012,
        'name': 'Huawei P40 Pro',
        'rating': 4.20,
        'popularity': 2,
        'config': '256 GB Blue',
        'price': 60000,
        'img': 'https://ogo1.ru/upload/iblock/3db/3db0ea8967bf3edcf08c765ae3a528d8.png',
        'description': 'Speak for yourself with the Ultra Vision Leica Quad Camera by capturing photos and videos anytime and anywhere you want. Revolutionize your experience of speed and power with the cutting-edge Kirin 990 5G Chipset.',
        'brand': 'Huawei',
        'category': 'phones',
        'images': [
            {
                'id': 100027,
                'imageLink': 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro/images/design/colors/3-right-e.png'
            },
            {
                'id': 100028,
                'imageLink': 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro/images/design/colors/3-left-e.png'
            },
        ],
        'techSpec': [
            {
                'id': 10068,
                'name': 'Display',
                'value': '6.58, OLED'
            },
            {
                'id': 10069,
                'name': 'Display resolution',
                'value': '2640x1200'
            },
            {
                'id': 10070,
                'name': 'Processor',
                'value': 'Kirin 990 5G'
            },
            {
                'id': 10067,
                'name': 'Operating system',
                'value': 'Android 10 HMS'
            },
            {
                'id': 10071,
                'name': 'Internal memory',
                'value': '256 GB'
            },
            {
                'id': 10072,
                'name': 'Weight',
                'value': '209 g'
            },
        ]
    },
    {
        'id': 10013,
        'name': 'Xiaomi Poco X3',
        'rating': 4.70,
        'popularity': 4,
        'config': '128 GB Blue',
        'price': 22000,
        'img': 'https://i01.appmifile.com/webfile/globalimg/gaoruijia/poco-x3-nfc-blue.png',
        'description': 'Xiaomi Poco X3 has a 6.67-inch IPS LCD display, having a screen resolution of 1080 x 2400 pixels. The smartphone has a pixel density of 395ppi and a refresh rate of 120Hz. Further, its display is protected by Corning Gorilla Glass v5.',
        'brand': 'Xiaomi',
        'category': 'phones',
        'images': [
            {
                'id': 100030,
                'imageLink': 'https://ichehol.ru/images/product/l/10633ccb6f.png'
            },
            {
                'id': 100029,
                'imageLink': 'https://i01.appmifile.com/webfile/globalimg/gaoruijia/poco-x3-nfc-blue.png'
            },
        ],
        'techSpec': [
            {
                'id': 10078,
                'name': 'Weight',
                'value': '215 g'
            },
            {
                'id': 10075,
                'name': 'Display resolution',
                'value': '2400x1080'
            },
            {
                'id': 10077,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 10076,
                'name': 'Processor',
                'value': 'Qualcomm Snapdragon 732G'
            },
            {
                'id': 10073,
                'name': 'Operating system',
                'value': 'Android 10'
            },
            {
                'id': 10074,
                'name': 'Display',
                'value': '6.67, IPS'
            },
        ]
    },
    {
        'id': 10014,
        'name': 'Samsung Galaxy A51',
        'rating': 3.90,
        'popularity': 4,
        'config': '64 GB Black',
        'price': 19000,
        'img': 'https://cdn.shopify.com/s/files/1/0051/8301/2928/products/samsung_a21_dual_reformatted_8118ce86-b5b8-4334-a892-059881b4c3e5_330x.png?v=1608300420',
        'description': 'Samsung Galaxy A51 smartphone was launched on 8th April 2020. The phone comes with a 6.50-inch touchscreen display.Samsung Galaxy A21 comes with 3GB of RAM. The Samsung Galaxy A21 runs Android 10 and is powered by a 4000mAh non-removable battery.',
        'brand': 'Samsung',
        'category': 'phones',
        'images': [
            {
                'id': 100033,
                'imageLink': 'https://bajajdigital-cdn-endpoint.azureedge.net/product/BEProduction-19421.png'
            },
            {
                'id': 100031,
                'imageLink': 'https://images.samsung.com/is/image/samsung/levant-galaxy-a21s-a217-sm-a217fzkgmid-front-251921707?$720_576_PNG$'
            },
        ],
        'techSpec': [
            {
                'id': 10082,
                'name': 'Processor',
                'value': 'Exynos 9611'
            },
            {
                'id': 10079,
                'name': 'Operating system',
                'value': 'Android 10'
            },
            {
                'id': 10081,
                'name': 'Display resolution',
                'value': '2400x1080'
            },
            {
                'id': 10080,
                'name': 'Display',
                'value': '6.5, Super AMOLED'
            },
            {
                'id': 10083,
                'name': 'Internal memory',
                'value': '64 GB'
            },
        ]
    },
    {
        'id': 10015,
        'name': 'Motorola G9 Plus',
        'rating': 4.20,
        'popularity': 4,
        'config': '128 GB Blue',
        'price': 18000,
        'img': 'https://motorolaru.vtexassets.com/arquivos/ids/155504/moto-g9-plus-pdp-render-3xk2ujckj.png?v=637357637449930000',
        'description': 'The phone comes with a 6.80-inch touchscreen display. Motorola Moto G9 Plus is powered by a 2.2GHz octa-core Qualcomm Snapdragon 730G processor. It comes with 4GB of RAM.',
        'brand': 'Motorola',
        'category': 'phones',
        'images': [
            {
                'id': 100034,
                'imageLink': 'https://motorolaru.vtexassets.com/arquivos/ids/155504/moto-g9-plus-pdp-render-3xk2ujckj.png?v=637357637449930000'
            },
            {
                'id': 100035,
                'imageLink': 'https://motorolaru.vtexassets.com/arquivos/ids/155507-800-auto?width=800&height=auto&aspect=true'
            },
        ],
        'techSpec': [
            {
                'id': 10085,
                'name': 'Operating system',
                'value': 'Android 10'
            },
            {
                'id': 10090,
                'name': 'Weight',
                'value': '223 g'
            },
            {
                'id': 10088,
                'name': 'Processor',
                'value': 'Snapdragon 730G'
            },
            {
                'id': 10089,
                'name': 'Internal memory',
                'value': '128 GB'
            },
            {
                'id': 10084,
                'name': 'Weight',
                'value': '172 g'
            },
            {
                'id': 10086,
                'name': 'Display',
                'value': '6.8, LTPS'
            },
            {
                'id': 10087,
                'name': 'Display resolution',
                'value': '2400x1080'
            },
        ]
    },
    {
        'id': 10016,
        'name': 'Apple iPhone SE 2020',
        'rating': 4.40,
        'popularity': 3,
        'config': '64 GB Red',
        'price': 39000,
        'img': 'https://i4you.ru/image/cache/catalog/0.%20iPhone/24.%20iPhone%20SE%202020/SE%202020%20red%203-500x600.png',
        'description': 'The original iPhone SE was a budget 4-inch iPhone before being discontinued in 2018, but Apple revived the name in April 2020 with a new 4.7-inch model that looks like an iPhone 8 with internals similar to those of the iPhone 11',
        'brand': 'Apple',
        'category': 'phones',
        'images': [
            {
                'id': 100037,
                'imageLink': 'https://аймаг.рф/wp-content/uploads/2020-04-22-product.png'
            },
            {
                'id': 100036,
                'imageLink': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574260319'
            },
        ],
        'techSpec': [
            {
                'id': 10092,
                'name': 'Display',
                'value': '4.7, IPS'
            },
            {
                'id': 10096,
                'name': 'Weight',
                'value': '148 g'
            },
            {
                'id': 10091,
                'name': 'Operating system',
                'value': 'iOS 13'
            },
            {
                'id': 10094,
                'name': 'Processor',
                'value': 'Apple A13 Bionic'
            },
            {
                'id': 10093,
                'name': 'Display resolution',
                'value': '1334x750'
            },
            {
                'id': 10095,
                'name': 'Internal memory',
                'value': '64 GB'
            },
        ]
    },
];
