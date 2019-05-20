import {
    RouterModule,
    Routes,
    CanActivate
} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HeaderPanelComponent } from './components/container/header-panel/header-panel.component';
import { MainPanelComponent } from './components/container/main-panel/main-panel.component';
import { FooterPanelComponent } from './components/container/footer-panel/footer-panel.component';
import { LeftPanelComponent } from './components/container/left-panel/left-panel.component';
import { RightPanelComponent } from './components/container/right-panel/right-panel.component';

import { MenuComponent } from './components/menu/menu.component';
import { CatalogComponent } from './components/catalog/catalog.component';

import { AccountComponent } from './components/account/account.component';
import { CompanyComponent } from './components/company/company.component';
import { ForApprovalComponent } from './components/forapproval/forapproval.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProcurementPortalInterceptor } from '../app/services/interceptors/interceptors';
import { CaruselComponent } from './components/catalog/carusel/carusel.component';
import { ActiveOrderComponent } from './components/active-order/active-order.component';
import { ActiveOrderTotalComponent } from './components/active-order/active-order-total/active-order-total.component';
import { ActiveOrderHeaderComponent } from './components/active-order/active-order-header/active-order-header.component';
import { ActiveOrderDetailComponent } from './components/active-order/active-order-detail/active-order-detail.component';
import { ActiveOrderSummaryComponent } from './components/active-order/active-order-summary/active-order-summary.component';
import { ActiveOrderPostCheckoutComponent } from './components/active-order/active-order-post-checkout/active-order-post-checkout.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { OrderCommentsComponent } from './components/order-comments/order-comments.component';
import { ForApprovalDetailsComponent } from './components/forapproval/forapproval-details/forapproval-details.component';


// import { ProductInformationComponent } from './components/catalog/product-information/product-information.component';

import { ProductPropertiesComponent } from './components/catalog/product-properties/product-properties.component';

import { ModifyCountProductComponent } from './components/catalog/modify-count-product/modify-count-product.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';
import 'rxjs';
import { BlockUIModule } from 'ng-block-ui';

import { DataService } from './services/data.service';

import {
    StoreRouterConnectingModule,
    routerReducer,
    RouterStateSerializer
} from '@ngrx/router-store';
// import { SharedService } from './services/shared-service';
import { AuthGuard } from './guards';
import { fakeBackendProvider } from './helpers';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';


const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'catalog', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
    { path: 'forapproval', component: ForApprovalComponent, canActivate: [AuthGuard] },
    { path: 'company', component: CompanyComponent, canActivate: [AuthGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'activeorder', component: ActiveOrderSummaryComponent, canActivate: [AuthGuard] },
    { path: 'invoice', component: ActiveOrderPostCheckoutComponent, canActivate: [AuthGuard] },
    { path: 'bulkorder', component: BulkOrderComponent, canActivate: [AuthGuard] },
    { path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
    { path: 'forapproval-details/:id', component: ForApprovalDetailsComponent, canActivate: [AuthGuard] }

    // { path: '', redirectTo: 'catalog', pathMatch: 'full'},
    // { path: 'catalog', component: CatalogComponent},
    // { path: 'orders', component: OrdersComponent},
    // { path: 'forapproval', component: ForApprovalComponent},
    // { path: 'company', component: CompanyComponent},
    // { path: 'account', component: AccountComponent},
    // { path: 'login', component: LoginComponent },
    // { path: 'activeorder', component: ActiveOrderSummaryComponent},
    // { path: 'invoice', component: ActiveOrderPostCheckoutComponent},
    // { path: 'bulkorder', component: BulkOrderComponent},
    // { path: 'order-details/:id', component: OrderDetailsComponent }
];
@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
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
        InMemoryWebApiModule.forRoot(DataService),
        RouterModule.forRoot(routes),

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ProcurementPortalInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider,
        AuthenticationService

    ],
    declarations: [
        AppComponent,
        HeaderPanelComponent,
        MainPanelComponent,
        FooterPanelComponent,
        LeftPanelComponent,
        RightPanelComponent,
        MenuComponent,
        ActiveOrderComponent,
        ActiveOrderTotalComponent,
        ActiveOrderHeaderComponent,
        ActiveOrderDetailComponent,
        ActiveOrderSummaryComponent,
        CatalogComponent,
        AccountComponent,
        CompanyComponent,
        ForApprovalComponent,
        LoginComponent,
        OrdersComponent,
        CaruselComponent,
        ActiveOrderPostCheckoutComponent,
        ProductPropertiesComponent,
        ModifyCountProductComponent,
        BulkOrderComponent,
        OrderDetailsComponent,
        OrderTotalComponent,
        OrderItemsComponent,
        OrderCommentsComponent,
        ForApprovalDetailsComponent
    ],
    bootstrap: [AppComponent],
    // providers: [ Globals ]
})
export class AppModule { }