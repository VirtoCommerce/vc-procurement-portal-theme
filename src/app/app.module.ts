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


const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'forapproval', component: ForApprovalComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'account', component: AccountComponent },
    { path: 'login', component: LoginComponent },
];
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes)
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
        OrdersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }