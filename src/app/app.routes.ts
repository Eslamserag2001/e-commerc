import { Routes } from '@angular/router';
import { CartComponent } from './layout/pages/cart/cart.component';
import { CategoryComponent } from './layout/pages/category/category.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { authguardGuard } from './layout/guard/authguard.guard';
import { ForgetpasswordComponent } from './layout/pages/forgetpassword/forgetpassword.component';
import { ProductDetailsComponent } from './layout/pages/product-details/product-details.component';
import { CategoryDetailsComponent } from './layout/pages/category-details/category-details.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { UserdataComponent } from './layout/pages/userdata/userdata.component';
import { AllordersComponent } from './layout/pages/allorders/allorders.component';

export const routes: Routes = [
    
    
    {path:"",redirectTo:"Home",pathMatch:'full' },
    {path:"Home" ,component:HomeComponent,canActivate:[authguardGuard] ,},
    {path:"Cart" ,component:CartComponent ,canActivate:[authguardGuard] },
    {path:"Category" ,component:CategoryComponent ,canActivate:[authguardGuard]},
    {path:"Login" ,component:LoginComponent },
    {path:"brands" ,component:BrandsComponent,canActivate:[authguardGuard] },
    {path:"allorders",component:AllordersComponent},
    {path:"userdata/:id" ,component:UserdataComponent,canActivate:[authguardGuard]},
    {path:"ProductDetails/:id",component:ProductDetailsComponent,canActivate:[authguardGuard] },
    {path:"categorydetails/:id",component:CategoryDetailsComponent,canActivate:[authguardGuard] },
    {path:"Register" ,component:RegisterComponent },
    {path:"forgetpassword" ,component:ForgetpasswordComponent },
    {path:"**" ,component:NotFoundComponent },


];
