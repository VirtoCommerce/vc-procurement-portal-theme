import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ForApprovalComponent } from './components/forapproval/forapproval.component';
import { CompanyComponent } from './components/company/company.component';
import { AccountComponent } from './components/account/account.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { ForApprovalDetailsComponent } from './components/forapproval/forapproval-details/forapproval-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { InvoiceComponent } from './components/orders/invoice/invoice.component';
import { AuthGuard } from './services';


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
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'forapproval', component: ForApprovalComponent},
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard]},
  { path: 'account', component: AccountComponent},
  { path: 'bulkorder', component: BulkOrderComponent},
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'forapproval-details/:id', component: ForApprovalDetailsComponent},
  { path: 'invoice/:id', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
