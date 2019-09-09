import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ForApprovalComponent } from './components/forapproval/forapproval.component';
import { CompanyComponent } from './components/company/company.component';
import { AccountComponent } from './components/account/account.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { InvoiceComponent } from './components/orders/invoice/invoice.component';
import { AuthGuard } from './services';
import { RoleEnum } from './models/role';
import { ForbiddenComponent } from './components/container/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  {
    path: 'catalog',
    component: CatalogComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'forapproval',
    component: ForApprovalComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [AuthGuard],
    data: { permission: { roles: [RoleEnum.Admin], redirectTo: 'forbidden' } }
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'bulkorder',
    component: BulkOrderComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  {
    path: 'invoice/:id',
    component: InvoiceComponent,
    canActivate: [AuthGuard],
    data: {
      permission: {
        roles: [RoleEnum.Admin, RoleEnum.Manager],
        redirectTo: 'forbidden'
      }
    }
  },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
