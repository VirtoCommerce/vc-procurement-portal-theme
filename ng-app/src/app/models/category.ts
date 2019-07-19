import { PagedSearchCriteria } from './common/paged-search-criteria';
import { Language } from './common/language';
import { Image } from './common/image';

export interface SearchCategoriesResult {
  categories: Category[];
  metaData: MetaData;
}

export interface MetaData {
  pageCount: number;
  totalItemCount: number;
  pageNumber: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  firstItemOnPage: number;
  lastItemOnPage: number;
}

export interface Category {
  catalogId: string;
  code: string;
  defaultSortBy: string;
  title: string;
  name: string;
  outline: string;
  level: number;
  seoPath: string;
  url: string;
  seoInfo: SeoInfo;
  images: Image[];
  categories: any[];
  properties: any[];
  handle: string;
  indexKey: string;
  id: string;
  parentId?: string;
  primaryImage?: Image;
  image?: Image;
}



interface SeoInfo {
  slug: string;
  language: Language;
}



export class CategorySearchCriteria extends PagedSearchCriteria {
    responseGroup: CategoryResponseGroup;
    outline: string;
    language: Language;
    keyword: string;
    sortBy: string;
    isFuzzySearch = true;
}


export enum CategoryResponseGroup {
    None = 0,
    Info = 1,
    WithImages = 1 << 1,
    WithProperties = 1 << 2,
    WithLinks = 1 << 3,
    WithSeo = 1 << 4,
    WithParents = 1 << 5,
    WithOutlines = 1 << 6,
    Small = Info | WithImages | WithSeo | WithOutlines,
    Full = Info | WithImages | WithProperties | WithLinks | WithSeo | WithParents | WithOutlines
}
