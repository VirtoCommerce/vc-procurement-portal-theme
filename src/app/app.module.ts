import {
    RouterModule,
    Routes
} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
//import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CaruselComponent } from './components/catalog/carusel/carusel.component';
import { ProductInformationComponent } from './components/catalog/product-information/product-information.component';
import { ProductPropertiesComponent } from './components/catalog/product-properties/product-properties.component';

import { ModifyCountProductComponent } from './components/catalog/modify-count-product/modify-count-product.component';
import { ActiveOrderComponent } from './components/active-order/active-order.component';
import { ActiveOrderTotalComponent } from './components/active-order/active-order-total/active-order-total.component';
import { AuthenticationService} from './services/index'



import { DataService } from './services/data.service';

import {
    StoreRouterConnectingModule,
    routerReducer,
    RouterStateSerializer
  } from '@ngrx/router-store';

  
const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'forapproval', component: ForApprovalComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'account', component: AccountComponent },
    { path: 'login', component: LoginComponent }
];
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        HttpClientXsrfModule
            .withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-CSRF-TOKEN'
            }),
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        //     dataEncapsulation: false
        // }),
        //InMemoryWebApiModule.forRoot(DataService),
        RouterModule.forRoot(routes),

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ProcurementPortalInterceptor, multi: true },
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
        CatalogComponent,
        AccountComponent,
        CompanyComponent,
        ForApprovalComponent,
        LoginComponent,
        OrdersComponent,
        CaruselComponent,
        ProductInformationComponent,
        ProductPropertiesComponent,
        ModifyCountProductComponent,
        ActiveOrderComponent,
        ActiveOrderTotalComponent
    ],
    bootstrap: [AppComponent],
    // providers: [ Globals ]
})
export class AppModule { }