import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 3d party libraries
import { BlockUIModule } from 'ng-block-ui';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ConnectionServiceModule } from 'ng-connection-service';
import { UiSwitchModule } from 'ngx-ui-switch';

// custom modules import
import { AppRoutingModule } from './app-routing.module';
import { ConfirmModalModule } from './modules/confirm-modal/confirm-modal.module';
import { AlertsModule } from './modules/alerts/alerts.module';

import { HeaderPanelComponent } from '@components/container/header-panel/header-panel.component';
import { MainPanelComponent } from '@components/container/main-panel/main-panel.component';
import { FooterPanelComponent } from '@components/container/footer-panel/footer-panel.component';
import { AppComponent } from './app.component';

import { AccountComponent } from '@components/account/account.component';
import { ActiveOrderComponent } from '@components/active-order/active-order.component';
import { BulkOrderComponent } from '@components/bulk-order/bulk-order.component';
import { CatalogComponent } from '@components/catalog/catalog.component';
import { SearchProductsComponent } from '@components/catalog/search-products/search-products.component';
import { CategoriesComponent } from '@components/catalog/categories/categories.component';
import { CompanyComponent } from '@components/company/company.component';
import { MenuComponent } from '@components/menu/menu.component';
import { OrdersComponent } from '@components/orders/orders.component';
import { OrderDetailsComponent } from '@components/orders/order-details/order-details.component';
import { PageSizeSelectorComponent } from '@components/page-size-selector/page-size-selector.component';
import { MobileCartSummaryComponent } from '@components/catalog/mobile-cart-summary/mobile-cart-summary.component';
import { ActiveOrderMobileComponent } from '@components/active-order/active-order-mobile/active-order-mobile.component';
import { ForbiddenComponent } from '@components/container/forbidden/forbidden.component';

// directives
import { RemoveWrapperDirective } from './directives/remove-wrapper.directive';
import { ChangeProductQuantityComponent } from '@components/catalog/change-product-quantity/change-product-quantity.component';
import { RequestInterceptor } from '@services/interceptors/request-interceptor';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { InvoiceComponent } from '@components/orders/invoice/invoice.component';
import { BulkOrderManualComponent } from '@components/bulk-order/bulk-order-manual/bulk-order-manual.component';
import { ConfirmEqualValidatorDirective } from './directives/match-value.directive';
import { ChangeProductQuantityActiveOrderComponent } from '@components/active-order/change-product-quantity-active-order/change-product-quantity-active-order.component';
import { BulkOrderItemComponent } from '@components/bulk-order/bulk-order-manual/bulk-order-item/bulk-order-item.component';
import { CompanyDetailsComponent } from '@components/company/company-details/company-details.component';
import { CompanyUsersComponent } from '@components/company/company-users/company-users.component';
import { RoleManagementComponent } from '@components/company/role-management/role-management.component';
import { BulkOrderCsvComponent } from '@components/bulk-order/bulk-order-csv/bulk-order-csv.component';
import { CheckoutModalComponent } from '@components/active-order/checkout-modal/checkout-modal.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { EditCompanyUserModalFormComponent } from '@components/company/edit-company-user-modal-form/edit-company-user-modal-form.component';
import { NoResultMessageComponent } from '@components/common/no-result-message/no-result-message.component';
import { ApprovalWorkflowComponent } from '@components/company/approval-workflow/approval-workflow.component';
import { ErrorInterceptor } from '@services/interceptors/error-interceptor';
import { ActionPanelComponent } from '@components/common/action-panel/action-panel.component';
import { CategoriesMobileComponent } from './components/catalog/categories-mobile/categories-mobile.component';
import { WorkflowActivationAlertComponent } from './components/common/modals/workflow-activation-alert/workflow-activation-alert.component';
import { AuthInterceptor } from '@services/interceptors/auth-interceptor';
import { WorkflowPreviewComponent } from './components/common/modals/workflow-preview/workflow-preview.component';
import { APP_BASE_HREF } from '@angular/common';

declare var BASE_URL;

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
    MobileCartSummaryComponent,
    PageSizeSelectorComponent,
    ChangeProductQuantityComponent,
    ProductDetailsComponent,
    InvoiceComponent,
    EditCompanyUserModalFormComponent,
    ChangeProductQuantityActiveOrderComponent,
    ActiveOrderMobileComponent,
    ForbiddenComponent,
    RemoveWrapperDirective,
    BulkOrderManualComponent,
    ConfirmEqualValidatorDirective,
    BulkOrderItemComponent,
    CompanyDetailsComponent,
    CompanyUsersComponent,
    RoleManagementComponent,
    BulkOrderCsvComponent,
    CheckoutModalComponent,
    OnlyNumberDirective,
    NoResultMessageComponent,
    ApprovalWorkflowComponent,
    ActionPanelComponent,
    CategoriesMobileComponent,
    WorkflowActivationAlertComponent,
    WorkflowPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ScrollingModule,
    ConfirmModalModule,
    AlertsModule.forRoot({
      dismissTimeout: 5 * 1000
    }),
    BlockUIModule.forRoot({
      delayStart: 250,
      delayStop: 250
    }),
    ConnectionServiceModule,
    UiSwitchModule.forRoot({
      size: 'small',
      // color: 'rgb(0, 189, 99)',
      // switchColor: '#80FFA2',
      // defaultBgColor: '#00ACFF',
      // defaultBoColor : '#476EFF',
      checkedLabel: 'on',
      uncheckedLabel: 'off'
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: BASE_URL },
    // { provide: APP_BASE_HREF, useValue: '/B2B-store' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditCompanyUserModalFormComponent,
    CheckoutModalComponent,
    WorkflowActivationAlertComponent,
    WorkflowPreviewComponent]
})
export class AppModule { }
