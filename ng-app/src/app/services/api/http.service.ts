import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductSearchCriteria, SearchProductsResult, IProduct } from '@models/dto/product';
import { LocationStrategy } from '@angular/common';
import { Observable, of } from 'rxjs';
import { CategorySearchCriteria, SearchCategoriesResult } from '@models/dto/category';
import { GenericSearchResult } from '@models/dto/common/generic-search-result';
import { IOrder, OrderSearchCriteria } from '@models/dto/iorder';
import { IOrganization } from '@models/dto/iorganization';
import { UpdateOrganization } from '@models/organization';
import { OrganizationUsersSearchCriteria, IUser, EditUserDto, AddNewUserDto } from '@models/dto/iuser';
import { EditUserPhone, EditUserPassword } from '@models/user';
import { ICart, AddCartItem, ChangeCartItemQty } from '@models/dto/icart';

declare var BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,  private location: LocationStrategy) {
  }

  private prepareUrl(url: string): string {
    return this.location.prepareExternalUrl(url);
  }

  // CATALOG

  searchProducts(searchCriteria: ProductSearchCriteria): Observable<SearchProductsResult> {
    let url = 'storefrontapi/catalog/search';
    url = this.prepareUrl(url);
    return this.http.post<SearchProductsResult>(url, searchCriteria);
  }

  searchCategories(searchCriteria: CategorySearchCriteria): Observable<SearchCategoriesResult> {
    let url = 'storefrontapi/categories/search';
    url = this.prepareUrl(url);
    return this.http.post<SearchCategoriesResult>(url, searchCriteria);
  }


  getProducts(productIds: string[]): Observable<IProduct[]> {
    if (!productIds || !productIds.length) {
      return of([]);
    }
    // const url = 'storefrontapi/products?productIds=' + productId;
    let url = 'storefrontapi/products';
    url = this.prepareUrl(url);
    const params = new HttpParams().set('productIds', productIds.join(', '));
    return this.http.get<IProduct[]>(url, {params});
  }


  // ORDERS
  searchOrders(searchCriteria: OrderSearchCriteria): Observable<GenericSearchResult<IOrder>> {
    let url = 'storefrontapi/orders/search';
    url = this.prepareUrl(url);
    return this.http.post<GenericSearchResult<IOrder>>(url, searchCriteria);
  }

  getOrderByNumber(orderNumber: string): Observable<IOrder> {
    let url = `storefrontapi/orders/${orderNumber}`;
    url = this.prepareUrl(url);
    return this.http.get<IOrder>(url);
  }

  updateOrder(order: IOrder): Observable<IOrder> {
    let url = 'storefrontapi/orders';
    url = this.prepareUrl(url);
    return this.http.post<IOrder>(url, order);
  }

  changeOrderStatus(orderNumber: string, newStatus: string): Observable<any> {
    let url = `storefrontapi/orders/${orderNumber}/status`;
    url = this.prepareUrl(url);
    const payload = { newStatus };
    return this.http.put(url, payload);
  }

  // Organization
  getCurrentUserOrganization(): Observable<IOrganization> {
    let url = 'storefrontapi/account/organization/current?t=';
    url = this.prepareUrl(url);
    return this.http.get<IOrganization>(url);
  }

  updateOrganization(organization: UpdateOrganization): Observable<any> {
    let url = 'storefrontapi/account/organization';
    url = this.prepareUrl(url);
    return this.http.put<any>(url, organization);
  }


  // User
  getOrganizationUsers(searchCriteria: OrganizationUsersSearchCriteria): Observable<GenericSearchResult<IUser>> {
    let url = 'storefrontapi/account/organization/users/search';
    url = this.prepareUrl(url);
    return this.http
      .post<GenericSearchResult<any>>(url, searchCriteria);
  }

  updateUser(user: EditUserDto): Observable<any> {
    let url = 'storefrontapi/account';
    url = this.prepareUrl(url);
    return this.http
      .post(url, user);
  }

  updateCurrentUserPhoneNumber(phoneNumber: EditUserPhone): Observable<any> {
    let url = 'storefrontapi/account/phonenumber';
    url = this.prepareUrl(url);
    return this.http
      .post(url, phoneNumber);
  }

  changeCurrentUserPassword(password: EditUserPassword): Observable<any> {
    let url = 'storefrontapi/account/password';
    url = this.prepareUrl(url);
    return this.http
      .post(url, password);
  }

  deleteUser(userName: string): Observable<any> {
    let url = 'storefrontapi/account/' + userName;
    url = this.prepareUrl(url);
    return this.http
      .delete(url);
  }

  getCurrentUser(): Observable<IUser> {
    let url = 'storefrontapi/account?t=';
    url = this.prepareUrl(url);
    return this.http.get<IUser>(url);
  }


  registerNewUser(user: AddNewUserDto): Observable<any> {
    let url = 'storefrontapi/account/user';
    url = this.prepareUrl(url);
    return this.http
      .post(url, user);
  }

  // Cart
  getCart(): Observable<ICart> {
    let url = 'storefrontapi/cart';
    url = this.prepareUrl(url);
    return this.http
      .get<ICart>(url);
  }

  createOrder(): Observable<any> {
    let url = 'storefrontapi/cart/createorder';
    url = this.prepareUrl(url);
    return this.http.post<any>(url, {});
  }


  clearAllCartItems(): Observable<any>  {
    let url = 'storefrontapi/cart/clear';
    url = this.prepareUrl(url);
    return this.http.post<any>(url, {});
  }

  addItemToCart(addItemDto: AddCartItem) {
    let url = 'storefrontapi/cart/items';
    url = this.prepareUrl(url);
    return this.http.post<any>(url, addItemDto);
  }

  removeItemFromCart(lineItemId: string) {
    let url = 'storefrontapi/cart/items?lineItemId=' + lineItemId;
    url = this.prepareUrl(url);
    return this.http.delete(url);
  }


  changeItemQuantity(changeItemQtyDto: ChangeCartItemQty) {
    let url = 'storefrontapi/cart/items';
    url = this.prepareUrl(url);
    return this.http.put<any>(url, changeItemQtyDto);
  }


}
