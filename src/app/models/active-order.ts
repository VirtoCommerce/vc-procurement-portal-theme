import { Product } from "./product";
/*
export class ActiveOrderItem 
{
    createdDate: string;
    product: Product;
    productId: string;
    productType: string
    catalogId: string;
    categoryId:string;
    sku: string;
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
  }
  */