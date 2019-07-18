
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

interface Image {
  url: string;
  sortOrder: number;
  group: string;
}

interface SeoInfo {
  slug: string;
  language: Language;
}

interface Language {
  isInvariant: boolean;
  cultureName: string;
  nativeName: string;
  threeLeterLanguageName: string;
  twoLetterLanguageName: string;
  twoLetterRegionName: string;
  threeLetterRegionName: string;
}
