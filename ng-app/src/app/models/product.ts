import { PagedSearchCriteria } from "./common/paged-search-criteria";
import { INumericRange } from './common/numeric-range';
import { ILanguage } from './common/language';
import { ICurrency } from './common/currency';
import { ITerm } from './common/term';
import { IPageMetaData } from './common/page-meta-data';
import { IImage } from './common/image';
import { ISeoInfo } from './common/seo-info';
import { IProductPrice } from './common/price';
import { IMoney } from './common/money';
import { ILocalizedString } from './common/display-name';


export interface SearchProductsResult {
  products: IProduct[];
  aggregations: Aggregation[];
  metaData: IPageMetaData;
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

export interface IProduct {
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
  variationProperties: VariationProperty[];
  assets: any[];
  variations: Variation[];
  description: string;
  descriptions: Description[];
  price: IProductPrice;
  priceWithTax: IMoney;
  prices: IProductPrice[];
  inventoryAll: any[];
  availableQuantity: number;
  seoInfo: ISeoInfo;
  primaryImage: IImage;
  images: IImage[];
  isQuotable: boolean;
  isAvailable: boolean;
  available: boolean;
  properties: VariationProperty[];
  taxTotal: IMoney;
  taxPercentRate: number;
  taxDetails: any[];
  discounts: any[];
  currency: ICurrency;
  id: string;
}

interface Variation {
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
  titularItemId: string;
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
  variationProperties: VariationProperty[];
  assets: any[];
  variations: any[];
  descriptions: Description[];
  price: IProductPrice;
  priceWithTax: IMoney;
  prices: IProductPrice[];
  inventoryAll: any[];
  availableQuantity: number;
  seoInfo: ISeoInfo;
  primaryImage: IImage;
  images: IImage[];
  isQuotable: boolean;
  isAvailable: boolean;
  available: boolean;
  properties: any[];
  taxTotal: IMoney;
  taxPercentRate: number;
  taxDetails: any[];
  discounts: any[];
  currency: ICurrency;
  id: string;
}

interface VariationProperty {
  name: string;
  type: string;
  valueType: string;
  valueId: string;
  localizedValues: any[];
  value: string;
  displayName: string;
  displayNames: ILocalizedString[];
  isMultivalue: boolean;
  values: any[];
  indexKey: string;
  id: string;
}


interface Description {
  reviewType: string;
  content: string;
  indexKey: string;
  value: string;
  language: ILanguage;
}

export class ProductSearchCriteria extends PagedSearchCriteria {
  responseGroup: ItemResponseGroup;
  outline: string;
  currency: ICurrency;
  priceRange: INumericRange;
  language: ILanguage;
  keyword: string = '';
  terms: ITerm[];
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
