import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 3d
import { BlockUIModule } from 'ng-block-ui';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ScrollingModule } from '@angular/cdk/scrolling';
// custom modules import

import { AppRoutingModule } from './app-routing.module';
import { ConfirmModalModule } from './modules/confirm-modal/confirm-modal.module';
import { AlertsModule } from './modules/alerts/alerts.module';

import { HeaderPanelComponent } from './components/container/header-panel/header-panel.component';
import { MainPanelComponent } from './components/container/main-panel/main-panel.component';
import { FooterPanelComponent } from './components/container/footer-panel/footer-panel.component';
import { AppComponent } from './app.component';

import { AccountComponent } from './components/account/account.component';
import { ActiveOrderComponent } from './components/active-order/active-order.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SearchProductsComponent } from './components/catalog/search-products/search-products.component';
import { CategoriesComponent } from './components/catalog/categories/categoires.component';
import { CompanyComponent } from './components/company/company.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { ForApprovalComponent } from './components/forapproval/forapproval.component';
import { ForApprovalDetailsComponent } from './components/forapproval/forapproval-details/forapproval-details.component';
import { PageSizeSelectorComponent } from './components/page-size-selector/page-size-selector.component';
import { MobileCartSummaryComponent } from './components/catalog/mobile-cart-summary/mobile-cart-summary.component';
import { ActiveOrderMobileComponent } from './components/active-order/active-order-mobile/active-order-mobile.component';
import { ForbiddenComponent } from './components/container/forbidden/forbidden.component';
// services


// services modules
// import { SharedService } from './services/shared-service';
// import { AuthGuard } from './guards';

// directives
import { RemoveWrapperDirective } from './directives/remove-wrapper.directive';
import { ChangeProductQuantityComponent } from './components/catalog/change-product-quantity/change-product-quantity.component';
import { AuthInterceptor } from './services/interceptors/auth-interceptor';
import { RequestInterceptor } from './services/interceptors/request-interceptor';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { InvoiceComponent } from './components/orders/invoice/invoice.component';
import { BulkOrderManualComponent } from './components/bulk-order/bulk-order-manual/bulk-order-manual.component';
import { ConfirmEqualValidatorDirective } from './directives/match-value.directive';
import { ChangeProductQuantityActiveOrderComponent } from './components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component';
import { BulkOrderItemComponent } from './components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CompanyUsersComponent } from './components/company/company-users/company-users.component';
import { RoleManagementComponent } from './components/company/role-management/role-management.component';
import { BulkOrderCsvComponent } from './components/bulk-order/bulk-order-csv/bulk-order-csv.component';
import { CheckoutModalComponent } from './components/active-order/checkout-modal/checkout-modal.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { EditCompanyUserModalFormComponent } from './components/company/edit-company-user-modal-form/edit-company-user-modal-form.component';
// import { initializeAppConfig, AppConfig } from './services/app-config.service';

// import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    MainPanelComponent,
    FooterPanelComponent,
    AccountComponent,
    ActiveOrderComponent,
    BulkOrderComponent,
    CatalogComponent,
    SearchProductsComponent,
    CategoriesComponent,
    CompanyComponent,
    MenuComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ForApprovalComponent,
    ForApprovalDetailsComponent,
    MobileCartSummaryComponent,
    PageSizeSelectorComponent,
    ChangeProductQuantityComponent,
    ProductDetailsComponent,
    InvoiceComponent,
    EditCompanyUserModalFormComponent,
    ChangeProductQuantityActiveOrderComponent,
    ActiveOrderMobileComponent,
    ForbiddenComponent,
    // directives
    RemoveWrapperDirective,
    BulkOrderManualComponent,
    ConfirmEqualValidatorDirective,
    BulkOrderItemComponent,
    CompanyDetailsComponent,
    CompanyUsersComponent,
    RoleManagementComponent,
    BulkOrderCsvComponent,
    CheckoutModalComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientXsrfModule
    //     .withOptions({
    //         cookieName: 'XSRF-TOKEN',
    //         headerName: 'X-XSRF-TOKEN'
    //     }),
    NgbModule,
    ScrollingModule,
    ConfirmModalModule,
    AlertsModule,
    BlockUIModule.forRoot({
      delayStart: 1000,
      delayStop: 1000
    }),
    // InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},

    // fakeBackendProvider,
    // { provide: APP_INITIALIZER,
    //   useFactory: initializeAppConfig,
    //   deps: [AppConfig], multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditCompanyUserModalFormComponent, CheckoutModalComponent]
})
export class AppModule { }
