import { PagedSearchCriteria } from "./common/paged-search-criteria";
import { NumericRange } from './common/numeric-range';
import { Language } from './common/language';
import { Currency } from './common/currency';
import { Term } from './common/term';
import { PageMetaData } from './common/page-meta-data';
import { Image } from './common/image';
import { SeoInfo } from './common/seo-info';

 import { ProductProperties } from './product-properties';

// export class Product {
//   id: string;
//   name: string;
//   priceforsort: number;
//   images: any;
//   price: number;
//   properties: any;
//   sku: string;
//   catalogId: string;
//   categoryId: string;
//   url: string;
//   image: string;
//   productProperties: ProductProperties;
//   productPrice: ProductPrice;
// }


export interface SearchProductsResult {
  products: Product[];
  aggregations: Aggregation[];
  metaData: PageMetaData;
}


interface Aggregation {
  aggregationType: string;
  field: string;
  label: string;
  items: AggregationItem[];
}

interface AggregationItem {
  groupType: string;
  groupLabel: string;
  count: number;
  isApplied: boolean;
  label: string;
  value: string;
  upper?: string;
  lower?: string;
}

export class Product {
  handle: string;
  indexKey: string;
  sku: string;
  name: string;
  title: string;
  catalogId: string;
  categoryId: string;
  outline: string;
  seoPath: string;
  url: string;
  isBuyable: boolean;
  buyable: boolean;
  isInStock: boolean;
  inStock: boolean;
  isActive: boolean;
  trackInventory: boolean;
  maxQuantity: number;
  minQuantity: number;
  productType: string;
  enableReview: boolean;
  maxNumberOfDownload: number;
  hasUserAgreement: boolean;
  variationProperties: any[];
  assets: any[];
  variations: any[];
  price: Price;
  priceWithTax: DiscountAmount;
  prices: Price[];
  inventoryAll: any[];
  availableQuantity: number;
  seoInfo: SeoInfo;
  primaryImage: Image;
  images: Image[];
  isQuotable: boolean;
  isAvailable: boolean;
  available: boolean;
  properties: ProductProperties[];
  taxTotal: DiscountAmount;
  taxPercentRate: number;
  taxDetails: any[];
  discounts: any[];
  currency: Currency;
  id: string;
}


interface Price {
  pricelistId: string;
  currency: Currency;
  productId: string;
  discountAmount: DiscountAmount;
  discountAmountWithTax: DiscountAmount;
  discountPercent: number;
  listPrice: DiscountAmount;
  listPriceWithTax: DiscountAmount;
  salePrice: DiscountAmount;
  salePriceWithTax: DiscountAmount;
  actualPrice: DiscountAmount;
  actualPriceWithTax: DiscountAmount;
  discounts: any[];
  minQuantity: number;
  tierPrices: TierPrice[];
  taxTotal: DiscountAmount;
  taxPercentRate: number;
}

interface TierPrice {
  price: DiscountAmount;
  priceWithTax: DiscountAmount;
  discountAmount: DiscountAmount;
  discountAmountWithTax: DiscountAmount;
  actualPrice: DiscountAmount;
  actualPriceWithTax: DiscountAmount;
  quantity: number;
  currency: Currency;
  taxTotal: DiscountAmount;
  taxPercentRate: number;
  taxDetails: any[];
}

interface DiscountAmount {
  amount: number;
  formattedAmount: string;
  formattedAmountWithoutPointAndCurrency: string;
  formattedAmountWithoutPoint: string;
  formattedAmountWithoutCurrency: string;
  currency: Currency;
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