import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UserComponent } from './components/user/user.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'product',component:ProductComponent},
   {path:'cart',component:CartComponent},
   {path:'product/:id',component:ProductComponent},
   {path:'wishlist',component:WishlistComponent},
   {path:'checkout',component:CheckoutComponent},
   {path:'user',component:UserComponent},
   {path:'',redirectTo:'home', pathMatch:'full'},
   {path:'**',redirectTo:'home', pathMatch:'full'}
];
