import { PagedSearchCriteria } from "./common/paged-search-criteria";
import { NumericRange } from './common/numeric-range';
import { Language } from './common/language';
import { Currency } from './common/currency';
import { Term } from './common/term';

import { ProductProperties } from './product-properties';
import { ProductPrice } from './product-price';

export class Product {
  id: string;
  name: string;
  priceforsort: number;
  images: any;
  price: number;
  properties: any;
  sku: string;
  catalogId: string;
  categoryId: string;
  url: string;
  image: string;
  productProperties: ProductProperties;
  productPrice: ProductPrice;
}

export class ProductSearchCriteria extends PagedSearchCriteria {
  responseGroup: ItemResponseGroup;
  outline: string;
  currency: Currency;
  priceRange: NumericRange;
  language: Language;
  keyword: string = '';
  terms: Term[];
  userGroups: string[];
  sortBy: string;
  vendorId: string;
  isFuzzySearch: boolean = true;
}


export enum ItemResponseGroup {
        None = 0,
        /**Only simple product information and properties without meta information */
        ItemInfo = 1,
        /**With images and assets */
        ItemAssets = 1 << 1,
        /**With properties meta information */
        ItemProperties = 1 << 2,
        /**With product associations */
        ItemAssociations = 1 << 3,
        /**With descriptions */
        ItemEditorialReviews = 1 << 4,
        /**With all product variations */
        Variations = 1 << 5,
        /**With product SEO information */
        Seo = 1 << 6,
        /**With outgoing product links to virtual catalog or categories */
        Links = 1 << 7,
        /**With product inventory information */
        Inventory = 1 << 8,
        /**With category outlines */
        Outlines = 1 << 9,
        /**With product referenced associations */
        ReferencedAssociations = 1 << 10,
        //the bits of this values must not intersect with domain ItemResponseGroup
        ItemWithPrices = 1 << 20,

        ItemWithDiscounts = 1 << 21,

        ItemWithVendor = 1 << 22,

        ItemWithPaymentPlan = 1 << 23,

        ItemSmall = ItemInfo | ItemAssets | Seo | Outlines,
        ItemMedium = ItemSmall | ItemProperties | ItemEditorialReviews,
        ItemLarge = ItemMedium | ItemAssociations | Variations | Inventory | ItemWithPrices | ItemWithDiscounts | ItemWithVendor | ItemWithPaymentPlan,

        Default = ItemSmall | ItemWithPrices | Inventory | ItemWithDiscounts | ItemWithVendor
    }