import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 3d
import { BlockUIModule } from 'ng-block-ui';
import { MaterialModule } from './material/material.module';

// custom modules import

import { AppRoutingModule } from './app-routing.module';

// dummy
import { HeaderPanelComponent } from './components/container/header-panel/header-panel.component';
import { MainPanelComponent } from './components/container/main-panel/main-panel.component';
import { FooterPanelComponent } from './components/container/footer-panel/footer-panel.component';


// smart
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { ActiveOrderComponent } from './components/active-order/active-order.component';
import { ActiveOrderDetailComponent } from './components/active-order/active-order-detail/active-order-detail.component';
import { ActiveOrderHeaderComponent } from './components/active-order/active-order-header/active-order-header.component';
import { ActiveOrderPostCheckoutComponent } from './components/active-order/active-order-post-checkout/active-order-post-checkout.component';
import { ActiveOrderSummaryComponent } from './components/active-order/active-order-summary/active-order-summary.component';
import { ActiveOrderTotalComponent } from './components/active-order/active-order-total/active-order-total.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CaruselComponent } from './components/catalog/carusel/carusel.component';
import { ModifyCountProductComponent } from './components/catalog/modify-count-product/modify-count-product.component';
import { ProductPropertiesComponent } from './components/catalog/product-properties/product-properties.component';
import { CompanyComponent } from './components/company/company.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderCommentsComponent } from './components/order-comments/order-comments.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { ForApprovalComponent } from './components/forapproval/forapproval.component';
import { ForApprovalDetailsComponent } from './components/forapproval/forapproval-details/forapproval-details.component';
import { AuthenticationService } from './services';

// services modules
// import { SharedService } from './services/shared-service';
// import { AuthGuard } from './guards';
import { fakeBackendProvider } from './helpers';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { ProcurementPortalInterceptor } from './services/interceptors/interceptors';

// directives
import { RemoveWrapperDirective } from './directives/remove-wrapper.directive';

// import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ActiveOrderComponent,
    ActiveOrderDetailComponent,
    ActiveOrderHeaderComponent,
    ActiveOrderPostCheckoutComponent,
    ActiveOrderSummaryComponent,
    ActiveOrderTotalComponent,
    BulkOrderComponent,
    CatalogComponent,
    CaruselComponent,
    ModifyCountProductComponent,
    ProductPropertiesComponent,
    CompanyComponent,
    MenuComponent,
    OrderCommentsComponent,
    OrderItemsComponent,
    OrderTotalComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ForApprovalComponent,
    ForApprovalDetailsComponent,
    // dummy
    HeaderPanelComponent,
    MainPanelComponent,
    FooterPanelComponent,
    // directives
    RemoveWrapperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule
        .withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-CSRF-TOKEN'
        }),
    BlockUIModule.forRoot(),
    //InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProcurementPortalInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //fakeBackendProvider,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
