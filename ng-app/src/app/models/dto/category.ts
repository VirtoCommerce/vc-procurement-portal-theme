import { PagedSearchCriteria } from './common/paged-search-criteria';
import { ILanguage } from './common/language';
import { IImage } from './common/image';
import { IPageMetaData } from './common/page-meta-data';
import { ISeoInfo } from './common/seo-info';

export interface SearchCategoriesResult {
  categories: Category[];
  metaData: IPageMetaData;
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
  seoInfo: ISeoInfo;
  images: IImage[];
  categories: any[];
  properties: any[];
  handle: string;
  indexKey: string;
  id: string;
  parentId?: string;
  primaryImage?: IImage;
  image?: IImage;
}


export class CategorySearchCriteria extends PagedSearchCriteria {
    responseGroup: CategoryResponseGroup;
    outline: string;
    language: ILanguage;
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
