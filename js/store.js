export let data = {
    valute: '$',
    language: document.documentElement.lang,
    name: 'Воронеж',
    languages: ['ru', 'en']
};


export let languageData = {
    ru: {
        'title': 'Меню | ' + data.name,
        '#menuTitle': 'Меню',
        '#orderTitle': 'Ваш заказ',
        'forJs': {
            total: 'Итого',
            portion: 'Порция',
            count: 'Количество'
        },
    },
    en: {
        'title': 'Menu | ' + data.name,
        '#menuTitle': 'Menu',
        '#orderTitle': 'Your Order',
        'forJs': {
            total: 'Total',
            portion: 'Portion',
            count: 'Count'
        },
    }
};



export let dishesData = {
    'category1': {
        name: {
            ru: 'Закуски',
            en: 'Appetizers',
            de: 'Vorspeisen',
        },
        items: [
            {
                name: {
                    ru: 'Тартар с грибами',
                    en: 'Tartare with mushrooms',
                    de: 'Tartar mit Pilzen',
                },
                price: {
                    '1': 750,
                },
                description: {
                    ru: 'Тартар с грибами',
                    en: 'Tartare with mushrooms',
                    de: 'Tartar mit Pilzen',
                },
            },
            {
                name: {
                    ru: 'Телятина с соусом Тонато и копченым маслом',
                    en: 'Beef with Tonato sauce and smoked butter',
                    de: 'Rindfleisch mit Tonato-Sauce und geräuchter Butter',
                },
                price: {
                    '1': 1350,
                },
                description: {
                    ru: 'Телятина с соусом Тонато и копченым маслом',
                    en: 'Beef with Tonato sauce and smoked butter',
                    de: 'Rindfleisch mit Tonato-Sauce und geräuchter Butter',
                },
            },
            {
                name: {
                    ru: 'Камамбер по-Аджарски с хурмой',
                    en: 'Camembert Adjarian style with persimmon',
                    de: 'Camembert nach Adjarischer Art mit Persimone',
                },
                price: {
                    '1': 950,
                },
                description: {
                    ru: 'Камамбер по-Аджарски с хурмой',
                    en: 'Camembert Adjarian style with persimmon',
                    de: 'Camembert nach Adjarischer Art mit Persimone',
                },
            },
        ],
    },
    'category2': {
        name: {
            ru: 'Супы',
            en: 'Soups',
            de: 'Suppen',
        },
        items: [
            {
                name: {
                    ru: 'Крем-суп из тыквы',
                    en: 'Pumpkin cream soup',
                    de: 'Kürbissuppe',
                },
                price: {
                    '1': 450,
                },
                description: {
                    ru: 'Крем-суп из тыквы',
                    en: 'Pumpkin cream soup',
                    de: 'Kürbissuppe',
                },
            },
        ],
    },
    'category3': {
        name: {
            ru: 'Горячее',
            en: 'Hot Dishes',
            de: 'Hauptgerichte',
        },
        items: [
            {
                name: {
                    ru: 'Ригатони с уткой и белыми грибами',
                    en: 'Rigatoni with duck and white mushrooms',
                    de: 'Rigatoni mit Ente und weißen Pilzen',
                },
                price: {
                    '1': 990,
                },
                description: {
                    ru: 'Ригатони с уткой и белыми грибами',
                    en: 'Rigatoni with duck and white mushrooms',
                    de: 'Rigatoni mit Ente und weißen Pilzen',
                },
            },
            {
                name: {
                    ru: 'Утиная грудка с Горяайвой и брусникой',
                    en: 'Duck breast with quince and lingonberries',
                    de: 'Entenbrust mit Quitte und Preiselbeeren',
                },
                price: {
                    '1': 1800,
                },
                description: {
                    ru: 'Утиная грудка с айвой и брусникой',
                    en: 'Duck breast with quince and lingonberries',
                    de: 'Entenbrust mit Quitte und Preiselbeeren',
                },
            },
        ],
    },
    'category4': {
        name: {
            ru: 'Десерты',
            en: 'Desserts',
            de: 'Desserts',
        },
        items: [
            {
                name: {
                    ru: 'Пряная тыква Тахини',
                    en: 'Spicy pumpkin Tahini',
                    de: 'Würziger Kürbis Tahini',
                },
                price: {
                    '1': 490,
                },
                description: {
                    ru: 'Пряная тыква Тахини',
                    en: 'Spicy pumpkin Tahini',
                    de: 'Würziger Kürbis Tahini',
                },
            },
            {
                name: {
                    ru: 'Тыквенный чизкейк с обливкой и пеканом',
                    en: 'Pumpkin cheesecake with icing and pecan',
                    de: 'Kürbis-Cheesecake mit Zuckerguss und Pekannüssen',
                },
                price: {
                    '1': 650,
                },
                description: {
                    ru: 'Тыквенный чизкейк с обливкой и пеканом',
                    en: 'Pumpkin cheesecake with icing and pecan',
                    de: 'Kürbis-Cheesecake mit Zuckerguss und Pekannüssen',
                },
            },
        ],
    },
};



export let cartData = {
    
};



export function setCartData(newData) {
    cartData = newData;
};