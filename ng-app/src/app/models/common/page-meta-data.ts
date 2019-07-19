export class PageMetaData {
  pageCount: number;
  totalItemCount: number;
 
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  firstItemOnPage: number;
  lastItemOnPage: number;
  /**
   *
   */
  constructor(public pageNumber: number = 1, public pageSize: number = 10) {

  }
}

