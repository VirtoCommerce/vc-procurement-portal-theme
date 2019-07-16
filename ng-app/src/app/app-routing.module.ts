import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ForApprovalComponent } from './components/forapproval/forapproval.component';
import { CompanyComponent } from './components/company/company.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { ActiveOrderSummaryComponent } from './components/active-order/active-order-summary/active-order-summary.component';
import { ActiveOrderPostCheckoutComponent } from './components/active-order/active-order-post-checkout/active-order-post-checkout.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { ForApprovalDetailsComponent } from './components/forapproval/forapproval-details/forapproval-details.component';


const routes: Routes = [

    // basic routes
    //{ path: '', redirectTo: 'catalog', pathMatch: 'full', canActivate: [AuthGuard] },
    //{ path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
    //{ path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
    //{ path: 'forapproval', component: ForApprovalComponent, canActivate: [AuthGuard] },
    //{ path: 'company', component: CompanyComponent, canActivate: [AuthGuard] },
    //{ path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'activeorder', component: ActiveOrderSummaryComponent, canActivate: [AuthGuard] },
    //{ path: 'invoice', component: ActiveOrderPostCheckoutComponent, canActivate: [AuthGuard] },
    //{ path: 'bulkorder', component: BulkOrderComponent, canActivate: [AuthGuard] },
    //{ path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
    //{ path: 'forapproval-details/:id', component: ForApprovalDetailsComponent, canActivate: [AuthGuard] }

  { path: '', redirectTo: 'catalog', pathMatch: 'full'},
  { path: 'catalog', component: CatalogComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'forapproval', component: ForApprovalComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'account', component: AccountComponent},
  { path: 'login', component: LoginComponent },
  { path: 'activeorder', component: ActiveOrderSummaryComponent},
  { path: 'invoice', component: ActiveOrderPostCheckoutComponent},
  { path: 'bulkorder', component: BulkOrderComponent},
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'forapproval-details/:id', component: ForApprovalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
