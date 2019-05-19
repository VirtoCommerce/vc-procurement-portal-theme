import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        const products_old = [
            {
                sku: "53MF87",
                name: "1 Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/baa4931161214690ad51c50787b1ed94",
                seoPath: "bolts/carriage-bolts/1-stainless-steel-carriage-bolt-18-8-nl-19sm-finish-14-20-diathread-size-50-pk-fastener-length-1-thread-size-14-20",
                url: "/B2B-store/bolts/carriage-bolts/1-stainless-steel-carriage-bolt-18-8-nl-19sm-finish-14-20-diathread-size-50-pk-fastener-length-1-thread-size-14-20",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                availableQuantity: 0,
                isQuotable: true,
                isAvailable: true,
                taxPercentRate: 0.0,
                id: "baa4931161214690ad51c50787b1ed94"
            },
            {
                sku: "4GVA7",
                name: "1 Steel Carriage Bolt, Grade 5, Chrome Plated Finish, 1/4\"-20 Dia/Thread Size, 5 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/e9de38b73c424db19f319c9538184d03",
                seoPath: "bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-chrome-plated-finish-14-20-diathread-size-5-pk",
                url: "/B2B-store/bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-chrome-plated-finish-14-20-diathread-size-5-pk",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                availableQuantity: 0,
                isQuotable: true,
                isAvailable: true,
                taxPercentRate: 0.0,
                id: "e9de38b73c424db19f319c9538184d03"
            },
            {
                sku: "5ZMR1",
                name: "1 Steel Carriage Bolt, Grade 5, Zinc Plated Finish, 1/4\"-20 Dia/Thread Size, 100 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/ec235043d51848249e90ef170c371a1c",
                seoPath: "bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-zinc-plated-finish-14-20-diathread-size-100-pk-fastener-length-1-thread-size-14-20",
                url: "/B2B-store/bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-zinc-plated-finish-14-20-diathread-size-100-pk-fastener-length-1-thread-size-14-20",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 1,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                availableQuantity: 0,
                isQuotable: true,
                isAvailable: true,
                taxPercentRate: 0.0,
                id: "ec235043d51848249e90ef170c371a1c"
            }
        ];

        const products = [
            {
                name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                sku: "53MF87",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/baa4931161214690ad51c50787b1ed94",
                seoPath: "bolts/carriage-bolts/1-stainless-steel-carriage-bolt-18-8-nl-19sm-finish-14-20-diathread-size-50-pk-fastener-length-1-thread-size-14-20",
                url: "/B2B-store/bolts/carriage-bolts/1-stainless-steel-carriage-bolt-18-8-nl-19sm-finish-14-20-diathread-size-50-pk-fastener-length-1-thread-size-14-20",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "f62f7f0a2ea5427fac23f399288c0b39",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1685a1ef-981a-4858-b8d3-daaed979bb9f"
                    },
                    {
                        name: "THREAD SIZE",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "3c07c142f665451fa198702a41e22eaa",
                        ////localizedValues: [],
                        value: "1/4″-20",
                        displayName: "DIA./THREAD SIZE",
                        displayNames: [
                            {
                                value: "DIA./THREAD SIZE",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1baedcde-5ae6-437b-9be0-dd7396968f2e"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "baa4931161214690ad51c50787b1ed94",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    ////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            ////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "baa4931161214690ad51c50787b1ed94",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        ////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                ////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-stainless-steel-carriage-bolt-18-8-nl-19sm-finish-14-20-diathread-size-50-pk-fastener-length-1-thread-size-14-20",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BASIC MATERIAL",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "f84a691891c34cab9318fcaeba10b012",
                        ////localizedValues: [],
                        value: "Stainless Steel",
                        displayName: "BASIC MATERIAL",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "af72fb0b-3949-4737-9c0a-94c49f1d10bb"
                    },
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "9c612b590f024c89ab2858e556610e9e",
                        ////localizedValues: [],
                        value: "NL-19(SM)",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "709f8629-6347-4de9-9d82-3cb0c1e34348"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "4bb044b272a44543bd55ca044ff73bce",
                        ////localizedValues: [],
                        value: "18-8",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "ef008c64-4b7a-4136-90ff-fa1156a0f70a"
                    },
                    {
                        name: "NECK TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "35ddb25e12ea4666ad884817df02875c",
                        ////localizedValues: [],
                        value: "Square",
                        displayName: "NECK TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "3d200485-abf8-4a32-ae41-9dac271b1a8b"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "baa4931161214690ad51c50787b1ed94"
            },
            {
                sku: "4GVA7",
                name: "1\" Steel Carriage Bolt, Grade 5, Chrome Plated Finish, 1/4\"-20 Dia/Thread Size, 5 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/e9de38b73c424db19f319c9538184d03",
                seoPath: "bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-chrome-plated-finish-14-20-diathread-size-5-pk",
                url: "/B2B-store/bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-chrome-plated-finish-14-20-diathread-size-5-pk",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "f62f7f0a2ea5427fac23f399288c0b39",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1685a1ef-981a-4858-b8d3-daaed979bb9f"
                    },
                    {
                        name: "THREAD SIZE",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "ca1c47cd9cfd4875a4f2328c9767e193",
                        ////localizedValues: [],
                        value: "1/2″-13",
                        displayName: "DIA./THREAD SIZE",
                        displayNames: [
                            {
                                value: "DIA./THREAD SIZE",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1baedcde-5ae6-437b-9be0-dd7396968f2e"
                    }
                ],
                ////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "e9de38b73c424db19f319c9538184d03",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 13.1,
                        amount: 13.1,
                        truncatedAmount: 13.1,
                        formattedAmount: "$13.10",
                        formattedAmountWithoutPoint: "$13",
                        formattedAmountWithoutPointAndCurrency: "13",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 13.1,
                        amount: 13.1,
                        truncatedAmount: 13.1,
                        formattedAmount: "$13.10",
                        formattedAmountWithoutPoint: "$13",
                        formattedAmountWithoutPointAndCurrency: "13",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 13.1,
                        amount: 13.1,
                        truncatedAmount: 13.1,
                        formattedAmount: "$13.10",
                        formattedAmountWithoutPoint: "$13",
                        formattedAmountWithoutPointAndCurrency: "13",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 13.1,
                        amount: 13.1,
                        truncatedAmount: 13.1,
                        formattedAmount: "$13.10",
                        formattedAmountWithoutPoint: "$13",
                        formattedAmountWithoutPointAndCurrency: "13",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 13.1,
                        amount: 13.1,
                        truncatedAmount: 13.1,
                        formattedAmount: "$13.10",
                        formattedAmountWithoutPoint: "$13",
                        formattedAmountWithoutPointAndCurrency: "13",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 13.1,
                        amount: 13.1,
                        truncatedAmount: 13.1,
                        formattedAmount: "$13.10",
                        formattedAmountWithoutPoint: "$13",
                        formattedAmountWithoutPointAndCurrency: "13",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 13.1,
                                amount: 13.1,
                                truncatedAmount: 13.1,
                                formattedAmount: "$13.10",
                                formattedAmountWithoutPoint: "$13",
                                formattedAmountWithoutPointAndCurrency: "13",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 13.1,
                                amount: 13.1,
                                truncatedAmount: 13.1,
                                formattedAmount: "$13.10",
                                formattedAmountWithoutPoint: "$13",
                                formattedAmountWithoutPointAndCurrency: "13",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 13.1,
                                amount: 13.1,
                                truncatedAmount: 13.1,
                                formattedAmount: "$13.10",
                                formattedAmountWithoutPoint: "$13",
                                formattedAmountWithoutPointAndCurrency: "13",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 13.1,
                                amount: 13.1,
                                truncatedAmount: 13.1,
                                formattedAmount: "$13.10",
                                formattedAmountWithoutPoint: "$13",
                                formattedAmountWithoutPointAndCurrency: "13",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "e9de38b73c424db19f319c9538184d03",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-carriage-bolt-grade-5-chrome-plated-finish-14-20-diathread-size-5-pk",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BASIC MATERIAL",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "9bf2020b88734369a4749dd81d3f0faa",
                        ////localizedValues: [],
                        value: "Steel",
                        displayName: "BASIC MATERIAL",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "af72fb0b-3949-4737-9c0a-94c49f1d10bb"
                    },
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "db038168594c40128bcd79009bb3d29f",
                        ////localizedValues: [],
                        value: "Chrome Plated",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "709f8629-6347-4de9-9d82-3cb0c1e34348"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "6ea7268d4541464dba8d169d71c8270d",
                        ////localizedValues: [],
                        value: "2",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "ef008c64-4b7a-4136-90ff-fa1156a0f70a"
                    },
                    {
                        name: "NECK TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "35ddb25e12ea4666ad884817df02875c",
                        ////localizedValues: [],
                        value: "Square",
                        displayName: "NECK TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "3d200485-abf8-4a32-ae41-9dac271b1a8b"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "e9de38b73c424db19f319c9538184d03"
            },
            {
                sku: "5ZMR1",
                name: "1\" Steel Carriage Bolt, Grade 5, Zinc Plated Finish, 1/4\"-20 Dia/Thread Size, 100 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/ec235043d51848249e90ef170c371a1c",
                seoPath: "bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-zinc-plated-finish-14-20-diathread-size-100-pk-fastener-length-1-thread-size-14-20",
                url: "/B2B-store/bolts/carriage-bolts/1-steel-carriage-bolt-grade-5-zinc-plated-finish-14-20-diathread-size-100-pk-fastener-length-1-thread-size-14-20",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 1,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "f62f7f0a2ea5427fac23f399288c0b39",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1685a1ef-981a-4858-b8d3-daaed979bb9f"
                    },
                    {
                        name: "THREAD SIZE",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "3c07c142f665451fa198702a41e22eaa",
                        ////localizedValues: [],
                        value: "1/4″-20",
                        displayName: "DIA./THREAD SIZE",
                        displayNames: [
                            {
                                value: "DIA./THREAD SIZE",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1baedcde-5ae6-437b-9be0-dd7396968f2e"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "ec235043d51848249e90ef170c371a1c",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 10.85,
                        amount: 10.85,
                        truncatedAmount: 10.85,
                        formattedAmount: "$10.85",
                        formattedAmountWithoutPoint: "$11",
                        formattedAmountWithoutPointAndCurrency: "11",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 10.85,
                        amount: 10.85,
                        truncatedAmount: 10.85,
                        formattedAmount: "$10.85",
                        formattedAmountWithoutPoint: "$11",
                        formattedAmountWithoutPointAndCurrency: "11",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 10.85,
                        amount: 10.85,
                        truncatedAmount: 10.85,
                        formattedAmount: "$10.85",
                        formattedAmountWithoutPoint: "$11",
                        formattedAmountWithoutPointAndCurrency: "11",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 10.85,
                        amount: 10.85,
                        truncatedAmount: 10.85,
                        formattedAmount: "$10.85",
                        formattedAmountWithoutPoint: "$11",
                        formattedAmountWithoutPointAndCurrency: "11",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 10.85,
                        amount: 10.85,
                        truncatedAmount: 10.85,
                        formattedAmount: "$10.85",
                        formattedAmountWithoutPoint: "$11",
                        formattedAmountWithoutPointAndCurrency: "11",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 10.85,
                        amount: 10.85,
                        truncatedAmount: 10.85,
                        formattedAmount: "$10.85",
                        formattedAmountWithoutPoint: "$11",
                        formattedAmountWithoutPointAndCurrency: "11",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 10.85,
                                amount: 10.85,
                                truncatedAmount: 10.85,
                                formattedAmount: "$10.85",
                                formattedAmountWithoutPoint: "$11",
                                formattedAmountWithoutPointAndCurrency: "11",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 10.85,
                                amount: 10.85,
                                truncatedAmount: 10.85,
                                formattedAmount: "$10.85",
                                formattedAmountWithoutPoint: "$11",
                                formattedAmountWithoutPointAndCurrency: "11",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 10.85,
                                amount: 10.85,
                                truncatedAmount: 10.85,
                                formattedAmount: "$10.85",
                                formattedAmountWithoutPoint: "$11",
                                formattedAmountWithoutPointAndCurrency: "11",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 10.85,
                                amount: 10.85,
                                truncatedAmount: 10.85,
                                formattedAmount: "$10.85",
                                formattedAmountWithoutPoint: "$11",
                                formattedAmountWithoutPointAndCurrency: "11",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.00,
                                amount: 0.00,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.00,
                        amount: 0.00,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "ec235043d51848249e90ef170c371a1c",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 10.85,
                            amount: 10.85,
                            truncatedAmount: 10.85,
                            formattedAmount: "$10.85",
                            formattedAmountWithoutPoint: "$11",
                            formattedAmountWithoutPointAndCurrency: "11",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 10.85,
                            amount: 10.85,
                            truncatedAmount: 10.85,
                            formattedAmount: "$10.85",
                            formattedAmountWithoutPoint: "$11",
                            formattedAmountWithoutPointAndCurrency: "11",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 10.85,
                            amount: 10.85,
                            truncatedAmount: 10.85,
                            formattedAmount: "$10.85",
                            formattedAmountWithoutPoint: "$11",
                            formattedAmountWithoutPointAndCurrency: "11",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 10.85,
                            amount: 10.85,
                            truncatedAmount: 10.85,
                            formattedAmount: "$10.85",
                            formattedAmountWithoutPoint: "$11",
                            formattedAmountWithoutPointAndCurrency: "11",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 10.85,
                            amount: 10.85,
                            truncatedAmount: 10.85,
                            formattedAmount: "$10.85",
                            formattedAmountWithoutPoint: "$11",
                            formattedAmountWithoutPointAndCurrency: "11",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 10.85,
                            amount: 10.85,
                            truncatedAmount: 10.85,
                            formattedAmount: "$10.85",
                            formattedAmountWithoutPoint: "$11",
                            formattedAmountWithoutPointAndCurrency: "11",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 10.85,
                                    amount: 10.85,
                                    truncatedAmount: 10.85,
                                    formattedAmount: "$10.85",
                                    formattedAmountWithoutPoint: "$11",
                                    formattedAmountWithoutPointAndCurrency: "11",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 10.85,
                                    amount: 10.85,
                                    truncatedAmount: 10.85,
                                    formattedAmount: "$10.85",
                                    formattedAmountWithoutPoint: "$11",
                                    formattedAmountWithoutPointAndCurrency: "11",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 10.85,
                                    amount: 10.85,
                                    truncatedAmount: 10.85,
                                    formattedAmount: "$10.85",
                                    formattedAmountWithoutPoint: "$11",
                                    formattedAmountWithoutPointAndCurrency: "11",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 10.85,
                                    amount: 10.85,
                                    truncatedAmount: 10.85,
                                    formattedAmount: "$10.85",
                                    formattedAmountWithoutPoint: "$11",
                                    formattedAmountWithoutPointAndCurrency: "11",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.00,
                                    amount: 0.00,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.00,
                            amount: 0.00,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-carriage-bolt-grade-5-zinc-plated-finish-14-20-diathread-size-100-pk-fastener-length-1-thread-size-14-20",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/5ZMR1/5ZMR1.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/5ZMR1/5ZMR1.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BASIC MATERIAL",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "9bf2020b88734369a4749dd81d3f0faa",
                        ////localizedValues: [],
                        value: "Steel",
                        displayName: "BASIC MATERIAL",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "af72fb0b-3949-4737-9c0a-94c49f1d10bb"
                    },
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        //localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "1302e9beb7a847a196128ec903d25ac5",
                        //localizedValues: [],
                        value: "Zinc Plated",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "709f8629-6347-4de9-9d82-3cb0c1e34348"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "65617b4c9e0b4429be66cd93de24b7d4",
                        //localizedValues: [],
                        value: "5",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "ef008c64-4b7a-4136-90ff-fa1156a0f70a"
                    },
                    {
                        name: "NECK TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "35ddb25e12ea4666ad884817df02875c",
                        //localizedValues: [],
                        value: "Square",
                        displayName: "NECK TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "3d200485-abf8-4a32-ae41-9dac271b1a8b"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.00,
                    amount: 0.00,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "ec235043d51848249e90ef170c371a1c"
            },
            {
                sku: "164W15",
                name: "1\" Steel Carriage Bolt, Grade A, Hot Dipped Galvanized Finish, 1/4\"-20 Dia/Thread Size, 1300 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/dae730451bc745bfa642870bdf22f150",
                seoPath: "bolts/carriage-bolts/1-steel-carriage-bolt-grade-a-hot-dipped-galvanized-finish-14-20-diathread-size-1300-pk-fastener-length-1-thread-size-14-20",
                url: "/B2B-store/bolts/carriage-bolts/1-steel-carriage-bolt-grade-a-hot-dipped-galvanized-finish-14-20-diathread-size-1300-pk-fastener-length-1-thread-size-14-20",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 1,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "f62f7f0a2ea5427fac23f399288c0b39",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1685a1ef-981a-4858-b8d3-daaed979bb9f"
                    },
                    {
                        name: "THREAD SIZE",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "3c07c142f665451fa198702a41e22eaa",
                        ////localizedValues: [],
                        value: "1/4″-20",
                        displayName: "DIA./THREAD SIZE",
                        displayNames: [
                            {
                                value: "DIA./THREAD SIZE",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1baedcde-5ae6-437b-9be0-dd7396968f2e"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "dae730451bc745bfa642870bdf22f150",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 375.6,
                        amount: 375.6,
                        truncatedAmount: 375.6,
                        formattedAmount: "$375.60",
                        formattedAmountWithoutPoint: "$376",
                        formattedAmountWithoutPointAndCurrency: "376",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 375.6,
                        amount: 375.6,
                        truncatedAmount: 375.6,
                        formattedAmount: "$375.60",
                        formattedAmountWithoutPoint: "$376",
                        formattedAmountWithoutPointAndCurrency: "376",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 375.6,
                        amount: 375.6,
                        truncatedAmount: 375.6,
                        formattedAmount: "$375.60",
                        formattedAmountWithoutPoint: "$376",
                        formattedAmountWithoutPointAndCurrency: "376",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 375.6,
                        amount: 375.6,
                        truncatedAmount: 375.6,
                        formattedAmount: "$375.60",
                        formattedAmountWithoutPoint: "$376",
                        formattedAmountWithoutPointAndCurrency: "376",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 375.6,
                        amount: 375.6,
                        truncatedAmount: 375.6,
                        formattedAmount: "$375.60",
                        formattedAmountWithoutPoint: "$376",
                        formattedAmountWithoutPointAndCurrency: "376",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 375.6,
                        amount: 375.6,
                        truncatedAmount: 375.6,
                        formattedAmount: "$375.60",
                        formattedAmountWithoutPoint: "$376",
                        formattedAmountWithoutPointAndCurrency: "376",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 375.6,
                                amount: 375.6,
                                truncatedAmount: 375.6,
                                formattedAmount: "$375.60",
                                formattedAmountWithoutPoint: "$376",
                                formattedAmountWithoutPointAndCurrency: "376",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 375.6,
                                amount: 375.6,
                                truncatedAmount: 375.6,
                                formattedAmount: "$375.60",
                                formattedAmountWithoutPoint: "$376",
                                formattedAmountWithoutPointAndCurrency: "376",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 375.6,
                                amount: 375.6,
                                truncatedAmount: 375.6,
                                formattedAmount: "$375.60",
                                formattedAmountWithoutPoint: "$376",
                                formattedAmountWithoutPointAndCurrency: "376",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 375.6,
                                amount: 375.6,
                                truncatedAmount: 375.6,
                                formattedAmount: "$375.60",
                                formattedAmountWithoutPoint: "$376",
                                formattedAmountWithoutPointAndCurrency: "376",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "dae730451bc745bfa642870bdf22f150",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 375.6,
                            amount: 375.6,
                            truncatedAmount: 375.6,
                            formattedAmount: "$375.60",
                            formattedAmountWithoutPoint: "$376",
                            formattedAmountWithoutPointAndCurrency: "376",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 375.6,
                            amount: 375.6,
                            truncatedAmount: 375.6,
                            formattedAmount: "$375.60",
                            formattedAmountWithoutPoint: "$376",
                            formattedAmountWithoutPointAndCurrency: "376",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 375.6,
                            amount: 375.6,
                            truncatedAmount: 375.6,
                            formattedAmount: "$375.60",
                            formattedAmountWithoutPoint: "$376",
                            formattedAmountWithoutPointAndCurrency: "376",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 375.6,
                            amount: 375.6,
                            truncatedAmount: 375.6,
                            formattedAmount: "$375.60",
                            formattedAmountWithoutPoint: "$376",
                            formattedAmountWithoutPointAndCurrency: "376",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 375.6,
                            amount: 375.6,
                            truncatedAmount: 375.6,
                            formattedAmount: "$375.60",
                            formattedAmountWithoutPoint: "$376",
                            formattedAmountWithoutPointAndCurrency: "376",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 375.6,
                            amount: 375.6,
                            truncatedAmount: 375.6,
                            formattedAmount: "$375.60",
                            formattedAmountWithoutPoint: "$376",
                            formattedAmountWithoutPointAndCurrency: "376",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 375.6,
                                    amount: 375.6,
                                    truncatedAmount: 375.6,
                                    formattedAmount: "$375.60",
                                    formattedAmountWithoutPoint: "$376",
                                    formattedAmountWithoutPointAndCurrency: "376",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 375.6,
                                    amount: 375.6,
                                    truncatedAmount: 375.6,
                                    formattedAmount: "$375.60",
                                    formattedAmountWithoutPoint: "$376",
                                    formattedAmountWithoutPointAndCurrency: "376",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 375.6,
                                    amount: 375.6,
                                    truncatedAmount: 375.6,
                                    formattedAmount: "$375.60",
                                    formattedAmountWithoutPoint: "$376",
                                    formattedAmountWithoutPointAndCurrency: "376",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 375.6,
                                    amount: 375.6,
                                    truncatedAmount: 375.6,
                                    formattedAmount: "$375.60",
                                    formattedAmountWithoutPoint: "$376",
                                    formattedAmountWithoutPointAndCurrency: "376",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-carriage-bolt-grade-a-hot-dipped-galvanized-finish-14-20-diathread-size-1300-pk-fastener-length-1-thread-size-14-20",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/164W15/164W15.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/164W15/164W15.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BASIC MATERIAL",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "9bf2020b88734369a4749dd81d3f0faa",
                        ////localizedValues: [],
                        value: "Steel",
                        displayName: "BASIC MATERIAL",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "af72fb0b-3949-4737-9c0a-94c49f1d10bb"
                    },
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "ce2225afc153433ea190e27e5d1adcc7",
                        ////localizedValues: [],
                        value: "Hot Dipped Galvanized",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "709f8629-6347-4de9-9d82-3cb0c1e34348"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "65617b4c9e0b4429be66cd93de24b7d4",
                        ////localizedValues: [],
                        value: "5",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "ef008c64-4b7a-4136-90ff-fa1156a0f70a"
                    },
                    {
                        name: "NECK TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "35ddb25e12ea4666ad884817df02875c",
                        ////localizedValues: [],
                        value: "Square",
                        displayName: "NECK TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "3d200485-abf8-4a32-ae41-9dac271b1a8b"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "dae730451bc745bfa642870bdf22f150"
            },
            {
                sku: "164W33",
                name: "1\" Steel Carriage Bolt, Grade A, Plain Finish, 1/4\"-20 Dia/Thread Size, 1300 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "4fbaca886f014767a52f3f38b9df648f",
                outline: "02fe37dcaeb2458a831011abe43fd335/4fbaca886f014767a52f3f38b9df648f/5512e3a5201541769e1d81fc5217490c",
                seoPath: "bolts/carriage-bolts/1-steel-carriage-bolt-grade-a-plain-finish-14-20-diathread-size-1300-pk-fastener-length-1-thread-size-14-20",
                url: "/B2B-store/bolts/carriage-bolts/1-steel-carriage-bolt-grade-a-plain-finish-14-20-diathread-size-1300-pk-fastener-length-1-thread-size-14-20",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "f62f7f0a2ea5427fac23f399288c0b39",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1685a1ef-981a-4858-b8d3-daaed979bb9f"
                    },
                    {
                        name: "THREAD SIZE",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "3c07c142f665451fa198702a41e22eaa",
                        ////localizedValues: [],
                        value: "1/4″-20",
                        displayName: "DIA./THREAD SIZE",
                        displayNames: [
                            {
                                value: "DIA./THREAD SIZE",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "1baedcde-5ae6-437b-9be0-dd7396968f2e"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "5512e3a5201541769e1d81fc5217490c",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 48.64,
                        amount: 48.64,
                        truncatedAmount: 48.64,
                        formattedAmount: "$48.64",
                        formattedAmountWithoutPoint: "$49",
                        formattedAmountWithoutPointAndCurrency: "49",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 48.64,
                        amount: 48.64,
                        truncatedAmount: 48.64,
                        formattedAmount: "$48.64",
                        formattedAmountWithoutPoint: "$49",
                        formattedAmountWithoutPointAndCurrency: "49",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 48.64,
                        amount: 48.64,
                        truncatedAmount: 48.64,
                        formattedAmount: "$48.64",
                        formattedAmountWithoutPoint: "$49",
                        formattedAmountWithoutPointAndCurrency: "49",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 48.64,
                        amount: 48.64,
                        truncatedAmount: 48.64,
                        formattedAmount: "$48.64",
                        formattedAmountWithoutPoint: "$49",
                        formattedAmountWithoutPointAndCurrency: "49",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 48.64,
                        amount: 48.64,
                        truncatedAmount: 48.64,
                        formattedAmount: "$48.64",
                        formattedAmountWithoutPoint: "$49",
                        formattedAmountWithoutPointAndCurrency: "49",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 48.64,
                        amount: 48.64,
                        truncatedAmount: 48.64,
                        formattedAmount: "$48.64",
                        formattedAmountWithoutPoint: "$49",
                        formattedAmountWithoutPointAndCurrency: "49",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 48.64,
                                amount: 48.64,
                                truncatedAmount: 48.64,
                                formattedAmount: "$48.64",
                                formattedAmountWithoutPoint: "$49",
                                formattedAmountWithoutPointAndCurrency: "49",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 48.64,
                                amount: 48.64,
                                truncatedAmount: 48.64,
                                formattedAmount: "$48.64",
                                formattedAmountWithoutPoint: "$49",
                                formattedAmountWithoutPointAndCurrency: "49",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 48.64,
                                amount: 48.64,
                                truncatedAmount: 48.64,
                                formattedAmount: "$48.64",
                                formattedAmountWithoutPoint: "$49",
                                formattedAmountWithoutPointAndCurrency: "49",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 48.64,
                                amount: 48.64,
                                truncatedAmount: 48.64,
                                formattedAmount: "$48.64",
                                formattedAmountWithoutPoint: "$49",
                                formattedAmountWithoutPointAndCurrency: "49",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.00,
                                amount: 0.00,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.00,
                        amount: 0.00,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "5512e3a5201541769e1d81fc5217490c",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 48.64,
                            amount: 48.64,
                            truncatedAmount: 48.64,
                            formattedAmount: "$48.64",
                            formattedAmountWithoutPoint: "$49",
                            formattedAmountWithoutPointAndCurrency: "49",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 48.64,
                            amount: 48.64,
                            truncatedAmount: 48.64,
                            formattedAmount: "$48.64",
                            formattedAmountWithoutPoint: "$49",
                            formattedAmountWithoutPointAndCurrency: "49",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 48.64,
                            amount: 48.64,
                            truncatedAmount: 48.64,
                            formattedAmount: "$48.64",
                            formattedAmountWithoutPoint: "$49",
                            formattedAmountWithoutPointAndCurrency: "49",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 48.64,
                            amount: 48.64,
                            truncatedAmount: 48.64,
                            formattedAmount: "$48.64",
                            formattedAmountWithoutPoint: "$49",
                            formattedAmountWithoutPointAndCurrency: "49",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 48.64,
                            amount: 48.64,
                            truncatedAmount: 48.64,
                            formattedAmount: "$48.64",
                            formattedAmountWithoutPoint: "$49",
                            formattedAmountWithoutPointAndCurrency: "49",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 48.64,
                            amount: 48.64,
                            truncatedAmount: 48.64,
                            formattedAmount: "$48.64",
                            formattedAmountWithoutPoint: "$49",
                            formattedAmountWithoutPointAndCurrency: "49",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 48.64,
                                    amount: 48.64,
                                    truncatedAmount: 48.64,
                                    formattedAmount: "$48.64",
                                    formattedAmountWithoutPoint: "$49",
                                    formattedAmountWithoutPointAndCurrency: "49",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 48.64,
                                    amount: 48.64,
                                    truncatedAmount: 48.64,
                                    formattedAmount: "$48.64",
                                    formattedAmountWithoutPoint: "$49",
                                    formattedAmountWithoutPointAndCurrency: "49",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 48.64,
                                    amount: 48.64,
                                    truncatedAmount: 48.64,
                                    formattedAmount: "$48.64",
                                    formattedAmountWithoutPoint: "$49",
                                    formattedAmountWithoutPointAndCurrency: "49",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 48.64,
                                    amount: 48.64,
                                    truncatedAmount: 48.64,
                                    formattedAmount: "$48.64",
                                    formattedAmountWithoutPoint: "$49",
                                    formattedAmountWithoutPointAndCurrency: "49",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.00,
                                    amount: 0.00,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.00,
                            amount: 0.00,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-carriage-bolt-grade-a-plain-finish-14-20-diathread-size-1300-pk-fastener-length-1-thread-size-14-20",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/164W33/164W33.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/164W33/164W33.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BASIC MATERIAL",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "9bf2020b88734369a4749dd81d3f0faa",
                        ////localizedValues: [],
                        value: "Steel",
                        displayName: "BASIC MATERIAL",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "af72fb0b-3949-4737-9c0a-94c49f1d10bb"
                    },
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "4ef8624faff44e3ca5fa019473c4cffd",
                        ////localizedValues: [],
                        value: "Plain",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "709f8629-6347-4de9-9d82-3cb0c1e34348"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "f09e79ba7a2642a39acc347d8ab7c0bd",
                        ////localizedValues: [],
                        value: "A",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "ef008c64-4b7a-4136-90ff-fa1156a0f70a"
                    },
                    {
                        name: "NECK TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "35ddb25e12ea4666ad884817df02875c",
                        ////localizedValues: [],
                        value: "Square",
                        displayName: "NECK TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "3d200485-abf8-4a32-ae41-9dac271b1a8b"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.00,
                    amount: 0.00,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "5512e3a5201541769e1d81fc5217490c"
            },
            {
                sku: "20J012",
                name: "1\" Steel Freight Car Bolt, Grade 5, 1/2\"-13 Dia/Thread Size, 300 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "18b6de58c365495181d03375a20ff8d5",
                outline: "02fe37dcaeb2458a831011abe43fd335/18b6de58c365495181d03375a20ff8d5/a858ac18b1e144abae701b4d64edfb9e",
                seoPath: "bolts/freight-car-bolts/1-steel-freight-car-bolt-grade-5-12-13-diathread-size-300-pk-fastener-length-1",
                url: "/B2B-store/bolts/freight-car-bolts/1-steel-freight-car-bolt-grade-5-12-13-diathread-size-300-pk-fastener-length-1",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "09e79bd39f0c4b7c8c4634716611f064",
                        //localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "8c3c3d6b-a8c1-4746-a03a-5db465222c14"
                    }
                ],
                ////taxDetails: [],
                //variations: [],
                //descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "a858ac18b1e144abae701b4d64edfb9e",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 460.5,
                        amount: 460.5,
                        truncatedAmount: 460.5,
                        formattedAmount: "$460.50",
                        formattedAmountWithoutPoint: "$461",
                        formattedAmountWithoutPointAndCurrency: "461",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 460.5,
                        amount: 460.5,
                        truncatedAmount: 460.5,
                        formattedAmount: "$460.50",
                        formattedAmountWithoutPoint: "$461",
                        formattedAmountWithoutPointAndCurrency: "461",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 460.5,
                        amount: 460.5,
                        truncatedAmount: 460.5,
                        formattedAmount: "$460.50",
                        formattedAmountWithoutPoint: "$461",
                        formattedAmountWithoutPointAndCurrency: "461",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 460.5,
                        amount: 460.5,
                        truncatedAmount: 460.5,
                        formattedAmount: "$460.50",
                        formattedAmountWithoutPoint: "$461",
                        formattedAmountWithoutPointAndCurrency: "461",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 460.5,
                        amount: 460.5,
                        truncatedAmount: 460.5,
                        formattedAmount: "$460.50",
                        formattedAmountWithoutPoint: "$461",
                        formattedAmountWithoutPointAndCurrency: "461",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 460.5,
                        amount: 460.5,
                        truncatedAmount: 460.5,
                        formattedAmount: "$460.50",
                        formattedAmountWithoutPoint: "$461",
                        formattedAmountWithoutPointAndCurrency: "461",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    ////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 460.5,
                                amount: 460.5,
                                truncatedAmount: 460.5,
                                formattedAmount: "$460.50",
                                formattedAmountWithoutPoint: "$461",
                                formattedAmountWithoutPointAndCurrency: "461",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 460.5,
                                amount: 460.5,
                                truncatedAmount: 460.5,
                                formattedAmount: "$460.50",
                                formattedAmountWithoutPoint: "$461",
                                formattedAmountWithoutPointAndCurrency: "461",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 460.5,
                                amount: 460.5,
                                truncatedAmount: 460.5,
                                formattedAmount: "$460.50",
                                formattedAmountWithoutPoint: "$461",
                                formattedAmountWithoutPointAndCurrency: "461",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 460.5,
                                amount: 460.5,
                                truncatedAmount: 460.5,
                                formattedAmount: "$460.50",
                                formattedAmountWithoutPoint: "$461",
                                formattedAmountWithoutPointAndCurrency: "461",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            ////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "a858ac18b1e144abae701b4d64edfb9e",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 460.5,
                            amount: 460.5,
                            truncatedAmount: 460.5,
                            formattedAmount: "$460.50",
                            formattedAmountWithoutPoint: "$461",
                            formattedAmountWithoutPointAndCurrency: "461",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 460.5,
                            amount: 460.5,
                            truncatedAmount: 460.5,
                            formattedAmount: "$460.50",
                            formattedAmountWithoutPoint: "$461",
                            formattedAmountWithoutPointAndCurrency: "461",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 460.5,
                            amount: 460.5,
                            truncatedAmount: 460.5,
                            formattedAmount: "$460.50",
                            formattedAmountWithoutPoint: "$461",
                            formattedAmountWithoutPointAndCurrency: "461",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 460.5,
                            amount: 460.5,
                            truncatedAmount: 460.5,
                            formattedAmount: "$460.50",
                            formattedAmountWithoutPoint: "$461",
                            formattedAmountWithoutPointAndCurrency: "461",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 460.5,
                            amount: 460.5,
                            truncatedAmount: 460.5,
                            formattedAmount: "$460.50",
                            formattedAmountWithoutPoint: "$461",
                            formattedAmountWithoutPointAndCurrency: "461",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 460.5,
                            amount: 460.5,
                            truncatedAmount: 460.5,
                            formattedAmount: "$460.50",
                            formattedAmountWithoutPoint: "$461",
                            formattedAmountWithoutPointAndCurrency: "461",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        ////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 460.5,
                                    amount: 460.5,
                                    truncatedAmount: 460.5,
                                    formattedAmount: "$460.50",
                                    formattedAmountWithoutPoint: "$461",
                                    formattedAmountWithoutPointAndCurrency: "461",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 460.5,
                                    amount: 460.5,
                                    truncatedAmount: 460.5,
                                    formattedAmount: "$460.50",
                                    formattedAmountWithoutPoint: "$461",
                                    formattedAmountWithoutPointAndCurrency: "461",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 460.5,
                                    amount: 460.5,
                                    truncatedAmount: 460.5,
                                    formattedAmount: "$460.50",
                                    formattedAmountWithoutPoint: "$461",
                                    formattedAmountWithoutPointAndCurrency: "461",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 460.5,
                                    amount: 460.5,
                                    truncatedAmount: 460.5,
                                    formattedAmount: "$460.50",
                                    formattedAmountWithoutPoint: "$461",
                                    formattedAmountWithoutPointAndCurrency: "461",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                ////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                ////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-freight-car-bolt-grade-5-12-13-diathread-size-300-pk-fastener-length-1",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/20J012/20J012.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/20J012/20J012.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BASIC MATERIAL",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "86b26a41ab74498396c4fda432676ee8",
                        //localizedValues: [],
                        value: "Steel",
                        displayName: "BASIC MATERIAL",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "77e146a8-0d1a-4f4b-b2d3-e953caaa8bc9"
                    },
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "f0218c2e2085433c9852c32d677adc1b",
                        //localizedValues: [],
                        value: "GRAINGER APPROVED",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "c97444d93fe64b12ba5f5bccada81e7f",
                        //localizedValues: [],
                        value: "Plain",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "05606e2a-c8b2-4fc5-bd48-4a9277f5c06f"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "377fe4f3443a4385be53954065681375",
                        //localizedValues: [],
                        value: "5",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "d1fca48f-e39f-4467-a006-ed8b9108af3c"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        //localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    },
                    {
                        name: "THREAD SIZE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "ca57c023fe594e6bb53ccc6fe8a5bd91",
                        //localizedValues: [],
                        value: "1/2″-13",
                        displayName: "THREAD SIZE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "f69fe3ad-e040-4d41-a8e3-068b0cff5fd5"
                    },
                    {
                        name: "THREAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "329e32efe77a4ce8abba0be735c5e9fe",
                        //localizedValues: [],
                        value: "UNC(Coarse)",
                        displayName: "THREAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        //values: [],
                        id: "1e1cc3d6-f21a-4a02-a58c-32fb38696233"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "a858ac18b1e144abae701b4d64edfb9e"
            },
            {
                sku: "41MY01",
                name: "1\" Steel Hex Flange Bolt, Grade 5, Zinc Plated Finish, 5/16\"-18 Dia/Thread Size, 50 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "3db665f7c95e46c3890c4a208d8af73d",
                outline: "02fe37dcaeb2458a831011abe43fd335/3db665f7c95e46c3890c4a208d8af73d/cd2f18d2dba742dd832f45c82508f16e",
                seoPath: "bolts/flange-bolts/1-steel-hex-flange-bolt-grade-5-zinc-plated-finish-516-18-diathread-size-50-pk-fastener-length-1",
                url: "/B2B-store/bolts/flange-bolts/1-steel-hex-flange-bolt-grade-5-zinc-plated-finish-516-18-diathread-size-50-pk-fastener-length-1",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "4acb6f06e47f478aaf8a57f44592d8dc",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "38fc7764-f878-4a9e-891b-ffa7f0519eeb"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "cd2f18d2dba742dd832f45c82508f16e",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 8.3,
                        amount: 8.3,
                        truncatedAmount: 8.3,
                        formattedAmount: "$8.30",
                        formattedAmountWithoutPoint: "$8",
                        formattedAmountWithoutPointAndCurrency: "8",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 8.3,
                        amount: 8.3,
                        truncatedAmount: 8.3,
                        formattedAmount: "$8.30",
                        formattedAmountWithoutPoint: "$8",
                        formattedAmountWithoutPointAndCurrency: "8",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 8.3,
                        amount: 8.3,
                        truncatedAmount: 8.3,
                        formattedAmount: "$8.30",
                        formattedAmountWithoutPoint: "$8",
                        formattedAmountWithoutPointAndCurrency: "8",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 8.3,
                        amount: 8.3,
                        truncatedAmount: 8.3,
                        formattedAmount: "$8.30",
                        formattedAmountWithoutPoint: "$8",
                        formattedAmountWithoutPointAndCurrency: "8",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 8.3,
                        amount: 8.3,
                        truncatedAmount: 8.3,
                        formattedAmount: "$8.30",
                        formattedAmountWithoutPoint: "$8",
                        formattedAmountWithoutPointAndCurrency: "8",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 8.3,
                        amount: 8.3,
                        truncatedAmount: 8.3,
                        formattedAmount: "$8.30",
                        formattedAmountWithoutPoint: "$8",
                        formattedAmountWithoutPointAndCurrency: "8",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 8.3,
                                amount: 8.3,
                                truncatedAmount: 8.3,
                                formattedAmount: "$8.30",
                                formattedAmountWithoutPoint: "$8",
                                formattedAmountWithoutPointAndCurrency: "8",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 8.3,
                                amount: 8.3,
                                truncatedAmount: 8.3,
                                formattedAmount: "$8.30",
                                formattedAmountWithoutPoint: "$8",
                                formattedAmountWithoutPointAndCurrency: "8",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 8.3,
                                amount: 8.3,
                                truncatedAmount: 8.3,
                                formattedAmount: "$8.30",
                                formattedAmountWithoutPoint: "$8",
                                formattedAmountWithoutPointAndCurrency: "8",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 8.3,
                                amount: 8.3,
                                truncatedAmount: 8.3,
                                formattedAmount: "$8.30",
                                formattedAmountWithoutPoint: "$8",
                                formattedAmountWithoutPointAndCurrency: "8",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "cd2f18d2dba742dd832f45c82508f16e",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 8.3,
                            amount: 8.3,
                            truncatedAmount: 8.3,
                            formattedAmount: "$8.30",
                            formattedAmountWithoutPoint: "$8",
                            formattedAmountWithoutPointAndCurrency: "8",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 8.3,
                            amount: 8.3,
                            truncatedAmount: 8.3,
                            formattedAmount: "$8.30",
                            formattedAmountWithoutPoint: "$8",
                            formattedAmountWithoutPointAndCurrency: "8",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 8.3,
                            amount: 8.3,
                            truncatedAmount: 8.3,
                            formattedAmount: "$8.30",
                            formattedAmountWithoutPoint: "$8",
                            formattedAmountWithoutPointAndCurrency: "8",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 8.3,
                            amount: 8.3,
                            truncatedAmount: 8.3,
                            formattedAmount: "$8.30",
                            formattedAmountWithoutPoint: "$8",
                            formattedAmountWithoutPointAndCurrency: "8",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 8.3,
                            amount: 8.3,
                            truncatedAmount: 8.3,
                            formattedAmount: "$8.30",
                            formattedAmountWithoutPoint: "$8",
                            formattedAmountWithoutPointAndCurrency: "8",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 8.3,
                            amount: 8.3,
                            truncatedAmount: 8.3,
                            formattedAmount: "$8.30",
                            formattedAmountWithoutPoint: "$8",
                            formattedAmountWithoutPointAndCurrency: "8",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 8.3,
                                    amount: 8.3,
                                    truncatedAmount: 8.3,
                                    formattedAmount: "$8.30",
                                    formattedAmountWithoutPoint: "$8",
                                    formattedAmountWithoutPointAndCurrency: "8",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 8.3,
                                    amount: 8.3,
                                    truncatedAmount: 8.3,
                                    formattedAmount: "$8.30",
                                    formattedAmountWithoutPoint: "$8",
                                    formattedAmountWithoutPointAndCurrency: "8",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 8.3,
                                    amount: 8.3,
                                    truncatedAmount: 8.3,
                                    formattedAmount: "$8.30",
                                    formattedAmountWithoutPoint: "$8",
                                    formattedAmountWithoutPointAndCurrency: "8",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 8.3,
                                    amount: 8.3,
                                    truncatedAmount: 8.3,
                                    formattedAmount: "$8.30",
                                    formattedAmountWithoutPoint: "$8",
                                    formattedAmountWithoutPointAndCurrency: "8",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-hex-flange-bolt-grade-5-zinc-plated-finish-516-18-diathread-size-50-pk-fastener-length-1",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/41MY01/41MY01.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/41MY01/41MY01.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "09b6d6b03f6448449a8b5662be9782f6",
                        ////localizedValues: [],
                        value: "Zinc Plated",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "87dfb508-936d-4a05-afd7-c6d69e6cd99d"
                    },
                    {
                        name: "FASTENER THREAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "1a8fd37e51904a30b9feaef8b4c33942",
                        ////localizedValues: [],
                        value: "UNC (Coarse)",
                        displayName: "FASTENER THREAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "248044c9-f863-495f-a4be-4581034a5e18"
                    },
                    {
                        name: "HEAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "014379ab1f2b4065aa6d53969d58909d",
                        ////localizedValues: [],
                        value: "Hex Flange",
                        displayName: "HEAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "031e5e6f-96c0-4d1a-825d-f308b559c3de"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "c70e0ceae2554c928ad6b140ea120efe",
                        ////localizedValues: [],
                        value: "Grade 5",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "357cca15-67b0-4cf8-9c2d-c6c9cdf0201d"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "cd2f18d2dba742dd832f45c82508f16e"
            },
            {
                sku: "22A447",
                name: "1\" Steel Hex Flange Bolt, Grade 8, Plain Finish, 1/2\"-20 Dia/Thread Size, 25 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "3db665f7c95e46c3890c4a208d8af73d",
                outline: "02fe37dcaeb2458a831011abe43fd335/3db665f7c95e46c3890c4a208d8af73d/508d2a0584ad4e0e9811577f00b735c8",
                seoPath: "bolts/flange-bolts/1-steel-hex-flange-bolt-grade-8-plain-finish-12-20-diathread-size-25-pk-fastener-length-1",
                url: "/B2B-store/bolts/flange-bolts/1-steel-hex-flange-bolt-grade-8-plain-finish-12-20-diathread-size-25-pk-fastener-length-1",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "4acb6f06e47f478aaf8a57f44592d8dc",
                        //localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "38fc7764-f878-4a9e-891b-ffa7f0519eeb"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "508d2a0584ad4e0e9811577f00b735c8",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 18.35,
                        amount: 18.35,
                        truncatedAmount: 18.35,
                        formattedAmount: "$18.35",
                        formattedAmountWithoutPoint: "$18",
                        formattedAmountWithoutPointAndCurrency: "18",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 18.35,
                        amount: 18.35,
                        truncatedAmount: 18.35,
                        formattedAmount: "$18.35",
                        formattedAmountWithoutPoint: "$18",
                        formattedAmountWithoutPointAndCurrency: "18",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 18.35,
                        amount: 18.35,
                        truncatedAmount: 18.35,
                        formattedAmount: "$18.35",
                        formattedAmountWithoutPoint: "$18",
                        formattedAmountWithoutPointAndCurrency: "18",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 18.35,
                        amount: 18.35,
                        truncatedAmount: 18.35,
                        formattedAmount: "$18.35",
                        formattedAmountWithoutPoint: "$18",
                        formattedAmountWithoutPointAndCurrency: "18",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 18.35,
                        amount: 18.35,
                        truncatedAmount: 18.35,
                        formattedAmount: "$18.35",
                        formattedAmountWithoutPoint: "$18",
                        formattedAmountWithoutPointAndCurrency: "18",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 18.35,
                        amount: 18.35,
                        truncatedAmount: 18.35,
                        formattedAmount: "$18.35",
                        formattedAmountWithoutPoint: "$18",
                        formattedAmountWithoutPointAndCurrency: "18",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 18.35,
                                amount: 18.35,
                                truncatedAmount: 18.35,
                                formattedAmount: "$18.35",
                                formattedAmountWithoutPoint: "$18",
                                formattedAmountWithoutPointAndCurrency: "18",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 18.35,
                                amount: 18.35,
                                truncatedAmount: 18.35,
                                formattedAmount: "$18.35",
                                formattedAmountWithoutPoint: "$18",
                                formattedAmountWithoutPointAndCurrency: "18",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 18.35,
                                amount: 18.35,
                                truncatedAmount: 18.35,
                                formattedAmount: "$18.35",
                                formattedAmountWithoutPoint: "$18",
                                formattedAmountWithoutPointAndCurrency: "18",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 18.35,
                                amount: 18.35,
                                truncatedAmount: 18.35,
                                formattedAmount: "$18.35",
                                formattedAmountWithoutPoint: "$18",
                                formattedAmountWithoutPointAndCurrency: "18",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.00,
                                amount: 0.00,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.00,
                        amount: 0.00,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "508d2a0584ad4e0e9811577f00b735c8",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 18.35,
                            amount: 18.35,
                            truncatedAmount: 18.35,
                            formattedAmount: "$18.35",
                            formattedAmountWithoutPoint: "$18",
                            formattedAmountWithoutPointAndCurrency: "18",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 18.35,
                            amount: 18.35,
                            truncatedAmount: 18.35,
                            formattedAmount: "$18.35",
                            formattedAmountWithoutPoint: "$18",
                            formattedAmountWithoutPointAndCurrency: "18",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 18.35,
                            amount: 18.35,
                            truncatedAmount: 18.35,
                            formattedAmount: "$18.35",
                            formattedAmountWithoutPoint: "$18",
                            formattedAmountWithoutPointAndCurrency: "18",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 18.35,
                            amount: 18.35,
                            truncatedAmount: 18.35,
                            formattedAmount: "$18.35",
                            formattedAmountWithoutPoint: "$18",
                            formattedAmountWithoutPointAndCurrency: "18",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 18.35,
                            amount: 18.35,
                            truncatedAmount: 18.35,
                            formattedAmount: "$18.35",
                            formattedAmountWithoutPoint: "$18",
                            formattedAmountWithoutPointAndCurrency: "18",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 18.35,
                            amount: 18.35,
                            truncatedAmount: 18.35,
                            formattedAmount: "$18.35",
                            formattedAmountWithoutPoint: "$18",
                            formattedAmountWithoutPointAndCurrency: "18",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 18.35,
                                    amount: 18.35,
                                    truncatedAmount: 18.35,
                                    formattedAmount: "$18.35",
                                    formattedAmountWithoutPoint: "$18",
                                    formattedAmountWithoutPointAndCurrency: "18",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 18.35,
                                    amount: 18.35,
                                    truncatedAmount: 18.35,
                                    formattedAmount: "$18.35",
                                    formattedAmountWithoutPoint: "$18",
                                    formattedAmountWithoutPointAndCurrency: "18",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 18.35,
                                    amount: 18.35,
                                    truncatedAmount: 18.35,
                                    formattedAmount: "$18.35",
                                    formattedAmountWithoutPoint: "$18",
                                    formattedAmountWithoutPointAndCurrency: "18",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 18.35,
                                    amount: 18.35,
                                    truncatedAmount: 18.35,
                                    formattedAmount: "$18.35",
                                    formattedAmountWithoutPoint: "$18",
                                    formattedAmountWithoutPointAndCurrency: "18",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.00,
                                    amount: 0.00,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.00,
                            amount: 0.00,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-hex-flange-bolt-grade-8-plain-finish-12-20-diathread-size-25-pk-fastener-length-1",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/22A447/22A458.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/22A447/22A458.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "50104b7f50234459a7414108a7eaef8d",
                        ////localizedValues: [],
                        value: "Plain",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "87dfb508-936d-4a05-afd7-c6d69e6cd99d"
                    },
                    {
                        name: "FASTENER THREAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "1a8fd37e51904a30b9feaef8b4c33942",
                        ////localizedValues: [],
                        value: "UNC (Coarse)",
                        displayName: "FASTENER THREAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "248044c9-f863-495f-a4be-4581034a5e18"
                    },
                    {
                        name: "HEAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "014379ab1f2b4065aa6d53969d58909d",
                        ////localizedValues: [],
                        value: "Hex Flange",
                        displayName: "HEAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "031e5e6f-96c0-4d1a-825d-f308b559c3de"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "f1204b8fd58a4685a4c00e916344d3c6",
                        ////localizedValues: [],
                        value: "Grade 8",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "357cca15-67b0-4cf8-9c2d-c6c9cdf0201d"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.00,
                    amount: 0.00,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "508d2a0584ad4e0e9811577f00b735c8"
            },
            {
                sku: "4RXG6",
                name: "1\" Steel Hex Flange Bolt, Grade 8, Plain Finish, 3/4\"-10 Dia/Thread Size, 80 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "3db665f7c95e46c3890c4a208d8af73d",
                outline: "02fe37dcaeb2458a831011abe43fd335/3db665f7c95e46c3890c4a208d8af73d/3f604bc4a3d147358a4e5e77ae064a2b",
                seoPath: "bolts/flange-bolts/1-steel-hex-flange-bolt-grade-8-plain-finish-34-10-diathread-size-80-pk-fastener-length-1",
                url: "/B2B-store/bolts/flange-bolts/1-steel-hex-flange-bolt-grade-8-plain-finish-34-10-diathread-size-80-pk-fastener-length-1",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "4acb6f06e47f478aaf8a57f44592d8dc",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "38fc7764-f878-4a9e-891b-ffa7f0519eeb"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "3f604bc4a3d147358a4e5e77ae064a2b",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 108.5,
                        amount: 108.5,
                        truncatedAmount: 108.5,
                        formattedAmount: "$108.50",
                        formattedAmountWithoutPoint: "$109",
                        formattedAmountWithoutPointAndCurrency: "109",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 108.5,
                        amount: 108.5,
                        truncatedAmount: 108.5,
                        formattedAmount: "$108.50",
                        formattedAmountWithoutPoint: "$109",
                        formattedAmountWithoutPointAndCurrency: "109",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 108.5,
                        amount: 108.5,
                        truncatedAmount: 108.5,
                        formattedAmount: "$108.50",
                        formattedAmountWithoutPoint: "$109",
                        formattedAmountWithoutPointAndCurrency: "109",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 108.5,
                        amount: 108.5,
                        truncatedAmount: 108.5,
                        formattedAmount: "$108.50",
                        formattedAmountWithoutPoint: "$109",
                        formattedAmountWithoutPointAndCurrency: "109",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 108.5,
                        amount: 108.5,
                        truncatedAmount: 108.5,
                        formattedAmount: "$108.50",
                        formattedAmountWithoutPoint: "$109",
                        formattedAmountWithoutPointAndCurrency: "109",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 108.5,
                        amount: 108.5,
                        truncatedAmount: 108.5,
                        formattedAmount: "$108.50",
                        formattedAmountWithoutPoint: "$109",
                        formattedAmountWithoutPointAndCurrency: "109",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 108.5,
                                amount: 108.5,
                                truncatedAmount: 108.5,
                                formattedAmount: "$108.50",
                                formattedAmountWithoutPoint: "$109",
                                formattedAmountWithoutPointAndCurrency: "109",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 108.5,
                                amount: 108.5,
                                truncatedAmount: 108.5,
                                formattedAmount: "$108.50",
                                formattedAmountWithoutPoint: "$109",
                                formattedAmountWithoutPointAndCurrency: "109",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 108.5,
                                amount: 108.5,
                                truncatedAmount: 108.5,
                                formattedAmount: "$108.50",
                                formattedAmountWithoutPoint: "$109",
                                formattedAmountWithoutPointAndCurrency: "109",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 108.5,
                                amount: 108.5,
                                truncatedAmount: 108.5,
                                formattedAmount: "$108.50",
                                formattedAmountWithoutPoint: "$109",
                                formattedAmountWithoutPointAndCurrency: "109",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "3f604bc4a3d147358a4e5e77ae064a2b",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 108.5,
                            amount: 108.5,
                            truncatedAmount: 108.5,
                            formattedAmount: "$108.50",
                            formattedAmountWithoutPoint: "$109",
                            formattedAmountWithoutPointAndCurrency: "109",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 108.5,
                            amount: 108.5,
                            truncatedAmount: 108.5,
                            formattedAmount: "$108.50",
                            formattedAmountWithoutPoint: "$109",
                            formattedAmountWithoutPointAndCurrency: "109",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 108.5,
                            amount: 108.5,
                            truncatedAmount: 108.5,
                            formattedAmount: "$108.50",
                            formattedAmountWithoutPoint: "$109",
                            formattedAmountWithoutPointAndCurrency: "109",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 108.5,
                            amount: 108.5,
                            truncatedAmount: 108.5,
                            formattedAmount: "$108.50",
                            formattedAmountWithoutPoint: "$109",
                            formattedAmountWithoutPointAndCurrency: "109",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 108.5,
                            amount: 108.5,
                            truncatedAmount: 108.5,
                            formattedAmount: "$108.50",
                            formattedAmountWithoutPoint: "$109",
                            formattedAmountWithoutPointAndCurrency: "109",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 108.5,
                            amount: 108.5,
                            truncatedAmount: 108.5,
                            formattedAmount: "$108.50",
                            formattedAmountWithoutPoint: "$109",
                            formattedAmountWithoutPointAndCurrency: "109",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 108.5,
                                    amount: 108.5,
                                    truncatedAmount: 108.5,
                                    formattedAmount: "$108.50",
                                    formattedAmountWithoutPoint: "$109",
                                    formattedAmountWithoutPointAndCurrency: "109",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 108.5,
                                    amount: 108.5,
                                    truncatedAmount: 108.5,
                                    formattedAmount: "$108.50",
                                    formattedAmountWithoutPoint: "$109",
                                    formattedAmountWithoutPointAndCurrency: "109",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 108.5,
                                    amount: 108.5,
                                    truncatedAmount: 108.5,
                                    formattedAmount: "$108.50",
                                    formattedAmountWithoutPoint: "$109",
                                    formattedAmountWithoutPointAndCurrency: "109",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 108.5,
                                    amount: 108.5,
                                    truncatedAmount: 108.5,
                                    formattedAmount: "$108.50",
                                    formattedAmountWithoutPoint: "$109",
                                    formattedAmountWithoutPointAndCurrency: "109",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-hex-flange-bolt-grade-8-plain-finish-34-10-diathread-size-80-pk-fastener-length-1",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/4RXG6/41MY01.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/4RXG6/41MY01.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "50104b7f50234459a7414108a7eaef8d",
                        ////localizedValues: [],
                        value: "Plain",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "87dfb508-936d-4a05-afd7-c6d69e6cd99d"
                    },
                    {
                        name: "FASTENER THREAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "1a8fd37e51904a30b9feaef8b4c33942",
                        ////localizedValues: [],
                        value: "UNC (Coarse)",
                        displayName: "FASTENER THREAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "248044c9-f863-495f-a4be-4581034a5e18"
                    },
                    {
                        name: "HEAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "014379ab1f2b4065aa6d53969d58909d",
                        ////localizedValues: [],
                        value: "Hex Flange",
                        displayName: "HEAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "031e5e6f-96c0-4d1a-825d-f308b559c3de"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "f1204b8fd58a4685a4c00e916344d3c6",
                        ////localizedValues: [],
                        value: "Grade 8",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "357cca15-67b0-4cf8-9c2d-c6c9cdf0201d"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "3f604bc4a3d147358a4e5e77ae064a2b"
            },
            {
                sku: "22A425",
                name: "1\" Steel Hex Flange Bolt, Grade 8, Plain Finish, 7/16\"-14 Dia/Thread Size, 25 PK",
                catalogId: "7829d35f417e4dd98851f51322f32c23",
                categoryId: "3db665f7c95e46c3890c4a208d8af73d",
                outline: "02fe37dcaeb2458a831011abe43fd335/3db665f7c95e46c3890c4a208d8af73d/0b726c8546e24c2d81edf3cd777e6316",
                seoPath: "bolts/flange-bolts/1-steel-hex-flange-bolt-grade-8-plain-finish-716-14-diathread-size-25-pk-fastener-length-1",
                url: "/B2B-store/bolts/flange-bolts/1-steel-hex-flange-bolt-grade-8-plain-finish-716-14-diathread-size-25-pk-fastener-length-1",
                isBuyable: true,
                isInStock: true,
                isActive: true,
                trackInventory: true,
                maxQuantity: 0,
                minQuantity: 0,
                productType: "Physical",
                enableReview: false,
                maxNumberOfDownload: 0.0,
                hasUserAgreement: false,
                variationProperties: [
                    {
                        name: "FASTENER LENGTH",
                        type: "Variation",
                        valueType: "ShortText",
                        valueId: "4acb6f06e47f478aaf8a57f44592d8dc",
                        ////localizedValues: [],
                        value: "1″",
                        displayName: "FASTENER LENGTH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "38fc7764-f878-4a9e-891b-ffa7f0519eeb"
                    }
                ],
                //////taxDetails: [],
                ////variations: [],
                ////descriptions: [],
                price: {
                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    productId: "0b726c8546e24c2d81edf3cd777e6316",
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountPercent: 0.0,
                    listPrice: {
                        internalAmount: 16.15,
                        amount: 16.15,
                        truncatedAmount: 16.15,
                        formattedAmount: "$16.15",
                        formattedAmountWithoutPoint: "$16",
                        formattedAmountWithoutPointAndCurrency: "16",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 16.15,
                        amount: 16.15,
                        truncatedAmount: 16.15,
                        formattedAmount: "$16.15",
                        formattedAmountWithoutPoint: "$16",
                        formattedAmountWithoutPointAndCurrency: "16",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 16.15,
                        amount: 16.15,
                        truncatedAmount: 16.15,
                        formattedAmount: "$16.15",
                        formattedAmountWithoutPoint: "$16",
                        formattedAmountWithoutPointAndCurrency: "16",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 16.15,
                        amount: 16.15,
                        truncatedAmount: 16.15,
                        formattedAmount: "$16.15",
                        formattedAmountWithoutPoint: "$16",
                        formattedAmountWithoutPointAndCurrency: "16",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPrice: {
                        internalAmount: 16.15,
                        amount: 16.15,
                        truncatedAmount: 16.15,
                        formattedAmount: "$16.15",
                        formattedAmountWithoutPoint: "$16",
                        formattedAmountWithoutPointAndCurrency: "16",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    actualPriceWithTax: {
                        internalAmount: 16.15,
                        amount: 16.15,
                        truncatedAmount: 16.15,
                        formattedAmount: "$16.15",
                        formattedAmountWithoutPoint: "$16",
                        formattedAmountWithoutPointAndCurrency: "16",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    //////discounts: [],
                    minQuantity: 1,
                    tierPrices: [
                        {
                            price: {
                                internalAmount: 16.15,
                                amount: 16.15,
                                truncatedAmount: 16.15,
                                formattedAmount: "$16.15",
                                formattedAmountWithoutPoint: "$16",
                                formattedAmountWithoutPointAndCurrency: "16",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            priceWithTax: {
                                internalAmount: 16.15,
                                amount: 16.15,
                                truncatedAmount: 16.15,
                                formattedAmount: "$16.15",
                                formattedAmountWithoutPoint: "$16",
                                formattedAmountWithoutPointAndCurrency: "16",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 16.15,
                                amount: 16.15,
                                truncatedAmount: 16.15,
                                formattedAmount: "$16.15",
                                formattedAmountWithoutPoint: "$16",
                                formattedAmountWithoutPointAndCurrency: "16",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 16.15,
                                amount: 16.15,
                                truncatedAmount: 16.15,
                                formattedAmount: "$16.15",
                                formattedAmountWithoutPoint: "$16",
                                formattedAmountWithoutPointAndCurrency: "16",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            quantity: 1,
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            taxTotal: {
                                internalAmount: 0.00,
                                amount: 0.00,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //////taxDetails: []
                        }
                    ],
                    taxTotal: {
                        internalAmount: 0.00,
                        amount: 0.00,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0
                },
                prices: [
                    {
                        pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        productId: "0b726c8546e24c2d81edf3cd777e6316",
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountPercent: 0.0,
                        listPrice: {
                            internalAmount: 16.15,
                            amount: 16.15,
                            truncatedAmount: 16.15,
                            formattedAmount: "$16.15",
                            formattedAmountWithoutPoint: "$16",
                            formattedAmountWithoutPointAndCurrency: "16",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 16.15,
                            amount: 16.15,
                            truncatedAmount: 16.15,
                            formattedAmount: "$16.15",
                            formattedAmountWithoutPoint: "$16",
                            formattedAmountWithoutPointAndCurrency: "16",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 16.15,
                            amount: 16.15,
                            truncatedAmount: 16.15,
                            formattedAmount: "$16.15",
                            formattedAmountWithoutPoint: "$16",
                            formattedAmountWithoutPointAndCurrency: "16",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 16.15,
                            amount: 16.15,
                            truncatedAmount: 16.15,
                            formattedAmount: "$16.15",
                            formattedAmountWithoutPoint: "$16",
                            formattedAmountWithoutPointAndCurrency: "16",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPrice: {
                            internalAmount: 16.15,
                            amount: 16.15,
                            truncatedAmount: 16.15,
                            formattedAmount: "$16.15",
                            formattedAmountWithoutPoint: "$16",
                            formattedAmountWithoutPointAndCurrency: "16",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        actualPriceWithTax: {
                            internalAmount: 16.15,
                            amount: 16.15,
                            truncatedAmount: 16.15,
                            formattedAmount: "$16.15",
                            formattedAmountWithoutPoint: "$16",
                            formattedAmountWithoutPointAndCurrency: "16",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        //////discounts: [],
                        minQuantity: 1,
                        tierPrices: [
                            {
                                price: {
                                    internalAmount: 16.15,
                                    amount: 16.15,
                                    truncatedAmount: 16.15,
                                    formattedAmount: "$16.15",
                                    formattedAmountWithoutPoint: "$16",
                                    formattedAmountWithoutPointAndCurrency: "16",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                priceWithTax: {
                                    internalAmount: 16.15,
                                    amount: 16.15,
                                    truncatedAmount: 16.15,
                                    formattedAmount: "$16.15",
                                    formattedAmountWithoutPoint: "$16",
                                    formattedAmountWithoutPointAndCurrency: "16",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 16.15,
                                    amount: 16.15,
                                    truncatedAmount: 16.15,
                                    formattedAmount: "$16.15",
                                    formattedAmountWithoutPoint: "$16",
                                    formattedAmountWithoutPointAndCurrency: "16",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 16.15,
                                    amount: 16.15,
                                    truncatedAmount: 16.15,
                                    formattedAmount: "$16.15",
                                    formattedAmountWithoutPoint: "$16",
                                    formattedAmountWithoutPointAndCurrency: "16",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                quantity: 1,
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                taxTotal: {
                                    internalAmount: 0.00,
                                    amount: 0.00,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0,
                                //////taxDetails: []
                            }
                        ],
                        taxTotal: {
                            internalAmount: 0.00,
                            amount: 0.00,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0
                    }
                ],
                //////inventoryAll: [],
                availableQuantity: 0,
                seoInfo: {
                    slug: "1-steel-hex-flange-bolt-grade-8-plain-finish-716-14-diathread-size-25-pk-fastener-length-1",
                    language: {
                        isInvariant: false,
                        cultureName: "en-US",
                        nativeName: "English (United States)",
                        threeLeterLanguageName: "eng",
                        twoLetterLanguageName: "en",
                        twoLetterRegionName: "US",
                        threeLetterRegionName: "USA"
                    }
                },
                primaryImage: {
                    url: "//localhost/admin/assets/catalog/7829d/22A425/22A458.jpg",
                    sortOrder: 1,
                    group: "images"
                },
                images: [
                    {
                        url: "//localhost/admin/assets/catalog/7829d/22A425/22A458.jpg",
                        sortOrder: 1,
                        group: "images"
                    }
                ],
                isQuotable: true,
                isAvailable: true,
                properties: [
                    {
                        name: "BRAND",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "36e5811a8a0e416491d60d9654ab95ba",
                        ////localizedValues: [],
                        value: "FABORY",
                        displayName: "BRAND",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "75d8f2e5-ced1-4d65-b379-305793eb5780"
                    },
                    {
                        name: "FASTENER FINISH",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "50104b7f50234459a7414108a7eaef8d",
                        ////localizedValues: [],
                        value: "Plain",
                        displayName: "FASTENER FINISH",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "87dfb508-936d-4a05-afd7-c6d69e6cd99d"
                    },
                    {
                        name: "FASTENER THREAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "1a8fd37e51904a30b9feaef8b4c33942",
                        ////localizedValues: [],
                        value: "UNC (Coarse)",
                        displayName: "FASTENER THREAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "248044c9-f863-495f-a4be-4581034a5e18"
                    },
                    {
                        name: "HEAD TYPE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "014379ab1f2b4065aa6d53969d58909d",
                        ////localizedValues: [],
                        value: "Hex Flange",
                        displayName: "HEAD TYPE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "031e5e6f-96c0-4d1a-825d-f308b559c3de"
                    },
                    {
                        name: "MATERIAL GRADE",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "f1204b8fd58a4685a4c00e916344d3c6",
                        ////localizedValues: [],
                        value: "Grade 8",
                        displayName: "MATERIAL GRADE",
                        displayNames: [
                            {
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "357cca15-67b0-4cf8-9c2d-c6c9cdf0201d"
                    },
                    {
                        name: "SYSTEM OF MEASUREMENT",
                        type: "Product",
                        valueType: "ShortText",
                        valueId: "874557546e704daaa72943c22ff47a1f",
                        ////localizedValues: [],
                        value: "Inch",
                        displayName: "SYSTEM OF MEASUREMENT",
                        displayNames: [
                            {
                                value: "",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            }
                        ],
                        isMultivalue: false,
                        ////values: [],
                        id: "7f46e4d0-9d4e-49e5-994a-d51ff0fbd239"
                    }
                ],
                taxTotal: {
                    internalAmount: 0.00,
                    amount: 0.00,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                //////taxDetails: [],
                //////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                id: "0b726c8546e24c2d81edf3cd777e6316"
            },

        ]

        const activeOrder = [
            {
                name: "default",
                storeId: "B2B-store",
                hasPhysicalProducts: true,
                isAnonymous: false,
                customer: {
                    storeId: "B2B-store",
                    userName: "testppa",
                    phoneNumberConfirmed: false,
                    emailConfirmed: false,
                    twoFactorEnabled: false,
                    isLockedOut: false,
                    accessFailedCount: 0,
                    lockoutEnabled: true,
                    isRegisteredUser: true,
                    isAdministrator: false,
                    userType: "Customer",
                    userState: 1,
                    //externalLogins: [],
                    contactId: "e69d66eb54d748afb58191d394c4e05e",
                    contact: {
                        fullName: "testppa",
                        firstName: "testppa",
                        lastName: "testppa",
                        //organizationsIds: [],
                        acceptsMarketing: false,
                        securityAccounts: [
                            {
                                userName: "testppa",
                                isLockedOut: false,
                                //roles: [],
                                id: "83c53960-f371-4a3d-b0a4-7ff7e4c022c0"
                            }
                        ],
                        //phoneNumbers: [],
                        //emails: [],
                        name: "testppa",
                        memberType: "Contact",
                        //addresses: [],
                        //phones: [],
                        //groups: [],
                        //userGroups: [],
                        dynamicProperties: [
                            {
                                name: "Married",
                                displayNames: [
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "zh-CN",
                                            nativeName: "中文(中国)",
                                            threeLeterLanguageName: "zho",
                                            twoLetterLanguageName: "zh",
                                            twoLetterRegionName: "CN",
                                            threeLetterRegionName: "CHN"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "fr-FR",
                                            nativeName: "français (France)",
                                            threeLeterLanguageName: "fra",
                                            twoLetterLanguageName: "fr",
                                            twoLetterRegionName: "FR",
                                            threeLetterRegionName: "FRA"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "en-US",
                                            nativeName: "English (United States)",
                                            threeLeterLanguageName: "eng",
                                            twoLetterLanguageName: "en",
                                            twoLetterRegionName: "US",
                                            threeLetterRegionName: "USA"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "ja-JP",
                                            nativeName: "日本語 (日本)",
                                            threeLeterLanguageName: "jpn",
                                            twoLetterLanguageName: "ja",
                                            twoLetterRegionName: "JP",
                                            threeLetterRegionName: "JPN"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "ru-RU",
                                            nativeName: "русский (Россия)",
                                            threeLeterLanguageName: "rus",
                                            twoLetterLanguageName: "ru",
                                            twoLetterRegionName: "RU",
                                            threeLetterRegionName: "RUS"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "de-DE",
                                            nativeName: "Deutsch (Deutschland)",
                                            threeLeterLanguageName: "deu",
                                            twoLetterLanguageName: "de",
                                            twoLetterRegionName: "DE",
                                            threeLetterRegionName: "DEU"
                                        }
                                    }
                                ],
                                isArray: false,
                                isDictionary: false,
                                isRequired: false,
                                valueType: "Boolean",
                                //values: [],
                                //dictionaryValues: [],
                                //dictionaryItems: [],
                                id: "1d2174502bf4489cbd04504e2521bbec"
                            },
                            {
                                name: "occupation",
                                displayNames: [
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "fr-FR",
                                            nativeName: "français (France)",
                                            threeLeterLanguageName: "fra",
                                            twoLetterLanguageName: "fr",
                                            twoLetterRegionName: "FR",
                                            threeLetterRegionName: "FRA"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "ja-JP",
                                            nativeName: "日本語 (日本)",
                                            threeLeterLanguageName: "jpn",
                                            twoLetterLanguageName: "ja",
                                            twoLetterRegionName: "JP",
                                            threeLetterRegionName: "JPN"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "de-DE",
                                            nativeName: "Deutsch (Deutschland)",
                                            threeLeterLanguageName: "deu",
                                            twoLetterLanguageName: "de",
                                            twoLetterRegionName: "DE",
                                            threeLetterRegionName: "DEU"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "zh-CN",
                                            nativeName: "中文(中国)",
                                            threeLeterLanguageName: "zho",
                                            twoLetterLanguageName: "zh",
                                            twoLetterRegionName: "CN",
                                            threeLetterRegionName: "CHN"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "ru-RU",
                                            nativeName: "русский (Россия)",
                                            threeLeterLanguageName: "rus",
                                            twoLetterLanguageName: "ru",
                                            twoLetterRegionName: "RU",
                                            threeLetterRegionName: "RUS"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "en-US",
                                            nativeName: "English (United States)",
                                            threeLeterLanguageName: "eng",
                                            twoLetterLanguageName: "en",
                                            twoLetterRegionName: "US",
                                            threeLetterRegionName: "USA"
                                        }
                                    }
                                ],
                                isArray: true,
                                isDictionary: true,
                                isRequired: false,
                                valueType: "ShortText",
                                //values: [],
                                //dictionaryValues: [],
                                //dictionaryItems: [],
                                id: "fc83840c443547719e6545637acde1c8"
                            },
                            {
                                name: "Sex",
                                displayNames: [
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "de-DE",
                                            nativeName: "Deutsch (Deutschland)",
                                            threeLeterLanguageName: "deu",
                                            twoLetterLanguageName: "de",
                                            twoLetterRegionName: "DE",
                                            threeLetterRegionName: "DEU"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "en-US",
                                            nativeName: "English (United States)",
                                            threeLeterLanguageName: "eng",
                                            twoLetterLanguageName: "en",
                                            twoLetterRegionName: "US",
                                            threeLetterRegionName: "USA"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "ja-JP",
                                            nativeName: "日本語 (日本)",
                                            threeLeterLanguageName: "jpn",
                                            twoLetterLanguageName: "ja",
                                            twoLetterRegionName: "JP",
                                            threeLetterRegionName: "JPN"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "fr-FR",
                                            nativeName: "français (France)",
                                            threeLeterLanguageName: "fra",
                                            twoLetterLanguageName: "fr",
                                            twoLetterRegionName: "FR",
                                            threeLetterRegionName: "FRA"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "ru-RU",
                                            nativeName: "русский (Россия)",
                                            threeLeterLanguageName: "rus",
                                            twoLetterLanguageName: "ru",
                                            twoLetterRegionName: "RU",
                                            threeLetterRegionName: "RUS"
                                        }
                                    },
                                    {
                                        language: {
                                            isInvariant: false,
                                            cultureName: "zh-CN",
                                            nativeName: "中文(中国)",
                                            threeLeterLanguageName: "zho",
                                            twoLetterLanguageName: "zh",
                                            twoLetterRegionName: "CN",
                                            threeLetterRegionName: "CHN"
                                        }
                                    }
                                ],
                                isArray: false,
                                isDictionary: true,
                                isRequired: false,
                                valueType: "ShortText",
                                //values: [],
                                //dictionaryValues: [],
                                //dictionaryItems: [],
                                id: "5869be3e8fa249c7a96d8d874353f943"
                            }
                        ],
                        id: "e69d66eb54d748afb58191d394c4e05e"
                    },
                    //permissions: [],
                    id: "83c53960-f371-4a3d-b0a4-7ff7e4c022c0",
                    fullName: "testppa",
                    firstName: "testppa",
                    lastName: "testppa",
                    //organizationsIds: [],
                    acceptsMarketing: false,
                    securityAccounts: [
                        {
                            userName: "testppa",
                            isLockedOut: false,
                            //roles: [],
                            id: "83c53960-f371-4a3d-b0a4-7ff7e4c022c0"
                        }
                    ],
                    //phoneNumbers: [],
                    //emails: [],
                    name: "testppa",
                    memberType: "Contact",
                    //addresses: [],
                    //phones: [],
                    //groups: [],
                    //userGroups: [],
                    dynamicProperties: [
                        {
                            name: "Married",
                            displayNames: [
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "zh-CN",
                                        nativeName: "中文(中国)",
                                        threeLeterLanguageName: "zho",
                                        twoLetterLanguageName: "zh",
                                        twoLetterRegionName: "CN",
                                        threeLetterRegionName: "CHN"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "fr-FR",
                                        nativeName: "français (France)",
                                        threeLeterLanguageName: "fra",
                                        twoLetterLanguageName: "fr",
                                        twoLetterRegionName: "FR",
                                        threeLetterRegionName: "FRA"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "en-US",
                                        nativeName: "English (United States)",
                                        threeLeterLanguageName: "eng",
                                        twoLetterLanguageName: "en",
                                        twoLetterRegionName: "US",
                                        threeLetterRegionName: "USA"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "ja-JP",
                                        nativeName: "日本語 (日本)",
                                        threeLeterLanguageName: "jpn",
                                        twoLetterLanguageName: "ja",
                                        twoLetterRegionName: "JP",
                                        threeLetterRegionName: "JPN"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "ru-RU",
                                        nativeName: "русский (Россия)",
                                        threeLeterLanguageName: "rus",
                                        twoLetterLanguageName: "ru",
                                        twoLetterRegionName: "RU",
                                        threeLetterRegionName: "RUS"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "de-DE",
                                        nativeName: "Deutsch (Deutschland)",
                                        threeLeterLanguageName: "deu",
                                        twoLetterLanguageName: "de",
                                        twoLetterRegionName: "DE",
                                        threeLetterRegionName: "DEU"
                                    }
                                }
                            ],
                            isArray: false,
                            isDictionary: false,
                            isRequired: false,
                            valueType: "Boolean",
                            //values: [],
                            //dictionaryValues: [],
                            //dictionaryItems: [],
                            id: "1d2174502bf4489cbd04504e2521bbec"
                        },
                        {
                            name: "occupation",
                            displayNames: [
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "fr-FR",
                                        nativeName: "français (France)",
                                        threeLeterLanguageName: "fra",
                                        twoLetterLanguageName: "fr",
                                        twoLetterRegionName: "FR",
                                        threeLetterRegionName: "FRA"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "ja-JP",
                                        nativeName: "日本語 (日本)",
                                        threeLeterLanguageName: "jpn",
                                        twoLetterLanguageName: "ja",
                                        twoLetterRegionName: "JP",
                                        threeLetterRegionName: "JPN"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "de-DE",
                                        nativeName: "Deutsch (Deutschland)",
                                        threeLeterLanguageName: "deu",
                                        twoLetterLanguageName: "de",
                                        twoLetterRegionName: "DE",
                                        threeLetterRegionName: "DEU"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "zh-CN",
                                        nativeName: "中文(中国)",
                                        threeLeterLanguageName: "zho",
                                        twoLetterLanguageName: "zh",
                                        twoLetterRegionName: "CN",
                                        threeLetterRegionName: "CHN"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "ru-RU",
                                        nativeName: "русский (Россия)",
                                        threeLeterLanguageName: "rus",
                                        twoLetterLanguageName: "ru",
                                        twoLetterRegionName: "RU",
                                        threeLetterRegionName: "RUS"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "en-US",
                                        nativeName: "English (United States)",
                                        threeLeterLanguageName: "eng",
                                        twoLetterLanguageName: "en",
                                        twoLetterRegionName: "US",
                                        threeLetterRegionName: "USA"
                                    }
                                }
                            ],
                            isArray: true,
                            isDictionary: true,
                            isRequired: false,
                            valueType: "ShortText",
                            //values: [],
                            //dictionaryValues: [],
                            //dictionaryItems: [],
                            id: "fc83840c443547719e6545637acde1c8"
                        },
                        {
                            name: "Sex",
                            displayNames: [
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "de-DE",
                                        nativeName: "Deutsch (Deutschland)",
                                        threeLeterLanguageName: "deu",
                                        twoLetterLanguageName: "de",
                                        twoLetterRegionName: "DE",
                                        threeLetterRegionName: "DEU"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "en-US",
                                        nativeName: "English (United States)",
                                        threeLeterLanguageName: "eng",
                                        twoLetterLanguageName: "en",
                                        twoLetterRegionName: "US",
                                        threeLetterRegionName: "USA"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "ja-JP",
                                        nativeName: "日本語 (日本)",
                                        threeLeterLanguageName: "jpn",
                                        twoLetterLanguageName: "ja",
                                        twoLetterRegionName: "JP",
                                        threeLetterRegionName: "JPN"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "fr-FR",
                                        nativeName: "français (France)",
                                        threeLeterLanguageName: "fra",
                                        twoLetterLanguageName: "fr",
                                        twoLetterRegionName: "FR",
                                        threeLetterRegionName: "FRA"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "ru-RU",
                                        nativeName: "русский (Россия)",
                                        threeLeterLanguageName: "rus",
                                        twoLetterLanguageName: "ru",
                                        twoLetterRegionName: "RU",
                                        threeLetterRegionName: "RUS"
                                    }
                                },
                                {
                                    language: {
                                        isInvariant: false,
                                        cultureName: "zh-CN",
                                        nativeName: "中文(中国)",
                                        threeLeterLanguageName: "zho",
                                        twoLetterLanguageName: "zh",
                                        twoLetterRegionName: "CN",
                                        threeLetterRegionName: "CHN"
                                    }
                                }
                            ],
                            isArray: false,
                            isDictionary: true,
                            isRequired: false,
                            valueType: "ShortText",
                            //values: [],
                            //dictionaryValues: [],
                            //dictionaryItems: [],
                            id: "5869be3e8fa249c7a96d8d874353f943"
                        }
                    ]
                },
                customerId: "83c53960-f371-4a3d-b0a4-7ff7e4c022c0",
                customerName: "testppa",
                isRecuring: false,
                volumetricWeight: 0.0,
                weight: 0.0,
                height: 0.0,
                length: 0.0,
                width: 0.0,
                total: {
                    internalAmount: 55.3,
                    amount: 55.3,
                    truncatedAmount: 55.3,
                    formattedAmount: "$55.30",
                    formattedAmountWithoutPoint: "$55",
                    formattedAmountWithoutPointAndCurrency: "55",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                subTotal: {
                    internalAmount: 55.3,
                    amount: 55.3,
                    truncatedAmount: 55.3,
                    formattedAmount: "$55.30",
                    formattedAmountWithoutPoint: "$55",
                    formattedAmountWithoutPointAndCurrency: "55",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                subTotalWithTax: {
                    internalAmount: 55.3,
                    amount: 55.3,
                    truncatedAmount: 55.3,
                    formattedAmount: "$55.30",
                    formattedAmountWithoutPoint: "$55",
                    formattedAmountWithoutPointAndCurrency: "55",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                shippingPrice: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                shippingPriceWithTax: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                shippingTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                shippingTotalWithTax: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                paymentPrice: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                paymentPriceWithTax: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                paymentTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                paymentTotalWithTax: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                extendedPriceTotal: {
                    internalAmount: 55.3,
                    amount: 55.3,
                    truncatedAmount: 55.3,
                    formattedAmount: "$55.30",
                    formattedAmountWithoutPoint: "$55",
                    formattedAmountWithoutPointAndCurrency: "55",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                extendedPriceTotalWithTax: {
                    internalAmount: 55.3,
                    amount: 55.3,
                    truncatedAmount: 55.3,
                    formattedAmount: "$55.30",
                    formattedAmountWithoutPoint: "$55",
                    formattedAmountWithoutPointAndCurrency: "55",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                handlingTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                handlingTotalWithTax: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                discountAmount: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                discountTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                discountTotalWithTax: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                //addresses: [],
                items: [
                    {
                        createdDate: "0001-01-01T00:00:00",
                        product: {
                            sku: "53MF87",
                            name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                            catalogId: "7829d35f417e4dd98851f51322f32c23",
                            categoryId: "4fbaca886f014767a52f3f38b9df648f",
                            url: "~/product/baa4931161214690ad51c50787b1ed94",
                            isBuyable: true,
                            isInStock: true,
                            isActive: true,
                            trackInventory: true,
                            maxQuantity: 0,
                            minQuantity: 0,
                            productType: "Physical",
                            enableReview: false,
                            maxNumberOfDownload: 0.0,
                            hasUserAgreement: false,
                            ////variationProperties: [],
                            ////assets: [],
                            //variations: [],
                            //descriptions: [],
                            price: {
                                pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                productId: "baa4931161214690ad51c50787b1ed94",
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountPercent: 0.0,
                                listPrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                listPriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                salePrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                salePriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                ////discounts: [],
                                minQuantity: 1,
                                tierPrices: [
                                    {
                                        price: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        priceWithTax: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        discountAmount: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        discountAmountWithTax: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        actualPrice: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        actualPriceWithTax: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        quantity: 1,
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        taxTotal: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        taxPercentRate: 0.0,
                                        //taxDetails: []
                                    }
                                ],
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0
                            },
                            prices: [
                                {
                                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    productId: "baa4931161214690ad51c50787b1ed94",
                                    discountAmount: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    discountAmountWithTax: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    discountPercent: 0.0,
                                    listPrice: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    listPriceWithTax: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    salePrice: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    salePriceWithTax: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    actualPrice: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    actualPriceWithTax: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    //discounts: [],
                                    minQuantity: 1,
                                    tierPrices: [
                                        {
                                            price: {
                                                internalAmount: 42.2,
                                                amount: 42.2,
                                                truncatedAmount: 42.2,
                                                formattedAmount: "$42.20",
                                                formattedAmountWithoutPoint: "$42",
                                                formattedAmountWithoutPointAndCurrency: "42",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            priceWithTax: {
                                                internalAmount: 42.2,
                                                amount: 42.2,
                                                truncatedAmount: 42.2,
                                                formattedAmount: "$42.20",
                                                formattedAmountWithoutPoint: "$42",
                                                formattedAmountWithoutPointAndCurrency: "42",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            discountAmount: {
                                                internalAmount: 0.0,
                                                amount: 0.0,
                                                truncatedAmount: 0.0,
                                                formattedAmount: "$0.00",
                                                formattedAmountWithoutPoint: "$0",
                                                formattedAmountWithoutPointAndCurrency: "0",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            discountAmountWithTax: {
                                                internalAmount: 0.0,
                                                amount: 0.0,
                                                truncatedAmount: 0.0,
                                                formattedAmount: "$0.00",
                                                formattedAmountWithoutPoint: "$0",
                                                formattedAmountWithoutPointAndCurrency: "0",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            actualPrice: {
                                                internalAmount: 42.2,
                                                amount: 42.2,
                                                truncatedAmount: 42.2,
                                                formattedAmount: "$42.20",
                                                formattedAmountWithoutPoint: "$42",
                                                formattedAmountWithoutPointAndCurrency: "42",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            actualPriceWithTax: {
                                                internalAmount: 42.2,
                                                amount: 42.2,
                                                truncatedAmount: 42.2,
                                                formattedAmount: "$42.20",
                                                formattedAmountWithoutPoint: "$42",
                                                formattedAmountWithoutPointAndCurrency: "42",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            quantity: 1,
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            taxTotal: {
                                                internalAmount: 0.0,
                                                amount: 0.0,
                                                truncatedAmount: 0.0,
                                                formattedAmount: "$0.00",
                                                formattedAmountWithoutPoint: "$0",
                                                formattedAmountWithoutPointAndCurrency: "0",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            taxPercentRate: 0.0,
                                            //taxDetails: []
                                        }
                                    ],
                                    taxTotal: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    taxPercentRate: 0.0
                                }
                            ],
                            //inventoryAll: [],
                            availableQuantity: 0,
                            seoInfo: {
                                slug: "53MF87",
                                title: "baa4931161214690ad51c50787b1ed94",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            },
                            primaryImage: {
                                url: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                                sortOrder: 1,
                                group: "images"
                            },
                            images: [
                                {
                                    url: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                                    sortOrder: 1,
                                    group: "images"
                                }
                            ],
                            isQuotable: true,
                            isAvailable: true,
                            //properties: [],
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //taxDetails: [],
                            //discounts: [],
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            id: "baa4931161214690ad51c50787b1ed94"
                        },
                        productId: "baa4931161214690ad51c50787b1ed94",
                        productType: "Physical",
                        catalogId: "7829d35f417e4dd98851f51322f32c23",
                        categoryId: "4fbaca886f014767a52f3f38b9df648f",
                        sku: "53MF87",
                        name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                        quantity: 1,
                        inStockQuantity: 0,
                        requiredShipping: false,
                        imageUrl: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                        isGift: false,
                        languageCode: "en-US",
                        isReccuring: false,
                        taxIncluded: false,
                        isReadOnly: false,
                        listPrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        placedPrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        placedPriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        extendedPrice: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        extendedPriceWithTax: {
                            internalAmount: 42.2,
                            amount: 42.2,
                            truncatedAmount: 42.2,
                            formattedAmount: "$42.20",
                            formattedAmountWithoutPoint: "$42",
                            formattedAmountWithoutPointAndCurrency: "42",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountTotalWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        objectType: "VirtoCommerce.Domain.Cart.Model.LineItem",
                        //dynamicProperties: [],
                        isValid: true,
                        //validationErrors: [],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0,
                        //taxDetails: [],
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        //discounts: [],
                        id: "678ae82bb31e4f76b67fb844a916f615"
                    },
                    {
                        createdDate: "0001-01-01T00:00:00",
                        product: {
                            sku: "4GVA7",
                            name: "1\" Steel Carriage Bolt, Grade 5, Chrome Plated Finish, 1/4\"-20 Dia/Thread Size, 5 PK",
                            catalogId: "7829d35f417e4dd98851f51322f32c23",
                            categoryId: "4fbaca886f014767a52f3f38b9df648f",
                            url: "~/product/e9de38b73c424db19f319c9538184d03",
                            isBuyable: true,
                            isInStock: true,
                            isActive: true,
                            trackInventory: true,
                            maxQuantity: 0,
                            minQuantity: 0,
                            productType: "Physical",
                            enableReview: false,
                            maxNumberOfDownload: 0.0,
                            hasUserAgreement: false,
                            //variationProperties: [],
                            //assets: [],
                            //variations: [],
                            //descriptions: [],
                            price: {
                                pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                productId: "e9de38b73c424db19f319c9538184d03",
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountPercent: 0.0,
                                listPrice: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                listPriceWithTax: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                salePrice: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                salePriceWithTax: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 13.1,
                                    amount: 13.1,
                                    truncatedAmount: 13.1,
                                    formattedAmount: "$13.10",
                                    formattedAmountWithoutPoint: "$13",
                                    formattedAmountWithoutPointAndCurrency: "13",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                //discounts: [],
                                minQuantity: 1,
                                tierPrices: [
                                    {
                                        price: {
                                            internalAmount: 13.1,
                                            amount: 13.1,
                                            truncatedAmount: 13.1,
                                            formattedAmount: "$13.10",
                                            formattedAmountWithoutPoint: "$13",
                                            formattedAmountWithoutPointAndCurrency: "13",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        priceWithTax: {
                                            internalAmount: 13.1,
                                            amount: 13.1,
                                            truncatedAmount: 13.1,
                                            formattedAmount: "$13.10",
                                            formattedAmountWithoutPoint: "$13",
                                            formattedAmountWithoutPointAndCurrency: "13",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        discountAmount: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        discountAmountWithTax: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        actualPrice: {
                                            internalAmount: 13.1,
                                            amount: 13.1,
                                            truncatedAmount: 13.1,
                                            formattedAmount: "$13.10",
                                            formattedAmountWithoutPoint: "$13",
                                            formattedAmountWithoutPointAndCurrency: "13",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        actualPriceWithTax: {
                                            internalAmount: 13.1,
                                            amount: 13.1,
                                            truncatedAmount: 13.1,
                                            formattedAmount: "$13.10",
                                            formattedAmountWithoutPoint: "$13",
                                            formattedAmountWithoutPointAndCurrency: "13",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        quantity: 1,
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        taxTotal: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        taxPercentRate: 0.0,
                                        //taxDetails: []
                                    }
                                ],
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0
                            },
                            prices: [
                                {
                                    pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    productId: "e9de38b73c424db19f319c9538184d03",
                                    discountAmount: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    discountAmountWithTax: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    discountPercent: 0.0,
                                    listPrice: {
                                        internalAmount: 13.1,
                                        amount: 13.1,
                                        truncatedAmount: 13.1,
                                        formattedAmount: "$13.10",
                                        formattedAmountWithoutPoint: "$13",
                                        formattedAmountWithoutPointAndCurrency: "13",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    listPriceWithTax: {
                                        internalAmount: 13.1,
                                        amount: 13.1,
                                        truncatedAmount: 13.1,
                                        formattedAmount: "$13.10",
                                        formattedAmountWithoutPoint: "$13",
                                        formattedAmountWithoutPointAndCurrency: "13",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    salePrice: {
                                        internalAmount: 13.1,
                                        amount: 13.1,
                                        truncatedAmount: 13.1,
                                        formattedAmount: "$13.10",
                                        formattedAmountWithoutPoint: "$13",
                                        formattedAmountWithoutPointAndCurrency: "13",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    salePriceWithTax: {
                                        internalAmount: 13.1,
                                        amount: 13.1,
                                        truncatedAmount: 13.1,
                                        formattedAmount: "$13.10",
                                        formattedAmountWithoutPoint: "$13",
                                        formattedAmountWithoutPointAndCurrency: "13",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    actualPrice: {
                                        internalAmount: 13.1,
                                        amount: 13.1,
                                        truncatedAmount: 13.1,
                                        formattedAmount: "$13.10",
                                        formattedAmountWithoutPoint: "$13",
                                        formattedAmountWithoutPointAndCurrency: "13",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    actualPriceWithTax: {
                                        internalAmount: 13.1,
                                        amount: 13.1,
                                        truncatedAmount: 13.1,
                                        formattedAmount: "$13.10",
                                        formattedAmountWithoutPoint: "$13",
                                        formattedAmountWithoutPointAndCurrency: "13",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    //discounts: [],
                                    minQuantity: 1,
                                    tierPrices: [
                                        {
                                            price: {
                                                internalAmount: 13.1,
                                                amount: 13.1,
                                                truncatedAmount: 13.1,
                                                formattedAmount: "$13.10",
                                                formattedAmountWithoutPoint: "$13",
                                                formattedAmountWithoutPointAndCurrency: "13",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            priceWithTax: {
                                                internalAmount: 13.1,
                                                amount: 13.1,
                                                truncatedAmount: 13.1,
                                                formattedAmount: "$13.10",
                                                formattedAmountWithoutPoint: "$13",
                                                formattedAmountWithoutPointAndCurrency: "13",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            discountAmount: {
                                                internalAmount: 0.0,
                                                amount: 0.0,
                                                truncatedAmount: 0.0,
                                                formattedAmount: "$0.00",
                                                formattedAmountWithoutPoint: "$0",
                                                formattedAmountWithoutPointAndCurrency: "0",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            discountAmountWithTax: {
                                                internalAmount: 0.0,
                                                amount: 0.0,
                                                truncatedAmount: 0.0,
                                                formattedAmount: "$0.00",
                                                formattedAmountWithoutPoint: "$0",
                                                formattedAmountWithoutPointAndCurrency: "0",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            actualPrice: {
                                                internalAmount: 13.1,
                                                amount: 13.1,
                                                truncatedAmount: 13.1,
                                                formattedAmount: "$13.10",
                                                formattedAmountWithoutPoint: "$13",
                                                formattedAmountWithoutPointAndCurrency: "13",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            actualPriceWithTax: {
                                                internalAmount: 13.1,
                                                amount: 13.1,
                                                truncatedAmount: 13.1,
                                                formattedAmount: "$13.10",
                                                formattedAmountWithoutPoint: "$13",
                                                formattedAmountWithoutPointAndCurrency: "13",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            quantity: 1,
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            taxTotal: {
                                                internalAmount: 0.0,
                                                amount: 0.0,
                                                truncatedAmount: 0.0,
                                                formattedAmount: "$0.00",
                                                formattedAmountWithoutPoint: "$0",
                                                formattedAmountWithoutPointAndCurrency: "0",
                                                currency: {
                                                    code: "USD",
                                                    cultureName: "en-US",
                                                    symbol: "$",
                                                    englishName: "US dollar",
                                                    exchangeRate: 1.0
                                                },
                                                decimalDigits: 2
                                            },
                                            taxPercentRate: 0.0,
                                            //taxDetails: []
                                        }
                                    ],
                                    taxTotal: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    taxPercentRate: 0.0
                                }
                            ],
                            //inventoryAll: [],
                            availableQuantity: 0,
                            seoInfo: {
                                slug: "4GVA7",
                                title: "e9de38b73c424db19f319c9538184d03",
                                language: {
                                    isInvariant: false,
                                    cultureName: "en-US",
                                    nativeName: "English (United States)",
                                    threeLeterLanguageName: "eng",
                                    twoLetterLanguageName: "en",
                                    twoLetterRegionName: "US",
                                    threeLetterRegionName: "USA"
                                }
                            },
                            primaryImage: {
                                url: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
                                sortOrder: 1,
                                group: "images"
                            },
                            images: [
                                {
                                    url: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
                                    sortOrder: 1,
                                    group: "images"
                                }
                            ],
                            isQuotable: true,
                            isAvailable: true,
                            //properties: [],
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0,
                            //taxDetails: [],
                            //discounts: [],
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            id: "e9de38b73c424db19f319c9538184d03"
                        },
                        productId: "e9de38b73c424db19f319c9538184d03",
                        productType: "Physical",
                        catalogId: "7829d35f417e4dd98851f51322f32c23",
                        categoryId: "4fbaca886f014767a52f3f38b9df648f",
                        sku: "4GVA7",
                        name: "1\" Steel Carriage Bolt, Grade 5, Chrome Plated Finish, 1/4\"-20 Dia/Thread Size, 5 PK",
                        quantity: 1,
                        inStockQuantity: 0,
                        requiredShipping: false,
                        imageUrl: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
                        isGift: false,
                        languageCode: "en-US",
                        isReccuring: false,
                        taxIncluded: false,
                        isReadOnly: false,
                        listPrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        listPriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        salePriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        placedPrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        placedPriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        extendedPrice: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        extendedPriceWithTax: {
                            internalAmount: 13.1,
                            amount: 13.1,
                            truncatedAmount: 13.1,
                            formattedAmount: "$13.10",
                            formattedAmountWithoutPoint: "$13",
                            formattedAmountWithoutPointAndCurrency: "13",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmount: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountAmountWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        discountTotalWithTax: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        objectType: "VirtoCommerce.Domain.Cart.Model.LineItem",
                        //dynamicProperties: [],
                        isValid: true,
                        //validationErrors: [],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0,
                        //taxDetails: [],
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        //discounts: [],
                        id: "bc00151924024dfdb977763fa390a752"
                    }
                ],
                itemsCount: 2,
                itemsQuantity: 2,
                //coupons: [],
                //payments: [],
                //shipments: [],
                objectType: "VirtoCommerce.Domain.Cart.Model.ShoppingCart",
                //dynamicProperties: [],
                //availablePaymentMethods: [],
                recentlyAddedItem: {
                    createdDate: "0001-01-01T00:00:00",
                    product: {
                        sku: "53MF87",
                        name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                        catalogId: "7829d35f417e4dd98851f51322f32c23",
                        categoryId: "4fbaca886f014767a52f3f38b9df648f",
                        url: "~/product/baa4931161214690ad51c50787b1ed94",
                        isBuyable: true,
                        isInStock: true,
                        isActive: true,
                        trackInventory: true,
                        maxQuantity: 0,
                        minQuantity: 0,
                        productType: "Physical",
                        enableReview: false,
                        maxNumberOfDownload: 0.0,
                        hasUserAgreement: false,
                        ////variationProperties: [],
                        ////assets: [],
                        //variations: [],
                        //descriptions: [],
                        price: {
                            pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            productId: "baa4931161214690ad51c50787b1ed94",
                            discountAmount: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountAmountWithTax: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            discountPercent: 0.0,
                            listPrice: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            listPriceWithTax: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            salePrice: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            salePriceWithTax: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPrice: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            actualPriceWithTax: {
                                internalAmount: 42.2,
                                amount: 42.2,
                                truncatedAmount: 42.2,
                                formattedAmount: "$42.20",
                                formattedAmountWithoutPoint: "$42",
                                formattedAmountWithoutPointAndCurrency: "42",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            ////discounts: [],
                            minQuantity: 1,
                            tierPrices: [
                                {
                                    price: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    priceWithTax: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    discountAmount: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    discountAmountWithTax: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    actualPrice: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    actualPriceWithTax: {
                                        internalAmount: 42.2,
                                        amount: 42.2,
                                        truncatedAmount: 42.2,
                                        formattedAmount: "$42.20",
                                        formattedAmountWithoutPoint: "$42",
                                        formattedAmountWithoutPointAndCurrency: "42",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    quantity: 1,
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    taxTotal: {
                                        internalAmount: 0.0,
                                        amount: 0.0,
                                        truncatedAmount: 0.0,
                                        formattedAmount: "$0.00",
                                        formattedAmountWithoutPoint: "$0",
                                        formattedAmountWithoutPointAndCurrency: "0",
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        decimalDigits: 2
                                    },
                                    taxPercentRate: 0.0,
                                    //taxDetails: []
                                }
                            ],
                            taxTotal: {
                                internalAmount: 0.0,
                                amount: 0.0,
                                truncatedAmount: 0.0,
                                formattedAmount: "$0.00",
                                formattedAmountWithoutPoint: "$0",
                                formattedAmountWithoutPointAndCurrency: "0",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                decimalDigits: 2
                            },
                            taxPercentRate: 0.0
                        },
                        prices: [
                            {
                                pricelistId: "0456b3ebc0a24c0ab7054ec9a5cea78e",
                                currency: {
                                    code: "USD",
                                    cultureName: "en-US",
                                    symbol: "$",
                                    englishName: "US dollar",
                                    exchangeRate: 1.0
                                },
                                productId: "baa4931161214690ad51c50787b1ed94",
                                discountAmount: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountAmountWithTax: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                discountPercent: 0.0,
                                listPrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                listPriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                salePrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                salePriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPrice: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                actualPriceWithTax: {
                                    internalAmount: 42.2,
                                    amount: 42.2,
                                    truncatedAmount: 42.2,
                                    formattedAmount: "$42.20",
                                    formattedAmountWithoutPoint: "$42",
                                    formattedAmountWithoutPointAndCurrency: "42",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                //discounts: [],
                                minQuantity: 1,
                                tierPrices: [
                                    {
                                        price: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        priceWithTax: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        discountAmount: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        discountAmountWithTax: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        actualPrice: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        actualPriceWithTax: {
                                            internalAmount: 42.2,
                                            amount: 42.2,
                                            truncatedAmount: 42.2,
                                            formattedAmount: "$42.20",
                                            formattedAmountWithoutPoint: "$42",
                                            formattedAmountWithoutPointAndCurrency: "42",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        quantity: 1,
                                        currency: {
                                            code: "USD",
                                            cultureName: "en-US",
                                            symbol: "$",
                                            englishName: "US dollar",
                                            exchangeRate: 1.0
                                        },
                                        taxTotal: {
                                            internalAmount: 0.0,
                                            amount: 0.0,
                                            truncatedAmount: 0.0,
                                            formattedAmount: "$0.00",
                                            formattedAmountWithoutPoint: "$0",
                                            formattedAmountWithoutPointAndCurrency: "0",
                                            currency: {
                                                code: "USD",
                                                cultureName: "en-US",
                                                symbol: "$",
                                                englishName: "US dollar",
                                                exchangeRate: 1.0
                                            },
                                            decimalDigits: 2
                                        },
                                        taxPercentRate: 0.0,
                                        //taxDetails: []
                                    }
                                ],
                                taxTotal: {
                                    internalAmount: 0.0,
                                    amount: 0.0,
                                    truncatedAmount: 0.0,
                                    formattedAmount: "$0.00",
                                    formattedAmountWithoutPoint: "$0",
                                    formattedAmountWithoutPointAndCurrency: "0",
                                    currency: {
                                        code: "USD",
                                        cultureName: "en-US",
                                        symbol: "$",
                                        englishName: "US dollar",
                                        exchangeRate: 1.0
                                    },
                                    decimalDigits: 2
                                },
                                taxPercentRate: 0.0
                            }
                        ],
                        //inventoryAll: [],
                        availableQuantity: 0,
                        seoInfo: {
                            slug: "53MF87",
                            title: "baa4931161214690ad51c50787b1ed94",
                            language: {
                                isInvariant: false,
                                cultureName: "en-US",
                                nativeName: "English (United States)",
                                threeLeterLanguageName: "eng",
                                twoLetterLanguageName: "en",
                                twoLetterRegionName: "US",
                                threeLetterRegionName: "USA"
                            }
                        },
                        primaryImage: {
                            url: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                            sortOrder: 1,
                            group: "images"
                        },
                        images: [
                            {
                                url: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                                sortOrder: 1,
                                group: "images"
                            }
                        ],
                        isQuotable: true,
                        isAvailable: true,
                        //properties: [],
                        taxTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        taxPercentRate: 0.0,
                        //taxDetails: [],
                        //discounts: [],
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        id: "baa4931161214690ad51c50787b1ed94"
                    },
                    productId: "baa4931161214690ad51c50787b1ed94",
                    productType: "Physical",
                    catalogId: "7829d35f417e4dd98851f51322f32c23",
                    categoryId: "4fbaca886f014767a52f3f38b9df648f",
                    sku: "53MF87",
                    name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                    quantity: 1,
                    inStockQuantity: 0,
                    requiredShipping: false,
                    imageUrl: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                    isGift: false,
                    languageCode: "en-US",
                    isReccuring: false,
                    taxIncluded: false,
                    isReadOnly: false,
                    listPrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    listPriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    salePriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    placedPrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    placedPriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    extendedPrice: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    extendedPriceWithTax: {
                        internalAmount: 42.2,
                        amount: 42.2,
                        truncatedAmount: 42.2,
                        formattedAmount: "$42.20",
                        formattedAmountWithoutPoint: "$42",
                        formattedAmountWithoutPointAndCurrency: "42",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmount: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountAmountWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    discountTotalWithTax: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    objectType: "VirtoCommerce.Domain.Cart.Model.LineItem",
                    ////dynamicProperties: [],
                    isValid: true,
                    ////validationErrors: [],
                    taxTotal: {
                        internalAmount: 0.0,
                        amount: 0.0,
                        truncatedAmount: 0.0,
                        formattedAmount: "$0.00",
                        formattedAmountWithoutPoint: "$0",
                        formattedAmountWithoutPointAndCurrency: "0",
                        currency: {
                            code: "USD",
                            cultureName: "en-US",
                            symbol: "$",
                            englishName: "US dollar",
                            exchangeRate: 1.0
                        },
                        decimalDigits: 2
                    },
                    taxPercentRate: 0.0,
                    ////taxDetails: [],
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    ////discounts: [],
                    id: "678ae82bb31e4f76b67fb844a916f615"
                },
                isValid: true,
                ////validationErrors: [],
                ////discounts: [],
                currency: {
                    code: "USD",
                    cultureName: "en-US",
                    symbol: "$",
                    englishName: "US dollar",
                    exchangeRate: 1.0
                },
                taxTotal: {
                    internalAmount: 0.0,
                    amount: 0.0,
                    truncatedAmount: 0.0,
                    formattedAmount: "$0.00",
                    formattedAmountWithoutPoint: "$0",
                    formattedAmountWithoutPointAndCurrency: "0",
                    currency: {
                        code: "USD",
                        cultureName: "en-US",
                        symbol: "$",
                        englishName: "US dollar",
                        exchangeRate: 1.0
                    },
                    decimalDigits: 2
                },
                taxPercentRate: 0.0,
                ////taxDetails: [],
                language: {
                    isInvariant: false,
                    cultureName: "en-US",
                    nativeName: "English (United States)",
                    threeLeterLanguageName: "eng",
                    twoLetterLanguageName: "en",
                    twoLetterRegionName: "US",
                    threeLetterRegionName: "USA"
                },
                id: "db3a437f8f454569ba25626560771e45"
            }
        ];

        const orders = [
            {
                totalCount: 2
            },
            {
                results: [
                    {
                        id: "827243bf0a9d4287b87b547568f85a45",
                        items: [
                            {
                                id: "01c16e783c0f433583c7197f5315798b",
                                quantity: 1,
                                productId: "508d2a0584ad4e0e9811577f00b735c8",
                                name: "1\" Steel Hex Flange Bolt, Grade 8, Plain Finish, 1/2\"-20 Dia/Thread Size, 25 PK",
                                imageUrl: "//localhost/admin/assets/catalog/7829d/22A447/22A458.jpg",
                            }
                        ],
                        number: 'CO190424-00001',
                        status: "Completed",
                        createdDate: "2019-04-24T11:20:47.087Z",
                        createdBy: "testppa",
                        assignedTo: "testppa1",
                        total: {
                            internalAmount: 55.3,
                            amount: 55.3,
                            truncatedAmount: 55.3,
                            formattedAmount: "$55.30",
                            formattedAmountWithoutPoint: "$55",
                            formattedAmountWithoutPointAndCurrency: "55",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        subTotal: {
                            internalAmount: 55.3,
                            amount: 55.3,
                            truncatedAmount: 55.3,
                            formattedAmount: "$55.30",
                            formattedAmountWithoutPoint: "$55",
                            formattedAmountWithoutPointAndCurrency: "55",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        shippingTotal: {
                            internalAmount: 0.0,
                            amount: 0.0,
                            truncatedAmount: 0.0,
                            formattedAmount: "$0.00",
                            formattedAmountWithoutPoint: "$0",
                            formattedAmountWithoutPointAndCurrency: "0",
                            currency: {
                                code: "USD",
                                cultureName: "en-US",
                                symbol: "$",
                                englishName: "US dollar",
                                exchangeRate: 1.0
                            },
                            decimalDigits: 2
                        },
                        toRole: "Approver1",
                        comments: [
                            {
                                id: "01c16e783c0f433583c7197f53157981",
                                createdDate: "2019-04-24T11:20:47.087Z",
                                userId: "508d2a0584ad4e0e9811577f00b735c8",
                                username: "Author 1",
                                text: "its good!",
                            },
                            {
                                id: "01c16e783c0f433583c7197f53157982",
                                createdDate: "2019-04-25T11:20:47.087Z",
                                userId: "508d2a0584ad4e0e9811577f00b735c8",
                                username: "Author 2",
                                text: "its bad!",
                            }
                        ]
                    },
                    {
                        id: "9b0a3eb6999d481a894792cad4446019",
                        items: [
                            {
                                id: "83e1d2a4948240db840a0f1e21102520",
                                quantity: 1,
                                productId: "7829d35f417e4dd98851f51322f32c23",
                                name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                                imageUrl: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
                            },
                            {
                                id: "8cc11d16ed9f4fff949c422f49fe4eed",
                                quantity: 3,
                                productId: "ec235043d51848249e90ef170c371a1c",
                                name: "1\" Steel Carriage Bolt, Grade 5, Zinc Plated Finish, 1/4\"-20 Dia/Thread Size, 100 PK",
                                imageUrl: "//localhost/admin/assets/catalog/7829d/5ZMR1/5ZMR1.jpg",
                            },
                            {
                                id: "309d43873f554780bf3dff053bccd99b",
                                quantity: 11,
                                productId: "dae730451bc745bfa642870bdf22f150",
                                name: "1\" Steel Carriage Bolt, Grade A, Hot Dipped Galvanized Finish, 1/4\"-20 Dia/Thread Size, 1300 PK",
                                imageUrl: "//localhost/admin/assets/catalog/7829d/164W15/164W15.jpg",
                            },
                            {
                                id: "8926a0b066d243909f86b60054dc8ab2",
                                quantity: 3,
                                productId: "e9de38b73c424db19f319c9538184d03",
                                name: "1\" Steel Carriage Bolt, Grade 5, Chrome Plated Finish, 1/4\"-20 Dia/Thread Size, 5 PK",
                                imageUrl: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
                            },
                        ],
                        number: 'CO190422-00001',
                        status: "Awaiting Approve",
                        createdDate: "2019-04-22T07:22:25.337Z",
                        createdBy: "testppa",
                        assignedTo: "testppa1",
                        total: "$4,245.65",
                        toRole: "Approver1",
                        comments: [
                            {
                                id: "01c16e783c0f433583c7197f53157981",
                                createdDate: "2019-04-26T11:20:47.087Z",
                                userId: "508d2a0584ad4e0e9811577f00b735c8",
                                username: "Author 1",
                                text: "its good!",
                            }
                        ]

                    },
                ]
            }
        ];

        const users = [
            { id: "1", username: "users1", password: "user1", role: "" },
            { id: "2", username: "users2", password: "user2", role: "Role2" },
            { id: "3", username: "users3", password: "user3", role: "Role3" },
            { id: "4", username: "users4", password: "user4", role: "Role4" },
        ];

        const approveWorkflow = [
            {
                id: "9b0a3eb6999d481a894792cad4446019",
                roles: [
                    {
                        id: "01c16e783c0f433583c7197f5315798b",
                        name: "Role1",
                    },
                    {
                        id: "83e1d2a4948240db840a0f1e21102520",
                        name: "Role2",
                    },
                    {
                        id: "8926a0b066d243909f86b60054dc8ab2",
                        name: "Role3",
                    }

                ]
            }
        ]



        return { heroes, products, orders, users, approveWorkflow };
    }
}